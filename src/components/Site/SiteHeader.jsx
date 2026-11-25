"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/Site/ThemeContext";

const links = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["Research", "/research"],
  ["About", "/about"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.querySelector("#site-navigation a")?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") { setOpen(false); document.getElementById("menu-toggle")?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  const handleNavClick = (href) => {
    setOpen(false);
    if (href === pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };

  return (
    <header className="site-nav">
      <a className="skip-link" href="#top">Skip to content</a>
      <Link className="brand" href="/" onClick={() => handleNavClick("/")}>
        <span>KUMAR JITIN<b>.</b></span>
      </Link>

      <div className="nav-right">
        <nav id="site-navigation" aria-label="Main navigation" className={open ? "nav-links is-open" : "nav-links"}>
          {links.map(([label, href]) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={active ? "is-active" : undefined}
                aria-current={active ? (pathname === href ? "page" : "location") : undefined}
                onClick={() => handleNavClick(href)}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        <button
          type="button"
          className="menu-toggle"
          id="menu-toggle"
          aria-controls="site-navigation"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(value => !value)}
        >
          <i />
          <i />
        </button>
      </div>
    </header>
  );
}

