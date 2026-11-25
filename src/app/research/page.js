import { PageShell } from "@/components/Site/SiteChrome";
import Reveal from "@/components/Site/Reveal";
import ThemedImg from "@/components/Site/ThemedImg";
import PaperTicker from "@/components/Site/PaperTicker";
import { publications, profile } from "@/data";

export const metadata = { title: "Research & Publications — Kumar Jitin" };

export default function ResearchPage() {
  const tickerItems = [
    ...publications.papers,
    ...publications.bookChapters,
    { ...publications.patent, venue: "Patent Filing" },
  ];

  return (
    <PageShell>
      <section className="page-header">
        <span className="eyebrow">PUBLICATIONS &amp; INTELLECTUAL PROPERTY</span>
        <div className="page-header-row">
          <h1>Research &amp; <em>publications.</em></h1>
          <p>Published conference papers, journal manuscripts, book chapters, and route-optimization patent filing.</p>
        </div>
      </section>

      <section className="page-content page-fit">
        <PaperTicker items={tickerItems} />

        <div className="split-grid-2">
          {publications.papers.map((p, i) => (
            <Reveal delay={i * 40} key={p.title}>
              <a className="split-card" href={p.url} target="_blank" rel="noreferrer">
                <div className="split-card__media">
                  <ThemedImg src={p.image} alt={p.title} loading="lazy" />
                  <span className="split-card__num">0{i + 1}</span>
                </div>
                <div className="split-card__body">
                  <div>
                    <span className="eyebrow">{p.kind} · {p.venue}</span>
                    <h3>{p.title}</h3>
                    <p className="split-card__desc">{p.description}</p>
                  </div>
                  <div className="split-card__foot">
                    <span>STATUS: {p.status.toUpperCase()}</span>
                    <span>READ PAPER ↗</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}

          <Reveal delay={120}>
            <a className="split-card" id="patent" href={publications.patent.url}>
              <div
                className="split-card__media"
                style={publications.patent.imageBg ? { background: publications.patent.imageBg } : undefined}
              >
                <ThemedImg
                  src={publications.patent.image}
                  alt={publications.patent.title}
                  loading="lazy"
                  style={
                    publications.patent.imageFit === "contain"
                      ? { objectFit: "contain", padding: "14px" }
                      : undefined
                  }
                />
                <span className="split-card__num">IP</span>
              </div>
              <div className="split-card__body">
                <div>
                  <span className="eyebrow">{publications.patent.kind}</span>
                  <h3>{publications.patent.title}</h3>
                  <p className="split-card__desc">{publications.patent.description}</p>
                </div>
                <div className="split-card__foot">
                  <span>STATUS: {publications.patent.status.toUpperCase()}</span>
                  <span>VIEW PROJECT ↗</span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>

        <h2 className="sub-heading">Book Chapters</h2>
        <div className="card-grid-2">
          {publications.bookChapters.map((ch) => (
            <a className="info-card" href={ch.url} target="_blank" rel="noreferrer" key={ch.title}>
              <span className="eyebrow">{ch.kind} · {ch.status.toUpperCase()}</span>
              <h3>{ch.title}</h3>
              <p>{ch.venue}</p>
              <span className="social-visit" style={{ display: "inline-block", marginTop: "10px" }}>
                VIEW CHAPTER ↗
              </span>
            </a>
          ))}
        </div>

        <div className="resume-row" style={{ marginTop: "20px" }}>
          <div>
            <span className="eyebrow">GOOGLE SCHOLAR</span>
            <p>Explore publication records, co-authors, and citations.</p>
          </div>
          <div className="resume-actions">
            <a className="button button-outline" href={profile.scholar} target="_blank" rel="noreferrer">
              Open Google Scholar ↗
            </a>
            <a className="button button-accent" href={profile.github} target="_blank" rel="noreferrer">
              View Model Code on GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
