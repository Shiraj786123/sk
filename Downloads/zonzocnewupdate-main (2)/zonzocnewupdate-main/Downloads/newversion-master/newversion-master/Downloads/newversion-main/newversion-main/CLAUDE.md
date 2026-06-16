# ZonzocTech Project Guidelines

## Project
- Framework: Next.js 14 App Router
- Deployed on: Vercel
- Live URL: zonzoctech.com

## Rules
- Never change CSS or styling unless explicitly told
- Only update text content when asked
- Always push with clean commits (no .next folder)
- .next/ is in .gitignore — never commit it

## Design System
- Font: Inter (loaded via Google Fonts in app/layout.jsx)
- CSS variables defined in src/index.css (:root)
- Primary: #00448f | Dark: #003070 | Light: #e8f0fb
- Black: #0a0a0a | Grey: #6b7280 | Border: #e2e8f0 | Bg light: #f8faff
- Border radius: 8px (sm) / 16px (md) / 24px (lg) / 100px (pill)
- Transition: 0.2s ease | Container: 1200px | Section padding: 100px

## Completed Pages — Content Rewritten
- ✅ Homepage
- ✅ About
- ✅ SEO Services
- ✅ AI Web Application Development
- ✅ Full Stack Web Development
- ✅ AI Website Design & Development
- ✅ Ecommerce Development & Optimization
- ✅ Website Maintenance & Security
- ✅ AI SEO & Search Optimization
- ✅ AI Software Development
- ✅ Contact page

## Deleted Pages
- ❌ /ai-seo → redirected to /seo-ai-search-optimization
- ❌ /google-search-console → redirected to /seo-services

## Completed Styling Work

### Homepage Components
- ✅ Global CSS variables + Inter font (src/index.css)
- ✅ Topbar — new topbar.css, class names updated in Navbar.jsx
- ✅ Navbar — new navbar.css, JSX class names updated, scroll detection added
- ✅ Hero — dark gradient #003070→#00448f, white text, 90vh
- ✅ TrustBar — white bg, border, stats row, blue numbers
- ✅ Services/Solution — #f8faff bg, white cards, blue active tabs
- ✅ Process — #003070 dark bg, white numbered cards
- ✅ Why Choose — white bg, Inter, blue accents, stats grid
- ✅ Tech Stack (WhoWeAre) — #f8faff bg, white cards, 5-col grid, 20s scroll
- ✅ Portfolio (SuccessSection) — static 3-col grid, white cards, #e2e8f0 border
- ✅ Reviews — #f8faff bg, white cards, blue rating number
- ✅ Contact CTA — #003070 bg, white text, white form card
- ✅ Footer — #0a0a0a bg, clean link columns
- ✅ GrowNow — #f8faff bg, blue gradient box

### Service Pages (full design system pass)
- ✅ SEOServices.css
- ✅ AIWebAppPage.css
- ✅ FullStackWebDev.css
- ✅ AIWebsiteDesign.css
- ✅ AISoftwareServices.css
- ✅ EcommercePage.css
- ✅ WebsiteMaintenance.css
- ✅ AIOptimizationPage.css
- ✅ AboutUs.css
- ✅ ContactPage.css
- ✅ CaseStudyPage.css

### Service Page Design System Applied
- Font: Inter everywhere (was Poppins)
- Hero: linear-gradient(135deg, #003070, #00448f), H1 52px 800 white
- Hero p: rgba(255,255,255,0.85) 20px line-height 1.7
- Hero CTA: white bg, #00448f text, border-radius 8px
- Section H2: 40px 800 #0a0a0a
- Body text: 16px #6b7280 line-height 1.7
- Cards: white bg, border 1px solid #e2e8f0, radius 16px, shadow 0 4px 24px rgba(0,0,0,0.06)
- FAQ cards: white bg, border #e2e8f0, radius 12px
- CTA sections: linear-gradient(135deg, #003070, #00448f), white button #00448f text
- Section padding: 100px 0 desktop / 60px 0 mobile
- Mobile H1: 36px, single-column grids

### Responsive Design (all breakpoints complete)
- ✅ src/index.css — global typography + container padding rules
- ✅ All 9 service page CSS files — 1024px breakpoint added (hero 80px padding, H1 42px, H2 32px, 2-col grids)
- ✅ hero.css, trustbar.css, threeSteps.css, Review.css, soMuchMore.css, ContactPage.css, CaseStudyPage.css
- Breakpoints covered: 320px, 480px, 768px, 1024px, 1280px, 1920px+

### Case Studies
- ✅ 6 case study pages under app/case-studies/[slug]/page.jsx
  - basildon-acr, cnh-plumbing, luxury-retreats, middlesex-roofers, premier-blinds, seo-london-dentist
- ✅ Each page: Navbar + Footer, vertical image gallery (stacked, max-width 900px, clickable)
- ✅ Sections: hero, challenge grid, what we built (6 cards), results (4 stats + checklist), CTA
- ✅ Images: clickable via `<a target="_blank">` (server component — no 'use client')
- ✅ CSS: src/styles/CaseStudyPage.css with .cs__ prefix

### Shared Service Component Library
- ✅ src/styles/service-shared.css — imported globally in app/layout.jsx
- Available class names:
  - Buttons: `.sp-btn` `.sp-btn-secondary`
  - Stats bar: `.sp-stats-bar` `.sp-stat-item` `.sp-stat-number` `.sp-stat-label`
  - Why choose: `.sp-why-grid` `.sp-why-card` `.sp-why-card-title` `.sp-why-card-text`
  - Tech section: `.sp-tech-grid` `.sp-tech-card` `.sp-tech-card-title` `.sp-tech-pills` `.sp-tech-pill`
  - Process cards: `.sp-process-grid` `.sp-process-card` `.sp-process-number` `.sp-process-title` `.sp-process-text`
  - Who it's for: `.sp-audience-section` `.sp-audience-grid` `.sp-audience-card` `.sp-audience-title` `.sp-audience-text`

### Navbar (mobile overhaul complete)
- ✅ Hamburger toggle: `.navbar-mobile-toggle` with 3 `<span>` bars, shown at ≤1024px
- ✅ Slide-in mobile panel: fixed, left-to-right, 75% wide / max 300px / full height
- ✅ Dark backdrop: `.mobile-backdrop.active` at z-index 9997, closes menu on click
- ✅ Close button: `.mobile-close` (✕) positioned top-right inside panel
- ✅ All nav links call `setMobileOpen(false)` on click
- ✅ Services accordion (mobile only): `.mobile-services` with `.mobile-services-toggle` and `.mobile-services-dropdown`
  - Desktop Services dropdown (`navbar-dropdown`) hidden inside mobile panel via CSS
  - Mobile accordion hidden on desktop via `display: none`
  - Sub-links grouped by category labels (`.mobile-dropdown-label`)
- State variables in Navbar.jsx: `mobileOpen`, `mobileServicesOpen`, `activeDropdown`, `mobileDropdown`

### Tech Stack (WhoWeAre)
- ✅ 5 categories, each with `cols` property → inline `gridTemplateColumns: repeat(${cols}, 1fr)` (no empty slots)
- ✅ Scroll animation: 20s duration
- ✅ TensorFlow: CDN icon from devicons; LangChain fallback: /images/chatgpt.svg

### WhyUs / WhyChoose Section
- ✅ Right side: `.whyus-right` with absolute-positioned growth illustration + stats card overlay
- ✅ Stats card: `.whyus-stats-card` — 2-col grid, bottom-left overflow, white bg, blue shadow
- ✅ Illustration: `/images/growth-illustration.jpg`

## Still To Do
- ⬜ Apply sp-* shared classes to service page JSX components
- ⬜ Schema markup / structured data
- ⬜ Google Search Console submission
