import Link from "next/link";
import { fileExistsInPublic } from "@/lib/files";
import GpsRouteJourney from "@/components/Journey/GpsRouteJourney";
import { PageShell } from "@/components/Site/SiteChrome";
import Reveal from "@/components/Site/Reveal";
import TechIcon from "@/components/Site/TechIcon";
import ThemedImg from "@/components/Site/ThemedImg";
import {
  certifications,
  extracurriculars,
  personalStoryParagraphs,
  profile,
  skillGroups,
} from "@/data";

export const metadata = { title: "About & Journey — Kumar Jitin" };

const journeySections = [
  {
    eyebrow: "FOUNDATION · 2000–2024",
    title: "Where My Journey Started",
    body: "Growing up in a defence household meant moving cities every few years, adapting fast, and learning that reliability matters more than comfort. That upbringing gave me a certain groundedness — the kind that makes it easier to stay calm under a deadline, take ownership of a problem, or lead a team through something unfamiliar. Three consecutive National Science Olympiad Silver Medals reinforced a discipline for curiosity and structured thinking that I carry into every project today.",
    image: "/images/journey/achievements.webp",
    imageAlt: "Achievements and foundations",
    href: "/achievements",
    hrefLabel: "View Achievements ↗",
  },
  {
    eyebrow: "FULL-STACK DEVELOPMENT · 2024–PRESENT",
    title: "Learning Through Building",
    body: "My development journey accelerated through hands-on projects. Building Neurofied.ai, QuickPull, and SkillXchange across hackathons and academic builds gave me experience in the MERN stack, real-time systems, geospatial engineering, and AI integration. Each project pushed me to understand not just individual technologies but how entire systems connect — from API design to database modelling to real-time communication.",
    image: "/images/journey/Projects.webp",
    imageAlt: "Projects and development",
    href: "/projects",
    hrefLabel: "View Projects ↗",
    flip: true,
  },
  {
    eyebrow: "COMPETITIONS · 7+ HACKATHONS",
    title: "Hackathons & Competitions",
    body: "Competing in 7+ national hackathons — including placing among the Top 15 Finalists at HackIndia Spark 7 out of 200+ teams and clearing Round 2 of the Adobe University Hackathon — taught me how to scope ambitious problems, lead teams, and ship working products under pressure. University coding competitions like CodeWars 2025 and Tech Trek 2025 sharpened my algorithmic problem-solving in C++ and Java.",
    image: "/images/journey/hackathons.webp",
    imageAlt: "Hackathons and competitions",
    href: "/hackathons",
    hrefLabel: "View Hackathons ↗",
  },
  {
    eyebrow: "RESEARCH & PUBLICATIONS",
    title: "Research & Exploration",
    body: "Published peer-reviewed research papers at IATMSI 2025 and ICCPCT 2026, contributed book chapters, and filed a patent for the QuickPull route-optimization system. My research spans AI in neurodegenerative disorders, flood prediction using lightweight ML models, and explainable AI for healthcare. This research background has shaped how I think about applying AI to real-world problems with interpretability and reliability.",
    image: "/images/journey/research.webp",
    imageAlt: "Research and publications",
    href: "/research",
    hrefLabel: "View Research ↗",
    flip: true,
  },
  {
    eyebrow: "LEADERSHIP · FLAREON · DRR CLUB",
    title: "Collaboration & Leadership",
    body: "As Vice President and Co-Founder of FlareOn — a student-led filmmaking club — I coordinated media production, guest sessions, creative competitions, and large-scale campus events. As a Core Team Member of the Disaster Risk Reduction Club, I contributed to safety awareness initiatives and student engagement. These experiences gave me practical understanding of team coordination, communication, event management, and leadership under time pressure.",
    image: "/images/journey/clubs.webp",
    imageAlt: "Clubs and leadership",
    href: "/experience",
    hrefLabel: "View Experience ↗",
  },
  {
    eyebrow: "AI SUMMIT · CONFERENCES",
    title: "Learning Beyond the Campus",
    body: "Attending the India AI Impact Summit 2026 at Bharat Mandapam, New Delhi, exposed me to applied AI trends, industry perspectives, and the broader ecosystem of AI-driven innovation. Beyond coursework and projects, I continue engaging with developer communities — IEEE, Red Hat — and exploring open-source contributions, design, and content creation as extensions of my technical practice.",
    image: "/images/journey/ai-summit.webp",
    imageAlt: "AI Summit and conferences",
    href: "/ai-summit",
    hrefLabel: "View AI Summit ↗",
    flip: true,
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-header">
        <span className="eyebrow">ABOUT & JOURNEY</span>
        <div className="page-header-row">
          <h1>{profile.name} — <em>{profile.title}.</em></h1>
          <p>Software engineer, builder, and lifelong learner — grounded in a defence upbringing, shaped by curiosity.</p>
        </div>
      </section>

      <section className="page-content">
        <Reveal>
          <div className="about-profile about-profile--intro">
            <div className="about-photo">
              <ThemedImg src="/images/about-portrait.jpg" alt="Kumar Jitin portrait" loading="eager" sizes="(max-width: 760px) 85vw, (max-width: 1100px) 30vw, 420px" />
            </div>
            <div>
              <span className="eyebrow">INTRODUCTION</span>
              <h2>Hi, I&apos;m Kumar Jitin — <em>nice to meet you.</em></h2>
              <p className="lead" style={{ textAlign: "justify" }}>
                I&apos;m currently pursuing my B.E. in Computer Science Engineering at Chitkara University. I come from a defence background, and my roots are in Chittorgarh, Rajasthan, while I&apos;m currently based in Zirakpur, Punjab.
              </p>
              <p style={{ textAlign: "justify" }}>
                Technically, I mainly work with C++, Java, and the MERN stack, and I&apos;m also exploring AI integration in software applications. I enjoy not just writing code, but also understanding the overall application flow, designing solutions, and taking ownership of projects end-to-end.
              </p>
              <p style={{ textAlign: "justify" }}>
                I&apos;ve worked on projects like Neurofied.ai, QuickPull, and SkillXchange — which have given me hands-on experience in full-stack development, APIs, databases, real-time systems, and AI integration. I&apos;ve participated in 7+ hackathons and have been involved in research, including published papers, a book chapter, and a patent in progress.
              </p>
              <p style={{ textAlign: "justify", marginBottom: "16px" }}>
                Apart from technical work, I&apos;ve taken on leadership roles — including serving as Vice President and Co-Founder of FlareOn. I&apos;m currently strengthening my DSA skills and exploring open-source development.
              </p>
              <p style={{ fontSize: "13px", color: "var(--muted)" }}>
                <strong>Education:</strong> {profile.education.degree} — {profile.education.institution} ({profile.education.duration}) · CGPA: {profile.education.cgpa}
              </p>
              <div className="action-row" style={{ marginTop: "14px" }}>
                <a className="text-link" href={`mailto:${profile.email}`}>✉ {profile.email}</a>
                <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
          </div>
        </Reveal>

        <h2 className="sub-heading" id="certifications">Certifications</h2>
        <div className="certification-grid">
          {certifications.map((c) => (
            <article className="info-card" key={c.title}>
              <span className="eyebrow">CERTIFICATION · {c.date.toUpperCase()}</span>
              <h3>{c.title}</h3>
            </article>
          ))}
        </div>
        <div style={{ marginTop: "14px" }}>
          <a
            className="button button-accent"
            href="https://www.linkedin.com/in/kumarjitin/details/certifications/"
            target="_blank"
            rel="noreferrer"
          >
            View All Certifications on LinkedIn ↗
          </a>
        </div>

        <Link className="resume-row" href="/about/appreciations" style={{ marginTop: "18px" }}>
          <div>
            <span className="eyebrow">RECOGNITIONS · 05 HIGHLIGHTS</span>
            <h3 style={{ margin: "6px 0 4px", fontSize: "20px" }}>Appreciations &amp; Honours</h3>
            <p>Certificates, hackathon awards, masterclass distinctions, and faculty recognitions.</p>
          </div>
          <span className="button button-accent">View All ↗</span>
        </Link>

        <h2 className="sub-heading" id="extracurriculars">Extra-Curricular Activities</h2>
        <div className="card-grid-2 card-grid-equal">
          {extracurriculars.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <h2 className="sub-heading">Skills</h2>
        <div className="card-grid-2 card-grid-equal">
          {skillGroups.map((group) => (
            <article className="info-card" key={group.category}>
              <span className="eyebrow">{group.category.toUpperCase()}</span>
              <div className="tag-row" style={{ marginTop: "10px" }}>
                {group.items.map((item) => (
                  <span className="tag-pill tag-pill--lg" key={item}>
                    <TechIcon name={item} />
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <GpsRouteJourney />

      <section className="page-content" id="story" style={{ paddingTop: "32px", paddingBottom: "32px" }}>
        <span className="eyebrow">BEYOND CODING</span>
        <h2 className="sub-heading" style={{ fontSize: "clamp(26px, 3vw, 38px)", marginTop: "6px", marginBottom: "28px" }}>
          Beyond the screen.
        </h2>
        {personalStoryParagraphs.map((para, i) => (
          <div className={`story-block${i % 2 === 1 ? " story-block--flip" : ""}`} key={para.title}>
            <div className="story-block__visual">
              {fileExistsInPublic(para.image) ? (
                <img src={para.image} alt={para.imageAlt || para.title} loading="lazy" width={800} height={600} />
              ) : (
                <div className="story-block__chapter"><span>CHAPTER</span><strong>0{i + 1}</strong><small>Photo coming soon</small></div>
              )}
            </div>
            <div className="story-block__body">
              {para.pullQuote && (
                <blockquote className="story-pullquote">&ldquo;{para.pullQuote}&rdquo;</blockquote>
              )}
              <h3>{para.title}</h3>
              <p style={{ textAlign: "justify" }}>{para.text || "Story coming soon."}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="page-content" id="journey" style={{ paddingTop: "16px" }}>
        <h2 className="sub-heading" style={{ marginTop: 0 }}>My Journey</h2>
        <div className="section-blocks">
          {journeySections.map((section, i) => (
            <Reveal delay={i * 40} key={section.title}>
              <div className={`story-block${section.flip ? " story-block--flip" : ""}`}>
                <div className="story-block__visual">
                  <img src={section.image} alt={section.imageAlt} loading="lazy" />
                </div>
                <div className="story-block__body">
                  <div>
                    <span className="eyebrow">{section.eyebrow}</span>
                    <h3 style={{ margin: "8px 0 10px", fontSize: "clamp(20px, 2vw, 26px)", letterSpacing: "-0.03em" }}>{section.title}</h3>
                    <p style={{ lineHeight: 1.7, color: "var(--muted)", fontSize: "14.5px" }}>{section.body}</p>
                    {section.href && (
                      <div className="action-row" style={{ marginTop: "14px" }}>
                        <Link className="button button-accent" href={section.href}>{section.hrefLabel}</Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
