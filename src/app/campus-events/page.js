import Link from "next/link";
import { PageShell } from "@/components/Site/SiteChrome";
import Reveal from "@/components/Site/Reveal";
import ThemedImg from "@/components/Site/ThemedImg";
import { allClubEvents, clubs, extracurriculars, portfolioLearning } from "@/data";
import { listPublicImages } from "@/lib/files";

export const metadata = {
  title: "Campus Events & Leadership — Kumar Jitin",
  description: "Organised campus events with FlareOn, Disaster Risk Reduction Club, IEEE, Red Hat, and NSS.",
};

const seminarFolders = [
  { folder: "images/Seminars/Kalchakra", title: "Kalchakra Seminar" },
  { folder: "images/Seminars/InnovationInYou", title: "Innovation In You" },
  { folder: "images/Seminars/NSSDay", title: "NSS Day" },
  { folder: "images/Seminars/Earthday", title: "Earth Day" },
  { folder: "images/Seminars/StudyinFrance", title: "Study in France" },
  { folder: "images/Seminars/NitinNagaich", title: "Session with Nitin Nagaich" },
  { folder: "images/Seminars/JahanviParmar", title: "Session with Jahanvi Parmar" },
];

export default function CampusEventsPage() {
  const seminarGalleries = seminarFolders
    .map((s) => ({ ...s, images: listPublicImages(s.folder) }))
    .filter((s) => s.images.length > 0);

  return (
    <PageShell>
      <section className="page-header">
        <span className="eyebrow">CAMPUS LIFE · EVENTS · COMMUNITIES</span>
        <div className="page-header-row">
          <h1>Campus <em>events.</em></h1>
          <p>Leading student-run filmmaking productions, technical seminars, safety drives, and developer communities.</p>
        </div>
      </section>

      <section className="page-content">
        <Reveal>
          <div className="detail-split" style={{ marginBottom: "28px" }}>
            <div className="detail-split__media">
              <ThemedImg src="/images/journey/campus-events.webp" alt="Campus Events" loading="eager" />
            </div>
            <div>
              <article className="info-card">
                <span className="eyebrow">ORGANISED &amp; UPCOMING</span>
                <h3>Building Campus Culture</h3>
                <p>
                  As Vice President &amp; Co-Founder of FlareOn and Core Team Member of the Disaster Risk Reduction Club, I&apos;ve led creative productions, guest sessions, and campus-wide initiatives.
                </p>
                <div className="action-row" style={{ marginTop: "16px" }}>
                  {clubs.map((c) => (
                    <Link className="button button-accent" href={`/experience/clubs/${c.id}`} key={c.id}>
                      {c.id.toUpperCase()} Events ↗
                    </Link>
                  ))}
                  <Link className="button button-outline" href="/#extras">← Back to Journey</Link>
                </div>
              </article>
            </div>
          </div>
        </Reveal>

        <h2 className="sub-heading">Club Events Showcase</h2>
        <div className="event-rail" aria-label="Campus club events">
          {allClubEvents.map((ev) => (
            <article className={`event-card event-portrait${ev.upcoming ? " is-upcoming" : ""}`} key={ev.slug}>
              <div className="event-portrait__visual" style={ev.imageBg ? { background: ev.imageBg } : undefined}>
                {ev.cover ? (
                  <ThemedImg
                    src={ev.cover}
                    alt={ev.title}
                    loading="lazy"
                    sizes="(max-width: 760px) 100vw, 33vw"
                    style={ev.imageFit === "contain" ? { objectFit: "contain" } : undefined}
                  />
                ) : null}
                {ev.upcoming && <span className="event-upcoming-badge">UPCOMING EVENT</span>}
              </div>
              <div className="event-portrait__copy">
                <div className="event-portrait__copy-top">
                  <span className="eyebrow">{ev.tag}</span>
                  <h3>{ev.title}</h3>
                  <div className="event-portrait__description" tabIndex={0}>
                    <p>{ev.about}</p>
                  </div>
                </div>
                <Link className="event-portrait__link" href={`/experience/events/${ev.slug}`}>
                  {ev.upcoming ? "Upcoming details" : "Open event & gallery"} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <h2 className="sub-heading">{portfolioLearning.title}</h2>
        <p className="muted" style={{ marginBottom: "16px", maxWidth: "75ch" }}>{portfolioLearning.intro}</p>
        <div className="card-grid-2">
          {portfolioLearning.skills.map((sk) => (
            <article className="info-card" key={sk.title}>
              <h3>{sk.title}</h3>
              <p>{sk.detail}</p>
            </article>
          ))}
        </div>
        <div className="event-takeaway-banner">
          <span className="eyebrow">CLOSING REFLECTION</span>
          <p>{portfolioLearning.closing}</p>
        </div>

        {seminarGalleries.length > 0 && (
          <>
            <h2 className="sub-heading">Seminars &amp; Campus Sessions</h2>
            {seminarGalleries.map((sem) => (
              <div key={sem.folder} style={{ marginBottom: "24px" }}>
                <span className="eyebrow" style={{ display: "block", marginBottom: "10px" }}>
                  {sem.title.toUpperCase()} · {sem.images.length} PHOTOS
                </span>
                <div className="gallery-grid">
                  {sem.images.map((src, idx) => (
                    <div className="gallery-tile" key={src}>
                      <img src={src} alt={`${sem.title} photo ${idx + 1}`} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        <h2 className="sub-heading">Communities &amp; Extra-Curriculars</h2>
        <div className="card-grid-2">
          {extracurriculars.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
