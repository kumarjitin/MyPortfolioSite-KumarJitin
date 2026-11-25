import Link from "next/link";
import { PageShell } from "@/components/Site/SiteChrome";
import Reveal from "@/components/Site/Reveal";
import { appreciations } from "@/data";

export const metadata = { title: "Appreciations — Kumar Jitin" };

export default function AppreciationsPage() {
  return (
    <PageShell>
      <section className="page-header">
        <span className="eyebrow">HONOURS &amp; RECOGNITION</span>
        <div className="page-header-row">
          <h1>Appreciations <em>&amp; awards.</em></h1>
          <p>Five key distinctions, hackathon finalist awards, research authorship acknowledgements, and leadership recognitions.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="split-grid-2">
          {appreciations.map((item, i) => (
            <Reveal delay={i * 50} key={item.id}>
              <article className="split-card recognition-card">
                <div className="recognition-card__index" aria-hidden="true">{item.id}</div>
                <div className="split-card__body">
                  <div>
                    <span className="eyebrow">{item.subtitle}</span>
                    <h3>{item.title}</h3>
                    <p className="split-card__desc">{item.about}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="action-row" style={{ marginTop: "22px" }}>
          <Link className="button button-accent" href="/about">← Back to About</Link>
        </div>
      </section>
    </PageShell>
  );
}
