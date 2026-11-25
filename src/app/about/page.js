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
              <p style={{ textAlign: "justify" }}>
                Apart from technical work, I&apos;ve taken on leadership roles — including serving as Vice President and Co-Founder of FlareOn, where I worked with multidisciplinary teams. I&apos;m currently strengthening my DSA skills in C++ and Java and exploring open-source development.
              </p>
              <p style={{ textAlign: "justify", marginBottom: "16px" }}>
                Overall, I&apos;d describe myself as someone who likes to build, learn, and take ownership — and I&apos;m looking forward to growing as a software developer.
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
        <div className="card-grid-2">
          {extracurriculars.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <h2 className="sub-heading">Skills</h2>
        <div className="card-grid-2">
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
    </PageShell>
  );
}
