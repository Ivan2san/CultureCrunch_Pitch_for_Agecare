import type { CompanyConfig } from '../types';
import { agedCareConfig } from '../industries/aged-care.config';

/**
 * Example Company-Specific Configuration: Sunshine Aged Care
 *
 * This demonstrates how to create a customized pitch for a specific company.
 * Based on the aged-care industry config with company-specific customizations.
 */
export const sunshineAgedCareConfig: CompanyConfig = {
  // Base industry configuration
  ...agedCareConfig,

  // Company-specific metadata
  companySlug: 'sunshine-aged-care',
  baseIndustry: 'aged-care',

  // Company customizations
  customizations: {
    companyName: 'Sunshine Aged Care',
    logoUrl: undefined, // Add company logo URL if available
    primaryContact: 'Sarah Chen, Director of Operations',
    presentationDate: new Date().toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),

    // Company-specific pain points (these will be highlighted in the pitch)
    specificPainPoints: [
      'Recent turnover spike: 35% in the past 6 months across three facilities',
      'Mental health workers comp claims increased by 60% year-over-year',
      'New Sunshine Gardens facility struggling with team cohesion',
      'Upcoming ACQSC audit in Q2 2025 - need documented psychosocial safety program',
    ],

    // Pre-populated ROI calculator inputs based on company research
    customROIInputs: {
      staffCount: 180,           // Sunshine has 180 staff across 3 facilities
      currentTurnover: 35,        // Currently experiencing 35% turnover
      avgReplacementCost: 42000,  // Industry standard for their region
      avgSalary: 72000,           // Average salary for their workforce mix
    },

    // Additional notes for the presenter
    additionalNotes: `
**Pre-Meeting Research:**
- Sunshine Aged Care operates 3 facilities in Melbourne metro area
- 180 staff total (120 care staff, 40 support, 20 administrative)
- Recent expansion with Sunshine Gardens facility (opened 9 months ago)
- Director Sarah Chen expressed concerns about staff wellbeing in initial call
- Upcoming ACQSC accreditation audit scheduled for Q2 2025

**Key Decision Makers:**
- Sarah Chen: Director of Operations (primary contact)
- Dr. Michael Lee: CEO (final approval required)
- Jennifer Wong: HR Manager (implementation partner)

**Specific Concerns Mentioned:**
- "We're losing good people before they hit 12 months"
- "Our new facility is struggling - teams haven't gelled"
- "We need something for the audit that's not just tick-box compliance"
- "We can't afford another spike in mental health claims"

**Recommended Focus Areas:**
1. Emphasize early warning system for turnover risks
2. Highlight team cohesion building (critical for new Sunshine Gardens facility)
3. Show how CultureCrunch provides audit-ready documentation
4. Connect ROI to their specific 35% turnover rate
5. Demonstrate quick wins within 6-week implementation (before Q2 audit)
    `.trim(),
  },

  // Override vision headline to be company-specific
  vision: {
    ...agedCareConfig.vision,
    headline: 'Sunshine Aged Care: From Turnover Crisis To Culture Excellence',
    heroMessage: `Sarah, imagine a future where Sunshine Aged Care becomes known as the employer of choice in Melbourne. Where your 180 staff members feel heard, supported, and committed long-term. Where your new Sunshine Gardens facility becomes a model for team culture—and where your Q2 ACQSC audit showcases a proactive, data-driven psychosocial safety program.`,
  },

  // Override problem section to highlight company-specific issues
  problem: {
    ...agedCareConfig.problem,
    mainIssue: 'Sunshine Aged Care\'s Turnover Crisis: 35% and Climbing',
    context: `Sarah, your team is experiencing a critical challenge. With 35% annual turnover across 180 staff, you're replacing 63 employees per year. At $42,000 per replacement, that's $2.6M annually—before counting the impact on resident care quality and team morale.`,

    statistics: [
      ...agedCareConfig.problem.statistics,
      {
        label: 'Current Sunshine turnover rate',
        value: '35%',
        description: 'vs 25-30% industry average',
        source: 'Internal Sunshine data 2024'
      },
      {
        label: 'Mental health claims increase',
        value: '+60%',
        description: 'year-over-year at Sunshine',
        source: 'Workers comp data 2024'
      },
    ],

    painPoints: [
      {
        title: 'Turnover Crisis at Sunshine',
        description: '35% annual turnover means you\'re replacing 63 employees per year across your 3 facilities. Staff are leaving before 12-month mark, taking valuable knowledge with them.',
        impact: 'Annual cost: $2.6M in replacement costs alone',
        severity: 'critical'
      },
      {
        title: 'Sunshine Gardens Team Cohesion',
        description: 'Your newest facility (9 months old) is struggling with team dynamics. Without strong culture foundations, the facility risks perpetual instability.',
        impact: 'Resident satisfaction scores below target, staff stress elevated',
        severity: 'critical'
      },
      {
        title: 'Mental Health Claims Spike',
        description: '60% increase in mental health workers comp claims year-over-year. Your insurance premiums will reflect this trend if not reversed.',
        impact: 'Rising insurance costs, regulatory scrutiny, staff suffering',
        severity: 'high'
      },
      {
        title: 'Q2 2025 ACQSC Audit Pressure',
        description: 'Upcoming accreditation audit requires demonstrated psychosocial safety program. Current approach may not meet new standards.',
        impact: 'Audit findings, potential conditions, reputational risk',
        severity: 'high'
      },
    ],

    costBreakdown: {
      title: 'Current Annual Cost to Sunshine Aged Care',
      items: [
        {
          category: 'Staff Turnover (35% of 180 staff)',
          description: 'Replacing 63 employees at $42K each',
          annualCost: 2646000
        },
        {
          category: 'Mental Health Claims',
          description: '60% increase in workers comp costs',
          annualCost: 180000
        },
        {
          category: 'Productivity Loss',
          description: 'Burnout and disengagement across facilities',
          annualCost: 450000
        },
        {
          category: 'Recruitment Costs',
          description: 'Agency fees, advertising, HR time',
          annualCost: 220000
        },
      ],
      total: 3496000
    }
  },

  // Customize ROI calculator with company-specific defaults
  roiCalculator: {
    ...agedCareConfig.roiCalculator,
    title: 'Sunshine Aged Care ROI Projection',
    description: 'Based on your current situation: 180 staff, 35% turnover, $2.6M annual replacement costs',

    inputs: agedCareConfig.roiCalculator.inputs.map(input => ({
      ...input,
      // Override defaults with Sunshine-specific data
      defaultValue:
        input.id === 'staffCount' ? 180 :
        input.id === 'currentTurnover' ? 35 :
        input.id === 'avgReplacementCost' ? 42000 :
        input.id === 'avgSalary' ? 72000 :
        input.defaultValue
    })),
  },

  // Company-specific branding (optional)
  brandColor: '#FF9800', // Sunshine orange
  accentColor: '#FFC107', // Warm yellow
};
