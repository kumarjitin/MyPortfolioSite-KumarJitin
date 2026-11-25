> Historical audit of the first optimization delivery. The second revision changes the hero to visible autoplay and revises layouts; see `REVISION.md` for current behavior and verification.

# Portfolio optimization and verification report

## Scope and original findings

Source of truth: the uploaded project archive, including the local Git objects used to recover missing assets. The connected GitHub repository was read for metadata, but it reported read-only permission; no remote file or deployment was changed. The provided Vercel URL could not be fetched in this environment.

Priority findings, in order:

1. Deleted hero GIF had an original Git blob of 59,322,686 bytes; the corresponding original 4K H.264 video was 32,269,838 bytes with an audio stream. A full-resolution canvas sampled every pixel and repeated sampling during resizing, and React state changed on scroll. Both network and CPU costs were credible source-level bottlenecks; their effect on Web Vitals was not measured.
2. Nine journey PNGs totaled 33,283,578 bytes for one theme; Git confirmed identical light copies, surviving in the upload. The original light-mode path substitution could request nonexistent variants.
3. GSAP was imported eagerly and pinned at all widths above 900px irrespective of reduced-motion or short/touch viewports. GPS recomputed the SVG length and scheduled React state on each scroll.
4. The homepage and shared chrome used unnecessarily broad client boundaries. Reveal wrappers hid content until hydration and the Google Fonts CSS import added a render-blocking external dependency.
5. Full-height sections, widespread blur, small nav controls, justified paragraphs, missing theme fallbacks and absent focus/skip affordances weakened layout and accessibility. Deleted gallery, story and appreciation files in Git were placeholders (including SVG bytes disguised as .jpg); they were not authentic evidence. No resume, CV or project documents were present.

## Implemented changes

- Recover the original hero MP4 from Git and transcode it to 1600×900, 24 fps, muted H.264 with fast-start; provide an initial responsive WebP poster, motion play/pause, offscreen pause, and a bounded canvas effect. The old GIF is not shipped or referenced. Canvas sampling is capped at 64×40 and the backing surface at 960×600, scroll work uses requestAnimationFrame, and reduced motion disables particles.
- Restore nine actual journey visuals from existing identical light assets as WebP; keep genuine logos/illustrations; deduplicate identical variants. Next Image now handles ordinary themed images with dimensions and responsive sizes. Missing variants fall back to the original. The hero uses a native responsive image so it can be sampled directly without requiring an optimizer request.
- Retain the existing GSAP horizontal concept as an enhancement, lazy-import near the section, clean up on unmount/media changes, native swipe/scroll fallback for short, touch, narrow or reduced-motion screens. GPS uses cached path length, rAF and direct SVG updates, with all text visible at every position.
- Preserve the theme context/provider and localStorage, with a safe fallback if storage is blocked and an early theme script to limit flash. Refine light and dark surfaces, spacing, text contrast, content widths, control size, layout and typography without replacing the original palette. Remove excessive blur and external Google Fonts import; use local system typography.
- Keep all project, experience, research, club, event, about and appreciation routes; add dynamic metadata for project/event detail. Centralize home/journey data, separate server-renderable static pieces from interactive components, add keyboard menu/skip/focus affordances and mailto form submission. Missing downloads remain labeled unavailable. Awards and stories use numbered editorial layouts; empty event galleries explain that photographs have not been supplied.

## Measured asset results (decimal bytes, not network timings)

| Asset | Original | Updated | Reduction |
|---|---:|---:|---:|
| Hero GIF → recovered optimized MP4 | 59,322,686 | 321,325 | 99.46% |
| Original MP4 → optimized MP4 | 32,269,838 | 321,325 | 99.00% |
| Nine journey images, one set | 33,283,578 | 2,373,714 | 92.87% |
| Hero poster, 3840×2160 JPEG → responsive WebP | 211,704 | 19,950 / 51,012 / 88,794 | 58–91% per selected size |

These are actual file sizes. The initial hero now requests a poster, not an animated GIF; the MP4 is loaded only when requested. Actual transfer, cache behavior, decoded memory, Lighthouse scores, TTFB, LCP, INP, CLS and bundle changes are **not measured**. Do not interpret byte reductions as measured loading-time reductions.

## Verification performed

- 26 source JavaScript/JSX files parsed with the TypeScript parser and checked for local imports: zero syntax or local import failures.
- All 30 image manifest entries and literal source image/video paths verified; 14 optional documents were absent and are handled explicitly.
- 22 route instances rendered from the modified JSX in a static test harness, two themes, 19 viewports, 836 checks. Chromium reported no page-level horizontal overflow or tested component boundary overflow, one h1 per route, no missing rendered local image path and no broken internal route links. The harness used stubbed React/Next hooks, links and images and browser-native CSS nesting for the component Sass; it does **not** execute hydration, GSAP, Next image optimization or the true production CSS compiler.
- Viewports: 320×568, 360×640, 375×667, 390×844, 412×915, 430×932, 768×1024, 820×1180, 1024×768, 1280×800, 1366×768, 1440×900, 1536×864, 1920×1080, 2560×1440, 3840×2160, 3440×1440 (21:9), 5120×1440 (32:9), 667×375 (landscape). The original hero was also visually inspected in the 1440×900 static preview.
- The video was transcoded and inspected with ffprobe (1600×900, 24 fps, 4.9167 s). Original package.json and package-lock.json were retained unchanged.

## Release blockers / remaining validation

`npm ci --offline` failed with ENOTCACHED; the registry DNS lookup and online installation returned EAI_AGAIN. `npm run build` could not execute because the Next binary was not installed. No clean production build or lint pass, production route HTTP checks, hydration/console audit, live interactive theme/navigation tests, GSAP/particle/GPS performance measurements, external link checks, real download checks, or full visual/accessibility/zoom/high-DPI audit can be claimed. Before deploying, run `npm ci`, `npm run lint`, `npm run build`, `npm run start` on a network-enabled machine and verify the full preview. Add authentic missing documents and evidence photos if available. The delivered archive is the complete modified source project, not a certified production build.
