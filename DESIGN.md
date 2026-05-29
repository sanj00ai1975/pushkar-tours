# Design Brief

## Direction

Pushkar Tours — Premium luxury travel brand blending warm Indian heritage aesthetics with contemporary digital sophistication for discerning travelers seeking curated, personalized journeys.

## Tone

Refined editorial warmth with luxury hospitality ambiance—evoking Indian saffron heritage through intentional color warmth and premium material depth without cliché or kitsch.

## Differentiation

Warmly-lit visual system with glassmorphic layering and deep amber-orange tones creates an emotionally resonant, trust-building aesthetic uniquely positioned between corporate travel and artisanal boutique.

## Color Palette

| Token             | OKLCH            | Role                                      |
| :---------------- | :--------------- | :---------------------------------------- |
| background        | 0.96 0.015 45    | Warm cream base (light), dark charcoal    |
| foreground        | 0.2 0.03 45      | Near-black text (light), warm off-white   |
| card              | 0.98 0.01 45     | Glass-effect surfaces with opacity/blur   |
| primary           | 0.52 0.18 38     | Warm amber-terracotta hero CTAs           |
| accent            | 0.58 0.22 35     | Rich saffron for highlights & emphasis    |
| muted             | 0.92 0.02 45     | Soft dividers, secondary backgrounds      |
| destructive       | 0.55 0.22 25     | Error states (coral-red)                  |

## Typography

- Display: Fraunces — elegant serif for H1/H2 hero titles, founder stories, section headings; conveys editorial luxury & Indian artistic heritage
- Body: DM Sans — modern sans-serif for body copy, UI labels, navigation; ensures readability & contemporary professionalism
- Scale: hero `text-5xl md:text-7xl font-bold`, h2 `text-3xl md:text-5xl font-bold`, h3 `text-lg font-semibold`, body `text-base`, label `text-sm font-semibold tracking-widest`

## Elevation & Depth

Layered glassmorphism with soft shadows creates visual hierarchy through transparency, backdrop blur, and warm lighting—no harsh shadows; surfaces feel floating and dimensional.

## Structural Zones

| Zone    | Background              | Border                | Notes                                           |
| :------ | :---------------------- | :-------------------- | :---------------------------------------------- |
| Header  | Card with blur (0.1)    | Soft amber accent     | Sticky, glass-effect navbar; subtle gradient    |
| Content | Warm cream/dark         | None                  | Alternates light/glass cards for rhythm         |
| Sections| Glass cards (light/dark)| White border (20-30%) | Rounded 2xl, shadow-card, section dividers      |
| Footer  | Slightly darker card    | Soft top border       | Multi-column layout, warm accent links          |

## Spacing & Rhythm

Generous vertical rhythm (8px base) with 48–64px section gaps; cards use 24px internal padding; maintains spacious, editorial feel respecting Indian hospitality warmth and premium pricing psychology.

## Component Patterns

- Buttons: amber-primary gradient with hover lift (shadow-card-hover), rounded-lg, text-label uppercase
- Cards: glass-dark (dark mode) with backdrop-blur-lg, border white/30, shadow-card, rounded-2xl
- Badges: pill-shaped, accent color, text-xs font-semibold
- Links: amber accent with smooth underline transition

## Motion

- Entrance: fade-in 0.5s, slide-up 0.6s for staggered hero content
- Hover: shadow-card-hover lift + color brighten via transition-smooth (0.3s cubic-bezier)
- Decorative: float 3s ease-in-out (subtle vertical drift for cards, WhatsApp widget)
- Scroll reveals: stagger animation on tour cards, founder stories

## Constraints

- No harsh shadows or glows; maintain premium restraint
- Never use raw hex/named colors; always resolve via semantic tokens
- Glassmorphism reserved for cards/header; background never transparent-only
- Typography hierarchy enforced via size/weight, not color alone
- Mobile-first breakpoints: nav hamburger below `md`, cards stack below `lg`

## Signature Detail

Warm amber-to-saffron gradient buttons with soft glow effect on hover (box-shadow blur) positioned against deep charcoal surfaces creates the brand's signature "warm luxury against dark luxury" aesthetic, evoking candlelit premium hospitality meets modern digital craft.
