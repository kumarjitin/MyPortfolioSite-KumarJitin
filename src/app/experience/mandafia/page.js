import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/Site/SiteChrome";
import ThemedImg from "@/components/Site/ThemedImg";
import { internships } from "@/data";

export const metadata = {
  title: "Mandafia Services — Experience — Kumar Jitin",
  description:
    "Web & Digital Strategy Internship at Mandafia Services: Google Lighthouse performance audit, accessibility, SEO, and remediation roadmap.",
};

export default function MandafiaExperiencePage() {
  const item = internships.find((x) => x.slug === "mandafia") || internships[0];
  if (!item) notFound();

  return (
    <PageShell>
      <section className="detail-hero">
        <span className="eyebrow">INTERNSHIP · {item.duration.toUpperCase()}</span>
        <h1>
          {item.organization}<em>.</em>
        </h1>
        <p>{item.role} — {item.aboutCompany}</p>
      </section>

      <section className="detail-split project-detail">
        <div className="detail-split__media" style={{ background: "var(--media-bg)" }}>
          <ThemedImg
            src={item.logo}
            alt={`${item.organization} logo`}
            style={{ objectFit: "contain", padding: "24px" }}
          />
        </div>

        <div className="detail-cards project-detail__overview">
          <article className="info-card">
            <span className="eyebrow">ROLE &amp; DURATION</span>
            <h3>{item.role}</h3>
            <p>{item.organization} · {item.duration}</p>
          </article>
          <article className="info-card">
            <span className="eyebrow">KEY METRICS</span>
            <h3>Audit Benchmarks</h3>
            <div className="tag-row" style={{ marginTop: "8px" }}>
              {item.metrics.map((m) => (
                <span className="tag-pill" key={m}>{m}</span>
              ))}
            </div>
          </article>
        </div>

        <div className="project-detail__body">
          <div className="info-card">
            <span className="eyebrow">MY WORK &amp; KEY DELIVERABLES</span>
            <h3>Technical Audit &amp; Digital Strategy</h3>
            <ul
              style={{
                margin: "10px 0 0",
                paddingLeft: "18px",
                color: "var(--muted)",
                fontSize: "14px",
                lineHeight: "1.7",
              }}
            >
              {item.highlights.map((pt) => (
                <li key={pt} style={{ marginBottom: "8px" }}>
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          <div className="action-row" style={{ marginTop: "16px" }}>
            <Link className="button button-outline" href="/experience">
              ← Back to Experience
            </Link>
            <a className="button button-accent" href={item.companyUrl} target="_blank" rel="noreferrer">
              Company Profile ↗
            </a>
            <Link className="button button-outline" href="/projects">
              View Projects ↗
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
