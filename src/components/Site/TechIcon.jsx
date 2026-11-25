export default function TechIcon({ name }) {
  const key = name.toLowerCase();

  if (key === "c++") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="#00599C" />
        <path d="M12.2 14.4a3.2 3.2 0 1 1 0-4.8M15 11.2h3M16.5 9.7v3M18.8 11.2h2.4M20 10v2.4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    );
  }
  if (key === "java") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <path d="M8 17c4 1.2 8.5.6 9.5-.8M7.5 14c3.5 1 7.8.5 8.8-.6M10 10.5c-1-1.6 1.5-2.6.8-4.5M13.5 10c-.6-1.4 1.4-2.2.8-4" stroke="#f89820" strokeWidth="1.7" strokeLinecap="round" fill="none" />
        <path d="M6.5 19.5c3.5 1.3 9.5 1.3 12-.4" stroke="#5382a1" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
    );
  }
  if (key === "javascript") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E" />
        <path d="M11 11v6.2c0 1.4-.8 2-2.1 2-.9 0-1.5-.4-1.9-1M14.2 17.8c.5.8 1.3 1.3 2.5 1.3 1.2 0 2-.6 2-1.5 0-1-.7-1.4-2-1.9l-.7-.3c-1.2-.5-1.9-1.1-1.9-2.3 0-1.2 1-2.1 2.4-2.1 1 0 1.8.4 2.3 1.1" stroke="#111" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </svg>
    );
  }
  if (key === "python") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <path d="M12 3c-3.2 0-3.5 1.4-3.5 2.9v2h5v1H6.8C4.8 8.9 3 10.2 3 13s1.6 4.1 3.5 4.1h1.8v-2.1c0-1.6 1.3-2.9 3-2.9h4.6c1.3 0 2.4-1 2.4-2.3V5.9C18.3 4.3 16.2 3 12 3Z" fill="#3776AB" />
        <path d="M12 21c3.2 0 3.5-1.4 3.5-2.9v-2h-5v-1h6.7c2 0 3.8-1.3 3.8-4.1s-1.6-4.1-3.5-4.1h-1.8v2.1c0 1.6-1.3 2.9-3 2.9H8.1c-1.3 0-2.4 1-2.4 2.3v3.9C5.7 19.7 7.8 21 12 21Z" fill="#FFD43B" />
        <circle cx="10.2" cy="5.6" r="0.8" fill="#fff" />
        <circle cx="13.8" cy="18.4" r="0.8" fill="#111" />
      </svg>
    );
  }
  if (key === "node.js") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="#339933" fillOpacity="0.22" stroke="#5FA04E" strokeWidth="1.7" />
        <path d="M9.5 15V9l5 6V9" stroke="#83CD29" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }
  if (key === "express.js") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="4" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
        <path d="M6.5 14.5c.8.8 2.2.8 3 0l-3-2.5c.8-.8 2.2-.8 3 0M13 10l4 5m0-5-4 5" stroke="var(--text)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </svg>
    );
  }
  if (key === "react.js") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" fill="none" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.4" fill="none" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.4" fill="none" />
      </svg>
    );
  }
  if (key === "mongodb") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <path d="M12 2.5C9.2 6 7.5 9.4 7.5 13c0 3.4 1.9 5.8 4.5 7 2.6-1.2 4.5-3.6 4.5-7 0-3.6-1.7-7-4.5-10.5Z" fill="#47A248" />
        <path d="M12 7v14.5" stroke="#B8E986" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (key === "mysql") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <ellipse cx="12" cy="6.5" rx="7" ry="2.8" fill="#00758F" fillOpacity="0.3" stroke="#00A8CC" strokeWidth="1.5" />
        <path d="M5 6.5v11c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-11M5 12c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8" stroke="#F29111" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }
  if (key === "git") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" transform="rotate(45 12 12)" fill="#F05032" />
        <circle cx="10" cy="10" r="1.4" fill="#fff" />
        <circle cx="10" cy="15" r="1.4" fill="#fff" />
        <circle cx="14.5" cy="12" r="1.4" fill="#fff" />
        <path d="M10 10v5m0-5 4.5 2" stroke="#fff" strokeWidth="1.4" />
      </svg>
    );
  }
  if (key === "docker") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <path d="M3 13.5h15.5c1.5 0 2.7-.8 3-2.2-.8-.5-1.8-.4-2.4.1-.2-1-.9-1.7-1.8-2.1-.6.7-.9 1.6-.6 2.5H3Z" fill="#2496ED" />
        <path d="M3.5 13.5c0 4 3 6.5 7.5 6.5 4.8 0 8.5-2.6 9.8-6.5H3.5Z" fill="#2496ED" />
        <rect x="5" y="9.8" width="2.4" height="2.4" fill="#72C4FF" />
        <rect x="8.2" y="9.8" width="2.4" height="2.4" fill="#72C4FF" />
        <rect x="11.4" y="9.8" width="2.4" height="2.4" fill="#72C4FF" />
        <rect x="8.2" y="6.8" width="2.4" height="2.4" fill="#72C4FF" />
        <rect x="11.4" y="6.8" width="2.4" height="2.4" fill="#72C4FF" />
      </svg>
    );
  }
  if (key === "linux") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <ellipse cx="12" cy="13.5" rx="6.5" ry="7.5" fill="#222" stroke="#FCC624" strokeWidth="1.4" />
        <ellipse cx="12" cy="14.8" rx="4" ry="5" fill="#f2f2ed" />
        <circle cx="10.3" cy="8.5" r="1" fill="#fff" />
        <circle cx="13.7" cy="8.5" r="1" fill="#fff" />
        <path d="M10.2 10.8 12 12l1.8-1.2Z" fill="#FCC624" />
      </svg>
    );
  }
  if (key === "kubernetes") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <polygon points="12,2.5 20,6.5 21.5,15 15.5,21 8.5,21 2.5,15 4,6.5" fill="#326CE5" />
        <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.5" fill="none" />
        <path d="M12 5.5v3.5m5.5 1-3.2 1.2m2.2 6.3-2.5-2.5m-6.5 2.5 2.5-2.5M6.5 10l3.2 1.2" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (key === "socket.io") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="rgba(255,255,255,0.1)" stroke="var(--text)" strokeWidth="1.5" />
        <path d="M13 6.5 8.5 12h4l-1.5 5.5 4.5-5.5h-4Z" fill="var(--accent)" />
      </svg>
    );
  }
  if (key === "rest apis" || key === "llm apis") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <circle cx="6.5" cy="12" r="2.4" fill="var(--accent)" />
        <circle cx="17.5" cy="7.5" r="2.2" fill="var(--text)" />
        <circle cx="17.5" cy="16.5" r="2.2" fill="var(--text)" />
        <path d="M8.7 11l6.6-2.8M8.7 13l6.6 2.8" stroke="var(--accent)" strokeWidth="1.6" />
      </svg>
    );
  }
  if (key === "osrm" || key === "h3" || key === "turf.js") {
    return (
      <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
        <polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5" fill="rgba(201,242,10,0.14)" stroke="var(--accent)" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2.5" fill="var(--accent)" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="tech-logo" aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="rgba(201,242,10,0.18)" stroke="var(--accent)" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.5" fill="var(--accent)" />
    </svg>
  );
}
