import fs from "node:fs";
import path from "node:path";

export function fileExistsInPublic(filePath) {
  if (typeof filePath !== "string" || !filePath.startsWith("/")) return false;
  const root = path.resolve(process.cwd(), "public");
  const resolved = path.resolve(root, `.${filePath}`);
  if (!resolved.startsWith(root + path.sep)) return false;
  try { return fs.statSync(resolved).isFile(); } catch { return false; }
}
