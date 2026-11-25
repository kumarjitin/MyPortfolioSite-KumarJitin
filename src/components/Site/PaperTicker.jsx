import Link from "next/link";

export default function PaperTicker({ items }) {
  const loopItems = [...items, ...items];

  return (
    <section className="paper-ticker glass" aria-label="Live and published research papers">
      <div className="paper-ticker__head">
        <span className="paper-ticker__live">
          <i className="paper-ticker__dot" aria-hidden="true" />
          LIVE &amp; PUBLISHED PAPER NAMES
        </span>
        <span className="tiny muted">{items.length} WORKS</span>
      </div>

      <div className="paper-ticker__viewport">
        <ul className="paper-ticker__list">
          {loopItems.map((item, idx) => {
            const isInternal = item.url?.startsWith("/");
            const isPublished = item.status?.toLowerCase() === "published";
            const content = (
              <>
                <span className={`paper-ticker__status${isPublished ? " is-published" : " is-live"}`}>
                  {item.status.toUpperCase()}
                </span>
                <span className="paper-ticker__title">{item.title}</span>
                <span className="paper-ticker__venue">{item.venue || item.kind} ↗</span>
              </>
            );

            return (
              <li
                className="paper-ticker__item"
                key={`${item.title}-${idx}`}
                aria-hidden={idx >= items.length ? "true" : undefined}
              >
                {isInternal ? (
                  <Link href={item.url} tabIndex={idx >= items.length ? -1 : undefined}>
                    {content}
                  </Link>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={idx >= items.length ? -1 : undefined}
                  >
                    {content}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
