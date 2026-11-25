import Link from "next/link";
import { profile } from "@/data";
import DownloadLink from "@/components/Site/DownloadLink";
import { SiteHeader } from "./SiteHeader";
export { SiteHeader };
const links = [["Home","/"],["Projects","/projects"],["Experience","/experience"],["Research","/research"],["About","/about"]];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <span>KUMAR JITIN<b>.</b></span>
          </Link>
          <p>{profile.devTagline}</p>
        </div>

        <div className="footer-col">
          <span className="eyebrow">NAVIGATION</span>
          <div className="footer-links">
            {links.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <span className="eyebrow">PROFILES &amp; DOCS</span>
          <div className="footer-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.scholar} target="_blank" rel="noreferrer">Google Scholar ↗</a>
            <DownloadLink href="/documents/resume.pdf">Resume PDF</DownloadLink>
            <DownloadLink href="/documents/cv.pdf">CV PDF</DownloadLink>
          </div>
        </div>

        <div className="footer-col">
          <span className="eyebrow">CONTACT</span>
          <div className="footer-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedinLabel}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">{profile.githubLabel}</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} KUMAR JITIN · SOFTWARE ENGINEER</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

export function PageShell({ children }) {
  return (
    <>
      <SiteHeader />
      <main id="top" tabIndex={-1}>{children}</main>
      <SiteFooter />
    </>
  );
}
