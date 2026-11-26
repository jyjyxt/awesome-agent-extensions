/**
 * Zero-dependency YAML parser supporting the structured subset used in data/*.yml:
 * - Comments (# outside quotes)
 * - Nested mappings (2-space indentation)
 * - Block sequences (- item, and sequences of mappings)
 * - Inline arrays ([a, b, "c"]) and inline empty objects ({})
 * - Quoted strings ('...' / "..."), booleans, numbers, null
 */

function stripComment(line) {
  let inSingle = false;
  let inDouble = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === "'" && !inDouble) {
      inSingle = !inSingle;
    } else if (ch === '"' && !inSingle && line[i - 1] !== '\\') {
      inDouble = !inDouble;
    } else if (ch === '#' && !inSingle && !inDouble) {
      if (i === 0 || /\s/.test(line[i - 1])) {
        return line.slice(0, i);
      }
    }
  }
  return line;
}

function splitInlineItems(inner) {
  const items = [];
  let current = '';
  let inSingle = false;
  let inDouble = false;
  for (let i = 0; i < inner.length; i++) {
    const ch = inner[i];
    if (ch === "'" && !inDouble) {
      inSingle = !inSingle;
      current += ch;
    } else if (ch === '"' && !inSingle && inner[i - 1] !== '\\') {
      inDouble = !inDouble;
      current += ch;
    } else if (ch === ',' && !inSingle && !inDouble) {
      items.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim() !== '') {
    items.push(current.trim());
  }
  return items;
}

function parseScalar(raw) {
  const val = raw.trim();
  if (val === '' || val === 'null' || val === '~') return null;
  if (val === 'true') return true;
  if (val === 'false') return false;
  if (val === '[]') return [];
  if (val === '{}') return {};
  if (val.startsWith('[') && val.endsWith(']')) {
    const inner = val.slice(1, -1).trim();
    if (!inner) return [];
    return splitInlineItems(inner).map((item) => parseScalar(item));
  }
  if (
    (val.startsWith('"') && val.endsWith('"')) ||
    (val.startsWith("'") && val.endsWith("'"))
  ) {
    if (val.startsWith('"')) {
      return val
        .slice(1, -1)
        .replace(/\\n/g, '\n')
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, '\\');
    }
    return val.slice(1, -1).replace(/''/g, "'");
  }
  if (/^-?\d+(\.\d+)?$/.test(val)) {
    return Number(val);
  }
  return val;
}

function findKeyValueSplit(content) {
  let inSingle = false;
  let inDouble = false;
  for (let i = 0; i < content.length; i++) {
    const ch = content[i];
    if (ch === "'" && !inDouble) inSingle = !inSingle;
    else if (ch === '"' && !inSingle && content[i - 1] !== '\\') inDouble = !inDouble;
    else if (ch === ':' && !inSingle && !inDouble) {
      if (i + 1 === content.length || /\s/.test(content[i + 1])) {
        return i;
      }
    }
  }
  return -1;
}

function tokenize(text) {
  const rawLines = text.replace(/\r\n/g, '\n').split('\n');
  const lines = [];
  for (let i = 0; i < rawLines.length; i++) {
    const cleaned = stripComment(rawLines[i]).replace(/\s+$/, '');
    if (!cleaned.trim()) continue;
    const indent = cleaned.length - cleaned.trimStart().length;
    lines.push({ indent, text: cleaned.trimStart(), lineNo: i + 1 });
  }
  return lines;
}

function parseBlock(lines, startIndex, minIndent) {
  if (startIndex >= lines.length) return [null, startIndex];
  const first = lines[startIndex];
  if (first.text.startsWith('- ') || first.text === '-') {
    return parseSequence(lines, startIndex, first.indent);
  }
  return parseMapping(lines, startIndex, Math.max(minIndent, first.indent));
}

function parseSequence(lines, startIndex, seqIndent) {
  const result = [];
  let i = startIndex;
  while (i < lines.length) {
    const line = lines[i];
    if (line.indent < seqIndent) break;
    if (line.indent !== seqIndent || !(line.text.startsWith('- ') || line.text === '-')) {
      break;
    }
    const rest = line.text === '-' ? '' : line.text.slice(2).trim();
    if (!rest) {
      const [child, nextIdx] = parseBlock(lines, i + 1, seqIndent + 1);
      result.push(child);
      i = nextIdx;
      continue;
    }
    const colonIdx = findKeyValueSplit(rest);
    if (colonIdx !== -1) {
      // Sequence item starts an inline mapping (e.g. "- id: coding")
      const obj = {};
      const key = rest.slice(0, colonIdx).trim();
      const valStr = rest.slice(colonIdx + 1).trim();
      const itemIndent = seqIndent + 2;
      if (valStr !== '') {
        obj[key] = parseScalar(valStr);
        i++;
      } else {
        const [child, nextIdx] = parseBlock(lines, i + 1, itemIndent + 1);
        obj[key] = child;
        i = nextIdx;
      }
      if (i < lines.length && lines[i].indent >= itemIndent) {
        const [extra, nextIdx] = parseMapping(lines, i, itemIndent);
        Object.assign(obj, extra);
        i = nextIdx;
      }
      result.push(obj);
    } else {
      result.push(parseScalar(rest));
      i++;
    }
  }
  return [result, i];
}

function parseMapping(lines, startIndex, mapIndent) {
  const result = {};
  let i = startIndex;
  while (i < lines.length) {
    const line = lines[i];
    if (line.indent < mapIndent) break;
    if (line.indent > mapIndent) {
      throw new Error(`Unexpected indentation at line ${line.lineNo}: "${line.text}"`);
    }
    if (line.text.startsWith('- ') || line.text === '-') break;
    const colonIdx = findKeyValueSplit(line.text);
    if (colonIdx === -1) {
      throw new Error(`Expected "key: value" at line ${line.lineNo}: "${line.text}"`);
    }
    const key = line.text.slice(0, colonIdx).trim();
    const valStr = line.text.slice(colonIdx + 1).trim();
    if (valStr !== '') {
      result[key] = parseScalar(valStr);
      i++;
    } else {
      const next = lines[i + 1];
      if (!next || next.indent <= mapIndent) {
        result[key] = null;
        i++;
      } else {
        const [child, nextIdx] = parseBlock(lines, i + 1, next.indent);
        result[key] = child;
        i = nextIdx;
      }
    }
  }
  return [result, i];
}

export function parseYaml(text, sourceName = '<input>') {
  try {
    const lines = tokenize(text);
    if (lines.length === 0) return {};
    const [data] = parseBlock(lines, 0, lines[0].indent);
    return data;
  } catch (err) {
    throw new Error(`YAML parse error in ${sourceName}: ${err.message}`);
  }
}
