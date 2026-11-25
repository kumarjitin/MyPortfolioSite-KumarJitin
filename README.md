# Kumar Jitin — Portfolio

An optimized version of the existing Next.js App Router portfolio. The original route structure, personal content, olive/lime palette, hero artwork, projects, research, experience, club events, and two-theme architecture are retained. See [AUDIT.md](AUDIT.md) for the measured asset changes, scope, limitations, and verification checklist.

## Requirements

- Node.js 22 LTS recommended (use the same version locally and on Vercel).
- npm and network access to the npm registry for the first installation.
- The supplied `package-lock.json` is authoritative. Next.js 16.4.6, React 19.2.0, GSAP and Sass dependencies have not been upgraded or replaced.
- No environment variables or API credentials are required. Contact uses the visitor's email application, not a server-side form service.

## Install and run locally

Extract the archive and open its root (the directory containing `package.json`).

```sh
npm ci
npm run dev
```

Visit http://localhost:3000.

## Checks and production build

```sh
node scripts/check-assets.mjs
npm run lint
npm run build
npm run start
```

`check-assets.mjs` reports optional missing documents without treating them as errors, and fails if a literal image/video reference or manifest entry is missing. Lint/build must be executed on a network-enabled machine; the delivery environment could not restore npm packages. Do not treat the static layout checks as a Next.js production-build pass.

## Vercel deployment

1. Review the extracted project locally and run the checks above.
2. Commit the project to a review branch in the existing GitHub repository (do not overwrite unrelated working changes).
3. Import or select the existing Vercel project; use the **Next.js** preset, the project root, Node.js 22.x, `npm ci` as install command and `npm run build` as build command. Leave output directory at its default.
4. Deploy a preview, verify navigation, themes, animations, console, and downloads. Promote to production only after the preview passes.
5. Use the existing domain settings; no new environment variables are required.

## Routes

- `/` — hero, quick access, nine journey chapters, skills, profiles and contact.
- `/projects` — original project listing.
- `/projects/neurofied`, `/projects/quickpull`, `/projects/skillxchange` — static-generated project detail pages.
- `/projects/name-ideas` — name collection.
- `/experience` — internship, clubs, education, achievements.
- `/experience/clubs/flareon`, `/experience/clubs/drr` — club event listings.
- `/experience/events/[slug]` — ten existing static-generated event detail pages.
- `/research` — publications, IP and book chapters.
- `/about` — introduction, certifications, skills, GPS journey and personal stories.
- `/about/appreciations` — all five existing recognitions.

## Content and media maintenance

- `src/data.js` remains the central source for portfolio information and now also contains the home highlights, social profiles and journey chapter list. Existing claims and links were preserved, not independently fact-checked.
- `src/lib/asset-manifest.json` lists valid image paths and intrinsic dimensions. When adding or replacing an image used by `ThemedImg`, add/update its entry. Light variants use `public/images/light/` with a matching path and manifest entry; if a variant does not exist, the original asset is used.
- `public/hero-poster-{640,1280,1920}.webp` is the original hero artwork in responsive sizes. `public/videos/hero-loop.mp4` is a compressed, silent copy of the recovered original clip. Muted motion autoplays in the visible hero where permitted, loops, and pauses when offscreen or the document is hidden. Reduced-motion visitors see the poster unless they explicitly press Play. Scroll particles are retained with reduced sampling and reduced-motion support.
- Add genuine `public/documents/resume.pdf`, `public/documents/cv.pdf`, and project reports, slides or posters using the filenames in `src/data.js`. They were not supplied in the archive or its Git history. The UI displays unavailable documents without broken download links. Rebuild after adding documents.
- Put authentic event photos under `public/images/events/<event-slug>/`. The event page detects up to eight raster images at build time; it displays an explanatory message if none are provided. Do not use fake certificates or gallery photos. Awards use editorial text when evidence images are absent. Story entries have optional `image` and `imageAlt` fields in `src/data.js`; add the actual image path under `public/` and edit the story text there. Empty image slots show “Photo coming soon”.
- The prior Google Fonts CSS import has been removed to avoid an external render-blocking dependency. The typography uses the installed system sans/monospace fonts (Manrope/DM Mono if already installed). No font binaries existed in the supplied project, and no third-party font files are bundled.

## Architecture and motion

Server-renderable homepage sections, footer and reveal wrappers now stay outside unnecessary client boundaries. The header, theme provider, contact field, internship expansion, and motion components remain interactive. Journey uses native horizontal scrolling as its fallback; GSAP/ScrollTrigger loads near the section and pins only suitable desktop viewports when motion is allowed. The GPS route updates SVG attributes on animation frames rather than setting React state on every scroll.

## Revision 2

Project listing cards link through their title, image and case-study label. Downloads appear only inside project detail routes. Home highlight counts use the supplied owner figures; change `homeHighlights` in `src/data.js` to keep them current. Event and journey cards are portrait-oriented, reveal details on hover/focus, and expose descriptions directly on touch devices. See [REVISION.md](REVISION.md) for the latest checks and limitations.
