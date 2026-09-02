# Portfolio Website — Architecture & UI/UX Build Plan
**Devesh Sety | Backend Developer → PGPM (GLIM) → Tech/Strategy Consulting**

---

## 1. Positioning Statement

Lock this before building anything — every section below exists to prove it:

> "A technically-grounded consultant who has actually shipped enterprise software — not someone learning to code as a side hobby, and not a pure MBA generalist."

**Guardrail:** Everything in this plan — including persuasion techniques, motion design, and interaction cues — is an amplifier for content that is already true and specific. None of it substitutes for substance. Consulting recruiters spot manufactured impression management; our design language must reflect structured clarity, meticulous craft, and sound technical judgment.

---

## 2. Design System & Taste-Skill Specifications ("Burnished Metals")

### A. Design Dials Configuration
* **`DESIGN_VARIANCE: 7`** — High-end editorial asymmetry, offset grid alignments, layered cards, and a thin vertical margin progress tracker.
* **`MOTION_INTENSITY: 8`** — Dynamic kinetic text masking, scroll-driven axis offset parallax, cursor coordinate hover tracking, and real-time step animations on the interactive diagnostic.
* **`VISUAL_DENSITY: 3`** — Expansive, gallery-like whitespace (`py-32` to `py-48` on desktop) ensuring elite strategic content has maximum breathing room.

### B. Materiality & Color Palette
* **Monolithic Base:** Deep Charcoal Anthracite (`#09090b` / `#0d0d0f`) rather than flat jet black, giving natural depth to elements.
* **Card Surfaces:** Brushed Slate Obsidian (`#121215` with a 1px border of `#242429` and an inner-top highlight `shadow-[inset_top_1px_rgba(255,255,255,0.03)]`).
* **Primary Accent (Warm Metal):** **Burnished Copper** (`#c17c5a` / `#b35d38`) — Bespoke craftsmanship and execution without generic "AI-blue" or "AI-purple" tropes.
* **Secondary Accent (Cold Metal):** **Liquid Platinum & Muted Steel** (`#e2e8f0` display headings, `#94a3b8` body copy).
* **Typography:** Satoshi / Geist Display for display headlines with tight tracking (`tracking-tighter`), paired with SF Mono / JetBrains Mono for metrics and technical tags.
* **Shape Discipline:** Sharp, architectural corners (`rounded-none` / micro `rounded-[4px]`) on container blocks and cards, contrasted with smooth tactile buttons.

---

## 3. Sitemap & Page Structure (Single-Page Scroll)

```
/ (home — single scrolling page)
 ├── #hero              ← Word-reveal mask, open-loop headline, anchor stat, magnetic CTAs
 ├── #about             ← Narrative arc, bold scannable metrics, client logo strip (L'Occitane, GAP, PLDT)
 ├── #projects          ← Asymmetric bento grid
 │     ├── ERP Readiness Questionnaire (Featured bento, embedded interactive diagnostic)
 │     ├── Project 2 (Reframed mock checkout / security patterns) → [Live Demo] [GitHub]
 │     └── Project 3 (Reframed performance / scaling architecture) → [Live Demo] [GitHub]
 ├── #experience        ← Vertical timeline with scroll-drawn copper trace & metric highlights
 ├── #skills            ← Technical | Consulting/Business (2-column hybrid split)
 └── #contact           ← Loss-framed CTA, echoed anchor stat, high-contrast accessible form
/resume.pdf             (Downloadable PDF, linked in nav, hero & footer)
```

---

## 4. Scroll Choreography & Interactive "Wow" Features

1. **Parallax Word-Reveal Masking (Hero):**
   Headline words reveal sequentially from hidden overflow masks using spring physics (`stiffness: 80, damping: 15`). As you scroll, headline layers split and offset horizontally at a `0.1x` ratio.
2. **Left-Margin Segment Progress Tracker:**
   A 1px vertical hairline in the left margin. A warm burnished copper marker glides along the track based on scroll depth, highlighting active section markers (`#home`, `#about`, `#projects`, `#experience`, `#skills`, `#contact`).
3. **Interactive Live ERP Diagnostic (Featured Card):**
   Embedded interactive questionnaire directly on the page. Clicking answers triggers fluid slide transitions (`ease-in-out`), updates a live copper progress line, and renders a final visual score dial/radar calculation.
4. **3D Coordinate Card Tilt & Copper Sheen:**
   Hovering on project cards maps mouse coordinates to subtle 3D perspective rotation (`perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry))`) with a hardware-accelerated radial specular gradient (`radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(193,124,90,0.12), transparent)`).
5. **Magnetic Cursor Capture CTAs:**
   Primary action buttons magnetically track cursor position when within a 45px proximity zone (`stiffness: 120, damping: 12`).

---

## 5. Section-by-Section UX Blueprint

### A. Navigation
* Fixed top navbar capped at `64px` height on desktop. Single-line item alignment.
* Frosted translucent wash (`#09090b/80` + `backdrop-blur-md` + `border-b border-white/5`).
* Minimal logo (`DS.` with copper period) and smooth hover underline indicators.

### B. Hero Section
* **Constraint:** Viewport-stable `min-h-[100dvh]` to eliminate mobile address-bar jump. Max 4 text elements total.
* **Eyebrow:** Minimal uppercase monospace tracking badge in Muted Steel.
* **H1:** "Four years shipping enterprise software. Now applying that to strategy." (Wireframe outline + solid white contrast, with "strategy." highlighted in burnished copper).
* **Anchor Stat:** `70-80%` reduction in fraudulent account creation across enterprise payment systems (displayed in large JetBrains Mono).
* **CTAs:** `[ View Projects ]` (Copper fill) + `[ Download Resume ]` (Steel outline).

### C. About Section & Client Social Proof Strip
* **Layout:** 50/50 split layout. F-pattern scannability with key business impact phrases bolded in solid platinum.
* **Client Strip:** Flat monochromatic SVG vectors from Simple Icons (*L'Occitane Japan*, *GAP Japan*, *PLDT Philippines*) in `text-white/30`. On hover, they slide up `4px` and illuminate with a warm burnished copper finish.

### D. Projects (Asymmetric Bento Grid)
* **Card 1 (Featured):** ERP Readiness Diagnostic — 2-column wide bento card with distinctive copper border accents, "Featured Diagnostic" badge, and full interactive console embed.
* **Cards 2 & 3:** Secondary project cards with problem/build/stack/outcome framing, live hosted demo links, and GitHub repository links.

### E. Experience (Interactive Timeline)
* Vertical timeline with scroll-animated copper track.
* Role summaries condensed into single-line high-impact bullets with bolded numbers (**100% of transactions**, **15-20% attach rate lift**, **70-80% fraud reduction**).

### F. Skills Matrix
* 2-column layout (Technical vs. Consulting/Business) to prove the hybrid capability in under 2 seconds.
* Sleek slate capsules with subtle copper accent indicators.
* Small personality footnote: *"Outside work: competitive table tennis, football, and a growing coffee-brewing habit."*

### G. Contact & Loss-Framed Footer
* Loss-framed CTA: *"Let's talk about how four years of shipping enterprise software translates to your team's next strategy problem."*
* Echoed anchor stat: *"100% secure transactions. 70-80% less fraud. That's the kind of execution I bring to the table."*
* High-contrast, accessible form fields with labels strictly *above* inputs.

---

## 6. Step-by-Step Implementation Phases

### Phase 1 — Copy Finalization & Asset Prep
1. Audit all copy against `Portfolio_Website_Copy.md` (ensure every vague adjective is replaced with exact metrics).
2. Prepare live URLs and GitHub repository links for all 3 projects.
3. Place `resume.pdf` in `/public/resume.pdf`.

### Phase 2 — Core Design Tokens & Layout Architecture
1. Configure Tailwind colors, typography, and dark-mode tokens (Charcoal Anthracite `#09090b`, Burnished Copper `#c17c5a`, Slate `#121215`, Liquid Platinum `#e2e8f0`).
2. Implement viewport-stable layout containers (`min-h-[100dvh]`, `max-w-[1400px]`, `py-32` to `py-48`).

### Phase 3 — Component Build & Motion Integration
1. **Navigation:** Single-line header, mobile drawer collapse, smooth anchor scrolling.
2. **Hero:** Mask-reveals, open-loop headline, anchor stat display, magnetic button handlers.
3. **About + Logo Strip:** Scannable narrative, SVG client logo wall with hover lighting.
4. **Projects & ERP Console:** Asymmetric bento grid with working multi-step interactive ERP questionnaire and score visualizer.
5. **Experience & Skills:** Scroll-traced vertical timeline and 2-column hybrid skill matrix.
6. **Contact & Footer:** Loss-framed CTA, accessible form inputs, and back-to-top button.

### Phase 4 — Verification & Anti-Slop Audit
- [ ] WCAG AA compliance (contrast ratio ≥ 4.5:1 on all body copy, inputs, and buttons).
- [ ] CTA text fits on a single line on desktop across all buttons.
- [ ] Single CTA intent per action (no redundant "Contact Me" vs "Let's Talk").
- [ ] Eyebrows restricted to maximum of 2 across the entire page.
- [ ] `prefers-reduced-motion` fully respected on all motion/parallax hooks.
- [ ] No `h-screen` viewport jumps; all containers use `min-h-[100dvh]`.
- [ ] Clean production build without TypeScript or lint warnings.

---

## 7. What Maximizes Hiring Signal

| Element | Why it matters to a consulting recruiter |
|---|---|
| Open-loop hero headline | Pulls attention past the fold instead of resolving everything in one line |
| Problem → outcome framing on every project | Mirrors the case-study structure consulting interviews use |
| ERP tool embedded live, framed as a diagnostic | Shows consulting-style thinking, not just coding, and gives real value up front |
| Client-name social proof strip | Recognizable brands build instant credibility with minimal text |
| Specific numbers everywhere | Reads as more credible than adjectives, even unverified |
| Technical + Business skills shown side by side | Visually proves the exact hybrid profile consulting firms pay a premium for |
| Fast load, clean and consistent design | Signals judgment and attention to detail — the same traits evaluated in a case interview |
| Downloadable resume | Recruiters need a file to forward internally |
