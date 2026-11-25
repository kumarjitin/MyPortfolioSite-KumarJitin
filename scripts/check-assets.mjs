import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = path.join(root, 'public');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'src/lib/asset-manifest.json'), 'utf8'));
const exists = url => url.startsWith('/') && fs.existsSync(path.join(publicRoot, url.slice(1))) && fs.statSync(path.join(publicRoot, url.slice(1))).isFile();
const errors = [];
for (const [url, size] of Object.entries(manifest)) {
  if (!exists(url)) errors.push(`Missing manifest asset: ${url}`);
  if (!Array.isArray(size) || size.length !== 2 || size.some(x => !Number.isFinite(x) || x <= 0)) errors.push(`Invalid dimensions: ${url}`);
}
const optional = new Set();
function walk(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes:true})) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) { walk(file); continue; }
    if (!/\.(jsx?|s?css)$/.test(file)) continue;
    const text = fs.readFileSync(file,'utf8');
    for (const [url] of text.matchAll(/\/(?:images|videos|documents)\/[a-zA-Z0-9_./-]+\.(?:jpg|jpeg|png|svg|webp|gif|mp4|pdf|pptx)|\/hero-poster-[0-9]+\.webp/g)) {
      if (url.startsWith('/documents/')) { if (!exists(url)) optional.add(url); continue; }
      if (!exists(url)) errors.push(`${path.relative(root,file)}: ${url}`);
      else if (/\.(jpg|jpeg|png|svg|webp)$/.test(url) && !manifest[url]) errors.push(`Asset not in manifest: ${url}`);
    }
  }
}
walk(path.join(root,'src'));
console.log(`${Object.keys(manifest).length} manifest assets; ${optional.size} optional downloads not supplied.`);
if (optional.size) console.log([...optional].sort().join('\n'));
if (errors.length) { console.error([...new Set(errors)].join('\n')); process.exitCode = 1; }
else console.log('All literal media references and manifest entries exist.');
