import Link from "next/link";
import { PageShell } from "@/components/Site/SiteChrome";
import Reveal from "@/components/Site/Reveal";
import ThemedImg from "@/components/Site/ThemedImg";
import { fileExistsInPublic } from "@/lib/files";
import { nameIdeas, projects } from "@/data";

export const metadata = { title: "Name Ideas — Kumar Jitin" };

export default function NameIdeasPage() {
  const project = projects.find((p) => p.slug === "name-ideas");
  const hasProjectReport = fileExistsInPublic(project?.files?.report);
  const hasProjectPpt = fileExistsInPublic(project?.files?.ppt);
  const hasProjectPoster = fileExistsInPublic(project?.files?.poster);

  return (
    <PageShell>
      <section className="page-header">
        <span className="eyebrow">PROJECT {project?.number || "04"} · {project?.type || "CREATIVE EXPLORATION"}</span>
        <div className="page-header-row">
          <h1>{project?.name || "Name Ideas"}<em>.</em></h1>
          <p>{project?.subtitle} — {project?.summary}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="card-grid-3">
          {nameIdeas.map((idea, i) => {
            const hasReport = fileExistsInPublic(idea.files?.report);
            const hasPpt = fileExistsInPublic(idea.files?.ppt);

            return (
              <Reveal delay={i * 50} key={idea.name}>
                <article className="event-card" style={{ height: "100%" }}>
                  <div>
                    <div
                      className="event-card__media"
                      style={idea.imageBg ? { background: idea.imageBg } : undefined}
                    >
                      <ThemedImg
                        src={idea.image}
                        alt={idea.name}
                        loading="lazy"
                        style={
                          idea.imageFit === "contain"
                            ? { objectFit: "contain", padding: "14px" }
                            : undefined
                        }
                      />
                    </div>
                    <span className="eyebrow" style={{ marginTop: "12px", display: "block", fontSize: "10px" }}>
                      {idea.domain}
                    </span>
                    <h3 style={{ fontSize: "19px", margin: "6px 0 4px", letterSpacing: "-0.03em" }}>
                      {idea.name}
                    </h3>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text)", margin: "0 0 8px" }}>
                      {idea.tagline}
                    </p>
                    <p style={{ fontSize: "13.5px", color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>
                      {idea.note}
                    </p>
                  </div>

                  <div className="split-card__foot" style={{ marginTop: "14px", justifyContent: "flex-start" }}>
                    {hasReport ? (
                      <a className="button button-sm" href={idea.files.report} download>
                        Report ↓
                      </a>
                    ) : (
                      <span className="button button-sm button-disabled" aria-disabled="true">
                        Report — Coming soon
                      </span>
                    )}
                    {hasPpt ? (
                      <a className="button button-sm" href={idea.files.ppt} download>
                        PPT ↓
                      </a>
                    ) : (
                      <span className="button button-sm button-disabled" aria-disabled="true">
                        PPT — Coming soon
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="info-card" style={{ marginTop: "28px" }}>
          <span className="eyebrow">PROJECT DELIVERABLES</span>
          <h3 style={{ marginTop: "6px" }}>Collection Report, PPT &amp; Poster</h3>
          <p>Download the overall Name Ideas documentation below when available.</p>
          <div className="action-row" style={{ marginTop: "14px" }}>
            {hasProjectReport ? (
              <a className="button button-outline" href={project.files.report} download>
                Download Report ↓
              </a>
            ) : (
              <span className="button button-disabled" aria-disabled="true">
                Report — Coming soon
              </span>
            )}
            {hasProjectPpt ? (
              <a className="button button-outline" href={project.files.ppt} download>
                Download PPT ↓
              </a>
            ) : (
              <span className="button button-disabled" aria-disabled="true">
                PPT — Coming soon
              </span>
            )}
            {hasProjectPoster ? (
              <a className="button button-outline" href={project.files.poster} download>
                Download Poster ↓
              </a>
            ) : (
              <span className="button button-disabled" aria-disabled="true">
                Poster — Coming soon
              </span>
            )}
            <Link className="button button-accent" href="/projects">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
