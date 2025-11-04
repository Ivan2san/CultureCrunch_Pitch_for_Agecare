# CultureCrunch - Data-Driven Psychosocial Safety Platform

## Overview

CultureCrunch is a B2B SaaS platform designed to transform workplace psychosocial compliance into actionable leadership insights using data intelligence. This pitch/marketing web app aims to attract founding partners for a pilot program, focusing on the Australian aged care sector. Its core purpose is to convert prospective aged care providers into partners by demonstrating how data-driven insights can leverage compliance requirements into proactive workforce retention tools. The platform addresses critical issues like high staff turnover, increasing mental health claims, and stringent regulatory compliance within aged care by offering a lightweight, privacy-minimal, pulse-survey based solution.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**October 22, 2025**:
- Implemented Mission Marquee design in Solution section: wrapped mission statement in gradient card with Sparkles icons for visual prominence
- Converted 6-week program description to scannable bullet format with checkmark icons
- Updated program scope from "100-500 staff" to "100-200 staff" facilities  
- Renamed program to "6-Week Psychosocial Leadership Installation Program" (added "Leadership")
- Enhanced markdown export functionality to capture collapsed accordion content using data attributes (data-week-title, data-week-description) instead of DOM manipulation, ensuring all weekly timeline descriptions are included in exports regardless of UI state
- Removed "What Changes for You" heading per streamlining request
- Added introductory text for benefit cards: "After our 6-week psychosocial leadership program, you will have installed the following:"

**October 21, 2025**:
- Comprehensive removal of all "AI" terminology across entire codebase (30+ component files) per strategic decision
- Replaced "AI" references with outcome-focused alternatives: "data-driven," "intelligence-powered," "Weekly Brief," or removed entirely
- Updated brand positioning from "AI-Powered" to "Data-Driven Psychosocial Safety Platform" throughout
- Changed all instances of "AI Brief" to "Weekly Brief" or "Data-Driven Brief" for clarity and accessibility
- Strategic rationale: Investors and clients prefer understanding outcomes over technical implementation; "AI" terminology creates confusion rather than confidence
- Updated technical documentation, dialogs, PDF exports, and all user-facing messaging to reflect new positioning
- System intelligence remains unchanged—only messaging has been refined to emphasize what the platform delivers rather than how

**October 20, 2025**:
- Implemented soft wash radial gradient backgrounds across all major sections (Vision, Problem, Why Now, Solution, How It Works, ROI) creating elegant depth and visual interest
- Gradient specifications: 25-40% opacity, 600-800px blob sizes, three overlapping layers per section using purple-400, pink-400, indigo-400, rose-400, and blue-400 color palette
- Added comprehensive gradient documentation to design_guidelines.md with implementation patterns, opacity ranges, color palette, and code examples
- Visual enhancement maintains professional B2B aesthetic while adding noticeable color wash effect behind content

**October 19, 2025**: 
- Streamlined pitch narrative by temporarily hiding sections from Positioning through The Ask
- Current flow focuses on Vision → Problem → Why Now → Solution → How It Works → ROI Calculator
- Removed LeaderDashboardDemo, GenosEIDiagram, ResponsiveShowcase, and ProductFlowSection components to simplify user journey and maintain focus on core value proposition
- Reimagined Solution section with executive-focused clarity: hero value statement ("What it is"), three benefit cards ("What changes for you"), and 6-week timeline with alternating layout ("What you get in 6 weeks")
- Redesigned How It Works section featuring a compelling circular loop diagram for the weekly rhythm (Weekly Brief → Team Check-In → Micro-action → Tracking → Evidence → feeds back) on desktop with mobile-friendly vertical flow, plus expandable 6-week install timeline for organizational view
- Implemented subtle parallax scrolling effects across Vision, Problem, Why Now, Solution, How It Works, and ROI sections with gentle speeds (±0.05-0.1) on decorative elements only to maintain interactive content functionality

**October 17, 2025**: Added Advisors section featuring strategic advisors (Ben Palmer - CEO of Genos International, Gourab Rout - Enterprise Architect, and placeholder for Psychosocial Safety specialist). Section follows Team structure with purple-themed cards positioned between Team and Ask sections.

**October 16, 2025**: Strategic terminology shift from "Intelligence" to "AI" throughout the platform messaging, reflecting more direct and recognizable positioning in the market. *Note: This decision was later reversed on October 21, 2025, when all AI references were removed in favor of outcome-focused language.*

## System Architecture

### Frontend Architecture

**Framework & UI**: React 18 with TypeScript, Vite, Wouter for routing, and Shadcn/ui (Radix UI primitives) with the "new-york" style.
**Styling**: Tailwind CSS with custom design tokens, corporate gradient backgrounds, DM Sans typography, and HSL color variables for a "corporate-calm" aesthetic.
**Key Features**: Smooth scroll navigation, interactive ROI calculator tailored for aged care, animated process flow visualization with dynamic path recalculation, responsive design, and expandable content sections.

### Backend Architecture

**Server**: Express.js with TypeScript on Node.js, designed with a RESTful API structure.
**Build**: Client built with Vite, server bundled with esbuild, using ESM throughout.
**Storage**: PostgreSQL database using Drizzle ORM with Neon serverless driver. The schema includes `feedback` (active - captures form submissions with role, name, email, phone, message), `leads` (reserved for future lead capture), and `users` (placeholder for future authentication).
**Authentication**: No active authentication is implemented, but infrastructure is prepared for session-based authentication with `connect-pg-simple`.

### System Design Choices

The architecture pivoted from complex metadata-based systems to a lightweight pulse-survey model, emphasizing "Privacy by Minimalism" rather than workplace surveillance. The system comprises a 3-layer model: Client Experience (3-question weekly pulse), Intelligence (rules-based system with data-driven insights and human-reviewed briefs), and Data (privacy-minimal storage of aggregated, team-level pulse responses). The application is highly customized for the Australian aged care sector, incorporating relevant statistics and ROI calculations.

### Technical Conventions

**Data Attribute Pattern for Expandable Content**: When creating expandable/collapsible components (accordions, timeline cards) that need to be captured in markdown exports, use data attributes to store the content independently of UI state. Pattern: `data-week-title` and `data-week-description` attributes on timeline Card elements enable `generateMarkdown.ts` to access collapsed content without DOM manipulation. This convention should be followed for future expandable components requiring export functionality.

## External Dependencies

**Core UI Libraries**: Radix UI, Embla Carousel, Framer Motion, Lucide React.
**Development Tools**: Vite, TypeScript, Tailwind CSS, PostCSS.
**Database Services**: Neon serverless PostgreSQL (`@neondatabase/serverless`), Drizzle ORM, Drizzle Kit.
**API Integration Readiness**: TanStack Query for data fetching, with a configured Fetch API wrapper.