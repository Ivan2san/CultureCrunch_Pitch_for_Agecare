# CultureCrunch - AI-Powered Psychosocial Safety Platform

## Overview

CultureCrunch is a B2B SaaS platform designed to transform workplace psychosocial compliance into actionable leadership insights using AI. This pitch/marketing web app aims to attract founding partners for a pilot program, focusing on the Australian aged care sector. Its core purpose is to convert prospective aged care providers into partners by demonstrating how AI can leverage compliance requirements into proactive workforce retention tools. The platform addresses critical issues like high staff turnover, increasing mental health claims, and stringent regulatory compliance within aged care by offering a lightweight, privacy-minimal, pulse-survey based solution.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

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
- Redesigned How It Works section featuring a compelling circular loop diagram for the weekly rhythm (AI Brief → Accountability Conversation → Micro-action → Tracking → Evidence → feeds back) on desktop with mobile-friendly vertical flow, plus expandable 6-week install timeline for organizational view
- Implemented subtle parallax scrolling effects across Vision, Problem, Why Now, Solution, How It Works, and ROI sections with gentle speeds (±0.05-0.1) on decorative elements only to maintain interactive content functionality

**October 17, 2025**: Added Advisors section featuring strategic advisors (Ben Palmer - CEO of Genos International, Gourab Rout - Enterprise Architect, and placeholder for Psychosocial Safety specialist). Section follows Team structure with purple-themed cards positioned between Team and Ask sections.

**October 16, 2025**: Strategic terminology shift from "Intelligence" to "AI" throughout the platform messaging, reflecting more direct and recognizable positioning in the market.

## System Architecture

### Frontend Architecture

**Framework & UI**: React 18 with TypeScript, Vite, Wouter for routing, and Shadcn/ui (Radix UI primitives) with the "new-york" style.
**Styling**: Tailwind CSS with custom design tokens, corporate gradient backgrounds, DM Sans typography, and HSL color variables for a "corporate-calm" aesthetic.
**Key Features**: Smooth scroll navigation, interactive ROI calculator tailored for aged care, animated process flow visualization with dynamic path recalculation, responsive design, and expandable content sections.

### Backend Architecture

**Server**: Express.js with TypeScript on Node.js, designed with a RESTful API structure.
**Build**: Client built with Vite, server bundled with esbuild, using ESM throughout.
**Storage**: PostgreSQL database using Drizzle ORM with Neon serverless driver for lead capture. The schema includes `leads` and a placeholder `users` table.
**Authentication**: No active authentication is implemented, but infrastructure is prepared for session-based authentication with `connect-pg-simple`.

### System Design Choices

The architecture pivoted from complex metadata-based systems to a lightweight pulse-survey model, emphasizing "Privacy by Minimalism" rather than workplace surveillance. The system comprises a 3-layer model: Client Experience (3-question weekly pulse), Intelligence (rules-based system with AI assistance and human-reviewed briefs), and Data (privacy-minimal storage of aggregated, team-level pulse responses). The application is highly customized for the Australian aged care sector, incorporating relevant statistics and ROI calculations.

## External Dependencies

**Core UI Libraries**: Radix UI, Embla Carousel, Framer Motion, Lucide React.
**Development Tools**: Vite, TypeScript, Tailwind CSS, PostCSS.
**Database Services**: Neon serverless PostgreSQL (`@neondatabase/serverless`), Drizzle ORM, Drizzle Kit.
**API Integration Readiness**: TanStack Query for data fetching, with a configured Fetch API wrapper.