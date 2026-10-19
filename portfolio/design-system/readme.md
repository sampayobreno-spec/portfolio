# Breno Sampaio — Design System

Personal brand design system for Breno Sampaio's technical-functional portfolio.

**Aesthetic:** restrained editorial structure, clear product hierarchy, and consistent component roles.

---

## Foundations

| Token file | Purpose |
|---|---|
| `tokens/fonts.css` | DM Sans (primary) + Cormorant Garamond (editorial accent) |
| `tokens/colors.css` | Warm neutrals (Paper → Ink) + Clay accent + Alert |
| `tokens/typography.css` | Scale, weight, leading, tracking |
| `tokens/spacing.css` | 8px base, radius, elevation, layout |
| `tokens/motion.css` | Restrained easing + durations (80–640ms) |
| `tokens/base.css` | Global reset, body defaults, focus styles |

### Color tokens

| Name | Token | Value | Use |
|---|---|---|---|
| Paper | `--paper` | `#FFFFFF` | Page background |
| Silk | `--silk` | `#F3F2EE` | Card / input surfaces |
| Mist | `--mist` | `#DEDCD6` | Borders, hairlines |
| Pebble | `--pebble` | `#77736D` | Muted labels |
| Stone | `--stone` | `#5F5B56` | Secondary text |
| Graphite | `--graphite` | `#36322F` | Strong surface text |
| Ink | `--ink` | `#1F1C1B` | Primary text |
| Accent | `--vermilion` | `#C74624` | Accent in shared components |
| Accent hover | `--vermilion-dark` | `#A93618` | Hover / pressed |
| Alert | `--alert` | `#B4232C` | Errors only |

The editorial site shell uses its own warm-paper neutral palette. Check `src/components/site/EditorialShell.module.css` for those overrides before adding a component. Old names such as `--moss` and `--clay` remain compatibility aliases in the shared foundation.

The CSS token files are authoritative. Some static specimen cards are historical examples and may show an earlier palette.

### Typography

- **Primary:** DM Sans, weights 300 / 400 / 500 / 600
- **Editorial accent:** Cormorant Garamond italic — pull quotes, case study openers, select editorial moments **only**. Never for body text or UI.
- **Mono:** System stack (SF Mono, Menlo) — technical labels, eyebrows, metadata
- **Scale:** 64px display ceiling, 52px H1, 36px H2, 16px body, 14px supporting text. Reserve 12–13px for short metadata only.
- **Corners:** 16px major surfaces, 10px nested cards, 6px form controls, fully rounded pills for primary editorial actions. Keep the same role at the same radius on desktop and mobile.

---

## Components

| Component | Location | Description |
|---|---|---|
| `Button` | `components/core/` | Primary / secondary / ghost / link. Clay primary. |
| `Text` | `components/core/` | Full type scale including `serif-display` and `serif-quote` variants |
| `Tag` | `components/core/` | Invisible mono label for discipline/domain |
| `TextField` | `components/core/` | Labelled input, Clay focus ring, error state |
| `Status` | `components/core/` | Neutral / done / urgent status indicators |
| `Divider` | `components/core/` | Hairline / spaced / labeled separator |
| `QuoteBlock` | `components/core/` | Cormorant editorial quote — sm / md / lg |
| `ProjectCard` | `components/work/` | Problem-first card with hover lift |
| `PrincipleCard` | `components/work/` | Brand/design principle with annotation + index |

```js
const { Button, Text, Tag, TextField, Status, Divider, QuoteBlock, ProjectCard, PrincipleCard }
  = window.BrenoSampaioPortfolioDesignSystem_fd7625;
```

---

## Visual principles

1. **間 ma — Space as structure.** Negative space is intentional.
2. **簡 kanso — Clarity before decoration.** Remove until only what matters remains.
3. **Quiet hierarchy.** Scale, weight, and space communicate everything.
4. **渋 shibui — Restraint with intention.** Premium through discipline.
5. **Product thinking visible.** Clarity of form reveals clarity of process.
6. **Continuity across touchpoints.** One system, one feeling.

---

## Voice

Direct. Mature. Strategic. Useful. Sentence case always. Numbers over words. Active voice. Problem → solution → result. No buzzwords, no UX clichés, no exclamation marks.
