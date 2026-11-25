"use client";
import { useEffect, useRef, useState } from "react";
import "./Hero.scss";

export default function Hero() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const artworkRef = useRef(null);
  const videoRef = useRef(null);
  const wantsMotion = useRef(true);
  const manualMotion = useRef(false);
  const syncPlayback = useRef(() => {});
  const [playing, setPlaying] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const artwork = artworkRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, width = 0, height = 0, particles = [], visible = true;
    let dirty = true, hadParticles = false;
    const render = () => {
      frame = 0;
      if (!visible || motion.matches) return;
      const rect = section.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -rect.top / (rect.height * .85 || 1)));
      artwork.style.opacity = String(Math.max(0, 1 - p * 1.35));
      if (p <= .015 || p >= .99) {
        if (hadParticles) ctx.clearRect(0, 0, width, height);
        hadParticles = false;
        return;
      }
      if (dirty) {
        const img = artwork.querySelector("img");
        if (!img?.complete || !img.naturalWidth) return;
        const artworkRect = artwork.getBoundingClientRect();
        width = Math.min(960, Math.max(1, Math.round(artworkRect.width)));
        height = Math.max(1, Math.min(600, Math.round(width * artworkRect.height / Math.max(1, artworkRect.width))));
        canvas.width = width; canvas.height = height;
        const sample = document.createElement("canvas");
        const cols = 64, rows = Math.max(1, Math.min(40, Math.round(cols * height / width)));
        sample.width = cols; sample.height = rows;
        const sc = sample.getContext("2d", { willReadFrequently: true });
        if (!sc) return;
        const scale = Math.min(cols / img.naturalWidth, rows / img.naturalHeight);
        const dw = img.naturalWidth * scale, dh = img.naturalHeight * scale;
        sc.drawImage(img, (cols - dw) / 2, (rows - dh) / 2, dw, dh);
        const data = sc.getImageData(0, 0, cols, rows).data;
        particles = [];
        for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          if (!data[i+3] || data[i]+data[i+1]+data[i+2] < 100) continue;
          particles.push({ x: x * width / cols, y: y * height / rows,
            dx: ((x * 17 + y * 13) % 100 - 50) * 2,
            dy: -40 - ((x * 13 + y * 31) % 120), color: `rgb(${data[i]},${data[i+1]},${data[i+2]})` });
        }
        dirty = false;
      }
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = Math.max(0, 1 - p * 1.12);
      const size = Math.max(1, width / 64 * .5 * (1-p*.7));
      for (const particle of particles) {
        ctx.fillStyle = particle.color;
        ctx.fillRect(particle.x + particle.dx*p*p, particle.y + particle.dy*p*p, size, size);
      }
      ctx.globalAlpha = 1; hadParticles = true;
    };
    const schedule = () => { if (!frame && visible && !motion.matches) frame = requestAnimationFrame(render); };
    const resize = () => { dirty = true; schedule(); };
    const onMotion = () => {
      if (motion.matches) { cancelAnimationFrame(frame); frame = 0; artwork.style.opacity = "1"; ctx.clearRect(0,0,width,height); }
      else schedule();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule(); else { cancelAnimationFrame(frame); frame = 0; }
    });
    observer.observe(section);
    const ro = new ResizeObserver(resize); ro.observe(section);
    window.addEventListener("scroll", schedule, { passive: true });
    motion.addEventListener("change", onMotion);
    artwork.querySelector("img")?.addEventListener("load", resize);
    schedule();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); ro.disconnect();
      window.removeEventListener("scroll", schedule); motion.removeEventListener("change", onMotion);
      artwork.querySelector("img")?.removeEventListener("load", resize);
      artwork.style.opacity = "1";
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false, disposed = false;
    const sync = () => {
      if (disposed) return;
      if (!wantsMotion.current || (motion.matches && !manualMotion.current) || !inView || document.hidden) {
        video.pause();
        return;
      }
      if (!video.getAttribute("src")) video.src = "/videos/hero-loop.mp4";
      video.muted = true;
      video.play().catch(() => { if (!disposed && video.paused) setPlaying(false); });
    };
    syncPlayback.current = sync;
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    }, { threshold: 0.05 });
    observer.observe(sectionRef.current);
    const onPreferenceChange = () => { manualMotion.current = false; sync(); };
    motion.addEventListener("change", onPreferenceChange);
    document.addEventListener("visibilitychange", sync);
    return () => {
      disposed = true;
      observer.disconnect();
      motion.removeEventListener("change", onPreferenceChange);
      document.removeEventListener("visibilitychange", sync);
      video.pause();
      syncPlayback.current = () => {};
    };
  }, []);

  const toggleVideo = () => {
    wantsMotion.current = !playing;
    manualMotion.current = !playing;
    // A direct user gesture can retry playback if the browser blocked autoplay.
    syncPlayback.current();
  };
  return (
    <section className="hero" id="home" ref={sectionRef} aria-labelledby="hero-title">
      <h1 id="hero-title" className="sr-only">Kumar Jitin — Software Engineer</h1>
      <div className="hero__artwork" ref={artworkRef}>
        <img className="hero__video" src="/hero-poster-1280.webp"
          srcSet="/hero-poster-640.webp 640w, /hero-poster-1280.webp 1280w, /hero-poster-1920.webp 1920w"
          sizes="100vw" width={1920} height={1080} alt="" fetchPriority="high" decoding="async" />
        <video ref={videoRef} className={`hero__video hero__motion${videoReady && playing ? " is-ready" : ""}`}
          muted loop playsInline preload="none" aria-hidden="true"
          onPlaying={() => { setPlaying(true); setVideoReady(true); }} onPause={() => setPlaying(false)}
          onError={() => { setPlaying(false); setVideoReady(false); setVideoFailed(true); }} />
      </div>
      <canvas ref={canvasRef} className="hero__particles" aria-hidden="true" />
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__bottom">
        <span>KUMAR JITIN · SOFTWARE ENGINEER</span>
        <div className="hero__controls">
          {!videoFailed && <button type="button" onClick={toggleVideo} aria-pressed={playing}>{playing ? "Pause motion" : "Play motion"}</button>}
          <a href="#highlights">EXPLORE <i>↓</i></a>
        </div>
      </div>
    </section>
  );
}
