import fs from "node:fs";
import path from "node:path";

export function fileExistsInPublic(filePath) {
  if (typeof filePath !== "string" || !filePath.startsWith("/")) return false;
  const root = path.resolve(process.cwd(), "public");
  const resolved = path.resolve(root, `.${filePath}`);
  if (!resolved.startsWith(root + path.sep)) return false;
  try { return fs.statSync(resolved).isFile(); } catch { return false; }
}

export function listPublicImages(relDir, { excludeThumbnail = false } = {}) {
  const dir = path.join(process.cwd(), "public", relDir);
  if (!fs.existsSync(dir)) return [];
  const webPrefix = "/" + relDir.replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
  return fs
    .readdirSync(dir)
    .filter((f) => {
      if (!/\.(png|jpe?g|webp|gif)$/i.test(f)) return false;
      if (excludeThumbnail && /^thumbnail\./i.test(f)) return false;
      return true;
    })
    .sort()
    .map((f) => `${webPrefix}/${f}`);
}
