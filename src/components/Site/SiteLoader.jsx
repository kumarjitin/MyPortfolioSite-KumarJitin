"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 0);
    const hideTimer = setTimeout(() => setVisible(false), 380);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="mac-progress-bar" key={pathname} aria-hidden="true">
      <span className="mac-progress-bar__fill" />
    </div>
  );
}
