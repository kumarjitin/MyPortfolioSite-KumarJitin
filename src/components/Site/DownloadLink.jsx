import { fileExistsInPublic } from "@/lib/files";

export default function DownloadLink({ href, children, className = "" }) {
  return fileExistsInPublic(href)
    ? <a className={className} href={href} download>{children} ↓</a>
    : <span className={className ? `${className} button-disabled` : "muted"}>{children} — not available</span>;
}
