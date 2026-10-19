---
name: breno-sampaio-design
description: Use this skill to generate well-branded interfaces and assets for Breno Sampaio's technical-functional portfolio, either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for a quiet, warm-neutral editorial system.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Source of truth:** Read `tokens/` and the current site styles before implementing. The editorial shell overrides some foundation colors and layout values.
- **Type:** DM Sans for interface and reading; Cormorant Garamond for editorial accents; system mono for short labels. Use 16px body and 14px supporting text; reserve 12–13px for brief metadata.
- **Radius:** 16px major surfaces, 10px nested cards, 6px form controls, full pills for primary editorial actions and tags. Keep each component role consistent across breakpoints.
- **Spacing:** 4/8px scale, with semantic section spacing from `tokens/spacing.css`.
- **Motion:** Use `tokens/motion.css`; respect reduced motion and keep decorative movement subordinate to content.
- **Voice:** direct, mature, plain, confident. No hype, no emoji. Sentence case;
  UPPERCASE only in mono labels. Lead case studies with the problem.

## Files

- `styles.css` — the single stylesheet to link (imports all tokens + fonts).
- `tokens/` — colors, typography, spacing, motion, fonts, base.
- `components/` — Button, Tag, Status, Text, TextField (core), ProjectCard (work).
- `guidelines/` — foundation specimen cards.
- `ui_kits/portfolio/` — interactive full-site recreation.
- `templates/portfolio-home/` — copy-to-start portfolio home page.

Components are reachable at runtime via
`window.BrenoSampaioPortfolioDesignSystem_fd7625` after loading `_ds_bundle.js`.
