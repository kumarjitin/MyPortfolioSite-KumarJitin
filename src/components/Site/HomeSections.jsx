import DownloadLink from "@/components/Site/DownloadLink";
import Link from "next/link";
import Journey from "@/components/Journey/Journey";
import ContactLine from "@/components/Site/ContactLine";
import TechIcon from "@/components/Site/TechIcon";
import { profile, skillGroups, homeHighlights as highlights, homeSocials as socials } from "@/data";


export default function HomeSections() {
  return (
    <>
      <section className="section-wrap section-page home-highlights" id="highlights">
        <span className="eyebrow">01 / QUICK ACCESS</span>
        <div className="section-heading-row">
          <h2>Key <em>highlights.</em></h2>
          <p>{profile.devTagline}</p>
        </div>

        <div className="highlight-grid">
          {highlights.map((x) =>
            x.external ? (
              <a className="highlight-card" href={x.href} target="_blank" rel="noreferrer" key={x.n}>
                <span className="card-index">{x.n} · {x.tag}</span>
                <div>
                  <h3>{x.title}<b aria-hidden="true">↗</b></h3>
                  <div className="highlight-metric"><strong>{x.metric}</strong><span>{x.metricLabel}</span></div>
                  <p>{x.detail}</p>
                </div>
              </a>
            ) : (
              <Link className="highlight-card" href={x.href} key={x.n}>
                <span className="card-index">{x.n} · {x.tag}</span>
                <div>
                  <h3>{x.title}<b aria-hidden="true">↗</b></h3>
                  <div className="highlight-metric"><strong>{x.metric}</strong><span>{x.metricLabel}</span></div>
                  <p>{x.detail}</p>
                </div>
              </Link>
            )
          )}
        </div>

        <div className="resume-row">
          <div>
            <span className="eyebrow">{profile.name.toUpperCase()} · {profile.title.toUpperCase()}</span>
            <p>{profile.devTagline}</p>
          </div>
          <div className="resume-actions">
            <DownloadLink className="button button-outline" href="/documents/resume.pdf">Download Resume</DownloadLink>
            <DownloadLink className="button button-outline" href="/documents/cv.pdf">Download CV</DownloadLink>
          </div>
        </div>
      </section>

      <Journey />

      <section className="section-wrap section-page section-alt">
        <span className="eyebrow">03 / SKILLS & TOOLKIT</span>
        <div className="section-heading-row">
          <h2>Tech stack I <em>use.</em></h2>
          <p>Four core areas spanning programming languages, web engineering, DevOps tooling, and AI/geospatial APIs.</p>
        </div>

        <div className="tech-grid-4">
          {skillGroups.map((group, i) => (
            <article className="tech-card glass" key={group.category}>
              <div>
                <span className="eyebrow">0{i + 1} / {group.category.toUpperCase()}</span>
                <h3>{group.category}</h3>
                <p>{group.detail}</p>
              </div>
              <div className="tag-row">
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

      <section className="section-wrap section-page contact-home">
        <span className="eyebrow">04 / PROFILES & CONTACT</span>
        <div className="section-heading-row">
          <h2>Beyond this <em>page.</em></h2>
          <p>Explore repositories, research publications, and reach out directly via email or LinkedIn.</p>
        </div>

        <div className="social-grid">
          {socials.map(([name, desc, url, handle]) => (
            <a className="social-card" href={url} target="_blank" rel="noreferrer" key={name}>
              <div>
                <span className="eyebrow">{handle}</span>
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
              <span className="social-visit">VISIT PROFILE ↗</span>
            </a>
          ))}
        </div>

        <div className="contact-block glass">
          <div className="contact-grid">
            <div>
              <span className="eyebrow">05 / GET IN TOUCH</span>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", marginTop: "6px" }}>
                Have something <em>in mind?</em>
              </h2>
              <div className="contact-meta">
                <a className="text-link" href={`mailto:${profile.email}`}>✉ {profile.email}</a>
                <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
            <ContactLine />
          </div>
        </div>
      </section>
    </>
  );
}
