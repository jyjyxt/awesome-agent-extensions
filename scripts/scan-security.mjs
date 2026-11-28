import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import {
  SCANNABLE_KINDS,
  SECURITY_DIR,
  getSecurityPath,
  loadAllEntries,
  loadSecurityScores,
} from './lib/data.mjs';

const execFileAsync = promisify(execFile);

function parseArgs(argv) {
  const opts = {
    kinds: [...SCANNABLE_KINDS],
    targets: [],
    limit: 0,
    concurrency: 4,
    timeoutSec: 90,
    force: false,
    bin: 'skillspector',
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--kind' && argv[i + 1]) {
      const val = argv[++i].trim();
      if (val !== 'all') {
        opts.kinds = val
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean);
      }
    } else if (arg === '--targets' && argv[i + 1]) {
      opts.targets.push(
        ...argv[++i]
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      );
    } else if (arg === '--limit' && argv[i + 1]) {
      opts.limit = Math.max(0, Number.parseInt(argv[++i], 10) || 0);
    } else if (arg === '--concurrency' && argv[i + 1]) {
      opts.concurrency = Math.max(1, Number.parseInt(argv[++i], 10) || 4);
    } else if (arg === '--timeout' && argv[i + 1]) {
      opts.timeoutSec = Math.max(15, Number.parseInt(argv[++i], 10) || 90);
    } else if (arg === '--bin' && argv[i + 1]) {
      opts.bin = argv[++i].trim();
    } else if (arg === '--force') {
      opts.force = true;
    }
  }

  for (const k of opts.kinds) {
    if (!SCANNABLE_KINDS.includes(k)) {
      throw new Error(
        `Invalid kind "${k}". Scannable kinds: ${SCANNABLE_KINDS.join(', ')}`
      );
    }
  }

  return opts;
}

async function detectScannerVersion(bin) {
  try {
    const { stdout, stderr } = await execFileAsync(bin, ['--version'], {
      timeout: 15_000,
    });
    const text = `${stdout || ''} ${stderr || ''}`.trim();
    const match = text.match(/\d+\.\d+\.\d+(?:[.-][A-Za-z0-9]+)?/);
    return match ? match[0] : text || 'unknown';
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(
        `SkillSpector binary "${bin}" not found. Install it via:\n` +
          `  uv tool install --python 3.13 git+https://github.com/NVIDIA/SkillSpector.git`
      );
    }
    return 'unknown';
  }
}

function deriveSeverity(riskScore) {
  if (riskScore >= 75) return 'CRITICAL';
  if (riskScore >= 51) return 'HIGH';
  if (riskScore >= 21) return 'MEDIUM';
  return 'LOW';
}

function deriveRecommendation(riskScore) {
  if (riskScore >= 51) return 'DO_NOT_INSTALL';
  if (riskScore >= 21) return 'CAUTION';
  return 'SAFE';
}

function extractReport(rawJson) {
  const report = JSON.parse(rawJson);
  const rawRisk =
    report?.risk_assessment?.score ??
    report?.risk_score ??
    (typeof report?.score === 'number' ? report.score : null);

  if (typeof rawRisk !== 'number' || Number.isNaN(rawRisk)) {
    throw new Error('Unable to extract numeric risk score from SkillSpector output.');
  }

  const riskScore = Math.max(0, Math.min(100, Math.round(rawRisk)));
  const score = Math.max(0, Math.min(100, 100 - riskScore));
  const severity =
    report?.risk_assessment?.severity ??
    report?.risk_severity ??
    deriveSeverity(riskScore);
  const recommendation =
    report?.risk_assessment?.recommendation ??
    report?.recommendation ??
    deriveRecommendation(riskScore);
  const findings = Array.isArray(report?.filtered_findings)
    ? report.filtered_findings.length
    : Array.isArray(report?.findings)
      ? report.findings.length
      : 0;

  return {
    score,
    risk_score: riskScore,
    severity: String(severity).toUpperCase(),
    recommendation: String(recommendation).toUpperCase().replace(/\s+/g, '_'),
    findings,
  };
}

async function scanRepository(entry, { bin, timeoutSec, scannerVersion }) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'skillspector-'));
  const repoDir = path.join(tmpDir, 'repo');
  const reportPath = path.join(tmpDir, 'report.json');
  const timeoutMs = timeoutSec * 1000;

  try {
    const cloneUrl = `https://github.com/${entry.gh.slug}.git`;
    await execFileAsync(
      'git',
      ['clone', '--depth', '1', '--single-branch', '--quiet', cloneUrl, repoDir],
      {
        timeout: timeoutMs,
        env: { ...process.env, GIT_TERMINAL_PROMPT: '0' },
        maxBuffer: 10 * 1024 * 1024,
      }
    );

    let stdout = '';
    try {
      const res = await execFileAsync(
        bin,
        ['scan', repoDir, '--no-llm', '--format', 'json', '--output', reportPath],
        {
          timeout: timeoutMs,
          maxBuffer: 20 * 1024 * 1024,
        }
      );
      stdout = res.stdout || '';
    } catch (err) {
      // SkillSpector may exit non-zero when HIGH/CRITICAL findings are detected.
      // Only treat as failure if no valid JSON report was produced.
      stdout = err.stdout || '';
      if (!fs.existsSync(reportPath) && !stdout.trim().startsWith('{')) {
        throw err;
      }
    }

    const rawJson = fs.existsSync(reportPath)
      ? fs.readFileSync(reportPath, 'utf8')
      : stdout;
    const parsed = extractReport(rawJson);

    return {
      ...parsed,
      pushed_at: entry.metrics?.pushed_at ?? null,
      scanned_at: new Date().toISOString().slice(0, 10),
      scanner: 'NVIDIA/SkillSpector',
      scanner_version: scannerVersion,
      mode: 'static',
    };
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

function shouldScan(entry, existing, { force, scannerVersion }) {
  if (force) return true;
  if (!existing || typeof existing.score !== 'number') return true;
  if (
    scannerVersion !== 'unknown' &&
    existing.scanner_version &&
    existing.scanner_version !== scannerVersion
  ) {
    return true;
  }
  const latestPushedAt = entry.metrics?.pushed_at ?? null;
  if (latestPushedAt && existing.pushed_at !== latestPushedAt) {
    return true;
  }
  return false;
}

function matchesTargets(entry, normalizedTargets) {
  if (normalizedTargets.size === 0) return true;
  const slugLower = entry.gh.slug.toLowerCase();
  const relLower = entry.relPath.replace(/\\/g, '/').toLowerCase();
  return normalizedTargets.has(slugLower) || normalizedTargets.has(relLower);
}

function writeSecurityFile(kind, records) {
  fs.mkdirSync(SECURITY_DIR, { recursive: true });
  const sorted = Object.fromEntries(
    Object.keys(records)
      .sort()
      .map((k) => [k, records[k]])
  );
  fs.writeFileSync(
    getSecurityPath(kind),
    `${JSON.stringify(sorted, null, 2)}\n`,
    'utf8'
  );
}

async function runPool(items, concurrency, worker) {
  let index = 0;
  const runners = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (index < items.length) {
      const current = items[index++];
      await worker(current);
    }
  });
  await Promise.all(runners);
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const scannerVersion = await detectScannerVersion(opts.bin);
  console.log(
    `SkillSpector v${scannerVersion} | kinds=${opts.kinds.join(',')} | limit=${opts.limit || 'all'} | concurrency=${opts.concurrency}`
  );

  const allEntries = loadAllEntries();
  const normalizedTargets = new Set(
    opts.targets.map((t) => t.replace(/\\/g, '/').replace(/^\/+/, '').toLowerCase())
  );

  const securityByKind = {};
  for (const kind of opts.kinds) {
    securityByKind[kind] = loadSecurityScores(kind);
  }

  // Prune removed entries on full (non-targeted) scans
  if (normalizedTargets.size === 0) {
    const validSlugsByKind = new Map(opts.kinds.map((k) => [k, new Set()]));
    for (const entry of allEntries) {
      if (entry.gh && validSlugsByKind.has(entry.kind)) {
        validSlugsByKind.get(entry.kind).add(entry.gh.slug.toLowerCase());
      }
    }
    for (const kind of opts.kinds) {
      const validSet = validSlugsByKind.get(kind);
      for (const slugKey of Object.keys(securityByKind[kind])) {
        if (!validSet.has(slugKey)) {
          delete securityByKind[kind][slugKey];
        }
      }
    }
  }

  const eligible = allEntries.filter(
    (entry) =>
      entry.gh &&
      opts.kinds.includes(entry.kind) &&
      matchesTargets(entry, normalizedTargets)
  );

  const queue = eligible.filter((entry) => {
    const slugKey = entry.gh.slug.toLowerCase();
    const existing = securityByKind[entry.kind][slugKey];
    return shouldScan(entry, existing, { force: opts.force, scannerVersion });
  });

  // Prioritize unscanned entries first, then highest-star repos
  queue.sort((a, b) => {
    const aHas = Boolean(securityByKind[a.kind][a.gh.slug.toLowerCase()]);
    const bHas = Boolean(securityByKind[b.kind][b.gh.slug.toLowerCase()]);
    if (aHas !== bHas) return aHas ? 1 : -1;
    const starsA = a.metrics?.stars ?? -1;
    const starsB = b.metrics?.stars ?? -1;
    if (starsA !== starsB) return starsB - starsA;
    return a.gh.slug.localeCompare(b.gh.slug);
  });

  const batch = opts.limit > 0 ? queue.slice(0, opts.limit) : queue;
  console.log(
    `Eligible: ${eligible.length} | Pending scan: ${queue.length} | Running batch: ${batch.length}`
  );

  let scanned = 0;
  let failed = 0;

  await runPool(batch, opts.concurrency, async (entry) => {
    const slugKey = entry.gh.slug.toLowerCase();
    try {
      const result = await scanRepository(entry, {
        bin: opts.bin,
        timeoutSec: opts.timeoutSec,
        scannerVersion,
      });
      securityByKind[entry.kind][slugKey] = result;
      scanned++;
      console.log(
        `[${entry.kind}] ${entry.gh.slug}: ${result.score}/100 (risk=${result.risk_score}, ${result.recommendation}, findings=${result.findings})`
      );
    } catch (err) {
      failed++;
      console.warn(`[${entry.kind}] Failed ${entry.gh.slug}: ${err.message}`);
    }
  });

  for (const kind of opts.kinds) {
    writeSecurityFile(kind, securityByKind[kind]);
  }

  console.log(
    `\nSecurity scan finished: ${scanned} scanned, ${failed} failed, ${Math.max(0, queue.length - batch.length)} remaining.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
