import Link from "next/link";
import { PageShell } from "@/components/Site/SiteChrome";
import ThemedImg from "@/components/Site/ThemedImg";
import { clubs } from "@/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return clubs.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const club = clubs.find((c) => c.id === id);
  if (!club) return { title: "Not Found" };
  return { title: `${club.organization} Events — Kumar Jitin`, description: club.detail };
}

export default async function ClubEventsPage({ params }) {
  const { id } = await params;
  const club = clubs.find((c) => c.id === id);
  if (!club) notFound();

  const completedEvents = club.events.filter((ev) => !ev.upcoming);
  const upcomingEvents = club.events.filter((ev) => ev.upcoming);

  return (
    <PageShell>
      <section className="page-header">
        <span className="eyebrow">CLUB · EVENTS</span>
        <div className="page-header-row">
          <h1>{club.organization}</h1>
          <p>{club.role} · {club.duration}</p>
        </div>
      </section>

      <section className="page-content">
        {/* Club header — logo + description outside events */}
        <div className="about-profile club-intro" style={{ marginBottom: "32px" }}>
          <div className="about-photo" style={{ maxWidth: "200px", flexShrink: 0 }}>
            <ThemedImg
              src={club.image}
              alt={club.organization}
              style={club.imageFit === "contain" ? { objectFit: "contain", padding: "16px" } : undefined}
            />
          </div>
          <div>
            <span className="eyebrow">{club.duration}</span>
            <h2 style={{ marginTop: "6px" }}>{club.role}</h2>
            <p style={{ maxWidth: "none", lineHeight: 1.7 }}>{club.detail}</p>
            {club.longDetail && (
              <p style={{ maxWidth: "none", lineHeight: 1.7, marginTop: "10px", color: "var(--muted)" }}>{club.longDetail}</p>
            )}
          </div>
        </div>

        {completedEvents.length > 0 && (
          <>
            <h2 className="sub-heading">Events I Organised</h2>
            <div className="club-events-top" aria-label="All organised events">
              {completedEvents.map((ev, eIdx) => (
                <a className="club-events-top__card" href={`#${ev.slug}`} key={ev.slug}>
                  <div className="club-events-top__media" style={ev.imageBg ? { background: ev.imageBg } : undefined}>
                    {ev.cover && (
                      <ThemedImg
                        src={ev.cover}
                        alt={ev.title}
                        loading="eager"
                        sizes="(max-width: 760px) 45vw, 20vw"
                      />
                    )}
                  </div>
                  <div className="club-events-top__body">
                    <div>
                      <span className="eyebrow" style={{ fontSize: "10px" }}>{ev.tag || `EVENT 0${eIdx + 1}`}</span>
                      <h3>{ev.title}</h3>
                    </div>
                    <span className="club-events-top__link">Jump to details ↓</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Section-wise event layout: each event gets full description + open button */}
            <div className="section-blocks">
              {completedEvents.map((ev, eIdx) => (
                <div className="section-block" id={ev.slug} key={ev.slug}>
                  <div className="section-block__split">
                    <div className="section-block__visual" style={ev.imageBg ? { background: ev.imageBg } : undefined}>
                      {ev.cover && (
                        <ThemedImg
                          src={ev.cover}
                          alt={ev.title}
                          loading="lazy"
                          sizes="(max-width: 760px) 100vw, 40vw"
                          style={ev.imageFit === "contain" ? { objectFit: "contain", padding: "20px" } : undefined}
                        />
                      )}
                    </div>
                    <div className="section-block__body">
                      <span className="eyebrow">{ev.tag || `EVENT 0${eIdx + 1}`}</span>
                      <h3>{ev.title}</h3>
                      <p style={{ marginTop: "10px", lineHeight: 1.65, color: "var(--muted)" }}>
                        {ev.about?.trim() || "Event details coming soon."}
                      </p>
                      {ev.details?.meta?.length && (
                        <div className="event-meta-grid" style={{ marginTop: "14px" }}>
                          {ev.details.meta.slice(0, 3).map((m) => (
                            <div className="event-meta-item" key={m.label}>
                              <span>{m.label}</span>
                              <strong>{m.value}</strong>
                            </div>
                          ))}
                        </div>
                      )}
                      <div style={{ marginTop: "16px" }}>
                        <Link className="button button-accent" href={`/experience/events/${ev.slug}`}>
                          Full story & gallery ↗
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {upcomingEvents.length > 0 && (
          <>
            <h2 className="sub-heading">Upcoming Events</h2>
            <div className="event-rail" aria-label="Upcoming events">
              {upcomingEvents.map((ev, eIdx) => (
                <article className="event-card event-portrait is-upcoming" key={ev.slug}>
                  <div className="event-portrait__visual" style={ev.imageBg ? { background: ev.imageBg } : undefined}>
                    {ev.cover ? (
                      <ThemedImg src={ev.cover} alt={ev.title} loading="lazy" sizes="200px"
                        style={ev.imageFit === "contain" ? { objectFit: "contain", padding: "20px" } : undefined} />
                    ) : null}
                    <span className="event-upcoming-badge">UPCOMING EVENT</span>
                  </div>
                  <div className="event-portrait__copy">
                    <div className="event-portrait__copy-top">
                      <span className="eyebrow">{ev.tag}</span>
                      <h3>{ev.title}</h3>
                      <div className="event-portrait__description">
                        <p>{ev.about}</p>
                      </div>
                    </div>
                    <Link className="event-portrait__link" href={`/experience/events/${ev.slug}`}>
                      Upcoming details <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        <div style={{ marginTop: "32px" }}>
          <Link className="text-link" href="/experience">← Back to Experience</Link>
        </div>
      </section>
    </PageShell>
  );
}
