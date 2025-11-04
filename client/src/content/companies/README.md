# Company-Specific Pitch Pages

This directory contains company-specific configurations for customized pitch presentations.

## Overview

Company-specific pages allow you to create personalized pitch decks for individual companies based on industry templates. Each company config extends an industry config (e.g., aged-care, healthcare) with customizations like:

- Company name and branding
- Pre-populated ROI calculator inputs
- Company-specific pain points and challenges
- Presenter notes and research
- Custom headlines and messaging

## Creating a New Company Pitch

### 1. Create Configuration File

Create a new file in this directory: `<company-slug>.config.ts`

```typescript
import type { CompanyConfig } from '../types';
import { agedCareConfig } from '../industries/aged-care.config';

export const yourCompanyConfig: CompanyConfig = {
  // Spread the base industry config
  ...agedCareConfig,

  // Company metadata
  companySlug: 'your-company-slug',
  baseIndustry: 'aged-care',

  // Customizations
  customizations: {
    companyName: 'Your Company Name',
    primaryContact: 'Contact Name, Title',
    presentationDate: '2025-01-15',

    specificPainPoints: [
      'Pain point 1',
      'Pain point 2',
    ],

    customROIInputs: {
      staffCount: 150,
      currentTurnover: 30,
      avgReplacementCost: 45000,
      avgSalary: 75000,
    },

    additionalNotes: `
      Your research notes here.
      These only show in dev mode.
    `,
  },

  // Override sections as needed
  vision: {
    ...agedCareConfig.vision,
    headline: 'Custom headline for this company',
  },
};
```

### 2. Export in index.ts

Add your new config to `companies/index.ts`:

```typescript
export { yourCompanyConfig } from './your-company-slug.config';

// Add to ALL_COMPANIES array
export const ALL_COMPANIES: CompanyConfig[] = [
  sunshineAgedCareConfig,
  yourCompanyConfig, // Add here
];
```

### 3. Access the Page

The page will be automatically available at:
```
/partners/your-company-slug
```

## Example Company Config

See `sunshine-aged-care.config.ts` for a complete example.

This example demonstrates:
- ✅ Company branding and metadata
- ✅ Specific pain points highlighting
- ✅ Pre-populated ROI inputs
- ✅ Custom problem and vision sections
- ✅ Presenter notes (dev mode only)

## Route Structure

Company pitch pages use dynamic routing:

- **URL Pattern**: `/partners/:companySlug`
- **Example**: `/partners/sunshine-aged-care`
- **Not Found**: Returns 404 if company slug doesn't exist

## Customization Options

### Available Customizations

```typescript
interface CompanyCustomization {
  companyName: string;              // Required: Display name
  logoUrl?: string;                 // Optional: Company logo
  primaryContact?: string;          // Optional: Main contact person
  presentationDate?: string;        // Optional: When presenting
  specificPainPoints?: string[];    // Optional: Company challenges
  customROIInputs?: Record<...>;    // Optional: Pre-fill calculator
  additionalNotes?: string;         // Optional: Presenter notes
}
```

### Override Any Section

You can override any section from the base industry config:

```typescript
export const companyConfig: CompanyConfig = {
  ...industryConfig,

  // Override vision
  vision: {
    ...industryConfig.vision,
    headline: 'Company-specific headline',
  },

  // Override problem
  problem: {
    ...industryConfig.problem,
    mainIssue: 'Company-specific problem statement',
  },

  // Override ROI calculator
  roiCalculator: {
    ...industryConfig.roiCalculator,
    title: 'ROI for [Company Name]',
  },
};
```

## Features

### Automatic Features
- ✅ Company header with name, contact, date
- ✅ Specific pain points card (if provided)
- ✅ Pre-populated ROI calculator (if customROIInputs provided)
- ✅ Presenter notes section (dev mode only)
- ✅ All standard industry templates
- ✅ Custom branding colors (if specified)

### Dev Mode Features
When running in development mode (`npm run dev`):
- Presenter notes are visible at bottom of page
- Additional context for sales team
- Research notes and decision-maker info

In production, these notes are hidden.

## Best Practices

### 1. Research First
Gather information before creating config:
- Staff count and composition
- Current turnover rate
- Recent challenges or events
- Decision makers and contacts
- Upcoming deadlines (audits, etc.)

### 2. Personalize Headlines
Replace generic industry headlines with company-specific ones:

❌ Generic: "From Compliance To Culture"
✅ Personalized: "Sunshine Aged Care: From Turnover Crisis To Culture Excellence"

### 3. Use Specific Data
When possible, use company's actual data:
- Actual staff count
- Real turnover rate
- Specific cost figures
- Recent incidents or challenges

### 4. Add Context in Notes
Use `additionalNotes` for presenter:
- Decision maker names and roles
- Conversation highlights
- Specific concerns mentioned
- Focus areas for presentation

### 5. Test Before Presenting
Always test the page before sending or presenting:
```bash
npm run dev
# Visit: http://localhost:5000/partners/your-company-slug
```

## File Naming Convention

- Filename: `<company-slug>.config.ts`
- Export name: `<companyName>Config` (camelCase)
- URL slug: `company-slug` (kebab-case)

Example:
- File: `sunshine-aged-care.config.ts`
- Export: `sunshineAgedCareConfig`
- URL: `/partners/sunshine-aged-care`

## Security Note

⚠️ **Presenter Notes**: The `additionalNotes` field is only visible in development mode. However, don't include truly sensitive information as the config is still in client-side code.

For highly sensitive information:
- Keep notes in separate secure document
- Reference decision tree in notes only
- Never commit passwords or PII to git

## Questions?

See the main project README or contact the development team.
