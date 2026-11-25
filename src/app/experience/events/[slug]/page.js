import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/Site/SiteChrome";
import ThemedImg from "@/components/Site/ThemedImg";
import { allClubEvents } from "@/data";

export function generateStaticParams() {
  return allClubEvents.map((ev) => ({ slug: ev.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = allClubEvents.find(x => x.slug === slug);
  return event ? { title: `${event.title} — Kumar Jitin`, description: event.about || "Event details coming soon." } : { title: "Event not found" };
}

export default async function ClubEventDetail({ params }) {
  const { slug } = await params;
  const ev = allClubEvents.find((x) => x.slug === slug);
  if (!ev) notFound();

  const galleryDir = path.join(process.cwd(), "public", "images", "events", slug);
  let galleryFiles = [];
  if (fs.existsSync(galleryDir)) {
    galleryFiles = fs
      .readdirSync(galleryDir)
      .filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f))
      .sort()
      .slice(0, 8)
      .map((f) => `/images/events/${slug}/${f}`);
  }

  return (
    <PageShell>
      <section className="detail-hero">
        <span className="eyebrow">{ev.clubName.toUpperCase()} · {ev.tag}</span>
        <h1>{ev.title}<em>.</em></h1>
        <p>{ev.clubRole} ({ev.clubDuration})</p>
      </section>

      <section className="detail-split">
        <div
          className="detail-split__media"
          style={ev.imageBg ? { background: ev.imageBg } : undefined}
        >
          <ThemedImg
            src={ev.cover}
            alt={ev.title}
            style={
              ev.imageFit === "contain"
                ? { objectFit: "contain", padding: "24px" }
                : undefined
            }
          />
        </div>

        <div>
          <article className="info-card">
            <span className="eyebrow">ABOUT THIS EVENT</span>
            <h3>{ev.title}</h3>
            <p>{ev.about?.trim() || "Event details coming soon."}</p>
          </article>

          <div className="action-row" style={{ marginTop: "16px" }}>
            <Link className="button button-accent" href="/experience#clubs">← Back to Clubs &amp; Events</Link>
          </div>
        </div>
      </section>

      <section className="page-content">
        <h2 className="sub-heading">Event Gallery{galleryFiles.length ? ` (${galleryFiles.length} Photos)` : ""}</h2>
        {!galleryFiles.length && <p className="muted">Event photographs coming soon.</p>}
        <div className="gallery-grid">
          {galleryFiles.map((src, i) => (
            <div className="gallery-tile" key={src}>
              <img src={src} alt={`${ev.title} photo ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
