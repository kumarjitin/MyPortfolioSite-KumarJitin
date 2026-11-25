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
        {/* Club header card */}
        <div className="about-profile club-intro">
          <div className="about-photo" style={{ maxWidth: "220px", flexShrink: 0 }}>
            <ThemedImg
              src={club.image}
              alt={club.organization}
              style={club.imageFit === "contain" ? { objectFit: "contain", padding: "16px" } : undefined}
            />
          </div>
          <div>
            <span className="eyebrow">{club.duration}</span>
            <h2 style={{ marginTop: "6px" }}>{club.role}</h2>
            <p style={{ textAlign: "justify", maxWidth: "none" }}>{club.detail}</p>
          </div>
        </div>

        <h2 className="sub-heading">Events I Organised</h2>
        <div className="event-rail" aria-label="Organised events">
          {club.events.map((ev, eIdx) => (
            <article className="event-card event-portrait" key={ev.slug}>
              <div className="event-portrait__visual" style={ev.imageBg ? { background: ev.imageBg } : undefined}>
                {ev.cover ? <ThemedImg src={ev.cover} alt="" loading="lazy" sizes="(max-width: 760px) 200px, 20vw" style={ev.imageFit === "contain" ? { objectFit: "contain" } : undefined} /> : null}
              </div>
              <div className="event-portrait__copy">
                <span className="eyebrow">{ev.tag || `EVENT 0${eIdx + 1}`}</span>
                <h3>{ev.title}</h3>
                <div className="event-portrait__description" tabIndex={0} aria-label={`About ${ev.title}`}>
                  <p>{ev.about?.trim() || "Event details coming soon."}</p>
                </div>
                <Link className="event-portrait__link" href={`/experience/events/${ev.slug}`}>Open event <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "32px" }}>
          <Link className="text-link" href="/experience">← Back to Experience</Link>
        </div>
      </section>
    </PageShell>
  );
}
