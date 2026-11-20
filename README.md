# Child Learning Centre (CLC) - React Web Application

Modern, responsive, multipage React.js web application for **Child Learning Centre (CLC)** — Paediatric Development & Clinical Therapy Clinics across Maharashtra (Nerul, Thane, Chembur, Vashi, Nagpur, Nashik).

## 🚀 Features

- **Multipage Architecture with React Router**:
  - `/` — Flagship Home page (hero, stats, services preview, milestones, how it works, videos, clinics preview, reviews, WhatsApp booking).
  - `/about` — About CLC, clinical leadership, multidisciplinary team, and clinic facilities.
  - `/services/therapies` (and `/services`, `/therapies`) — Clinical therapy programmes (occupational therapy, sensory integration, speech therapy, remedial education).
  - `/services/areas-of-support` (and `/areas-of-support`) — Developmental challenge guide organised by symptom (communication, sensory regulation, attention & executive function, motor development, academic support).
  - `/how-it-works` — 40-minute therapy session structure, 4-step evaluation roadmap, and video demonstrations.
  - `/centres` — Interactive directory of all clinical locations with area filtering (Navi Mumbai, Mumbai & Thane, Nagpur & Nashik), Google Maps directions, and phone dialling.
  - `/parents-corner` — Practical guides, home routines, communication tips, sensory strategies, and FAQs for parents.
  - `/reviews` — Verified parent feedback, 4.8/5 Google rating showcase, and developmental milestones.
  - `/contact` — Consultation booking and clinic tour requests with real-time WhatsApp enquiry generator.
  - `*` (404) — Compact 404 page with navigation links to key sections.
- **Unified Design & Motion System**:
  - Single `<Reveal>` API with reduced-motion detection and graceful fallback when JavaScript is disabled (`html.js`).
  - Shared `<PageHero>`, `<SectionHead>`, and `<CtaBand>` across inner pages for a cohesive aesthetic.
  - Unified card hover system with strict accessibility compliance (`:focus-visible`).
  - Active route metadata and canonical management via `usePageMeta` hook.
- **Global Modals & State Management**:
  - `ModalContext` enables triggering the **Booking Modal** or **YouTube Video Player Modal** from any page or button with full focus-trapping and keyboard Escape closing.
- **Interactive WhatsApp Enquiry Generator**:
  - Live 10-digit mobile number validation and sanitisation.
  - Real-time character counter for clinical notes.
  - Pre-fills formatted inquiry messages directly into WhatsApp with parent name, child name/age, centre, concerns, and preferred calling hours.
- **Responsive & Accessible**:
  - Zero layout jumps, proper `width` and `height` dimensions on images.
  - Semantic HTML (`<button>` for interactive cards, `<main id="main">`, skip link).
  - High-contrast colour tokens (CLC red `#D32F2F`, deep navy `#0F172A`, warm cream `#FAF9F6`).

---

## 📁 Project Structure

```text
CLC-WEBSITE/
├── public/
│   └── assets/                     # Optimised static assets (centre, logo, services, support, team)
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── BookingModal.jsx    # Pop-up consultation modal with focus trap
│   │   │   ├── Motion.jsx          # Reveal, SplitText, useInView, useHeroParallax
│   │   │   ├── ScrollProgress.jsx  # Top reading progress indicator
│   │   │   ├── ScrollToTop.jsx     # Route change scroll reset
│   │   │   ├── ToTopButton.jsx     # Floating back to top button
│   │   │   └── VideoModal.jsx      # Video player modal with focus trap
│   │   ├── forms/
│   │   │   └── BookingForm.jsx     # Full WhatsApp evaluation booking form
│   │   ├── layout/
│   │   │   ├── Footer.jsx          # Multi-column footer with links and contact info
│   │   │   ├── Header.jsx          # Brand logo & responsive desktop navigation
│   │   │   ├── MobileActionBar.jsx # Bottom mobile navigation (Call / WhatsApp / Book)
│   │   │   ├── MobileMenu.jsx      # Offcanvas mobile navigation drawer
│   │   │   └── TopBar.jsx          # Hours, phone, and WhatsApp top ribbon
│   │   └── ui/
│   │       ├── CentreCard.jsx      # Clinic location card with directions & calling
│   │       ├── CtaBand.jsx         # Shared call-to-action band
│   │       ├── Faq.jsx             # Accordion component for clinic questions
│   │       ├── JourneyCard.jsx     # Accessible interactive button card
│   │       ├── PageHero.jsx        # Shared page hero banner with breadcrumbs
│   │       ├── ReviewCard.jsx      # Parent testimonial card
│   │       ├── SectionHead.jsx     # Shared split-text section header
│   │       ├── ServiceCard.jsx     # Therapy programme card
│   │       ├── StatsCounter.jsx    # Animated count-up component with reduced-motion support
│   │       ├── TeamCard.jsx        # Clinical therapist profile card
│   │       └── Timeline.jsx        # Scroll-drawn timeline indicator
│   ├── context/
│   │   └── ModalContext.jsx        # Global modal state provider
│   ├── data/
│   │   ├── centresData.js          # Clinic locations, addresses, coordinates
│   │   ├── journeyData.js          # Journey & evaluation step descriptions
│   │   ├── reviewsData.js          # Parent testimonials and stats
│   │   ├── servicesData.js         # Therapy programs, benefits, and support areas
│   │   └── teamData.js             # Clinical leadership team profiles
│   ├── hooks/
│   │   └── usePageMeta.js          # Route title, description, and canonical link hook
│   ├── pages/
│   │   ├── services/
│   │   │   ├── AreasOfSupportPage.jsx  # /services/areas-of-support
│   │   │   └── TherapyProgramsPage.jsx # /services/therapies
│   │   ├── AboutPage.jsx           # /about
│   │   ├── CentresPage.jsx         # /centres
│   │   ├── ContactPage.jsx         # /contact
│   │   ├── HomePage.jsx            # /
│   │   ├── HowItWorksPage.jsx      # /how-it-works
│   │   ├── NotFoundPage.jsx        # 404
│   │   ├── ParentsCornerPage.jsx   # /parents-corner
│   │   ├── ReviewsPage.jsx         # /reviews
│   │   └── ServicesPage.jsx        # Redirect / wrapper
│   ├── styles/
│   │   ├── index.css               # Main design tokens, reset & component styles
│   │   └── ParentsCornerPage.css   # Scoped Parents Corner styles
│   ├── App.jsx                     # Route registry and modal provider
│   └── main.jsx                    # Application entry point (adds .js class)
├── index.html                      # HTML shell with Google fonts, meta, JSON-LD schema
├── package.json                    # Project metadata & dependencies
├── vite.config.js                  # Vite configuration
└── README.md
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
