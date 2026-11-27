import Link from "next/link";
import { PageShell } from "@/components/Site/SiteChrome";
import Reveal from "@/components/Site/Reveal";
import ThemedImg from "@/components/Site/ThemedImg";
import { projects } from "@/data";
import { listPublicImages } from "@/lib/files";

export const metadata = {
  title: "Hackathons — Kumar Jitin",
  description: "7+ national hackathons including Top 15 Finalist at HackIndia Spark 7 and Adobe University Hackathon Round 2 Qualifier.",
};

const hackathons = [
  {
    badge: "NATIONAL FINALIST · 2026",
    title: "HackIndia Spark 7 — Top 15 Finalist",
    detail:
      "Built and pitched Roam.ai, an AI-powered travel itinerary platform, placing among the Top 15 Finalists out of 200+ participating teams. This was one of the most intense experiences — scoping the problem, building a working prototype, and presenting to a panel of judges within a strict window.",
    project: "Roam.ai",
    href: "/projects",
    folder: "images/Hackathons/HackIndia2026",
  },
  {
    badge: "HACKATHON BUILD · 2026",
    title: "BuildX 2026",
    detail:
      "Competed in BuildX 2026, a rapid full-stack build competition requiring teams to design, develop, and deliver a working product under tight time constraints. Each stage tested technical depth and decision-making speed.",
    project: "View Projects",
    href: "/projects",
    folder: "images/Hackathons/BuildX2026",
  },
  {
    badge: "HACKATHON BUILD · 2026",
    title: "Neurofied.ai — Cognitive Health Platform",
    detail:
      "Led the team end-to-end from REST API & LLM workflow design to the interactive React assessment dashboard. Neurofied.ai came together as a full-stack application combining cognitive activities, progress tracking, and AI-powered insights within the hackathon window.",
    project: "Neurofied.ai Case Study",
    href: "/projects/neurofied",
    folder: null,
  },
  {
    badge: "NATIONAL · 2024",
    title: "HackIndia 2024",
    detail:
      "My first national hackathon experience — competing under time pressure, shipping an MVP, and learning how much can be built when a team moves with clarity and urgency. This experience laid the foundation for every subsequent build.",
    project: "View Projects",
    href: "/projects",
    folder: "images/Hackathons/HackIndia2024",
  },
  {
    badge: "NATIONAL · 2026",
    title: "Smart India Hackathon (SIH)",
    detail:
      "Participated in the Smart India Hackathon, one of India's largest government-backed innovation competitions. The challenge involved solving a real-world problem statement with a scalable, deployable product concept.",
    project: "View Projects",
    href: "/projects",
    folder: "images/Hackathons/Sih",
  },
  {
    badge: "7+ HACKATHONS",
    title: "Rapid Full-Stack & AI Prototyping",
    detail:
      "Across 7+ national and university hackathons, I shipped working MVPs under 24–36 hour sprints covering AI/ML, MERN stack, and real-time geospatial systems. Each build strengthened my ability to scope ambitiously, execute cleanly, and present confidently.",
    project: "View All Projects",
    href: "/projects",
    folder: "images/Hackathons/others",
  },
];

export default function HackathonsPage() {
  const neurofied = projects.find((p) => p.slug === "neurofied");

  const hackathonsWithImages = hackathons.map((h) => ({
    ...h,
    images: h.folder ? listPublicImages(h.folder) : [],
  }));

  return (
    <PageShell>
      <section className="page-header">
        <span className="eyebrow">BUILDING UNDER PRESSURE · 7+ HACKATHONS</span>
        <div className="page-header-row">
          <h1>Hackathons <em>&amp; sprints.</em></h1>
          <p>Rapid prototyping, team leadership, and shipping AI and full-stack products in national competitions.</p>
        </div>
      </section>

      <section className="page-content">
        <Reveal>
          <div className="detail-split" style={{ marginBottom: "28px" }}>
            <div className="detail-split__media">
              <ThemedImg src="/images/journey/hackathons.webp" alt="Hackathons milestone" loading="eager" />
            </div>
            <div>
              <article className="info-card">
                <span className="eyebrow">HACKATHON TRACK RECORD</span>
                <h3>From Idea to Working Product</h3>
                <p>
                  Competing across 7+ national and university hackathons taught me how to scope ambitious problems cleanly, lead multidisciplinary teams, and ship full-stack + AI demos that actually work live. The best learning happens when the deadline is real.
                </p>
                {neurofied && (
                  <div className="action-row" style={{ marginTop: "16px" }}>
                    <Link className="button button-accent" href="/projects/neurofied">Explore Neurofied.ai Case Study ↗</Link>
                    <Link className="button button-outline" href="/#extras">← Back to Journey</Link>
                  </div>
                )}
              </article>
            </div>
          </div>
        </Reveal>

        <h2 className="sub-heading">Hackathons &amp; Sprints</h2>
        <div className="section-blocks">
          {hackathonsWithImages.map((item, i) => (
            <Reveal delay={i * 40} key={item.title}>
              <div className="section-block">
                <div className="section-block__header">
                  <span className="eyebrow">{item.badge}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <Link className="text-link" href={item.href} style={{ marginTop: "10px", display: "inline-block" }}>
                    {item.project} ↗
                  </Link>
                </div>
                {item.images.length > 0 && (
                  <div className="photo-mosaic" style={{ marginTop: "16px" }}>
                    {item.images.map((src, idx) => (
                      <div className="photo-mosaic__item" key={src}>
                        <img src={src} alt={`${item.title} photo ${idx + 1}`} loading="lazy" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
