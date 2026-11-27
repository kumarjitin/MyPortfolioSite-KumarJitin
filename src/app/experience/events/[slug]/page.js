import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/Site/SiteChrome";
import ThemedImg from "@/components/Site/ThemedImg";
import AutoScrollGallery from "@/components/Site/AutoScrollGallery";
import { allClubEvents } from "@/data";
import { listPublicImages } from "@/lib/files";

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

  const galleryRel = ev.galleryFolder || path.join("images", "events", slug);
  const galleryFiles = listPublicImages(galleryRel, { excludeThumbnail: true });
  const details = ev.details;

  return (
    <PageShell>
      <section className="detail-hero">
        <span className="eyebrow">{ev.clubName.toUpperCase()} · {ev.tag}</span>
        <h1>{ev.title}<em>.</em></h1>
        <p>{details?.subtitle || `${ev.clubRole} (${ev.clubDuration})`}</p>
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
            <span className="eyebrow">OVERVIEW</span>
            <h3>{ev.title}</h3>
            {details?.overview?.length ? (
              details.overview.map((p, idx) => (
                <p key={idx} style={idx > 0 ? { marginTop: "10px" } : undefined}>{p}</p>
              ))
            ) : (
              <p>{ev.about?.trim() || "Event details coming soon."}</p>
            )}

            {details?.meta?.length ? (
              <div className="event-meta-grid">
                {details.meta.map((m) => (
                  <div className="event-meta-item" key={m.label}>
                    <span>{m.label}</span>
                    <strong>{m.value}</strong>
                  </div>
                ))}
              </div>
            ) : null}
          </article>

          <div className="action-row" style={{ marginTop: "16px" }}>
            <Link className="button button-accent" href="/experience#clubs">← Back to Clubs &amp; Events</Link>
          </div>
        </div>
      </section>

      {details ? (
        <section className="page-content" style={{ paddingBottom: 0 }}>
          <div className="card-grid-2 event-cards-flush">
            {details.sections?.map((sec) => (
              <article className="info-card" key={sec.title}>
                <span className="eyebrow">EVENT STORY</span>
                <h3>{sec.title}</h3>
                {sec.paragraphs?.map((para, idx) => (
                  <p key={idx} style={idx > 0 ? { marginTop: "10px" } : undefined}>{para}</p>
                ))}
                {sec.items?.length ? (
                  <ul className="bullet-list" style={{ marginTop: "10px" }}>
                    {sec.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
                {sec.groups?.map((grp) => (
                  <div key={grp.heading} style={{ marginTop: "12px" }}>
                    <strong style={{ fontSize: "13px", color: "var(--accent)" }}>{grp.heading}</strong>
                    <ul className="bullet-list" style={{ marginTop: "6px" }}>
                      {grp.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </article>
            ))}

            {details.learnings?.length ? (
              <article className="info-card">
                <span className="eyebrow">REFLECTION</span>
                <h3>What I Learned</h3>
                <ul className="bullet-list" style={{ marginTop: "10px" }}>
                  {details.learnings.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ) : null}

            {details.team ? (
              <article className="info-card">
                <span className="eyebrow">COLLABORATION</span>
                <h3>Team &amp; Guidance</h3>
                <p>{details.team}</p>
              </article>
            ) : null}
          </div>

          {details.takeaway ? (
            <div className="event-takeaway-banner">
              <span className="eyebrow">KEY TAKEAWAY{details.tagline ? ` · ${details.tagline.toUpperCase()}` : ""}</span>
              <p>{details.takeaway}</p>
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="page-content">
        <h2 className="sub-heading">Event Gallery{galleryFiles.length ? ` (${galleryFiles.length} Photos)` : ""}</h2>
        {!galleryFiles.length && (
          <p className="muted">
            {ev.upcoming
              ? "Upcoming Event — Photographs and event recap will be added once the session concludes."
              : "Event photographs coming soon."}
          </p>
        )}
        <AutoScrollGallery images={galleryFiles} altPrefix={ev.title} />
      </section>
    </PageShell>
  );
}
