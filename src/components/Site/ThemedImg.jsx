"use client";
import Image from "next/image";
import { useThemedImage } from "@/components/Site/ThemeContext";
import assets from "@/lib/asset-manifest.json";

export default function ThemedImg({ src, alt = "", sizes = "(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 360px", loading = "lazy", ...props }) {
  const themed = useThemedImage(src);
  const selected = assets[themed] ? themed : src;
  const dimensions = assets[selected];
  if (!dimensions) return null;
  return <Image src={selected} alt={alt} width={dimensions[0]} height={dimensions[1]} sizes={sizes} loading={loading} {...props} />;
}
