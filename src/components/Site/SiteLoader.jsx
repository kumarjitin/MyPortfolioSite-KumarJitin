"use client";
import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [phase, setPhase] = useState("active"); // "active" | "leaving" | "done"

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPhase("done");
      return;
    }
    const leaveTimer = setTimeout(() => setPhase("leaving"), 750);
    const doneTimer = setTimeout(() => setPhase("done"), 1150);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`site-loader${phase === "leaving" ? " is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="site-loader__inner">
        <div className="site-loader__ring" aria-hidden="true">
          <span className="site-loader__arc" />
          <span className="site-loader__monogram">
            KJ<b>.</b>
          </span>
        </div>
        <div className="site-loader__meta">
          <span className="site-loader__title">KUMAR JITIN · PORTFOLIO</span>
          <div className="site-loader__bar" aria-hidden="true">
            <span className="site-loader__fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
