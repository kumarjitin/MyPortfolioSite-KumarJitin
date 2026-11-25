import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/Site/SiteChrome";
import TechIcon from "@/components/Site/TechIcon";
import ThemedImg from "@/components/Site/ThemedImg";
import { fileExistsInPublic } from "@/lib/files";
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

  return (
    <PageShell>
      <section className="detail-hero">
        <span className="eyebrow">PROJECT {p.number} · {p.type}</span>
        <h1>{p.name}<em>.</em></h1>
        <p>{p.subtitle} — {p.summary}</p>
      </section>

      <section className="detail-split project-detail">
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
              <span className="eyebrow">LEARNINGS</span>
              <h3>Key takeaways</h3>
              <p>{p.learnings}</p>
            </article>
        </div>
        <div className="project-detail__body">
          <div className="detail-cards">
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
          </div>

          {p.highlights?.length ? (
            <div className="info-card" style={{ marginTop: "14px" }}>
              <span className="eyebrow">KEY CONTRIBUTIONS</span>
              <ul style={{ margin: "10px 0 0", paddingLeft: "18px", color: "var(--muted)", fontSize: "13.5px", lineHeight: "1.6" }}>
                {p.highlights.map((h) => (
                  <li key={h} style={{ marginBottom: "4px" }}>{h}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="info-card" style={{ marginTop: "14px" }}>
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

          <div className="action-row">
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
        </div>
      </section>
    </PageShell>
  );
}
