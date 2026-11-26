import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR, loadAllEntries, loadMetrics } from './lib/data.mjs';

const token = process.env.GITHUB_TOKEN || '';
const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'awesome-agents-sync',
};
if (token) {
  headers.Authorization = `Bearer ${token}`;
}

async function fetchRepoMetrics(slug) {
  const res = await fetch(`https://api.github.com/repos/${slug}`, { headers });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${slug}`);
  }
  const data = await res.json();
  return {
    stars: data.stargazers_count ?? 0,
    pushed_at: data.pushed_at ? data.pushed_at.slice(0, 10) : null,
    archived: Boolean(data.archived),
    license: data.license?.spdx_id && data.license.spdx_id !== 'NOASSERTION' ? data.license.spdx_id : null,
  };
}

async function main() {
  const entries = loadAllEntries();
  const existing = loadMetrics();
  const nextMetrics = {};

  let updated = 0;
  let failed = 0;

  for (const entry of entries) {
    if (!entry.gh) continue;
    const key = entry.gh.slug.toLowerCase();
    try {
      nextMetrics[key] = await fetchRepoMetrics(entry.gh.slug);
      updated++;
      console.log(`Synced ${entry.gh.slug}: ★ ${nextMetrics[key].stars}`);
    } catch (err) {
      failed++;
      console.warn(`Failed ${entry.gh.slug}: ${err.message}`);
      if (existing[key]) {
        nextMetrics[key] = existing[key];
      }
    }
  }

  const sorted = Object.fromEntries(
    Object.keys(nextMetrics)
      .sort()
      .map((k) => [k, nextMetrics[k]])
  );

  const metricsPath = path.join(DATA_DIR, 'metrics.json');
  fs.writeFileSync(metricsPath, `${JSON.stringify(sorted, null, 2)}\n`, 'utf8');
  console.log(`\nMetrics sync finished: ${updated} updated, ${failed} failed.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
