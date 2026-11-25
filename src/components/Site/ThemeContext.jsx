"use client";
import { createContext, useCallback, useContext, useEffect, useSyncExternalStore, useMemo } from "react";
import assets from "@/lib/asset-manifest.json";

export const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });
const listeners = new Set();
let fallbackTheme = "dark";
function subscribe(callback) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => { listeners.delete(callback); window.removeEventListener("storage", callback); };
}
function getSnapshot() {
  try { return window.localStorage.getItem("kj-theme") === "light" ? "light" : "dark"; }
  catch { return fallbackTheme; }
}
function getServerSnapshot() { return "dark"; }
export function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  useEffect(() => { document.documentElement.dataset.theme = getSnapshot(); }, [theme]);
  const toggleTheme = useCallback(() => {
    const next = getSnapshot() === "dark" ? "light" : "dark";
    fallbackTheme = next;
    try { window.localStorage.setItem("kj-theme", next); } catch { /* session-only fallback */ }
    document.documentElement.dataset.theme = next;
    listeners.forEach(cb => cb());
  }, []);
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
export function useTheme() { return useContext(ThemeContext); }
export function useThemedImage(src) {
  const { theme } = useTheme();
  if (!src || theme !== "light") return src;
  const variant = src.startsWith("/images/") && !src.startsWith("/images/light/") ? src.replace("/images/", "/images/light/") : src;
  return assets[variant] ? variant : src;
}
