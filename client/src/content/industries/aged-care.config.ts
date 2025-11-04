import type { IndustryConfig } from '../types';

/**
 * Aged Care Industry Configuration
 *
 * This file contains all content for the aged care industry landing page.
 * Content is separated from presentation logic to enable reuse across multiple industries.
 */

export const agedCareConfig: IndustryConfig = {
  // ===========================================================================
  // Meta Information
  // ===========================================================================

  slug: 'aged-care',
  displayName: 'Aged Care',
  shortName: 'Aged Care',

  // ===========================================================================
  // SEO
  // ===========================================================================

  metaTitle: 'CultureCrunch for Aged Care - Transform Workplace Culture',
  metaDescription: 'Data-driven psychosocial safety platform for aged care providers. Reduce turnover by 25%, decrease mental health claims by 40%, and improve engagement by 30%.',
  keywords: [
    'aged care',
    'psychosocial safety',
    'staff turnover',
    'burnout prevention',
    'workplace culture',
    'compliance',
    'aged care quality standards',
  ],

  // ===========================================================================
  // Vision Section
  // ===========================================================================

  vision: {
    headline: 'From Compliance To Culture',
    subheadline: 'The Future of Workplace Wellbeing',
    heroMessage: 'A world where every aged care leader can spot psychosocial risks early and turn them into the conversations, actions, and habits that build a high performance culture.',
    ctaText: 'Explore Solution',
    ctaLink: '#solution',
    backgroundStyle: {
      gradient: 'corporate-gradient',
    },
  },

  // ===========================================================================
  // Problem Section
  // ===========================================================================

  problem: {
    mainIssue: 'Aged Care Workforce Crisis',
    description: 'The aged care sector is facing unprecedented challenges with staff turnover, burnout, and compliance pressures.',
    impactStatement: 'Without intervention, the vicious cycle of turnover and understaffing will continue to escalate.',

    statistics: [
      {
        label: 'Experiencing burnout',
        value: '41%',
        description: 'quite often or very often',
        trend: 'up',
      },
      {
        label: 'Annual turnover rate',
        value: '25-30%',
        description: 'industry consensus',
        trend: 'up',
      },
      {
        label: 'Per staff replacement',
        value: '$40-49K',
        unit: 'AUD',
        description: 'Australian aged care sector',
      },
      {
        label: 'Mental health claim cost',
        value: '$45.9K',
        unit: 'AUD',
        description: '5x cost of physical injuries',
      },
    ],

    painPoints: [
      {
        title: 'Human Cost',
        description: '41% experiencing burnout quite often or very often (Palliative Care Australia 2024). 25-30% annual turnover rate (Aged Care Workforce Survey 2024).',
        severity: 'critical',
      },
      {
        title: 'Financial Impact',
        description: '$40-49K per staff replacement (Roche et al. 2015). $45.9K median mental health claim, 5x cost of physical injuries (Safe Work Australia 2024).',
        severity: 'high',
      },
      {
        title: 'Compliance Pressure',
        description: 'Only 52% feel confident meeting psychosocial requirements. 84% expect greater strain from new requirements (ACCPA State of Sector 2024).',
        severity: 'high',
      },
      {
        title: 'Market Gap',
        description: 'Zero aged care-specific tools for psychosocial safety. 48.2% cite burnout as #1 reason for leaving (Aged Care Worker Survey 2024).',
        severity: 'critical',
      },
    ],

    charts: [
      {
        type: 'area',
        title: 'The Vicious Cycle',
        data: [
          { label: 'High Turnover', value: 5, color: '#6366f1' },
          { label: 'Understaffing', value: 7, color: '#6366f1' },
          { label: 'Increased Workload', value: 9, color: '#8b5cf6' },
          { label: 'More Stress', value: 10, color: '#8b5cf6' },
          { label: 'More Departures', value: 8, color: '#6366f1' },
        ],
      },
    ],
  },

  // ===========================================================================
  // Why Now Section
  // ===========================================================================

  whyNow: {
    headline: 'Why Now?',
    description: 'Three converging forces make this the perfect time for CultureCrunch in aged care',
    urgencyStatement: 'The regulatory, workforce, and technology landscape has aligned to create an urgent need—and opportunity—for transformation.',

    regulatoryDrivers: [
      {
        title: 'Aged Care Regulatory Tsunami',
        description: 'Standards 7 & 2 effective Nov 1, 2025: "satisfied and psychologically safe workplace" now mandatory. 17 specific WHS psychosocial hazards to identify, assess, control—proactive risk management required.',
        effectiveDate: '2025-11-01',
        penaltyAmount: '$1.5M per breach',
        source: 'Aged Care Quality Standards',
      },
    ],

    marketForces: [
      {
        title: 'Workforce Crisis & Burnout',
        description: '43,000 vacancies now; 84,900 staff left in 12 months (27% turnover). Mental health claims: $58.6K median, 34 weeks off (4x other injuries). Only 49% of workers say workload is manageable.',
        impact: 'high',
        timeline: '2023-2025',
      },
      {
        title: 'Technology Maturity for Aged Care',
        description: 'Modern systems can now detect burnout patterns in real-time. Privacy-preserving analysis suitable for aged care compliance. Transforms reactive incident response into proactive risk management.',
        impact: 'high',
        timeline: '2024-2025',
      },
    ],

    timeline: [
      {
        date: '2025-11-01',
        event: 'Aged Care Standards 7 & 2 mandatory',
        importance: 'critical',
      },
    ],
  },

  // ===========================================================================
  // Solution Section
  // ===========================================================================

  solution: {
    headline: 'THE SOLUTION',
    tagline: 'A 6-week program that builds high-performance culture',
    description: 'Transform compliance requirements into conversations, actions, and habits that reduce turnover and build lasting culture.',

    valuePropositions: [
      {
        title: 'Reduce Turnover',
        description: 'Achieve 25% reduction in staff turnover through early burnout detection and proactive intervention',
        metric: {
          value: '25%',
          label: 'Turnover Reduction',
        },
      },
      {
        title: 'Decrease Mental Health Claims',
        description: 'Cut mental health claims by 40% through proactive psychosocial risk management',
        metric: {
          value: '40%',
          label: 'Claims Reduction',
        },
      },
      {
        title: 'Improve Engagement',
        description: 'Boost team engagement by 30% with clear conversations and accountability',
        metric: {
          value: '30%',
          label: 'Engagement Increase',
        },
      },
    ],

    features: [
      {
        title: 'Clear Conversations & Accountability',
        description: 'Conversations become clear and accountable; actions are small and finished.',
        benefits: [
          'Structured dialogue frameworks',
          'Action tracking and follow-through',
          'Team accountability practices',
        ],
      },
      {
        title: 'Improved Team Rhythm',
        description: 'Team rhythm improves as micro-practices remove friction and add recognition.',
        benefits: [
          'Weekly pulse surveys (<60 seconds)',
          'Monday morning brief with insights',
          'Recognition and celebration practices',
        ],
      },
      {
        title: 'Dashboard Visibility',
        description: 'A simple dashboard surfaces shifts in workload, trust and recognition.',
        benefits: [
          'Real-time team health metrics',
          'Trend analysis over 6 weeks',
          'Compliance audit trail',
        ],
      },
    ],

    differentiators: [
      'Only 15 minutes per week from leadership',
      'Privacy by minimalism - team-level data only',
      'Aged care-specific compliance alignment',
      'Proven 6-week transformation program',
    ],

    corePromise: 'From Compliance To Culture in 6 Weeks',
  },

  // ===========================================================================
  // How It Works Section
  // ===========================================================================

  howItWorks: {
    headline: 'How It Works',
    description: 'A simple, 6-week program that builds lasting change',
    timeCommitment: '15 minutes per week',
    cadence: 'Weekly',

    weeklyWorkflow: [
      {
        step: 1,
        title: 'Baselines',
        description: 'Baselines (Triple Goal survey, pulse) and priorities agreed with the leadership team',
        duration: 'Week 1',
      },
      {
        step: 2,
        title: 'Mindset Installation',
        description: 'Install the mindset for safe, accountable dialogue; dashboard finalised; optional Organisational Network Analysis.',
        duration: 'Week 2',
      },
      {
        step: 3,
        title: 'Skillset Installation + First Sprint',
        description: 'First Weekly Brief 7 a.m. Monday; first Team Check-In; one micro-practice; tracking on.',
        duration: 'Week 3',
      },
      {
        step: 4,
        title: 'Momentum',
        description: 'Momentum; LGP360 debrief; ongoing loop; live shifts visible.',
        duration: 'Week 4',
      },
      {
        step: 5,
        title: 'Team Review',
        description: 'Team Review; confirm One Big Practice; behavioural impact logged.',
        duration: 'Week 5',
      },
      {
        step: 6,
        title: 'Impact & Transition',
        description: 'Impact Report plus compliance pack aligned to WHS and Aged Care Quality Standards; transition to a 12-month sustain licence.',
        duration: 'Week 6',
      },
    ],
  },

  // ===========================================================================
  // ROI Calculator Section
  // ===========================================================================

  roiCalculator: {
    headline: 'Calculate Your ROI',
    description: 'See the financial impact CultureCrunch can have on your facility',
    industryContext: 'Based on real data from the Australian aged care sector',

    inputs: [
      {
        id: 'staffCount',
        label: 'Number of Staff',
        description: 'Total number of staff at your facility',
        defaultValue: 100,
        min: 10,
        max: 500,
        step: 10,
        unit: 'staff',
      },
      {
        id: 'turnoverRate',
        label: 'Current Turnover Rate',
        description: 'Annual staff turnover percentage',
        defaultValue: 40,
        min: 10,
        max: 80,
        step: 5,
        unit: '%',
        suffix: '%',
      },
      {
        id: 'replacementCost',
        label: 'Cost Per Replacement',
        description: 'Average cost to replace one staff member',
        defaultValue: 45000,
        min: 20000,
        max: 80000,
        step: 1000,
        unit: 'AUD',
        prefix: '$',
      },
      {
        id: 'mentalHealthClaimCost',
        label: 'Mental Health Claim Cost',
        description: 'Average cost per mental health claim',
        defaultValue: 58600,
        min: 30000,
        max: 100000,
        step: 1000,
        unit: 'AUD',
        prefix: '$',
      },
      {
        id: 'claimsPerYear',
        label: 'Mental Health Claims Per Year',
        description: 'Number of mental health claims annually',
        defaultValue: 3,
        min: 0,
        max: 20,
        step: 1,
        unit: 'claims',
      },
    ],

    calculations: [
      {
        id: 'currentTurnoverCost',
        label: 'Current Turnover Cost',
        formula: (inputs) => (inputs.staffCount * inputs.turnoverRate / 100) * inputs.replacementCost,
        format: 'currency',
        description: 'Annual cost of staff turnover',
      },
      {
        id: 'currentClaimsCost',
        label: 'Current Claims Cost',
        formula: (inputs) => inputs.claimsPerYear * inputs.mentalHealthClaimCost,
        format: 'currency',
        description: 'Annual cost of mental health claims',
      },
      {
        id: 'totalCurrentCost',
        label: 'Total Current Cost',
        formula: (inputs) => {
          const turnoverCost = (inputs.staffCount * inputs.turnoverRate / 100) * inputs.replacementCost;
          const claimsCost = inputs.claimsPerYear * inputs.mentalHealthClaimCost;
          return turnoverCost + claimsCost;
        },
        format: 'currency',
        description: 'Total annual cost of turnover and claims',
      },
      {
        id: 'projectedSavings',
        label: 'Projected Annual Savings',
        formula: (inputs) => {
          const turnoverCost = (inputs.staffCount * inputs.turnoverRate / 100) * inputs.replacementCost;
          const claimsCost = inputs.claimsPerYear * inputs.mentalHealthClaimCost;
          const turnoverSavings = turnoverCost * 0.25; // 25% reduction
          const claimsSavings = claimsCost * 0.40; // 40% reduction
          return turnoverSavings + claimsSavings;
        },
        format: 'currency',
        description: 'Expected savings with CultureCrunch',
      },
    ],

    impactAreas: [
      {
        title: 'Turnover Reduction',
        description: 'Reduce staff turnover by 25% through early burnout detection',
        baselineFormula: (inputs) => (inputs.staffCount * inputs.turnoverRate / 100) * inputs.replacementCost,
        improvedFormula: (inputs) => (inputs.staffCount * inputs.turnoverRate / 100) * inputs.replacementCost * 0.75,
        improvementPercentage: 25,
      },
      {
        title: 'Mental Health Claims',
        description: 'Decrease mental health claims by 40% through proactive intervention',
        baselineFormula: (inputs) => inputs.claimsPerYear * inputs.mentalHealthClaimCost,
        improvedFormula: (inputs) => inputs.claimsPerYear * inputs.mentalHealthClaimCost * 0.60,
        improvementPercentage: 40,
      },
      {
        title: 'Team Engagement',
        description: 'Improve team engagement by 30% with clear conversations',
        baselineFormula: () => 50, // baseline engagement percentage
        improvedFormula: () => 80, // improved engagement percentage
        improvementPercentage: 30,
      },
    ],

    assumptions: [
      'Turnover reduction based on early burnout intervention studies',
      'Mental health claims reduction based on proactive psychosocial safety programs',
      'Engagement improvements based on structured feedback and accountability systems',
      'ROI calculations based on Australian aged care sector averages',
    ],

    sources: [
      {
        title: 'Roche et al. 2015 - Staff replacement costs',
        description: 'Australian aged care sector study on turnover costs',
      },
      {
        title: 'Safe Work Australia 2024 - Mental health claim costs',
        description: 'National data on workplace mental health claims',
      },
      {
        title: 'ACCPA State of Sector 2024',
        description: 'Aged care industry workforce survey and analysis',
      },
    ],
  },

  // ===========================================================================
  // Brand Customization
  // ===========================================================================

  brandColor: '#6366f1', // Indigo
  accentColor: '#8b5cf6', // Purple
};

export default agedCareConfig;
