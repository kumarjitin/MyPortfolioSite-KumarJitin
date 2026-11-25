import Link from "next/link";
import ThemedImg from "@/components/Site/ThemedImg";

export default function InternshipCard({ item }) {
  const href = `/experience/${item.slug || "mandafia"}`;

  return (
    <article className="split-card internship-card" style={{ borderColor: "var(--accent-border)" }}>
      <Link href={href} className="split-card__media">
        <ThemedImg
          src={item.logo}
          alt={`${item.organization} logo`}
          style={{ objectFit: "contain", padding: "16px" }}
        />
      </Link>

      <div className="split-card__body">
        <div>
          <div className="split-card__top" style={{ flexWrap: "wrap" }}>
            <span className="eyebrow">INTERNSHIP · {item.duration.toUpperCase()}</span>
            <div className="tag-row">
              {item.metrics.map((m) => (
                <span className="tag-pill" key={m}>{m}</span>
              ))}
            </div>
          </div>

          <Link href={href}>
            <h3 style={{ fontSize: "22px", marginTop: "8px" }}>
              {item.organization} — {item.role}
            </h3>
          </Link>
          <p className="split-card__desc">{item.aboutCompany}</p>
        </div>

        <div className="action-row" style={{ marginTop: "10px" }}>
          <Link className="button button-accent button-sm" href={href}>
            View Experience ↗
          </Link>
          <a className="button button-sm" href={item.companyUrl} target="_blank" rel="noreferrer">
            Company Profile ↗
          </a>
          <Link className="button button-sm" href="/projects">
            View Projects ↗
          </Link>
        </div>
      </div>
    </article>
  );
}
