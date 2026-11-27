import Link from "next/link";
import { PageShell } from "@/components/Site/SiteChrome";
import ThemedImg from "@/components/Site/ThemedImg";
import { nameIdeas, projects } from "@/data";

export const metadata = { title: "More Ideas — Kumar Jitin" };

export default function MoreIdeasPage() {
  const project = projects.find((p) => p.slug === "name-ideas");

  return (
    <PageShell>
      <section className="page-header">
        <span className="eyebrow">PROJECT {project?.number || "04"} · {project?.type || "CONCEPTS · COMING SOON"}</span>
        <div className="page-header-row">
          <h1>{project?.name || "More Ideas"}<em>.</em></h1>
          <p>{project?.subtitle} — {project?.summary}</p>
        </div>
      </section>

      <section className="page-content" style={{ minHeight: "auto" }}>
        {nameIdeas.map((idea) => (
          <div key={idea.name} style={{ marginBottom: "24px" }}>
            <div className="detail-split" style={{ paddingInline: 0, paddingTop: 0, paddingBottom: "16px" }}>
              <div
                className="detail-split__media"
                style={idea.imageBg ? { background: idea.imageBg } : undefined}
              >
                <ThemedImg
                  src={idea.image}
                  alt={idea.name}
                  loading="eager"
                  style={
                    idea.imageFit === "contain"
                      ? { objectFit: "contain", padding: "16px" }
                      : undefined
                  }
                />
              </div>

              <article className="info-card">
                <span className="eyebrow">{idea.domain}</span>
                <h2 style={{ margin: "6px 0 6px", fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "-0.03em" }}>
                  {idea.name} — {idea.tagline}
                </h2>
                {idea.overview?.map((para, idx) => (
                  <p key={idx} style={idx > 0 ? { marginTop: "10px" } : { marginTop: "8px" }}>{para}</p>
                ))}
              </article>
            </div>

            <div className="card-grid-2 event-cards-flush">
              {idea.approach?.length > 0 && (
                <article className="info-card">
                  <span className="eyebrow">MY APPROACH AND EXPLORATION</span>
                  <ul className="bullet-list" style={{ marginTop: "10px" }}>
                    {idea.approach.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              )}

              <article className="info-card">
                <span className="eyebrow">KEY LEARNING AND DIRECTION</span>
                <p style={{ marginTop: "10px" }}>{idea.learning}</p>
                {idea.status && (
                  <div className="event-takeaway-banner" style={{ marginTop: "16px" }}>
                    <span className="eyebrow">CURRENT STATUS</span>
                    <p style={{ fontSize: "13.5px" }}>{idea.status}</p>
                  </div>
                )}
              </article>
            </div>
          </div>
        ))}

        <div className="info-card" style={{ marginTop: "16px" }}>
          <span className="eyebrow">MORE CONCEPTS</span>
          <h3>Rest Coming Soon</h3>
          <p>Additional project ideas, technical proposals, and prototypes are in progress and will be added here soon.</p>
          <div className="action-row" style={{ marginTop: "14px" }}>
            <Link className="button button-accent" href="/projects">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
