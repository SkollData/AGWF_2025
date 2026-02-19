# Design System: Análisis Geoestadístico 2027

**Project ID:** 5609667268186818547

## 1. Visual Theme & Atmosphere

The design radiates **sophisticated authority** — a premium, data-driven aesthetic that feels like a high-end political analytics firm. The atmosphere is **clean, airy, and trustworthy**, with generous whitespace balanced against deep navy and azure accents. The overall mood is one of **precision meets elegance**, where every element conveys intelligence and strategic capability. Subtle geometric mesh patterns in the backgrounds hint at data grids and geographic coordinates.

## 2. Color Palette & Roles

- **Deep Royal Blue (#1A3C6B)** — Primary brand color. Used for headings, navigation text, logo backgrounds, and key indicators. Conveys authority and trust.
- **Vibrant Azure (#2196F3)** — Secondary accent. Used for interactive elements, CTAs, progress bars, and hover states. Adds energy and modernity.
- **Snow White (#FFFFFF)** — Primary page background. Clean canvas for content.
- **Whisper Gray (#F6F7F8)** — Background-light. Subtle body background for depth against white cards.
- **Deep Navy (#0D1B2A)** — Dark background for footers and dramatic sections. Creates grounding contrast.
- **Cool Slate (#546E7A)** — Body text color. Readable without being harsh.
- **Frosted White (rgba 255,255,255,0.7)** — Glass-morphism card backgrounds. Creates depth through translucency.

## 3. Typography Rules

- **Font Family:** Inter (Google Fonts), sans-serif fallback
- **Headings:** Font-weight 800-900 (extrabold to black), tight tracking (-0.05em), uppercase for nav/brand text
- **Body Text:** Font-weight 400-500 (normal to medium), relaxed leading (1.625)
- **Labels/Badges:** Font-weight 700 (bold), uppercase with widest tracking, smaller sizes (text-xs, text-sm)
- **Numbers/Stats:** Font-weight 900 (black), large sizes (text-3xl to text-4xl)

## 4. Component Stylings

- **Buttons:** Gently rounded corners (8px). Primary buttons use white text on gradient (Royal Blue → Azure). Secondary buttons use glass-morphism with white text. Hover states include shadow elevation and subtle scale transforms.
- **Cards/Containers:** Generously rounded (12px/xl). Glass-morphism effect (translucent white, 12px blur, thin white border). Soft blue-tinted shadows (shadow-primary/5). Hover states include slight upward translate (-1px).
- **Navigation:** Fixed top bar, glass-morphism background, subtle bottom border (primary/10). Logo has solid primary background with white icon.
- **Inputs/Forms:** Rounded (8px), light border (slate-200), focus state with accent-blue ring. Full-width within containers.
- **Tables:** Minimal styling with divide lines, hover row highlights, status badges with colored backgrounds.
- **Progress Bars:** Height 8px, full-round ends, gradient fill from primary to accent-blue.
- **Slide Menu:** Right-side panel, 320px wide, staggered animation entry, icons with labels.

## 5. Layout Principles

- **Max Width:** 7xl (80rem) for content containers
- **Padding:** px-6 for horizontal content padding
- **Section Spacing:** py-20 to py-32 for vertical breathing room
- **Grid System:** CSS Grid, responsive (1 col → 2 col → 3/4 col)
- **Hero Overlap:** Stats bar overlaps hero with negative margin (-mt-16) creating depth
- **Z-index Strategy:** Nav (50), Overlay (60), Slide Menu (70)

## 6. Design System Notes for Stitch Generation

When generating new screens for this project, always include:

- Platform: Web, Desktop-first
- Theme: Light with deep blue accents (#1A3C6B primary, #2196F3 accent)
- Background: Pure White (#FFFFFF) body, Frosted glass-morphism cards
- Font: Inter, bold/black headings, relaxed body text
- Navigation: Fixed glass-morphism top bar with "VotoAnalítico" branding and hamburger menu
- Breadcrumbs: "Inicio > Page Title" format in hero section
- Hero: Blue gradient header (135deg, #1A3C6B → #2196F3) with radial dot pattern overlay
- Footer: Dark navy (#0D1B2A) with white text, minimal style
- Cards: Glass-morphism with soft shadows and hover elevation
- Buttons: Rounded 8px, gradient fills, hover shadow effects
