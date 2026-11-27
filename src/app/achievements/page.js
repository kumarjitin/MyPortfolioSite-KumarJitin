import Link from "next/link";
import { PageShell } from "@/components/Site/SiteChrome";
import Reveal from "@/components/Site/Reveal";
import ThemedImg from "@/components/Site/ThemedImg";
import { achievements, appreciations, certifications } from "@/data";
import { listPublicImages } from "@/lib/files";

export const metadata = {
  title: "Achievements & Milestones — Kumar Jitin",
  description: "Academic distinctions, national hackathon honours, Olympiad medals, and verified certifications.",
};

export default function AchievementsPage() {
  const gallery = listPublicImages("images/Achievements");

  return (
    <PageShell>
      <section className="page-header">
        <span className="eyebrow">HONOURS · DISTINCTIONS · CERTIFICATIONS</span>
        <div className="page-header-row">
          <h1>Achievements &amp; <em>milestones.</em></h1>
          <p>Competitive recognitions, academic distinctions, and verified technical credentials.</p>
        </div>
      </section>

      <section className="page-content">
        <Reveal>
          <div className="detail-split" style={{ marginBottom: "28px" }}>
            <div className="detail-split__media">
              <ThemedImg src="/images/journey/achievements.webp" alt="Achievements milestone" loading="eager" />
            </div>
            <div>
              <article className="info-card">
                <span className="eyebrow">RECOGNITION OVERVIEW</span>
                <h3>Consistent Execution Across Domains</h3>
                <p>
                  From three consecutive National Science Olympiad Silver Medals and a 100/100 score in the Chancellor&apos;s AI Masterclass to national hackathon finals and IEEE authorship.
                </p>
                <div className="action-row" style={{ marginTop: "16px" }}>
                  <Link className="button button-accent" href="/about/appreciations">Appreciations &amp; Honours ↗</Link>
                  <Link className="button button-outline" href="/#extras">← Back to Journey</Link>
                </div>
              </article>
            </div>
          </div>
        </Reveal>

        <h2 className="sub-heading">Key Achievements</h2>
        <div className="card-grid-2">
          {achievements.map((ach, i) => (
            <Reveal delay={i * 45} key={ach.title}>
              <article className="info-card">
                <span className="eyebrow">ACHIEVEMENT · 0{i + 1}</span>
                <h3>{ach.title}</h3>
                <p>{ach.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <h2 className="sub-heading">Appreciations &amp; Honours</h2>
        <div className="card-grid-2">
          {appreciations.map((app, i) => (
            <Reveal delay={i * 40} key={app.id}>
              <article className="info-card">
                <span className="eyebrow">{app.id} · {app.subtitle}</span>
                <h3>{app.title}</h3>
                <p>{app.about}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <h2 className="sub-heading">Certifications</h2>
        <div className="certification-grid">
          {certifications.map((c) => (
            <article className="info-card" key={c.title}>
              <span className="eyebrow">{c.date.toUpperCase()}</span>
              <h3>{c.title}</h3>
            </article>
          ))}
        </div>

        {gallery.length > 0 && (
          <>
            <h2 className="sub-heading">Moments &amp; Recognition Gallery ({gallery.length} Photos)</h2>
            <div className="gallery-grid">
              {gallery.map((src, idx) => (
                <div className="gallery-tile" key={src}>
                  <img src={src} alt={`Achievement moment ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </PageShell>
  );
}
