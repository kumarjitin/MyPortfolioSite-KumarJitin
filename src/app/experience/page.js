import Link from "next/link";
import { PageShell } from "@/components/Site/SiteChrome";
import Reveal from "@/components/Site/Reveal";
import InternshipCard from "@/components/Site/InternshipCard";
import ThemedImg from "@/components/Site/ThemedImg";
import { achievements, clubs, internships, profile } from "@/data";

export const metadata = { title: "Experience — Kumar Jitin" };

export default function ExperiencePage() {
  return (
    <PageShell>
      <section className="page-header">
        <span className="eyebrow">INTERNSHIP, CLUBS, EDUCATION & ACHIEVEMENTS</span>
        <div className="page-header-row">
          <h1>Experience &amp; <em>growth.</em></h1>
          <p>Web performance auditing, campus clubs, academic progress, and competitive recognitions.</p>
        </div>
      </section>

      <section className="page-content">
        {internships.map((item) => (
          <Reveal key={item.organization}>
            <InternshipCard item={item} />
          </Reveal>
        ))}

        <h2 className="sub-heading" id="clubs">Clubs &amp; Organised Events</h2>
        <div className="card-grid-2">
          {clubs.map((club) => (
            <article className="split-card" key={club.id}>
              <div
                className="split-card__media"
                style={club.imageBg ? { background: club.imageBg } : undefined}
              >
                <ThemedImg
                  src={club.image}
                  alt={club.organization}
                  loading="lazy"
                  style={
                    club.imageFit === "contain"
                      ? { objectFit: "contain", padding: "12px" }
                      : undefined
                  }
                />
              </div>
              <div className="split-card__body">
                <div>
                  <span className="eyebrow">{club.duration}</span>
                  <h3>{club.role}</h3>
                  <p className="split-card__subtitle">{club.organization}</p>
                  <p className="split-card__desc">{club.detail}</p>
                </div>
                <div style={{ textAlign: "center", marginTop: "14px" }}>
                  <Link className="button button-accent" href={`/experience/clubs/${club.id}`}>
                    View Events ↗
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <h2 className="sub-heading" id="achievements">Education &amp; Achievements</h2>
        <div className="card-grid-2">
          <article className="info-card">
            <span className="eyebrow">EDUCATION · {profile.education.duration}</span>
            <h3>{profile.education.institution}</h3>
            <p>{profile.education.degree}</p>
            <p style={{ marginTop: "8px", color: "var(--accent)", fontWeight: 700 }}>
              CGPA: {profile.education.cgpa}
            </p>
          </article>

          {achievements.map((ach) => (
            <article className="info-card" key={ach.title}>
              <span className="eyebrow">ACHIEVEMENT</span>
              <h3>{ach.title}</h3>
              <p>{ach.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
