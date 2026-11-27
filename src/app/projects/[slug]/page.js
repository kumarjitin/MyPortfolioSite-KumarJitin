import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/Site/SiteChrome";
import TechIcon from "@/components/Site/TechIcon";
import ThemedImg from "@/components/Site/ThemedImg";
import AutoScrollGallery from "@/components/Site/AutoScrollGallery";
import { fileExistsInPublic, listPublicImages } from "@/lib/files";
import { projects } from "@/data";

export function generateStaticParams() {
  return projects
    .filter((p) => p.slug !== "name-ideas")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find(x => x.slug === slug);
  return project ? { title: `${project.name} — Kumar Jitin`, description: project.summary } : { title: "Project not found" };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const deliverables = [
    { label: "Report", href: p.files?.report, available: fileExistsInPublic(p.files?.report) },
    { label: "PPT", href: p.files?.ppt, available: fileExistsInPublic(p.files?.ppt) },
    { label: "Poster", href: p.files?.poster, available: fileExistsInPublic(p.files?.poster) },
  ];

  const galleryImages = listPublicImages(`images/projects/${p.slug}`);

  return (
    <PageShell>
      <section className="detail-hero">
        <span className="eyebrow">PROJECT {p.number} · {p.type}</span>
        <h1>{p.name}<em>.</em></h1>
        <p>{p.subtitle}</p>
      </section>

      <section className="detail-split project-detail" style={{ paddingBottom: "16px" }}>
        <div
          className="detail-split__media"
          style={p.imageBg ? { background: p.imageBg } : undefined}
        >
          <ThemedImg
            src={p.image}
            alt={`${p.name} project feature`}
            style={
              p.imageFit === "contain"
                ? { objectFit: "contain", padding: "24px" }
                : undefined
            }
          />
        </div>

        <div className="detail-cards project-detail__overview">
          <article className="info-card">
            <span className="eyebrow">ROLE</span>
            <h3>{p.roleBadge}</h3>
            <p>{p.role}</p>
          </article>
          <article className="info-card">
            <span className="eyebrow">WHAT I LEARNED</span>
            <h3>Key takeaways</h3>
            <p>{p.learnings}</p>
          </article>
        </div>
      </section>

      <section className="page-content" style={{ minHeight: "auto", paddingTop: "8px" }}>
        {p.storyIntro && (
          <div className="info-card" style={{ marginBottom: "12px" }}>
            <span className="eyebrow">THE STORY</span>
            <h3>{p.name} — Engineering Smarter</h3>
            <p style={{ marginTop: "8px", lineHeight: 1.7 }}>{p.storyIntro}</p>
          </div>
        )}

        <div className="card-grid-2 event-cards-flush">
          <article className="info-card">
            <span className="eyebrow">THE CHALLENGE</span>
            <h3>Problem statement</h3>
            <p>{p.problem}</p>
          </article>
          <article className="info-card">
            <span className="eyebrow">THE OUTCOME</span>
            <h3>What was built</h3>
            <p>{p.result}</p>
          </article>

          {p.highlights?.length > 0 && (
            <article className="info-card">
              <span className="eyebrow">MY JOURNEY &amp; CONTRIBUTIONS</span>
              <ul className="bullet-list" style={{ marginTop: "10px" }}>
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          )}

          {p.outcomes?.length > 0 && (
            <article className="info-card">
              <span className="eyebrow">PROJECT OUTCOMES</span>
              <ul className="bullet-list" style={{ marginTop: "10px" }}>
                {p.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </article>
          )}
        </div>

        <div className="info-card" style={{ marginTop: "12px" }}>
          <span className="eyebrow">TOOLS &amp; TECHNIQUES</span>
          <div className="tag-row" style={{ marginTop: "10px" }}>
            {p.stack.map((tech) => (
              <span className="tag-pill" key={tech}>
                <TechIcon name={tech} />
                {tech}
              </span>
            ))}
          </div>
          <p style={{ marginTop: "12px" }}>{p.conclusion}</p>
        </div>

        <div className="action-row" style={{ marginTop: "16px" }}>
          {p.projectUrl ? (
            <a className="button button-accent" href={p.projectUrl} target="_blank" rel="noreferrer">
              Open Repository / Live ↗
            </a>
          ) : null}
          {deliverables.map((doc) =>
            doc.available ? (
              <a className="button button-outline" href={doc.href} download key={doc.label}>
                Download {doc.label} ↓
              </a>
            ) : (
              <span className="button button-disabled" aria-disabled="true" key={doc.label}>
                {doc.label} — Coming soon
              </span>
            )
          )}
          <Link className="button" href="/projects">← Back to Projects</Link>
        </div>

        <h2 className="sub-heading" style={{ marginTop: "28px" }}>
          Project Gallery{galleryImages.length ? ` (${galleryImages.length} Photos)` : ""}
        </h2>
        {galleryImages.length > 0 ? (
          <AutoScrollGallery images={galleryImages} altPrefix={p.name} />
        ) : (
          <div className="info-card">
            <span className="eyebrow">GALLERY</span>
            <p style={{ marginTop: "6px" }}>Coming soon — project screenshots and photographs will be added here.</p>
          </div>
        )}
      </section>
    </PageShell>
  );
}
