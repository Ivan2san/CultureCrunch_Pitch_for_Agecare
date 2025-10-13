# CultureCrunch - AI-Powered Psychosocial Safety Platform

## Overview

CultureCrunch is a B2B SaaS platform that transforms workplace psychosocial compliance into actionable leadership insights using AI. The application is a pitch/marketing web app designed to attract founding partners for a pilot program. It presents the company's vision, problem analysis, solution architecture, ROI calculations, and partnership opportunities through an interactive single-page application.

**Core Purpose**: Convert prospective enterprise clients into founding partners by demonstrating how AI can turn psychosocial hazard compliance requirements into proactive manager support tools.

**Target Audience**: Australian enterprise organizations (200+ employees) facing psychosocial safety compliance requirements, particularly HR leaders and executives concerned with workplace mental health, engagement, and regulatory compliance.

## Recent Changes

- **Lead Capture System (October 2025)**:
  - Implemented PostgreSQL database with `leads` table for storing prospect information
  - Created POST /api/leads endpoint with Zod validation
  - Updated LeadCaptureForm to save data to database with source tracking
  - Added lead capture for both OORA demo access (source: "oora_demo") and Discovery Call requests (source: "discovery_call")
  - All fields optional with toast notifications for submission feedback
  - Database uses Drizzle ORM with Neon serverless PostgreSQL
- **LOI Preview Modal (October 2025)**:
  - Created branded Letter of Intent preview dialog accessible from "The Ask" section
  - Displays key LOI sections with Culture Crunch Pty Ltd branding
  - Contact details: Campbell McGlynn, campbell@culturecrunch.io
  - Includes download button for full template (ready for future PDF generation)
- **ProcessFlowAnimation Connector Fix (October 2025)**:
  - Resolved SVG connector line alignment issues using center-based path calculation
  - Paths now connect card centers (immune to scale transforms) instead of edges
  - Dynamic recalculation on activeStage changes and viewport resize
  - Maintains proper alignment during 1.08 scale animations and across all desktop breakpoints
  - Implementation uses refs + getBoundingClientRect() for real-time geometry
  - Hidden on mobile (`hidden md:block`) where vertical stacking breaks flow
- Updated Roadmap section with detailed 4-phase business roadmap (Q4 2025 - Q3 2026):
  - Phase 1: Validation (Q4 2025) - Target ~5 LOIs
  - Phase 2: Seek Funding (Q4 2025–Q1 2026)
  - Phase 3: Build MVP with Early Adopters (Q1–Q2 2026)
  - Phase 4: Launch (Q2–Q3 2026)
  - Added Exit Criteria section between Goals and Deliverables for each phase
  - Fixed dynamic Tailwind classes with static color mappings for production builds
- ProcessFlowAnimation timing: 0.6s card transitions, 0.8s SVG animations
- Enhanced animation visual feedback: 1.08 scale, shadow effects, smooth easing
- Implemented corporate design transformation: DM Sans typography, corporate-calm gradient backgrounds with film grain overlay
- Typography hierarchy: 500 weight for body (readability), 700 for headings (corporate emphasis), 600 for buttons
- Letter-spacing: -0.005em (-0.5%) for body, -0.01em (-1%) for headings

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, built using Vite as the build tool and development server.

**Routing**: Wouter for client-side routing (lightweight React router alternative). Currently implements a single-page application with smooth scrolling navigation between sections.

**UI Component System**: Shadcn/ui (Radix UI primitives) with the "new-york" style variant, providing accessible, composable components with Tailwind CSS styling.

**State Management**: TanStack Query (React Query) v5 for server state management, though currently the app is primarily presentational without active data fetching.

**Styling Approach**: 
- Tailwind CSS with custom design tokens for corporate B2B SaaS aesthetic
- Corporate gradient background system with white→pale-blue gradient, radial blooms, vignette, and film grain texture
- Custom color palette with HSL color variables for light/dark mode support
- Design guidelines emphasize trust, credibility, and "corporate-calm" board-ready presentation
- Typography uses DM Sans font family: 500 weight for body text, 700 for headings, 600 for buttons
- Letter-spacing: -0.005em (-0.5%) for body, -0.01em (-1%) for headings

**Component Organization**:
- Page components in `client/src/pages/`
- Reusable section components in `client/src/components/`
- UI primitives in `client/src/components/ui/`
- Example components for development in `client/src/components/examples/`

**Key Features**:
- Smooth scroll navigation with active section tracking
- Interactive ROI calculator with real-time calculations
- Animated process flow visualization with 4-stage cycle (Input → Processing → Output → Feedback)
  - 0.6s card transitions with 1.08 scale and shadow effects when active
  - 0.8s SVG path animations showing data flow using center-based connections (scale-invariant)
  - Dynamic path recalculation on stage changes and viewport resize
  - Play/pause control with full reduced-motion support
  - Responsive: connectors visible on desktop (≥768px), hidden on mobile
- Responsive design for mobile and desktop viewports
- Expandable/collapsible content sections

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**API Design**: RESTful API structure with routes prefixed with `/api`. Currently minimal backend implementation as the application is primarily a static marketing site.

**Build Process**: 
- Client built with Vite (outputs to `dist/public`)
- Server bundled with esbuild (outputs to `dist`)
- ESM (ES Modules) used throughout

**Development Tools**:
- Hot module replacement via Vite
- TSX for TypeScript execution in development
- Replit-specific plugins for development experience (cartographer, dev banner, runtime error overlay)

**Storage Layer**: PostgreSQL database (`DbStorage` class) using Drizzle ORM with Neon serverless driver for lead capture and future data persistence.

### Data Storage Solutions

**Current State**: Active PostgreSQL database implementation for lead capture with plans to expand for full application data.

**Database**: PostgreSQL via Neon serverless driver with pooled connections configured in `server/db.ts`.

**ORM**: Drizzle ORM v0.39+ with:
- Schema definitions in `shared/schema.ts`
- Database push commands via `npm run db:push` for schema synchronization
- Drizzle-Zod integration for runtime validation
- Type-safe query building

**Schema Design** (Current Implementation):
- `users` table with id (UUID), username, and password fields (not actively used)
- `leads` table with id (UUID), name, company, mobile, email, source (required), and createdAt timestamp
  - All contact fields optional to reduce friction in lead capture
  - Source field tracks lead origin ("oora_demo" or "discovery_call")
  - Ready for CRM integration in production

### Authentication and Authorization

**Current State**: No active authentication implementation. Basic user schema exists but authentication/session management not implemented.

**Prepared Infrastructure**:
- Connect-pg-simple package for PostgreSQL session storage
- User schema with username/password fields
- Express session middleware ready for configuration

**Future Architecture**: Likely session-based authentication with secure password hashing, prepared for role-based access control (managers, HR admins, executives).

### External Dependencies

**Core UI Libraries**:
- Radix UI component primitives (40+ components: dialog, dropdown, accordion, toast, etc.)
- Embla Carousel for interactive content
- Framer Motion for animations (used in ProcessFlowAnimation component)
- Lucide React for iconography
- React Hook Form with Zod resolvers for future form handling

**Development Tools**:
- Vite 5.x for blazing-fast builds and HMR
- TypeScript 5.x for type safety
- Tailwind CSS with PostCSS for styling
- Replit-specific tooling for cloud development

**Data Visualization** (Prepared but not actively used):
- Recharts library available for future dashboard implementation
- Date-fns for date manipulation in ROI calculations

**API Integration Readiness**:
- TanStack Query configured for data fetching
- Fetch API wrapper with credential handling in `lib/queryClient.ts`
- Error handling and 401 response management built-in

**Third-Party Service Integration** (Referenced in Content):
- Microsoft 365 (mentioned for calendar/metadata)
- Google Workspace (mentioned for calendar/metadata)
- Slack (mentioned for activity patterns)
- HRIS systems (generic integration points)
- Note: These are conceptual integrations described in the pitch content, not currently implemented

**Database Services**:
- Neon serverless PostgreSQL (configured via `@neondatabase/serverless`)
- Connection string via `DATABASE_URL` environment variable
- Drizzle Kit for schema management and migrations