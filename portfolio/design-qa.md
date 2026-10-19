# Editorial synthesis QA — 2026-10-16

final result: passed

## Source and implementation evidence

- Source visual truth: `/home/sampaioreimao/.codex/generated_images/01a13fe6-da16-7530-b8b7-3541275f67c9/exec-875219ed-f49b-4efb-babf-5a1a9a8ae8f6.png` (also archived on SSD under `30 - Trabalho e recursos/Portfolio/Imagens/2026-10-16 - Estudo visual síntese - sintese-minimalismo-humanismo.png`).
- Source: 985 × 1596 px, unframed desktop light theme.
- Implementation: `http://127.0.0.1:3000/`, inspected in the in-app browser.
- CSS viewport: 985 × 1596, devicePixelRatio 1. Browser screenshots exclude the 15px scrollbar; actual content screenshots are 970px wide. No density scaling was applied. Compare content proportions rather than treating the scrollbar as a layout defect.
- Full-view implementation: `output/editorial-synthesis-20261016/desktop.jpg`, 970 × 1596 px.
- Focused capabilities: `output/editorial-synthesis-20261016/capabilities.jpg`, 970 × 1343 px, same 985px CSS width, scrolled to capabilities; keyboard section focus is intentionally visible.
- Additional evidence: `dark-capabilities.jpg`, `mobile-fr.jpg`, `preview.jpg`, `responsive.json`, `checks.json` in the same directory.
- Source, final full-view capture and focused capabilities capture were opened together in one comparison input. Hero and cards were also inspected separately at readable size in browser screenshots. The capabilities capture is a separate scrolled state, not claimed as a pixel-aligned full-page overlay.

## Findings and comparison history

1. Initial browser inspection: [P2] English hero wrapped into three lines; header gutter differed from main content. Fixed the heading scale, shared header/container dimensions and grid proportions. Final desktop evidence has two title lines, aligned content/header gutters and no text/image overlap.
2. First combined comparison: [P2] Hero typography and image were too small relative to the approved source. Fixed hero columns to 1.65fr/1fr, display scale to clamp(3.25rem, 7.2vw, 5rem), art width to 56% of the full grid and upper section spacing to 112px. Removed the inherited multi-second wordmark entrance in the editorial header. Recaptured and compared the source plus final desktop and cards in the same tool input.
3. Final comparison: no actionable P0/P1/P2 findings within the authorized scope. Default light view, dark cards, French mobile view and all six shell routes remain usable.

## Required fidelity surfaces

- **Fonts and typography:** existing Next/font Cormorant Garamond for regular serif display and card titles; DM Sans for body/UI. English hero has two lines at the comparison width. Longer French titles wrap naturally. Body stays 16px with 1.75 line height, intentionally more compact than generated-image text. Section titles are subordinate to the hero rather than copying inconsistent image-generated sizing.
- **Spacing and layout rhythm:** computed desktop card gap 24px, card padding 32px on all four cards, title/body gap 16px, equal columns about 433.6px at the comparison width. Section padding 96px desktop/56px mobile. Columns stack at 700px. Shared header/content gutter. Mobile actions wrap rather than collide.
- **Colors and tokens:** white/near-black light theme; subdued blue and warm card surfaces; existing dark theme uses semantic paper/ink variables. Fine 1px borders, 10px card radii, no decorative card shadows. Existing keyboard focus outline is retained and intentionally differs from the unfocused source.
- **Image quality:** dedicated generated raster `public/images/editorial/clarity-pigment.png` is 1619 × 971px, near 5:3, served through Next Image. Hero and lower section crop share a consistent mineral blue/sage/terracotta palette. Text is HTML. No CSS/SVG approximation substitutes for the source artwork. No whole-page screenshot is used as the UI.
- **Copy/content:** existing factual EN/FR copy retained. No project selection reintroduced and no new performance claims. Selected Work remains an honest empty state.

## Intentional adaptations

The source illustrates only Hero and Capabilities. The user's authorized six-block order remains intact: Hero → Selected Work → Value + Capabilities → Way of Working → Experience + About → Contact. Thus Capabilities is farther down the actual document. Existing CV/language/theme controls, professional links, keyboard orientation navigation and real About portrait remain functional. Artwork stays within content bounds instead of bleeding beyond the viewport. These are intentional implementation constraints, not unreported design drift.

Pixel spacing and motion durations are portfolio design tokens. They are not presented as proprietary Apple or Anthropic measurements. See `design-system/editorial/README.md` for the contract and official reference.

## Verification

- Latest production build: passed, 22 routes generated.
- Latest ESLint: passed with zero warnings.
- Unit tests: 63 passed in 10 files. The pre-existing Relay UI suite was excluded; its known unrelated duplicate-text failure was not changed or resolved.
- Current browser geometry: 36 checks, six routes × widths 240/320/375/768/1024/1440. No horizontal overflow, broken loaded images or old case names in shell content. The browser clamps a requested 160px viewport to 240px; this pass does not claim a new 160px runtime result.
- Menu opens, Escape closes it, and focus returns to More. Hero primary action navigates to Work. Keyboard section navigation and visible focus inspected.
- Light/dark switch inspected visually; French mobile wrapping inspected.
- Console error log at end of the browser run: empty.
- Reduced-motion CSS inspected: content visible, no translation, transition or delay. Existing no-JavaScript fallback preserved. Preference emulation and JavaScript-disabled runtime were not available in the selected browser API and were not rerun; this is not a new complete accessibility audit.
- Existing E2E selectors updated for artwork replacing the Home portrait; the CLI browser suites were not rerun in this pass.
- Protected Relay component, stylesheet and test hashes match the pre-task snapshot.
- `git diff --check`: passed. No deployment performed.

## Implementation checklist

- [x] Approved visual translated into real responsive HTML/CSS.
- [x] Separate raster asset integrated with reserved dimensions.
- [x] Consistent component spacing verified through computed styles.
- [x] Purposeful motion and reduced-motion fallback scoped to the shell.
- [x] Six-block order and protected project files preserved.
- [x] Source plus rendered evidence compared, P2 findings fixed and recaptured.
- [x] Local preview kept running for review.

## Follow-up polish

No blocking visual findings remain. A full automated accessibility rerun, reduced-motion preference emulation and a 160px zoom check can supplement this scoped visual pass. Contact delivery and authenticated integrations were outside this visual change and were not exercised.
