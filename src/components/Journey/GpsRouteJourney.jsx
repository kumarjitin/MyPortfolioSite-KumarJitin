"use client";
import { useEffect, useRef } from "react";
import { gpsMilestones } from "@/data";
import "./GpsRouteJourney.scss";

export default function GpsRouteJourney() {
  const wrapRef = useRef(null);
  const pathRef = useRef(null);
  const pinRef = useRef(null);
  const pulseRef = useRef(null);
  useEffect(() => {
    const section = wrapRef.current;
    const path = pathRef.current;
    const length = path.getTotalLength();
    const stops = [...section.querySelectorAll(".gps-stop")];
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, visible = true, lastReached = -1;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const p = motion.matches ? 1 : Math.min(1, Math.max(0, (innerHeight * .7 - rect.top) / Math.max(1, rect.height + innerHeight * .35)));
      path.style.strokeDasharray = String(length);
      path.style.strokeDashoffset = String(length * (1-p));
      const point = path.getPointAtLength(length*p);
      for (const marker of [pinRef.current, pulseRef.current]) {
        marker.setAttribute("cx", point.x); marker.setAttribute("cy", point.y);
      }
      const reached = Math.min(stops.length-1, Math.floor(p * (stops.length-1)/.92));
      if (reached !== lastReached) { stops.forEach((stop,i) => stop.classList.toggle("is-reached", i <= reached)); lastReached = reached; }
    };
    const schedule = () => { if (visible && !frame) frame = requestAnimationFrame(update); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) schedule(); });
    observer.observe(section);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    motion.addEventListener("change", schedule);
    schedule();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); motion.removeEventListener("change", schedule); };
  }, []);

  return (
    <section className="gps-route" ref={wrapRef} id="journey-route" aria-label="Journey GPS Route">
      <div className="gps-route__head">
        <span className="eyebrow">GPS ROUTE · SCROLL TO TRACE THE PATH</span>
        <h2>
          The journey <em>on route.</em>
        </h2>
      </div>

      <div className="gps-route__stage">
        <svg
          className="gps-route__svg"
          viewBox="0 0 120 1000"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M60 20 C 105 140, 15 240, 60 350 C 105 460, 15 580, 60 690 C 105 800, 20 900, 60 980"
            className="gps-route__track"
          />
          <path
            ref={pathRef}
            d="M60 20 C 105 140, 15 240, 60 350 C 105 460, 15 580, 60 690 C 105 800, 20 900, 60 980"
            className="gps-route__active"
            strokeDasharray="1200"
            strokeDashoffset="1200"
          />
          <circle ref={pulseRef} cx="60" cy="20" r="10" className="gps-route__pulse" />
          <circle ref={pinRef} cx="60" cy="20" r="5" className="gps-route__pin" />
        </svg>

        <div className="gps-route__stops">
          {gpsMilestones.map((m, i) => {
            const side = i % 2 === 0 ? "is-left" : "is-right";
            return (
              <article
                key={m.stop}
                className={`gps-stop ${side}`}
              >
                <div className="gps-stop__card glass">
                  <div className="gps-stop__top">
                    <span className="eyebrow">{m.stop}</span>
                    <span className="gps-stop__dot" aria-hidden="true" />
                  </div>
                  <h3>{m.title}</h3>
                  <span className="gps-stop__meta">{m.meta}</span>
                  <p>{m.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
