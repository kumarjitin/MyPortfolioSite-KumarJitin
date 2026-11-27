import Link from "next/link";
import { PageShell } from "@/components/Site/SiteChrome";
import Reveal from "@/components/Site/Reveal";
import TechIcon from "@/components/Site/TechIcon";
import ThemedImg from "@/components/Site/ThemedImg";
import { projects } from "@/data";

export const metadata = { title: "Projects — Kumar Jitin" };

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="page-header">
        <span className="eyebrow">SELECTED WORK</span>
        <div className="page-header-row">
          <h1>Projects <em>built.</em></h1>
          <p>Full-stack platforms, AI applications, and real-time geospatial systems led and shipped across hackathons and live builds.</p>
        </div>
      </section>

      <section className="page-content page-fit project-list">
        <div className="split-grid-2">
          {projects.map((p, i) => {
            return (
              <Reveal delay={i * 50} key={p.slug}>
                <article className="split-card">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="split-card__media"
                    style={p.imageBg ? { background: p.imageBg } : undefined}
                  >
                    <ThemedImg
                      src={p.image}
                      alt={`${p.name} logo`}
                      loading="lazy"
                      style={
                        p.imageFit === "contain"
                          ? { objectFit: "contain", padding: "14px" }
                          : undefined
                      }
                    />
                    <span className="split-card__num">{p.number}</span>
                  </Link>

                  <div className="split-card__body">
                    <div>
                      <div className="split-card__top">
                        <span className="eyebrow">{p.type}</span>
                        <Link href={`/projects/${p.slug}`} className="eyebrow">
                          CASE STUDY ↗
                        </Link>
                      </div>
                      <Link href={`/projects/${p.slug}`}>
                        <h3>{p.name}</h3>
                      </Link>
                      <p className="split-card__subtitle">{p.subtitle}</p>
                      <p className="split-card__desc">{p.summary}</p>
                    </div>

                    <div>
                      <div className="tag-row">
                        {p.stack.slice(0, 4).map((tech) => (
                          <span className="tag-pill" key={tech}>
                            <TechIcon name={tech} />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

      </section>
    </PageShell>
  );
}
