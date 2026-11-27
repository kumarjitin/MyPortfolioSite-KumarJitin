import Link from "next/link";
import { PageShell } from "@/components/Site/SiteChrome";
import Reveal from "@/components/Site/Reveal";
import ThemedImg from "@/components/Site/ThemedImg";
import { listPublicImages } from "@/lib/files";

export const metadata = {
  title: "India AI Impact Summit 2026 — Kumar Jitin",
  description: "Attended India AI Impact Summit 2026 at Bharat Mandapam, New Delhi — exploring applied AI, LLMs, and research.",
};

const summitTakeaways = [
  {
    eyebrow: "CONFERENCE · NEW DELHI",
    title: "Bharat Mandapam, New Delhi",
    detail: "Attended the India AI Impact Summit 2026, engaging with sessions on scalable AI systems, sovereign compute, and real-world deployment across healthcare and mobility.",
  },
  {
    eyebrow: "APPLIED AI & LLMS",
    title: "From Research to Production",
    detail: "Connected summit discussions on trustworthy and explainable AI directly with ongoing work in Neurofied.ai and Alzheimer's XAI classification.",
  },
  {
    eyebrow: "AI MASTERCLASS · 100/100",
    title: "AI, ChatGPT, DeepSeek & Metaverse",
    detail: "Secured a 100/100 distinction in the Chancellor's Masterclass examination covering modern LLM architectures and applied generative AI.",
  },
  {
    eyebrow: "RESEARCH ALIGNMENT",
    title: "Peer-Reviewed AI Publications",
    detail: "Published work at IATMSI 2025 and ICCPCT 2026 exploring AI in neurodegenerative disorders and lightweight machine learning models.",
  },
];

export default function AiSummitPage() {
  const summitGallery = listPublicImages("images/ai summit");

  return (
    <PageShell>
      <section className="page-header">
        <span className="eyebrow">CONFERENCES &amp; AI ECOSYSTEM · 2026</span>
        <div className="page-header-row">
          <h1>India AI Impact <em>Summit.</em></h1>
          <p>Insights from Bharat Mandapam, New Delhi, and how global AI conversations connect to my engineering and research work.</p>
        </div>
      </section>

      <section className="page-content">
        <Reveal>
          <div className="detail-split" style={{ marginBottom: "28px" }}>
            <div className="detail-split__media">
              <ThemedImg src="/images/journey/ai-summit.webp" alt="India AI Impact Summit 2026" loading="eager" />
            </div>
            <div>
              <article className="info-card">
                <span className="eyebrow">BHARAT MANDAPAM · NEW DELHI</span>
                <h3>India AI Impact Summit 2026</h3>
                <p>
                  Participating in the India AI Impact Summit 2026 offered first-hand exposure to how researchers, founders, and policy leaders are shaping practical, explainable, and accessible AI systems.
                </p>
                <div className="action-row" style={{ marginTop: "16px" }}>
                  <Link className="button button-accent" href="/research">View AI Research Papers ↗</Link>
                  <Link className="button button-outline" href="/#extras">← Back to Journey</Link>
                </div>
              </article>
            </div>
          </div>
        </Reveal>

        <h2 className="sub-heading">Key Takeaways &amp; AI Work</h2>
        <div className="card-grid-2">
          {summitTakeaways.map((item, i) => (
            <Reveal delay={i * 50} key={item.title}>
              <article className="info-card">
                <span className="eyebrow">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {summitGallery.length > 0 && (
          <>
            <h2 className="sub-heading">Summit Gallery ({summitGallery.length} Photos)</h2>
            <div className="gallery-grid">
              {summitGallery.map((src, idx) => (
                <div className="gallery-tile" key={src}>
                  <img src={src} alt={`India AI Summit photo ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </PageShell>
  );
}
