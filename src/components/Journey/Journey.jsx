"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import ThemedImg from "@/components/Site/ThemedImg";
import "./Journey.scss";

import { journeyStories as stories } from "@/data";

function JourneyCard({ item }) {
  const [number, title, subtitle, category, file, href] = item;

  return (
    <Link className="journey-card" href={href}>
      <ThemedImg className="journey-card__image" src={file} alt="" sizes="(max-width: 900px) 64vw, 300px" />
      <div className="journey-card__veil" />
      <div className="journey-card__top">
        <span>{number}</span>
        <span>{category}</span>
      </div>
      <div className="journey-card__copy">
        <span className="journey-card__index">EXPLORE / {number}</span>
        <h3>{title}</h3>
        <p>{subtitle || "Details coming soon."}</p>
      </div>
      <span className="journey-card__arrow" aria-hidden="true">↗</span>
    </Link>
  );
}

export default function Journey() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const viewport = track.parentElement;
    const query = window.matchMedia("(min-width: 901px) and (min-height: 720px) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let disposed = false, generation = 0, cleanup = () => {};
    let nearby = false;
    const setup = async () => {
      const current = ++generation;
      cleanup(); cleanup = () => {};
      if (!query.matches || !nearby) return;
      try {
        const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
        if (disposed || current !== generation || !query.matches) return;
        gsap.registerPlugin(ScrollTrigger);
        const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
        if (!distance()) return;
        section.classList.add("journey--pinned");
        viewport.scrollLeft = 0;
        const context = gsap.context(() => {
          const tween = gsap.to(track, { x: () => -distance(), ease: "none", scrollTrigger: {
            trigger: section, start: "top top", end: () => `+=${distance()}`,
            scrub: true, pin: true, anticipatePin: 1, invalidateOnRefresh: true,
          }});
          const onFocus = event => {
            const card = event.target.closest(".journey-card");
            if (!card || card.matches(":hover")) return;
            viewport.scrollLeft = 0;
            const x = Math.min(distance(), Math.max(0, card.offsetLeft - 12));
            window.scrollTo({ top: tween.scrollTrigger.start + x, behavior: "instant" });
            tween.scrollTrigger.update();
          };
          track.addEventListener("focusin", onFocus);
          cleanup = () => { track.removeEventListener("focusin", onFocus); context.revert(); section.classList.remove("journey--pinned"); };
        }, section);
      } catch { section.classList.remove("journey--pinned"); }
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { nearby = true; observer.disconnect(); setup(); }
    }, { rootMargin: "500px" });
    observer.observe(section);
    query.addEventListener("change", setup);
    return () => { disposed = true; generation++; observer.disconnect(); query.removeEventListener("change", setup); cleanup(); };
  }, []);

  return (
    <section className="journey" id="extras" ref={sectionRef} aria-labelledby="journey-title">
      <div className="journey__intro">
        <div>
          <span className="journey__eyebrow">THE JOURNEY SO FAR</span>
          <h2 id="journey-title">Projects, research &amp; <span>milestones.</span></h2>
        </div>
        <p>Scroll or swipe through the chapters. Hover or focus to preview; select to explore.</p>
      </div>
      <div className="journey__viewport">
        <div className="journey__track" ref={trackRef}>
          {stories.map((item) => (
            <JourneyCard key={item[0]} item={item} />
          ))}
        </div>
      </div>
      <div className="journey__footer">
        <span>SCROLL / SWIPE · EXPLORE A CHAPTER</span>
        <span>09 CHAPTERS <i>✳</i></span>
      </div>
    </section>
  );
}
