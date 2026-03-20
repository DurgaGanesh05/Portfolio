FIGMA AI DESIGN BRIEF — S.V. DURGA GANESH PORTFOLIO WEBSITE

CONCEPT: "Data Story Portfolio"
Design a dark, bento-grid data dashboard-style portfolio website for Durga Ganesh, a Data Science and ML engineering student. The design language draws from tools like Vercel, Observable HQ, and Linear — precise, dark, data-forward. Every section visualizes information rather than just listing it.

---

DESIGN SYSTEM:

Background: #050810 (void black) with an animated dot-grid pattern (2px dots, 40px spacing, indigo at 8% opacity)
Surface / Card background: #0D1121, #111827
Accent Indigo: #6366F1
Accent Cyan: #22D3EE
Accent Violet: #A78BFA
Success Green: #34D399
Typography: Clash Display (headings) + DM Mono (data/code/stats) + Instrument Sans (body)
All cards: 1px border rgba(99,102,241,0.2), border-radius 16px, subtle top-edge gradient highlight
Signature detail: Every card has a faint indigo-to-cyan gradient top border stripe (1px height, 100% width)

---

SECTION 1 — FLOATING NAV BAR
- Pill-shaped floating navbar, centered, max-width 680px, positioned 60px from top
- Glassmorphism: background rgba(13,17,33,0.8), backdrop-filter blur(20px), 1px indigo-tint border
- Left: DG hexagon monogram (36px, gradient stroke, rotates 60deg on hover)
- Center: About · Skills · Projects · Certs · Contact — active state = indigo dot under link
- Right: "Resume ↗" pill button — outline style, fills with indigo gradient on hover
- Scroll behavior: transparent at 0px → frosted glass + height reduces from 72px to 58px after 80px scroll

SECTION 2 — HERO (Full viewport height)
- Asymmetric 2-column layout: 58% left, 42% right
- Background: animated indigo/violet gradient orb (600px blur, 8s cycle) + noise grain texture 4%
- Left column (top to bottom):
  1. Status pill: animated green dot + "Available for Internships" in 12px DM Mono
  2. H1 (3 lines): "Data" / "Analyst &" / "ML Engineer" — last line has animated SVG brushstroke underline that draws itself on load (1.2s ease)
  3. Typewriter subtitle: "I build systems that turn raw data → real decisions"
  4. Stats row: 3 chips [ 03 Projects ] [ 02 Oracle Certs ] [ 7.70 CGPA ] — DM Mono, count-up on load
  5. CTA buttons: "Explore Work ↓" (indigo gradient fill) + "Get In Touch" (outline)
  6. Social row: GitHub + LinkedIn + Phone icons, glow ring on hover
- Right column: 3 floating cards stacked at angles (-8deg, -3deg, 0deg):
  Card 1 back: Power BI dashboard preview screenshot (60% opacity)
  Card 2 mid: Python ML code snippet with syntax highlighting
  Card 3 front: Accuracy gauge showing "67%" in 64px DM Mono with indigo glow
  On hover: cards fan out like playing cards revealing all three. Drop shadow: 0 20px 60px rgba(99,102,241,0.3)

SECTION 3 — ABOUT
- 2-column: 40% left (avatar module) + 60% right (bio + stats)
- Avatar module: 220px circle with animated dashed rotating indigo ring (20s clockwise), static violet inner ring, 12 data-point dots around the perimeter connected by thin lines
- Bio text: 2 paragraphs. Para 2 ends with: "From cleaning messy CSVs to deploying ML classifiers, I work across the full data pipeline."
- Stats: 3 horizontal cards each with count-up number + label + animated gradient progress bar (indigo→cyan, fills on scroll entry)
  Cards: "03 Projects Completed" | "02 Oracle Certifications" | "7.70 Current CGPA"

SECTION 4 — SKILLS (Bento Grid)
- Asymmetric bento layout — 1 tall card left (Languages) + 2 right-stacked cards (Libraries, Tools) + full-width bottom (Soft Skills)
- Languages card: Terminal style — dark background, green cursor, items "type out" on scroll entry, DM Mono font, blinking cursor at end
- Libraries card: NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn as icon+name chips in 3-column grid. Chips lift (translateY -3px) with indigo glow on hover
- Tools card: MySQL, Power BI, Git, VS Code, PyCharm chips with tool brand color accents
- Section header right side: animated radar/spider chart (5 axes: Python, ML, SQL, Viz, Tools) fills indigo polygon on scroll
- Soft Skills row: 4 centered pill tags — Collaboration · Adaptability · Time Management · Problem Solving

SECTION 5 — PROJECTS (Masonry Feature Grid)
- Scrolling tech-tag marquee below section title (very subtle, 30% opacity, DM Mono)
- Project 1 (full width hero card): blurred dashboard screenshot bleeds on right half. Left: project content. "01" as 120px DM Mono watermark at 12% opacity. 3 cyan-arrow impact bullets. Tags + date + GitHub + Case Study buttons. Card hover: border glows indigo, lifts 6px, watermark number brightens.
- Project 2 (half width): Model comparison meter UI — two gauges side by side, Decision Tree highlighted with "SELECTED" badge. 67% in 48px glowing DM Mono.
- Project 3 (half width): Animated sparkline chart (SVG line draws in on scroll). Cyan colored. Stack icons row: Pandas/NumPy/Matplotlib/Seaborn pill icons.
- All cards: on hover — border 20%→80% opacity, box-shadow glow, translateY(-6px)

SECTION 6 — CERTIFICATIONS (Flip Cards)
- 3 equal-width cards in a row
- Front face: Issuer logo centered, brand-color top stripe (Oracle red / CipherSchools blue), cert title, year badge, "Verified ✓" green chip
- On hover: card flips 180deg on Y-axis (CSS 3D) revealing back face: cert ID, issue date, "View Certificate" button
- Cards: Oracle Cloud Infra Gen AI 2025 · Oracle Data Platform Foundations 2025 · CipherSchools ML with Data Science

SECTION 7 — EDUCATION (Horizontal Timeline)
- Horizontal scrolling timeline, line flows left (2020) to right (present) with animated gradient (gray→indigo→cyan)
- 3 nodes alternating above/below the timeline:
  Node 1 (below): Matriculation 2021, gray node, Sanskruthi Global School, 71%, gray card
  Node 2 (above): Intermediate 2023, violet node, Sanskruthi Global School, 72%
  Node 3 (below): B.Tech LPU ongoing, indigo pulsing ring node (active indicator), 7.70 CGPA, indigo bordered card, "ONGOING" cyan badge
- Timeline line has a flowing gradient animation (left to right, slow)

SECTION 8 — CONTACT (Beacon Section)
- Full-width section with large pulsing indigo orb in background (opacity 0.15→0.35, 4s loop)
- "Let's Build Something With Data" — 52px Clash Display, centered
- Subtitle: "Open to internships · collaboration · data projects" in DM Mono, cyan, letter-spaced
- 3 contact method cards (280px each): Phone card · LinkedIn card · GitHub card
  Each: icon + info + glow on hover + indigo top border on hover
- Below: minimal contact form — Name, Email, Message, Send button (arrow animates right on hover, turns green "Sent ✓" on submit)

SECTION 9 — FOOTER
- DM Mono: "© 2025 S.V. Durga Ganesh · Built with curiosity & Python" left aligned
- Right: social icons + "Back to top ↑" button
- Top border: indigo→cyan 1px gradient line

---

GLOBAL INTERACTIONS:
- Page load: staggered reveal sequence (grid→nav→hero text lines→cards, 0.4–1.6s delays)
- Scroll: IntersectionObserver fade-up (translateY 24px→0, 0.5s ease) with 100ms stagger
- Custom cursor: 12px indigo crosshair + 40px trailing circle (0.12s lag). Expands on card hover, changes to text cursor on links
- Custom scrollbar: 4px width, indigo gradient thumb, transparent track
- Section dividers: indigo-to-cyan line that draws left-to-right on scroll entry
- Mobile: bottom tab nav, swipeable hero cards, vertical timeline, single-column bento grid

---

DELIVERABLES NEEDED:
Please design the full Figma file with:
1. A complete desktop layout (1440px canvas) for all 9 sections
2. Mobile layout (390px canvas) for all sections
3. Component library: nav, project cards, cert flip cards, skill chips, timeline nodes, contact cards, stat bars
4. All hover/interactive states as separate frames or component variants
5. A color style guide frame with all tokens
6. Typography scale frame showing all type styles used