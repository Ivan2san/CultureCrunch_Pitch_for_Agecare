# CultureCrunch - AI-Powered Psychosocial Safety Platform

## Overview

CultureCrunch is a B2B SaaS platform designed to transform workplace psychosocial compliance into actionable leadership insights using AI. This pitch/marketing web app aims to attract founding partners for a pilot program, focusing on the Australian aged care sector. Its core purpose is to convert prospective aged care providers into partners by demonstrating how AI can leverage compliance requirements into proactive workforce retention tools. The platform addresses critical issues like high staff turnover, increasing mental health claims, and stringent regulatory compliance within aged care by offering a lightweight, privacy-minimal, pulse-survey based solution.

## User Preferences

Preferred communication style: Simple, everyday language.

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