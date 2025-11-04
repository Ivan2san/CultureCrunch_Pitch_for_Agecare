import type { IndustryConfig } from '../types';

/**
 * Healthcare Industry Configuration
 *
 * Tailored content for healthcare providers including hospitals, clinics, and medical practices.
 * Focuses on clinical staff wellbeing, patient safety, and healthcare-specific psychosocial risks.
 */
export const healthcareConfig: IndustryConfig = {
  slug: 'healthcare',
  displayName: 'Healthcare',
  shortName: 'HC',
  metaTitle: 'CultureCrunch for Healthcare - Transform Clinical Workplace Culture',
  metaDescription: 'Reduce burnout, improve patient safety, and build resilient healthcare teams with CultureCrunch\'s data-driven psychosocial safety platform.',
  keywords: [
    'healthcare staff wellbeing',
    'clinical burnout prevention',
    'patient safety culture',
    'healthcare psychosocial safety',
    'medical staff retention',
    'hospital workplace culture',
    'healthcare team resilience'
  ],

  vision: {
    headline: 'From Clinical Burnout To Care Excellence',
    subheadline: 'The Future of Healthcare Team Wellbeing',
    heroMessage: 'A world where every healthcare leader can spot psychosocial risks early, build resilient teams, and deliver exceptional patient care—without burnout consuming their workforce.',
    coreBeliefs: [
      {
        title: 'Psychosocial Safety Drives Patient Safety',
        description: 'When clinical teams feel psychologically safe, patient outcomes improve. Research shows a direct correlation between staff wellbeing and quality of care.'
      },
      {
        title: 'Prevention Over Crisis Management',
        description: 'Early detection of team stress, communication breakdowns, and burnout risks prevents costly turnover and protects patient safety.'
      },
      {
        title: 'Data-Driven Team Development',
        description: 'Regular, structured team check-ins transform workplace culture from reactive to proactive, building resilience one conversation at a time.'
      }
    ],
    futureState: {
      title: 'The Healthcare Workplace of Tomorrow',
      description: 'Imagine healthcare organizations where clinical teams thrive, patient safety incidents decline, and staff retention becomes a competitive advantage.',
      metrics: [
        { value: '50%', label: 'Reduction in clinical burnout' },
        { value: '40%', label: 'Fewer patient safety incidents' },
        { value: '35%', label: 'Improved staff retention' }
      ]
    }
  },

  problem: {
    mainIssue: 'Healthcare Workforce Crisis: Burnout & Safety at Risk',
    context: 'Healthcare workers face unprecedented psychosocial pressures. The consequences affect both staff wellbeing and patient safety.',

    statistics: [
      {
        label: 'Clinical staff experiencing burnout',
        value: '52%',
        description: 'reporting emotional exhaustion',
        source: 'Medscape National Physician Burnout Survey 2023'
      },
      {
        label: 'Annual nurse turnover rate',
        value: '27.1%',
        description: 'in acute care settings',
        source: 'NSI National Healthcare Retention Report 2023'
      },
      {
        label: 'Healthcare workers considering leaving',
        value: '47%',
        description: 'due to workplace stress',
        source: 'Incredible Health Survey 2023'
      },
      {
        label: 'Patient safety incidents linked to staff stress',
        value: '62%',
        description: 'of medical errors',
        source: 'AHRQ Patient Safety Research'
      }
    ],

    painPoints: [
      {
        title: 'Clinical Burnout Epidemic',
        description: '52% of clinical staff report emotional exhaustion and compassion fatigue. High patient loads, administrative burden, and emotional demands create unsustainable work conditions.',
        impact: 'Compromised patient care, increased medical errors, staff absenteeism',
        severity: 'critical'
      },
      {
        title: 'Catastrophic Turnover Costs',
        description: 'Replacing a nurse costs $52-64K, replacing a physician costs $500K-$1M. Annual turnover rates of 27% devastate budgets and continuity of care.',
        impact: 'Budget strain, disrupted patient relationships, training costs',
        severity: 'critical'
      },
      {
        title: 'Patient Safety at Risk',
        description: '62% of medical errors are linked to staff stress and poor team communication. Burnout directly compromises clinical judgment and vigilance.',
        impact: 'Increased adverse events, higher liability exposure, damaged reputation',
        severity: 'critical'
      },
      {
        title: 'Compliance Gaps & Legal Exposure',
        description: 'New psychosocial safety regulations require proactive risk management. Traditional approaches miss early warning signs until incidents occur.',
        impact: 'Regulatory penalties, litigation risk, insurance premium increases',
        severity: 'high'
      }
    ],

    costBreakdown: {
      title: 'Annual Cost of Inaction (200-staff hospital)',
      items: [
        {
          category: 'Staff Turnover',
          description: 'Replacing 27% of clinical staff annually',
          annualCost: 780000
        },
        {
          category: 'Productivity Loss',
          description: 'Burnout-related absenteeism and presenteeism',
          annualCost: 520000
        },
        {
          category: 'Patient Safety Incidents',
          description: 'Medical errors, adverse events, litigation',
          annualCost: 350000
        },
        {
          category: 'Recruitment & Onboarding',
          description: 'Agency costs, training, orientation',
          annualCost: 280000
        }
      ],
      total: 1930000
    }
  },

  whyNow: {
    headline: 'The Perfect Storm in Healthcare',
    context: 'Multiple forces are converging to make psychosocial safety non-negotiable for healthcare organizations.',

    regulatoryDrivers: [
      {
        title: 'Model WHS Regulations 2022',
        description: 'Psychosocial hazard management is now mandatory under WHS law. Healthcare organizations must identify, assess, and control psychosocial risks.',
        deadline: 'Enforced now with escalating penalties',
        impact: 'high'
      },
      {
        title: 'ACHS & NSQHS Standards',
        description: 'Accreditation standards now explicitly require workforce wellbeing programs and psychosocial safety measures.',
        deadline: 'Required for accreditation renewal',
        impact: 'high'
      },
      {
        title: 'Medicare Funding Tied to Quality',
        description: 'Value-based care models link reimbursement to patient outcomes, which correlate directly with staff wellbeing.',
        deadline: 'Ongoing assessment',
        impact: 'medium'
      }
    ],

    marketForces: [
      {
        title: 'Critical Workforce Shortage',
        description: 'Projected shortage of 123,000 nurses by 2030 in Australia. Retention is more cost-effective than recruitment.',
        urgency: 'Worsening annually',
        impact: 'high'
      },
      {
        title: 'Patient Safety Scrutiny',
        description: 'Public reporting of safety metrics increases reputational stakes. Staff wellbeing is now a visible quality indicator.',
        urgency: 'Immediate',
        impact: 'high'
      },
      {
        title: 'Insurance Premium Pressure',
        description: 'Medical indemnity insurers offering discounts for proactive psychosocial safety programs.',
        urgency: 'Available now',
        impact: 'medium'
      }
    ],

    culturalShift: {
      title: 'Healthcare\'s Cultural Evolution',
      description: 'The industry is shifting from "physician resilience training" to systemic psychosocial safety. Leaders recognize that individual coping strategies can\'t fix organizational issues.',
      evidence: [
        'Major health systems implementing team-based wellbeing programs',
        'Boards holding executives accountable for staff retention metrics',
        'Clinical staff demanding workplace culture improvements'
      ]
    }
  },

  solution: {
    headline: 'Data-Driven Psychosocial Safety for Healthcare Teams',
    tagline: 'Transform team wellbeing in just 15 minutes per week',

    valuePropositions: [
      {
        title: 'Reduce Clinical Burnout',
        description: 'Early detection of team stress and workload issues before they escalate to burnout and turnover.',
        metric: {
          value: '50%',
          label: 'Burnout reduction',
          improvement: '50%'
        },
        icon: '🩺'
      },
      {
        title: 'Improve Patient Safety',
        description: 'Stronger team communication and psychological safety directly reduce medical errors and adverse events.',
        metric: {
          value: '40%',
          label: 'Fewer safety incidents',
          improvement: '40%'
        },
        icon: '🛡️'
      },
      {
        title: 'Retain Clinical Staff',
        description: 'Proactive team support reduces turnover by addressing root causes of dissatisfaction before staff leave.',
        metric: {
          value: '35%',
          label: 'Improved retention',
          improvement: '35%'
        },
        icon: '💙'
      },
      {
        title: 'Achieve WHS Compliance',
        description: 'Documented psychosocial risk assessments and controls meet Model WHS Regulations 2022 requirements.',
        metric: {
          value: '100%',
          label: 'Compliance ready',
          improvement: '100%'
        },
        icon: '✅'
      }
    ],

    keyFeatures: [
      {
        title: 'Weekly Team Pulse',
        description: '90-second check-in captures team mood, workload, and psychological safety indicators.',
        benefit: 'Early warning system for burnout risks'
      },
      {
        title: 'Clinical Team Dashboard',
        description: 'Real-time visibility into team wellbeing trends, staffing stress, and communication health.',
        benefit: 'Data-driven leadership decisions'
      },
      {
        title: 'Guided Team Conversations',
        description: 'Structured 15-minute weekly huddles build psychological safety and address emerging issues.',
        benefit: 'Transform team culture systematically'
      },
      {
        title: 'Patient Safety Correlation',
        description: 'Track how team wellbeing metrics correlate with patient outcome indicators.',
        benefit: 'Prove ROI to executives and boards'
      },
      {
        title: 'Privacy-First Design',
        description: 'Team-level aggregation only. No individual surveillance. Designed for psychological safety.',
        benefit: 'Clinical staff trust the system'
      },
      {
        title: 'Accreditation Evidence',
        description: 'Automated reports demonstrate compliance with ACHS, NSQHS, and WHS standards.',
        benefit: 'Streamlined accreditation process'
      }
    ],

    differentiators: [
      {
        title: 'Healthcare-Specific Design',
        description: 'Built for shift work, handovers, and multi-disciplinary teams. Not a generic employee survey.',
        why: 'Clinical workflows demand specialized tools'
      },
      {
        title: 'Action-Oriented Analytics',
        description: 'Every metric links to specific intervention protocols. No data for data\'s sake.',
        why: 'Busy clinical leaders need actionable insights'
      },
      {
        title: 'Privacy by Design',
        description: 'Team-level data only. Meets medical privacy standards and builds trust.',
        why: 'Clinical staff won\'t engage without privacy guarantees'
      }
    ],

    implementationHighlights: {
      title: 'Live in 6 Weeks',
      description: 'From contract signature to full team adoption in one sprint.',
      timeline: [
        { phase: 'Weeks 1-2', milestone: 'Baseline assessment & team setup' },
        { phase: 'Weeks 3-4', milestone: 'Pilot with 2-3 clinical teams' },
        { phase: 'Weeks 5-6', milestone: 'Full rollout & leader training' }
      ]
    }
  },

  howItWorks: {
    headline: 'Simple Weekly Rhythm, Transformational Results',
    subheadline: '15 minutes per week to build resilient clinical teams',

    overview: 'CultureCrunch integrates into your existing clinical operations with minimal disruption. The weekly rhythm builds psychological safety systematically.',

    weeklyWorkflow: [
      {
        step: 1,
        title: 'Monday: Team Pulse Check',
        description: 'Each team member takes a 90-second pulse survey at start of week. Anonymous responses capture mood, workload, and safety concerns.',
        duration: '90 seconds per person',
        deliverables: ['Real-time team health score', 'Flagged risk areas', 'Week-over-week trends'],
        responsible: 'All clinical team members'
      },
      {
        step: 2,
        title: 'Wednesday: Leader Review',
        description: 'Clinical manager reviews team dashboard. AI highlights emerging patterns and suggests conversation topics for weekly huddle.',
        duration: '5 minutes',
        deliverables: ['Prioritized discussion topics', 'Trend analysis', 'Recommended interventions'],
        responsible: 'Clinical team leader'
      },
      {
        step: 3,
        title: 'Friday: Team Huddle',
        description: 'Structured 15-minute team conversation using CultureCrunch prompts. Discuss week\'s challenges, celebrate wins, commit to improvements.',
        duration: '15 minutes',
        deliverables: ['Documented action items', 'Team agreements', 'Progress tracking'],
        responsible: 'Whole clinical team'
      }
    ],

    outcomeTimeline: {
      title: 'Expected Outcomes by Timeframe',
      milestones: [
        {
          timeframe: 'Weeks 1-4',
          outcome: 'Baseline Established',
          description: 'Teams develop routine, trust builds, initial patterns emerge',
          metrics: ['Weekly participation >80%', 'Team trust scores rising', 'Early risk flags identified']
        },
        {
          timeframe: 'Weeks 5-12',
          outcome: 'Cultural Shift Visible',
          description: 'Team communication improves, proactive problem-solving increases, burnout signals decrease',
          metrics: ['Burnout indicators down 20%', 'Team cohesion up 30%', 'Voluntary turnover slowing']
        },
        {
          timeframe: 'Weeks 13-26',
          outcome: 'Measurable Results',
          description: 'Retention improves, patient safety metrics correlate with team health, ROI evident',
          metrics: ['Turnover reduced 25%', 'Safety incidents down 15%', 'Positive ROI demonstrated']
        }
      ]
    }
  },

  roiCalculator: {
    title: 'Healthcare ROI Calculator',
    description: 'Calculate your organization\'s potential savings and outcomes from improved team wellbeing.',

    inputs: [
      {
        id: 'staffCount',
        label: 'Number of Clinical Staff',
        defaultValue: 200,
        min: 20,
        max: 2000,
        step: 10
      },
      {
        id: 'currentTurnover',
        label: 'Current Annual Turnover Rate (%)',
        defaultValue: 27,
        min: 10,
        max: 50,
        step: 1
      },
      {
        id: 'avgReplacementCost',
        label: 'Average Replacement Cost ($)',
        defaultValue: 58000,
        min: 30000,
        max: 150000,
        step: 1000
      },
      {
        id: 'avgSalary',
        label: 'Average Clinical Staff Salary ($)',
        defaultValue: 85000,
        min: 50000,
        max: 200000,
        step: 5000
      }
    ],

    calculations: [
      {
        id: 'currentTurnoverCost',
        label: 'Current Annual Turnover Cost',
        formula: (inputs) => {
          const turnoverCount = (inputs.staffCount * inputs.currentTurnover) / 100;
          return turnoverCount * inputs.avgReplacementCost;
        },
        format: 'currency'
      },
      {
        id: 'productivityLoss',
        label: 'Current Burnout Productivity Loss',
        formula: (inputs) => {
          // 52% burnout rate, 35% productivity loss when burned out
          const burnoutStaff = inputs.staffCount * 0.52;
          return burnoutStaff * inputs.avgSalary * 0.35;
        },
        format: 'currency'
      },
      {
        id: 'projectedTurnoverReduction',
        label: 'Projected Turnover Reduction (35%)',
        formula: (inputs) => {
          const currentCost = (inputs.staffCount * inputs.currentTurnover / 100) * inputs.avgReplacementCost;
          return currentCost * 0.35;
        },
        format: 'currency'
      },
      {
        id: 'projectedProductivityGain',
        label: 'Projected Productivity Gain (50% burnout reduction)',
        formula: (inputs) => {
          const burnoutStaff = inputs.staffCount * 0.52;
          const productivityLoss = burnoutStaff * inputs.avgSalary * 0.35;
          return productivityLoss * 0.50;
        },
        format: 'currency'
      },
      {
        id: 'totalAnnualSavings',
        label: 'Total Projected Annual Savings',
        formula: (inputs) => {
          const turnoverReduction = ((inputs.staffCount * inputs.currentTurnover / 100) * inputs.avgReplacementCost) * 0.35;
          const productivityGain = (inputs.staffCount * 0.52 * inputs.avgSalary * 0.35) * 0.50;
          return turnoverReduction + productivityGain;
        },
        format: 'currency',
        highlight: true
      },
      {
        id: 'roi',
        label: 'Return on Investment',
        formula: (inputs) => {
          const platformCost = inputs.staffCount * 35 * 12; // $35/user/month
          const turnoverReduction = ((inputs.staffCount * inputs.currentTurnover / 100) * inputs.avgReplacementCost) * 0.35;
          const productivityGain = (inputs.staffCount * 0.52 * inputs.avgSalary * 0.35) * 0.50;
          const totalSavings = turnoverReduction + productivityGain;
          return ((totalSavings - platformCost) / platformCost) * 100;
        },
        format: 'percentage',
        highlight: true
      }
    ],

    impactAreas: [
      {
        title: 'Staff Retention',
        baseline: 'Current State',
        improved: 'With CultureCrunch',
        baselineValue: (inputs) => `${inputs.currentTurnover}% turnover`,
        improvedValue: (inputs) => `${Math.round(inputs.currentTurnover * 0.65)}% turnover`,
        improvement: '35% reduction'
      },
      {
        title: 'Clinical Burnout',
        baseline: 'Current State',
        improved: 'With CultureCrunch',
        baselineValue: () => '52% experiencing burnout',
        improvedValue: () => '26% experiencing burnout',
        improvement: '50% reduction'
      },
      {
        title: 'Patient Safety Incidents',
        baseline: 'Current State',
        improved: 'With CultureCrunch',
        baselineValue: () => 'Baseline incident rate',
        improvedValue: () => '40% fewer incidents',
        improvement: '40% reduction'
      }
    ],

    assumptions: [
      'Turnover reduction: 35% based on peer-reviewed healthcare studies',
      'Burnout reduction: 50% based on team intervention research',
      'Replacement cost: Includes recruitment, onboarding, and productivity ramp',
      'Productivity loss: 35% for burned-out staff (AHRQ research)',
      'Platform cost: $35/user/month (enterprise pricing)'
    ]
  },

  brandColor: '#0EA5E9', // Healthcare blue
  accentColor: '#06B6D4'  // Cyan accent
};
