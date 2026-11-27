import Link from "next/link";
import { PageShell } from "@/components/Site/SiteChrome";
import Reveal from "@/components/Site/Reveal";
import ThemedImg from "@/components/Site/ThemedImg";
import TechIcon from "@/components/Site/TechIcon";
import { profile } from "@/data";
import { listPublicImages } from "@/lib/files";

export const metadata = {
  title: "Code Competitions & DSA — Kumar Jitin",
  description: "100+ LeetCode DSA problems solved in C++ and Java, CodeWars 6.0, and core algorithmic problem solving.",
};

const competitions = [
  {
    eyebrow: "UNIVERSITY · 2025",
    title: "CodeWars 2025",
    detail:
      "Competed in the inter-university CodeWars 2025 coding competition, solving algorithmic challenges under time pressure across C++ and Java. A test of speed, pattern recognition, and accuracy in real competitive conditions.",
    folder: "images/Competitions/Codewars2025",
  },
  {
    eyebrow: "UNIVERSITY · 2025",
    title: "Tech Trek 2025",
    detail:
      "Participated in Tech Trek 2025, a multi-round technical challenge covering data structures, problem-solving, and analytical reasoning. Each round added competitive depth and required adaptability in approach.",
    folder: "images/Competitions/Tech Trek2025",
  },
  {
    eyebrow: "NATIONAL · 2026",
    title: "Adobe University Hackathon — Round 2",
    detail:
      "Cleared Round 1 (MCQs + Coding) and advanced to Round 2 of the Adobe University Hackathon among engineering participants across the country — combining algorithmic problem-solving with competitive precision.",
    folder: null,
  },
];

const dsaFocus = [
  {
    eyebrow: "100+ PROBLEMS · LEETCODE",
    title: "Arrays, Strings & Two Pointers",
    detail: "Sliding window, prefix sums, sorting patterns, and in-place array transformations practiced in C++ and Java.",
  },
  {
    eyebrow: "DATA STRUCTURES",
    title: "Trees, Graphs & Recursion",
    detail: "Binary trees, BSTs, BFS/DFS traversals, topological sorting, and backtracking problem-solving.",
  },
  {
    eyebrow: "OPTIMIZATION",
    title: "Dynamic Programming & Greedy",
    detail: "Memoization, tabulation, interval scheduling, and state-transition optimization for time-constrained contests.",
  },
  {
    eyebrow: "LANGUAGE DEPTH",
    title: "C++, Java & Python",
    detail: "Writing clean, optimal time-and-space solutions across multiple languages, with consistent daily LeetCode practice.",
  },
];

export default function DsaPage() {
  const competitionGalleries = competitions
    .filter((c) => c.folder)
    .map((c) => ({ ...c, images: listPublicImages(c.folder) }));

  return (
    <PageShell>
      <section className="page-header">
        <span className="eyebrow">ALGORITHMS · C++ · JAVA · COMPETITIVE CODING</span>
        <div className="page-header-row">
          <h1>Code competitions <em>&amp; DSA.</em></h1>
          <p>100+ DSA questions solved across LeetCode, CodeWars 6.0, and university coding competitions — sharpening speed, accuracy, and algorithmic clarity.</p>
        </div>
      </section>

      <section className="page-content">
        <Reveal>
          <div className="detail-split" style={{ marginBottom: "28px" }}>
            <div className="detail-split__media">
              <ThemedImg src="/images/journey/DSAquestions.webp" alt="Code Competitions & DSA" loading="eager" />
            </div>
            <div>
              <article className="info-card">
                <span className="eyebrow">MY JOURNEY</span>
                <h3>Building Algorithmic Depth Through Competition</h3>
                <p>
                  My coding journey started with consistent LeetCode practice — building a foundation in data structures and algorithms through over 100 problems solved in C++ and Java. That practice fed directly into competitive coding, where I've competed in CodeWars 2025, Tech Trek 2025, and cleared the Adobe University Hackathon into Round 2.
                </p>
                <p style={{ marginTop: "10px" }}>
                  Competitive coding taught me something beyond syntax: how to stay composed under a time limit, how to recognise a pattern quickly, and how to write correct code on the first attempt when there's no second chance.
                </p>
                <div className="tag-row" style={{ marginTop: "12px" }}>
                  {["C++", "Java", "Python", "JavaScript"].map((lang) => (
                    <span className="tag-pill tag-pill--lg" key={lang}>
                      <TechIcon name={lang} />
                      {lang}
                    </span>
                  ))}
                </div>
                <div className="action-row" style={{ marginTop: "18px" }}>
                  <a className="button button-accent" href="https://leetcode.com/u/KumarJitin/" target="_blank" rel="noreferrer">
                    Open LeetCode Profile ↗
                  </a>
                  <a className="button button-outline" href={profile.github} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                  <Link className="button button-outline" href="/#extras">← Back to Journey</Link>
                </div>
              </article>
            </div>
          </div>
        </Reveal>

        <h2 className="sub-heading">Competitions</h2>
        <div className="section-blocks">
          {competitions.map((comp, i) => {
            const gal = competitionGalleries.find((g) => g.folder === comp.folder);
            return (
              <Reveal delay={i * 50} key={comp.title}>
                <div className="section-block">
                  <div className="section-block__header">
                    <span className="eyebrow">{comp.eyebrow}</span>
                    <h3>{comp.title}</h3>
                    <p>{comp.detail}</p>
                  </div>
                  {gal && gal.images.length > 0 && (
                    <div className="photo-mosaic" style={{ marginTop: "16px" }}>
                      {gal.images.map((src, idx) => (
                        <div className="photo-mosaic__item" key={src}>
                          <img src={src} alt={`${comp.title} photo ${idx + 1}`} loading="lazy" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <h2 className="sub-heading">DSA Focus Areas</h2>
        <div className="card-grid-2">
          {dsaFocus.map((topic, i) => (
            <Reveal delay={i * 50} key={topic.title}>
              <article className="info-card">
                <span className="eyebrow">{topic.eyebrow}</span>
                <h3>{topic.title}</h3>
                <p>{topic.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
