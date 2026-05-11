# DESIGN.md — SafeNest Technologies Website
## Complete Design Brief for Google Stitch

> **This document is written for Google Stitch (AI design tool) and any designer working on the SafeNest Technologies website.**
> It contains the complete visual system, page-by-page design specification, component direction, and all creative rules derived from the client's confirmed answers and shared reference materials.
> Every decision in this file is grounded in the client's explicit answers from the discovery questionnaire.

**Project:** SafeNest Technologies — AI/SaaS Marketing Website (Phase 1)
**Developer:** Ayoub
**Design Status:** V1 direction confirmed — working from client concept materials + QA answers
**Last updated:** May 10, 2026 (Milestone 2 Updates)

---

## SECTION 1 — PROJECT BRIEF

### Who is SafeNest Technologies?

SafeNest Technologies is an **AI-powered environmental safety intelligence company**. Their platform combines AI, IoT sensors, behavioral analytics, environmental monitoring, and real-time alerting to detect risk before it becomes danger. The core product philosophy is **proactive protection** — not reactive response.

### What does this website need to do?

The website is the company's **primary investor and brand asset** for Phase 1. It must:

1. Establish SafeNest as a serious, enterprise-grade AI technology company — on first impression
2. Communicate the full product vision across three product lines
3. Convert visitors into demo requests, partnership inquiries, and investor interest
4. Feel like the digital presence of a company already operating at global scale — not a startup getting started

### Who will see this website?

- **Primary:** Investors, venture capitalists, strategic partners
- **Secondary:** Enterprise clients (facilities, operations, government), military and defense buyers
- **Tertiary:** Parents and families (child safety product), pet owners, fleet operators, healthcare providers

### What is the emotional goal?

A visitor should land on this website and feel:
> *"This is a real company. This technology is serious. I need to know more."*

The design must project: **intelligence, credibility, scale, and mission.**

---

## SECTION 2 — VISUAL IDENTITY REFERENCE

### Logo

- **Name:** SafeNest Technologies
- **Mark:** A shield-based emblem — modern, clean, minimal, tech-forward
- **Primary variant:** Shield in blue/white on dark backgrounds (confirmed final)
- **Accent variant:** Shield with orange emphasis (for special use cases)
- **Vector files:** Client will provide (SVG, AI, or EPS) — use vectors only, never rasterized
- **Usage rules:** Do not modify, rotate, recolor, or stretch the logo. Always maintain clear space equal to the height of the "S" in SafeNest around the mark.

### Brand Name Typography

- "SafeNest" — always one word, capital S and N
- "SafeNest Technologies" — full company name used in formal/legal contexts
- "DefenseNest" — product sub-brand, orange accent on "Defense" portion in design contexts

### Confirmed Design Direction

The client explicitly confirmed the following references as the visual inspiration:

| Reference | What to absorb from it |
|---|---|
| **Palantir** (palantir.com) | Dark backgrounds, serious enterprise tone, data-inspired visuals, bold typography |
| **Anduril Industries** (anduril.com) | Military-grade aesthetic, cinematic dark UI, product confidence |
| **Tesla** (tesla.com) | Full-screen photography, minimal copy, premium product presentation |
| **OpenAI** (openai.com) | Clean dark theme, generous whitespace, tech credibility through restraint |
| **Samsara** | Fleet/operations SaaS confidence, data-driven visual language |
| **Shield AI** | Defense tech positioning, serious mission-driven tone |
| **Apple product launches** | Scroll-triggered storytelling, cinematic video, product beauty shots |

### What to Avoid (Client-Confirmed)

| Do NOT use | Reason |
|---|---|
| Generic SaaS templates | Undermine the enterprise positioning |
| Bright neon rainbow palettes | Breaks the dark, controlled aesthetic |
| Cartoonish illustrations or icons | Incompatible with defense/enterprise tone |
| Cheap stock photography (people in hard hats, smiling office workers) | Destroys credibility |
| Pastel-heavy or light themes | Client confirmed: dark mode only |
| Cluttered layouts | Visual noise destroys the cinematic effect |
| Overly colorful consumer-app feel | This is not a consumer app — it is enterprise AI infrastructure |
| Gimmicky animations (bouncing, spinning, excessive effects) | Distracting and unprofessional |

---

## SECTION 3 — COLOR SYSTEM

The color system is derived from client-confirmed materials (design PNGs). Exact hex values need final confirmation from the client's vector files, but this palette is approved directionally.

### Primary Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-bg-primary` | Page Background | `#080B14` | Base page background — near-black navy |
| `--color-bg-secondary` | Card Background | `#0D1220` | Section backgrounds, card fills |
| `--color-bg-elevated` | Elevated Surface | `#111827` | Modals, drawers, tooltips |
| `--color-bg-subtle` | Subtle Surface | `#0F1729` | Subtle section divisions |

### Brand Accent Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-cyan` | Cyan — Primary Accent | `#00C2E0` | CTAs, highlights, active states, glows |
| `--color-cyan-dim` | Cyan Dim | `#0099B8` | Hover states on cyan elements |
| `--color-cyan-glow` | Cyan Glow | `#00C2E020` | Background glows, card glow borders |
| `--color-orange` | Orange — Secondary Accent | `#E87D00` | DefenseNest branding, emphasis labels, warnings |
| `--color-green` | Green — Status | `#00C47A` | Positive status, health indicators, checkmarks |
| `--color-red` | Red — Alert | `#E84040` | Danger alerts, critical status (use sparingly) |

### Text Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-text-primary` | Primary Text | `#EEF2FF` | Headings, important body copy |
| `--color-text-secondary` | Secondary Text | `#8892A4` | Subtext, descriptions, captions |
| `--color-text-muted` | Muted Text | `#4A5568` | Placeholders, disabled states, metadata |
| `--color-text-accent` | Accent Text | `#00C2E0` | Links, highlighted phrases |

### Border Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-border-subtle` | Subtle Border | `#1A2235` | Card borders, section dividers |
| `--color-border-default` | Default Border | `#243050` | Input borders, component edges |
| `--color-border-accent` | Accent Border | `#00C2E040` | Highlighted card borders, focus rings |

### Color Rules

1. **Background always stays dark.** There is no light mode. No white backgrounds.
2. **Cyan is the primary action color.** All primary buttons, active states, and CTAs use cyan.
3. **Orange is reserved** for DefenseNest product contexts and critical emphasis labels only.
4. **Green is reserved** for health metrics, positive statuses, and success states only.
5. **Never use more than 2 accent colors in the same section.**
6. **No gradients from cyan to orange.** Gradients may only go from one shade of a color to another (e.g., cyan to cyan-dark).
7. **Glow effects** should use `--color-cyan-glow` — subtle, not blinding.

---

## SECTION 4 — TYPOGRAPHY SYSTEM

### Confirmed Direction

Client confirmed: **modern, clean, futuristic sans-serif**
Preferences checked: Geometric sans-serif, tech-forward, corporate/enterprise

### Recommended Font Stack

| Role | Font | Weights | Use Cases |
|---|---|---|---|
| **Display / Headings** | Space Grotesk | 400, 500, 600, 700 | H1, H2, H3, hero headlines, section titles |
| **Body / UI** | Inter | 400, 500, 600 | Paragraphs, labels, nav, buttons, captions |
| **Technical / Mono** | JetBrains Mono | 400, 500 | Code-style labels, technical data displays, metric numbers |

**Why Space Grotesk for headings:** It combines geometric precision with subtle humanist curves — exactly the "tech-forward but not cold" personality SafeNest needs. Used by high-credibility tech companies. Works exceptionally well at large display sizes.

**Why Inter for body:** The gold standard for digital UI text. Exceptional legibility at all sizes. Used by Figma, Vercel, Linear, Notion.

### Type Scale

| Level | Size | Weight | Letter Spacing | Line Height | Use |
|---|---|---|---|---|---|
| Display 2XL | 72px / 4.5rem | 700 | -0.02em | 1.05 | Full-screen hero headline |
| Display XL | 60px / 3.75rem | 700 | -0.02em | 1.1 | Section hero headlines |
| Display LG | 48px / 3rem | 600–700 | -0.015em | 1.15 | Major section headings |
| Display MD | 36px / 2.25rem | 600 | -0.01em | 1.2 | Sub-section headings |
| Display SM | 30px / 1.875rem | 600 | 0 | 1.3 | Card headings, sidebar titles |
| Body XL | 20px / 1.25rem | 400 | 0 | 1.75 | Hero subtext, intro paragraphs |
| Body LG | 18px / 1.125rem | 400 | 0 | 1.7 | Main body copy |
| Body MD | 16px / 1rem | 400 | 0 | 1.6 | Standard paragraphs |
| Body SM | 14px / 0.875rem | 400 | 0 | 1.5 | Captions, helper text |
| Label | 12px / 0.75rem | 500–600 | 0.08em | 1.4 | ALL CAPS category labels, badges |

### Typography Rules

1. **Headings always use Space Grotesk.** No exceptions.
2. **Never use font weight below 400** anywhere on the site.
3. **Hero headlines at Display 2XL or XL only.** Never smaller.
4. **ALL CAPS labels** use 12px Inter 600 with 0.08em letter-spacing — used for category tags and section labels (e.g., "OUR PLATFORM", "SOLUTIONS").
5. **Cyan text** can be applied to key words within headings for emphasis — use sparingly (1–2 words maximum).
6. **No italic use** in headings. Italic is for body copy emphasis only.
7. **Maximum line length:** 60–72 characters for body copy. Hero text can be shorter.

---

## SECTION 5 — DESIGN PRINCIPLES

These six principles govern every design decision on this project.

### 1. Cinematic First
Every scroll, every transition, every section should feel like a deliberate moment in a premium product film. Stillness is intentional. Motion is purposeful. Nothing is arbitrary.

### 2. Restraint Creates Power
The most powerful design moments on this site come from what is NOT there. Generous whitespace, minimal elements per section, and controlled color use give each element the room to command attention.

### 3. Intelligence Made Visible
The design should communicate that SafeNest is an AI company through visual language — not just copy. Data visualizations, sensor grids, connection lines, particle systems, and metric displays are the visual vocabulary.

### 4. Enterprise Credibility
Every element should pass the "enterprise buyer" test: would a CISO, a VP of Operations, or a military procurement officer take this seriously? If not, reconsider it.

### 5. Depth and Dimensionality
Dark backgrounds allow for layering that light themes cannot achieve. Use subtle glow effects, card depth, and gradient overlays to create a sense of three-dimensional space on a flat screen.

### 6. Purposeful Motion
Animations exist to guide attention, communicate intelligence, and reward engagement. They do not exist to entertain. Every animation must serve one of these three purposes — otherwise, remove it.

---

## SECTION 6 — HOMEPAGE DESIGN SPECIFICATION

The homepage is the most critical deliverable. It is the entry point for investors, enterprise clients, and strategic partners. Design it as a single, scrollable, cinematic narrative.

---

### 6.1 — Navigation

**Type:** Fixed top navigation, transparent on load, transitions to a blurred dark background on scroll
**Layout:** Logo left · Navigation links center · CTA button right
**Mobile:** Hamburger menu triggering a full-screen slide-in overlay

| Element | Spec |
|---|---|
| Height | 72px desktop / 64px mobile |
| Background (default) | Transparent |
| Background (scrolled) | `rgba(8, 11, 20, 0.85)` + `backdrop-filter: blur(16px)` |
| Border bottom (scrolled) | 1px solid `--color-border-subtle` |
| Logo | SVG, 32px height, white/cyan variant |
| Nav links | 14px Inter 500, `--color-text-secondary`, hover → `--color-text-primary` |
| CTA button | "Get Started" — filled cyan button, 14px, 36px height, 16px radius |
| Active state | Cyan text with bottom underline |

**Nav links (in order):** Solutions · Platform · Enterprise · Defense · Why SafeNest · Resources · Pricing

---

### 6.2 — Hero Section

**Goal:** Immediate emotional impact. The visitor must feel awe within 2 seconds.

**Layout:** Full viewport height (100vh). Content centered vertically and horizontally. Background is an animated canvas (particle mesh or geometric AI visualization).

| Element | Spec |
|---|---|
| Background | Animated — dark navy base with slow-moving particle constellation or neural network mesh in deep cyan/navy tones. Subtle, not flashy. |
| Category label | "AI-POWERED SAFETY INTELLIGENCE" — 12px Inter 600, cyan, ALL CAPS, 0.1em letter-spacing. Fades in first. |
| Main headline | 2–3 lines. Display 2XL (72px desktop). Space Grotesk 700. White with 1–2 cyan words. Example: "Predict. Prioritize. **Prevent.**" |
| Subheadline | 20px Inter 400. `--color-text-secondary`. 1–2 sentences. Max 60 chars/line. Fades in 300ms after headline. |
| CTA buttons | Two buttons side by side: Primary "Request a Demo" (cyan filled) + Secondary "See How It Works" (ghost/outlined, white border). 48px height, 20px radius. |
| Scroll indicator | Subtle animated chevron or line at bottom — disappears on first scroll |
| Overlay gradient | Bottom of hero fades to `--color-bg-primary` over 200px so the next section bleeds in seamlessly |

**Animation sequence (on page load):**
1. Background animation starts immediately (slow, ambient)
2. Category label fades in (0.4s)
3. Headline animates in line by line (0.6s each, staggered)
4. Subheadline fades up (0.5s delay)
5. Buttons fade up together (0.3s delay after subheadline)

---

### 6.3 — Trust / Industry Bar

**Goal:** Immediately signal scale and multi-industry relevance

**Layout:** Full-width horizontal band. Dark slightly elevated background.

**Content:** "BUILT FOR:" label followed by industry icons or text pills:
Child Safety · Defense · Enterprise · Healthcare · Fleet · Smart Cities · Government

OR: "TRUSTED BY LEADERS IN:" with placeholder company logo silhouettes

**Animation:** Smooth horizontal fade-in or subtle scroll ticker

---

### 6.4 — Problem Statement Section

**Goal:** Create emotional resonance. Show SafeNest understands the stakes.

**Layout:** Left-aligned content, right side has a subtle data visualization or abstract risk-mapping graphic

| Element | Spec |
|---|---|
| Section label | "THE PROBLEM" — cyan, ALL CAPS, 12px |
| Headline | Display LG (48px). "Most safety systems wait for danger to happen." |
| Body copy | 2–3 short paragraphs. Max 60 chars/line. `--color-text-secondary` |
| Visual | Abstract visualization — fragmented, reactive-looking (to contrast with SafeNest's proactive approach) |
| Transition | Scroll-triggered. Text slides in from left, visual fades from right. |

---

### 6.5 — Product Overview Cards

**Goal:** Introduce all three SafeNest products with equal visual weight

**Layout:** 3-column grid (desktop) / 1-column stacked (mobile)

Each card contains:

| Element | Spec |
|---|---|
| Background | `--color-bg-secondary` with `1px solid --color-border-subtle` |
| Glow | Subtle cyan glow on card top edge on hover |
| Product badge | Colored label — blue for SafeNest Car, orange for DefenseNest K9, cyan for Platform |
| Product name | Display SM (30px). Space Grotesk 600. |
| Tagline | 14px. `--color-text-secondary`. 1 sentence. |
| Feature list | 3–4 key features with cyan check icons |
| CTA | "Learn More →" text link, cyan |
| Product visual | Placeholder for product image/render. Dark background, no harsh shadows. |

**Card 1 — SafeNest Car**
- Badge: "CHILD SAFETY" (blue)
- Tagline: "Smarter Safety From The Start"
- Visual: Car seat/device concept image from client materials

**Card 2 — DefenseNest K9**
- Badge: "MILITARY PROTECTION" (orange)
- Tagline: "Because They Can't Tell Us They're In Danger."
- Visual: K9 product concept image from client materials

**Card 3 — SafeNest Platform**
- Badge: "ENTERPRISE PLATFORM" (cyan)
- Tagline: "One Platform. Limitless Protection."
- Visual: UI dashboard mockup / data visualization

**Animation:** Staggered card entrance on scroll. Each card slides up with 100ms delay between them.

---

### 6.6 — Key Capabilities Section

**Goal:** Show the breadth of what SafeNest does in one powerful, scannable view

**Layout:** Icon grid — 3 columns × 2 rows (desktop) / 2 columns × 3 rows (tablet) / 1 column (mobile)

Each capability tile:
- Icon (Lucide or custom SVG, cyan, 32px)
- Title (16px, Inter 600, white)
- Description (14px, `--color-text-secondary`, 2 lines max)

**Capabilities to feature:**
1. Real-Time Monitoring
2. AI-Powered Predictions
3. Multi-Factor Data Fusion
4. Smart Prioritization
5. Cloud-Native Scale
6. Built for Compliance
7. Continuous Learning
8. Enterprise Integration

**Animation:** Counter animation for any statistics. Grid items fade in with stagger.

---

### 6.7 — How It Works Section

**Goal:** Make the technology feel simple and inevitable

**Layout:** Vertical step timeline (desktop) / stacked cards (mobile)

3 Steps:
1. **Detect** — "Sensors and AI continuously monitor environments in real time"
2. **Analyze** — "Predictive algorithms identify risk patterns before they escalate"
3. **Respond** — "Smart prioritization triggers the right response, instantly"

Each step:
- Step number (large, muted background — 01 / 02 / 03 in Space Grotesk 700, `--color-border-default`)
- Title (Display SM, white)
- Description (Body MD, `--color-text-secondary`)
- Icon or micro-visual
- Connecting line between steps (vertical dashed cyan line on desktop)

**Animation:** Each step reveals as the user scrolls to it. Line animates from top to bottom.

---

### 6.8 — Real-World Applications Section

**Goal:** Prove that SafeNest applies to every industry the target audience cares about

**Layout:** Grid of industry tiles — 4 per row desktop / 2 per row tablet / 1 per row mobile

**Industries (11 tiles):**
Child Safety · Pet Safety · Workplace Safety · Smart Cities · Fleet & Transportation · Defense & Military · Healthcare · Hospitality · Education · Agriculture · Industrial Operations

Each tile:
- Background: `--color-bg-secondary`
- Industry icon (SVG, cyan or white)
- Industry name (14px Inter 600)
- 1-line description on hover
- Hover state: border glows cyan, background lightens slightly

---

### 6.9 — Why SafeNest Section

**Goal:** Demonstrate clear competitive superiority with evidence

**Layout:** Left side — bold headline + key differentiators. Right side — comparison table or feature matrix.

**Comparison matrix headers:** SafeNest · Traditional Systems · Camera-Only · Wearable-Only

**Rows to compare:**
- Predicts risk before incident
- Detects events in real time
- Multi-factor environmental awareness
- AI-powered prioritization
- Enterprise scalable
- Privacy-first architecture
- Continuous AI improvement
- Unified across industries

**Visual treatment:** SafeNest column has cyan checkmarks. Competitors have gray × or partial indicators.

**Reference:** Use the client's "why Safenest technology.png" as the content source for this section.

---

### 6.10 — Platform Overview Teaser

**Goal:** Hint at the depth of the platform without overwhelming

**Layout:** Full-width, dark background section. Left side is a UI mockup or dashboard screenshot. Right side is headline + capability list + CTA.

**Content:**
- Label: "THE PLATFORM"
- Headline: "One Platform. Every Environment."
- Body: Brief description of the cloud-native architecture
- 4–5 platform pillars with icons
- CTA: "Explore the Platform →"

---

### 6.11 — Video / Demo Section

**Goal:** Provide the most immersive proof of the product (placeholder until Milestone 2 video delivered)

**Layout:** Full-width dark section with a centered video player

**V1 Placeholder treatment:**
- Large play button in the center of a cinematic still frame
- Overlay text: "Watch SafeNest in Action"
- The still frame should use one of the product concept images from client materials
- Clicking the play button can open a Calendly link OR show a "Video coming soon" modal

**When Milestone 2 video is delivered:** Swap the embed URL. The section design requires no changes.

---

### 6.12 — Mission Statement / Quote Section

**Goal:** Cinematic pause. Emotional weight. Brand declaration.

**Layout:** Full-width, centered. Large display text. Minimal decoration.

**Content:** Display the mission statement in large type, broken into lines for cinematic effect:

```
"SafeNest's mission is to build
intelligent safety technology
that proactively protects people,
animals, infrastructure, and environments."
```

**Visual treatment:** Very subtle background texture. Text in white. One or two words in cyan.

---

### 6.13 — CTA Banner

**Goal:** Last chance before the footer — convert or capture intent

**Layout:** Full-width band. Slightly elevated background with a subtle cyan glow on the top edge.

**Content:**
- Headline: "See SafeNest in Action"
- Subtext: "Schedule a demo and discover how predictive AI is changing what protection means."
- Two buttons: "Request a Demo" (cyan filled) + "Contact Us" (ghost)

---

### 6.14 — Newsletter / Waitlist Section

**Goal:** Capture leads who are not ready to request a demo yet

**Layout:** Simple, minimal. Centered. Dark background.

**Content:**
- Headline: "Stay Ahead of What's Coming"
- Subtext: "Get updates on SafeNest product launches, partnerships, and AI safety intelligence."
- Email input + "Subscribe" button (inline, single row)

---

### 6.15 — Footer

**Layout:** 4-column grid (desktop) / 2-column (tablet) / 1-column (mobile)

**Columns:**
1. Logo + mission tagline + social icons
2. Solutions (links to all 3 product pages)
3. Company (About, Story, Why SafeNest, Resources, Careers)
4. Legal + Contact (Privacy, Terms, Contact, Demo)

**Bottom bar:** Copyright © 2026 SafeNest Technologies · Privacy · Terms · Made with purpose.

---

## SECTION 7 — INTERIOR PAGE DESIGN SPECIFICATIONS

---

### 7.1 — About / Company Page

**Tone:** Credible, human, mission-driven
**Key sections:**
1. Hero — "Who We Are" — photo or abstract visual, headline, subtext
2. Mission + Vision statements (large type, minimal)
3. What problem we solve — brief company thesis
4. Core values / design principles (icon grid)
5. Team section — placeholder cards with title + role (photos coming later)
6. CTA — "Learn About Our Technology" or "Request a Demo"

---

### 7.2 — Solutions Overview Page

**Tone:** Product authority, organized, visual
**Key sections:**
1. Hero — "Solutions for Every Environment"
2. Three product cards (same as homepage cards, larger here)
3. Industry applications summary
4. CTA → Demo

---

### 7.3 — Individual Product Pages (x3)

Each product page follows the same template, adapted per product:

1. **Hero** — Full-width, product name, tagline, product visual/render, CTA
2. **Product overview** — What it is, what problem it solves
3. **Features** — Detailed feature list with icons and descriptions
4. **How it works** — Product-specific step flow
5. **Use cases** — 2–3 real-world scenarios
6. **Technical specifications** — Sensor data, monitoring parameters, platform compatibility
7. **Related applications** — Industries that use this product
8. **CTA** — Request demo or contact

**Tone per product:**
- SafeNest Car: Warm, parental, protective, consumer-friendly but still premium
- DefenseNest K9: Military-grade, tactical, serious, mission-critical
- Smart Platform: Enterprise, technical, authoritative, data-driven

---

### 7.4 — Why SafeNest Page

**Tone:** Confident, comparative, evidence-based
**Key sections:**
1. Hero — "Not just monitoring. Intelligent protection."
2. Core differentiation points (large icon tiles)
3. Full comparison matrix (expanded from homepage version)
4. The SafeNest advantage explained in depth
5. CTA

Use client's "why Safenest technology.png" as the structural reference for this page's content hierarchy.

---

### 7.5 — Enterprise Page

**Tone:** B2B, formal, ROI-focused, risk-conscious
**Key sections:**
1. Hero — "Enterprise-Grade AI Safety Infrastructure"
2. Enterprise value propositions (compliance, scalability, integration)
3. Industry sectors served
4. Platform architecture overview
5. Security and privacy messaging
6. Partnership / procurement CTA

---

### 7.6 — Defense / Military Page

**Tone:** Tactical, military-grade, mission-critical, patriotic without being overtly political
**Key sections:**
1. Hero — "Mission Readiness. Powered by AI."
2. DefenseNest K9 product feature
3. Defense-specific capabilities
4. Tactical deployment scenarios
5. Compliance and security standards
6. Contact / procurement CTA

---

### 7.7 — Request a Demo Page

**Tone:** Calm, confident, low-pressure
**Layout:** Split — left side: form. Right side: what happens after you submit + quick trust signals

**Form fields:**
- First Name
- Last Name
- Work Email
- Company Name
- Role / Title
- Industry (dropdown)
- Interest area (checkbox: Consumer Safety / Enterprise / Defense / Partnership)
- Message (optional)
- Calendly integration (either embed below form or "Choose a time" button after submit)

**Trust signals (right side):**
- "Typically responds within 24 hours"
- 3–4 bullet points: what the demo covers
- Privacy assurance: "We never share your information."

---

### 7.8 — Applications Page

**Tone:** Broad, clear, industry-specific
**Layout:** Full-width section per industry, alternating layout (image left / text right, then flip)

11 industries, each with:
- Industry name + icon
- 2–3 sentence description of how SafeNest applies
- Key risks SafeNest addresses in that sector
- Link to relevant product page

---

## SECTION 8 — COMPONENT LIBRARY DIRECTION

### Buttons

| Variant | Background | Text | Border | Use |
|---|---|---|---|---|
| Primary (Filled) | `--color-cyan` | White | None | Primary CTAs |
| Secondary (Ghost) | Transparent | White | 1px white | Secondary actions |
| Tertiary (Text) | Transparent | Cyan | None | Inline links |
| Danger | `--color-red` | White | None | Destructive actions only |

**Button specs:** Height 48px (large) / 40px (medium) / 36px (small). Border radius: 8px. Font: 15px Inter 600. Padding: 0 24px.

**Hover states:** Primary → `--color-cyan-dim`. Ghost → white at 10% opacity fill. All transitions 150ms ease.

---

### Cards

**Default card:**
- Background: `--color-bg-secondary`
- Border: `1px solid --color-border-subtle`
- Border radius: 12px
- Padding: 24px desktop / 20px mobile
- Shadow: none (dark mode — shadows don't work, use glow instead)

**Accent card (highlighted):**
- Same as default + `border-color: --color-border-accent` + subtle `box-shadow: 0 0 24px --color-cyan-glow`

**Hover state:** Border color transitions to `--color-border-accent`. Box shadow appears. Transition: 200ms ease.

---

### Badges / Labels

| Type | Background | Text | Use |
|---|---|---|---|
| Cyan pill | `rgba(0,194,224,0.12)` | `--color-cyan` | Platform, features |
| Orange pill | `rgba(232,125,0,0.12)` | `--color-orange` | Defense, warnings |
| Green pill | `rgba(0,196,122,0.12)` | `--color-green` | Status, health |
| Gray pill | `rgba(136,146,164,0.12)` | `--color-text-secondary` | Neutral categories |

Font: 12px Inter 600. ALL CAPS. Letter-spacing: 0.06em. Padding: 4px 10px. Border radius: 4px.

---

### Form Fields

- Background: `--color-bg-elevated`
- Border: `1px solid --color-border-default`
- Border radius: 8px
- Height: 48px (inputs) / auto (textarea, min 120px)
- Padding: 12px 16px
- Font: 15px Inter 400, `--color-text-primary`
- Placeholder: `--color-text-muted`
- Focus: Border changes to `--color-cyan` + subtle cyan glow ring
- Error: Border changes to `--color-red` + error message below in red at 12px

---

### Section Headings

**Standard section heading pattern:**
1. Label: 12px Inter 600, `--color-cyan`, ALL CAPS, letter-spacing 0.08em — e.g., "OUR PLATFORM"
2. Headline: Display MD or LG, Space Grotesk 700, white, with optional cyan emphasis word
3. Subtext: Body LG, `--color-text-secondary`, max 2 lines, max 600px width
4. Spacing: label → headline: 12px. Headline → subtext: 16px. Subtext → content: 48px.

---

### Dividers

- **Subtle:** `1px solid --color-border-subtle` — between sections with similar backgrounds
- **Glow divider:** A 1px line with a radial cyan glow centered on it — used between major sections
- **No dividers between sections with contrasting backgrounds** — the background change IS the divider

---

### Icons

- **Library:** Lucide React (preferred) or custom SVGs for unique product icons
- **Default size:** 24px
- **Feature icons:** 32px
- **Hero / large icons:** 48px
- **Color:** Cyan (`--color-cyan`) for interactive. White for decorative. `--color-text-secondary` for muted.
- **Never use filled/solid icon style** — outline style only for consistency

---

## SECTION 9 — ANIMATION AND MOTION GUIDELINES

### Motion Philosophy

Animations must feel like they belong to the content — not added on top of it. Every motion either:
1. **Guides attention** to something important
2. **Communicates intelligence** (data moving, connections forming)
3. **Rewards engagement** (subtle delight for scrolling or hovering)

### Scroll-Triggered Animations

**Entry animation (default):** `FadeInUp` — element fades in while moving up 24px. Duration: 600ms. Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)`.

**Stagger:** When a group of cards or items enter together, each is delayed by 100ms from the previous.

**Trigger point:** Animation fires when the element enters the viewport by 10% (not waiting for full visibility).

**Do NOT re-animate on scroll back.** Once an element has appeared, it stays visible.

### Hover Animations

| Element | Hover Behavior | Duration |
|---|---|---|
| Cards | Border glow appears, slight scale (1.01) | 200ms |
| Buttons (primary) | Darken 10%, subtle inward shadow | 150ms |
| Nav links | Text color transitions to white | 150ms |
| Product cards | Image scales 1.03, card lifts | 250ms |
| Industry tiles | Background lightens, cyan border | 200ms |
| Icons | Subtle rotation (5–10°) or glow | 200ms |

### Page-Level Animations

**Hero background:** Continuous, ambient, slow (no looping jank). Options:
- Particle constellation (small dots with connection lines) using Three.js or CSS canvas
- Animated geometric mesh (low-poly plane deforming slowly)
- Floating orbs with blur (CSS only, very performant)

**Navigation on scroll:** Background transitions from transparent to blurred dark. Duration: 300ms.

**Page transitions:** Subtle fade between route changes. Duration: 200ms.

### Animation Intensity Scale

Client confirmed: **Moderate to high-quality — smooth and premium, not overly flashy.**

| What | Intensity |
|---|---|
| Hero background animation | Medium — slow, ambient, atmospheric |
| Scroll-triggered reveals | Medium — clean fade-up, not dramatic |
| Hover interactions | Subtle — never jarring |
| Loading states | Minimal — skeleton screens preferred |
| Page transitions | Minimal — fast fade |
| Data/number counters | Medium — animated on entry |

### Do NOT animate:
- Text that is already in the viewport on load (except hero)
- Navigation items (they are always visible)
- Any animation that causes layout shift (CLS)
- Animations running on the main thread (use CSS transforms and opacity only)

---

## SECTION 10 — IMAGERY DIRECTION

### Image Types Approved (all confirmed by client)

| Type | Use |
|---|---|
| **Product photography** | Real device shots — car seat device, K9 vest — when available from client |
| **3D renders / illustrations** | Platform visualizations, product concept images — use client materials as reference |
| **Data visualizations / UI mockups** | Dashboard previews, charts, sensor data displays |
| **Cinematic / editorial photography** | Environmental shots, high-end lifestyle — families, military, enterprise settings |
| **Abstract tech visuals** | Particle fields, geometric patterns, circuit traces, connection maps |
| **Mixed** | Most pages use 2–3 types combined |

### Image Style Rules

1. **Dark or desaturated base.** All images should work against a dark background. Avoid images with white or very bright backgrounds.
2. **No generic stock photos.** No smiling people in hard hats. No generic office meeting photos. No hands on keyboards.
3. **Cinematic treatment.** If sourcing stock, look for: dramatic lighting, depth of field, environmental scale.
4. **Consistent color grading.** Apply a subtle cool/blue tint overlay (`multiply` or `color` blend mode) to unify images that have different color temperatures.
5. **Never stretch or distort.** All images use `object-fit: cover` with appropriate `aspect-ratio`.
6. **Always optimize.** Use WebP format, `next/image` for automatic sizing. Provide placeholder blurs.

### Approved Image Sources (for sourcing)

- Unsplash (high-end editorial and environmental)
- Pexels (supplementary)
- Client-provided product images (primary)
- AI-generated product renders (if client approves per render)

### Images to Avoid Absolutely

- Clipart or flat vector illustrations (unless brand-specific icons)
- Overly colorful or saturated images
- Images with visible watermarks or logos of competitors
- Generic "technology" photos (blue circuits on black background — too cliché for this brand)

---

## SECTION 11 — RESPONSIVE DESIGN RULES

### Breakpoints

| Name | Width | Target Devices |
|---|---|---|
| `xs` | 0–479px | Small phones |
| `sm` | 480–767px | Large phones |
| `md` | 768–1023px | Tablets, small laptops |
| `lg` | 1024–1279px | Laptops, desktops |
| `xl` | 1280–1535px | Large desktops |
| `2xl` | 1536px+ | Wide monitors |

### Design Order: Desktop First Visually, Mobile First in Code

Design the primary experience for **1280px desktop** (the investor/enterprise use case). Then adapt down to mobile.

In code, write Tailwind classes mobile-first (unprefixed = mobile, `lg:` = desktop upgrade).

### Mobile-Specific Rules

1. **Navigation:** Full-screen overlay menu on mobile. Never a cramped dropdown.
2. **Hero text:** Scale down to Display LG (48px) or Display MD (36px) on mobile. Never truncate.
3. **Multi-column grids:** Collapse to 1 column on mobile. 2 columns on tablet.
4. **Cards:** Full width on mobile with 16px horizontal padding.
5. **Buttons:** Full width on mobile for primary CTAs. Fixed height 48px minimum (touch target).
6. **Images:** Always fluid, `width: 100%`. Never fixed-width images.
7. **Font size:** Body copy minimum 16px on mobile. Labels minimum 12px.
8. **Spacing:** Reduce vertical section spacing by 30–40% on mobile (e.g., 96px desktop → 64px mobile).

---

## SECTION 12 — DARK MODE DESIGN RULES

**The website is dark mode only. There is no light mode. These rules are absolute.**

### Contrast Requirements

| Text Type | Minimum Contrast Ratio | Note |
|---|---|---|
| Primary body text on bg | 7:1 | WCAG AAA |
| Secondary text on bg | 4.5:1 | WCAG AA |
| Interactive elements | 4.5:1 | Buttons, links |
| Decorative text | 3:1 | Labels, muted |

### Glow Effects

Glow effects are the dark mode equivalent of shadows. Use them to create depth and focus.

| Glow Type | CSS | Use |
|---|---|---|
| Card hover glow | `box-shadow: 0 0 20px rgba(0,194,224,0.15)` | Hovered cards |
| Button glow | `box-shadow: 0 0 12px rgba(0,194,224,0.3)` | Primary button hover |
| Section accent glow | `box-shadow: 0 -1px 60px rgba(0,194,224,0.08)` | Top of important sections |
| Divider glow | Radial gradient from cyan at center to transparent | Section dividers |

### Depth Layering (z-axis simulation in flat UI)

Use background color differences to simulate depth:
1. **Deepest (background):** `#080B14`
2. **Elevated (cards, sections):** `#0D1220`
3. **Highest (modals, tooltips, nav blur):** `#111827` + blur

Never use box-shadow in dark mode for depth — it doesn't work on dark backgrounds. Use background color difference + border + glow instead.

---

## SECTION 13 — CLIENT MATERIAL REFERENCE GUIDE

The following files were shared by the client. Here is how to interpret and use each one:

| File | What it is | How to use it |
|---|---|---|
| `Website.png` | Main website design mockup — the clearest design reference available | Use as the primary visual direction for homepage structure, nav, color application, and overall aesthetic. Not pixel-perfect — interpret and improve. |
| `car seat Idea.png` | Product concept for the SafeNest Car infant safety device | Use for: product page visual direction, feature list content, product card image, tagline ("Smarter Safety From The Start") |
| `DefenseNest Dog.png` | Product concept for the DefenseNest K9 military system | Use for: DefenseNest product page visual direction, feature list content, tactical tone reference, orange accent usage |
| `why Safenest technology.png` | Competitive differentiation infographic | Use for: "Why SafeNest" section content structure, comparison matrix data, capability list |
| `Milestone 1.docx` | Scope document for Milestone 1 | Confirms: homepage is the first deliverable, design foundation is part of M1, deliverables list |
| `Milestone 2.docx` | Scope document for video production | Confirms: cinematic video is a separate milestone. Design a high-quality video placeholder section. |

### Key Visual Elements Confirmed in Client Materials

| Element | Confirmed Status | Action |
|---|---|---|
| Shield logo (blue/white) | Final | Use exactly as provided |
| Dark navy background | Final | `#080B14` or nearest confirmed value |
| Cyan/light blue accent | Directionally confirmed | Exact hex to be confirmed with client vector files |
| Orange accent | Used for DefenseNest branding | Confirmed directionally |
| Navigation structure | Directionally confirmed from Website.png | Solutions, Services, Resources, Platform, Enterprise, Pricing, Get Started |
| CTA text | Confirmed | "Get Started" (nav) + "Request a Demo" + "Watch Demo" |
| Taglines | Confirmed | See approved taglines list in CLAUDE.md Section 6.4 |

---

## SECTION 14 — DESIGN DO'S AND DON'TS

### DO

- ✅ Use full-viewport hero sections with ambient background animations
- ✅ Apply cinematic transitions between sections (gradient bleeds, not hard cuts)
- ✅ Use generous whitespace — sections should breathe
- ✅ Layer depth through background color variation and glow effects
- ✅ Make the shield logo prominent in the navigation
- ✅ Use cyan as the primary accent for interactive elements and highlights
- ✅ Apply scroll-triggered animations to all major content blocks
- ✅ Let product photography be large, full-bleed, and dramatic
- ✅ Use data visualization elements to communicate AI intelligence
- ✅ Make CTAs unmissable — high contrast, well-spaced, purposeful copy
- ✅ Keep mobile experience premium — not a stripped-down afterthought
- ✅ Use placeholder content that looks production-quality (not grey boxes)

### DO NOT

- ❌ Add a light mode or white background sections
- ❌ Use rainbow or neon color accents
- ❌ Use cartoonish illustrations or flat 2D characters
- ❌ Add more than 2 accent colors to a single section
- ❌ Animate text that is already visible on page load (jarring)
- ❌ Use stock photos of smiling professionals in corporate settings
- ❌ Crowd sections with too many elements — always cut, never add
- ❌ Use the orange accent outside of DefenseNest / warning contexts
- ❌ Scale the logo or distort it in any way
- ❌ Use gradient text (text with gradient fill) — only solid colors on text
- ❌ Add borders or shadows that make the design feel "boxed in"
- ❌ Use decorative elements that don't serve the content
- ❌ Animate anything using JavaScript that can be done in CSS

---

## SECTION 15 — STITCH-SPECIFIC INSTRUCTIONS

> This section is written specifically for Google Stitch to ensure the AI design tool generates output aligned with this brief.

### When generating this design in Stitch:

**Start with:**
- Color palette: dark navy `#080B14` as base, `#00C2E0` as primary accent, `#E87D00` as secondary accent
- Font: Space Grotesk (headings) + Inter (body)
- Mode: Dark only

**For the homepage hero, generate:**
- Full-viewport dark section
- Large centered headline in Space Grotesk 700
- One or two words highlighted in cyan
- Two CTA buttons: one filled cyan, one outlined white
- Background: abstract particle/mesh animation suggestion or static dark gradient with subtle texture

**For product cards, generate:**
- Dark card with subtle border
- Top colored tag badge (blue / orange / cyan per product)
- Product name headline
- Short description
- Feature list with cyan checkmarks
- "Learn More" link in cyan

**For the "Why SafeNest" section, generate:**
- A comparison table with SafeNest column in cyan headers
- Competitor columns in muted gray
- Green checkmarks for SafeNest, gray indicators for competitors

**For all section headings, generate:**
- Small ALL CAPS cyan category label above the main headline
- Main headline in Space Grotesk at large size
- Short descriptive subtext in muted gray below

**Keep all outputs:**
- Dark background only
- Generous padding (minimum 80px vertical on desktop)
- Clean, minimal, no clutter
- Enterprise-grade, not startup-casual

---


---

## SECTION 16 — PHASE 2: UI/UX & CONTENT ARCHITECTURE (Milestone 2)

Phase 2 focuses on humanizing the brand's messaging, formalizing the content ecosystem (Insights), and standardizing premium user interaction patterns across the platform.

### 16.1 — Strategic Messaging Shift: "Human-Centric Protection"

**Objective:** Transition from purely technical/clinical descriptions to emotional, high-stakes protection narratives.

| Before (Milestone 1) | After (Milestone 2) |
|---|---|
| "Protecting what matters most..." | "Proactive Safety Intelligence **for Every Environment.**" |
| Focusing on technical sensor specs | Focusing on "Peace of Mind" and "Preventing the Unthinkable" |
| Generic industry labels | "Hero Industry" focus (Child Safety, Defense, Enterprise) |

### 16.2 — The Insights Ecosystem

**Goal:** Establish SafeNest as a thought leader in AI Safety and proactive risk intelligence.

**1. Insights Index (`/insights`)**
- **Featured Layout:** Large-format card for the latest case study or platform update.
- **Categorical Filtering:** Tab-based filtering (Case Studies, Platform Updates, AI Safety, News).
- **Search Capability:** Left-aligned, minimal search bar for quick content discovery.
- **Dynamic Grid:** 3-column responsive grid with hover-lift animations.

**2. Article Template (`/insights/[slug]`)**
- **Editorial Typography:** Optimized for long-form readability.
- **Header Metadata:** Includes read-time, date, and category badge.
- **Author Block:** Formal bio with initials-based avatar and social sharing buttons.
- **"Read Next" Section:** Scroll-triggered footer to encourage continued platform engagement.

### 16.3 — Premium Form Interface (PFI)

**Objective:** Standardize all user data entry points to feel production-quality and mobile-optimized.

| Component | Design Rules |
|---|---|
| **PremiumInput** | Floating labels (CSS-driven), 1px subtle borders, cyan focus rings. |
| **Mobile UX** | 16px minimum font size (prevent iOS zoom), 48px minimum touch height. |
| **Validation** | Real-time visual feedback (red borders for errors, green/cyan for success). |
| **Transitions** | Smooth opacity and transform fades for label positioning. |

### 16.4 — Admin Content Portal

**Objective:** A secure, brand-consistent interface for platform managers to manage the Insights ecosystem.

- **Route:** `/admin/articles/create`
- **Identity:** Uses the same PFI (Premium Form Interface) but with an "Admin Access Only" security badge.
- **Capabilities:** Markdown-supported content area, category selection, and dual image input (URL + Local File Upload).

### 16.5 — Global Interaction Enhancements

**1. Sticky CTA (The Conversion Bridge)**
- **Behavior:** Slides in from the bottom after 50% scroll depth.
- **Dismissible:** Persistent but non-intrusive (X to dismiss).
- **Logic:** Hidden on high-intent conversion pages (Demo, Contact) and Admin portals.

**2. Navigational Guidance**
- **Scroll Cues:** Animated chevron-down indicators bridging sections to encourage downward flow.
- **Reassurance Badging:** Added to Contact/Demo pages (e.g., "Guaranteed 24h Response") to reduce friction at the point of lead capture.

---

*This document is the complete design brief for SafeNest Technologies.*
*All design decisions must align with the confirmed client preferences documented here.*
*Maintained by Ayoub. Last updated: May 10, 2026 (Milestone 2 updates).*

