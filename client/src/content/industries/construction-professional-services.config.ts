import type { IndustryConfig } from '../types';

/**
 * Construction & Professional Services Industry Configuration
 *
 * Tailored content for construction companies, engineering firms, architecture practices,
 * and professional services organizations. Focuses on site safety culture, project stress,
 * and high-performance team wellbeing.
 */
export const constructionProfessionalServicesConfig: IndustryConfig = {
  slug: 'construction-professional-services',
  displayName: 'Construction & Professional Services',
  shortName: 'CPS',
  metaTitle: 'CultureCrunch for Construction & Professional Services - Build Safety Culture',
  metaDescription: 'Reduce incidents, improve project delivery, and retain top talent with CultureCrunch\'s data-driven psychosocial safety platform for construction and professional services.',
  keywords: [
    'construction safety culture',
    'site wellbeing',
    'project team stress',
    'professional services burnout',
    'construction psychosocial safety',
    'engineering firm culture',
    'architecture practice wellbeing',
    'high-performance team health'
  ],

  vision: {
    headline: 'From Site Safety To Team Wellbeing',
    subheadline: 'The Future of Construction & Professional Services Culture',
    heroMessage: 'A world where every project leader can spot psychosocial risks early, build resilient teams, and deliver exceptional outcomes—without sacrificing worker wellbeing or safety.',
    coreBeliefs: [
      {
        title: 'Psychological Safety Enables Physical Safety',
        description: 'When teams feel psychologically safe to speak up, physical safety incidents decline. Mental health and site safety are inseparable.'
      },
      {
        title: 'Project Stress Is Predictable & Preventable',
        description: 'Deadline pressure, scope changes, and client demands create predictable stress patterns. Early detection prevents burnout and errors.'
      },
      {
        title: 'High-Performance Teams Need Structured Support',
        description: 'Talented professionals thrive with regular check-ins, clear expectations, and psychosocial safety. Reactive management loses top talent.'
      }
    ],
    futureState: {
      title: 'The Project-Based Workplace of Tomorrow',
      description: 'Imagine organizations where site teams thrive, safety incidents decline, projects deliver on time, and top talent stays long-term.',
      metrics: [
        { value: '60%', label: 'Reduction in safety incidents' },
        { value: '45%', label: 'Fewer project delays from burnout' },
        { value: '40%', label: 'Improved talent retention' }
      ]
    }
  },

  problem: {
    mainIssue: 'Construction & Professional Services Facing Triple Crisis: Safety, Burnout & Turnover',
    context: 'Project-based work creates unique psychosocial pressures. The consequences affect safety, project delivery, and talent retention.',

    statistics: [
      {
        label: 'Construction workers with mental health issues',
        value: '37%',
        description: 'experiencing anxiety or depression',
        source: 'Mates in Construction Report 2023'
      },
      {
        label: 'Professional services annual turnover',
        value: '31%',
        description: 'in architecture and engineering firms',
        source: 'PSMJ Resources A/E Firm Survey 2023'
      },
      {
        label: 'Workers who don\'t report safety concerns',
        value: '45%',
        description: 'due to fear of repercussions',
        source: 'SafeWork Australia Research 2023'
      },
      {
        label: 'Project delays attributed to team issues',
        value: '58%',
        description: 'caused by burnout and turnover',
        source: 'Construction Industry Institute Study'
      }
    ],

    painPoints: [
      {
        title: 'Safety Culture Breakdown',
        description: '45% of workers won\'t report safety concerns due to psychological fear. When teams lack psychological safety, physical safety suffers. Mental health crises lead to incidents.',
        impact: 'Preventable injuries, regulatory penalties, damaged reputation',
        severity: 'critical'
      },
      {
        title: 'Project Team Burnout',
        description: 'Deadline pressure, scope changes, and client demands push teams to breaking point. 37% of construction workers experience mental health issues. Burnout causes errors and delays.',
        impact: 'Project delays, quality issues, rework costs, client dissatisfaction',
        severity: 'critical'
      },
      {
        title: 'Talent Exodus',
        description: '31% annual turnover in professional services. Replacing a senior engineer costs $150-200K. Losing project knowledge mid-delivery devastates timelines and margins.',
        impact: 'Recruitment costs, knowledge loss, project continuity disruption',
        severity: 'high'
      },
      {
        title: 'Compliance Complexity',
        description: 'Model WHS Regulations 2022 require psychosocial risk management. Traditional safety systems don\'t capture mental health risks. Compliance gaps create legal exposure.',
        impact: 'Regulatory fines, litigation risk, insurance premium increases',
        severity: 'high'
      }
    ],

    costBreakdown: {
      title: 'Annual Cost of Inaction (150-person firm)',
      items: [
        {
          category: 'Staff Turnover',
          description: 'Replacing 31% of professional staff annually',
          annualCost: 650000
        },
        {
          category: 'Project Delays',
          description: 'Burnout-related delays and rework',
          annualCost: 480000
        },
        {
          category: 'Safety Incidents',
          description: 'Workers comp, lost time, legal costs',
          annualCost: 320000
        },
        {
          category: 'Recruitment & Onboarding',
          description: 'Agency fees, training, knowledge transfer',
          annualCost: 220000
        }
      ],
      total: 1670000
    }
  },

  whyNow: {
    headline: 'The Perfect Storm in Project-Based Industries',
    context: 'Multiple forces are converging to make psychosocial safety business-critical for construction and professional services.',

    regulatoryDrivers: [
      {
        title: 'Model WHS Regulations 2022',
        description: 'Psychosocial hazards now legally equal to physical hazards. Site leaders must identify, assess, and control mental health risks.',
        deadline: 'Enforced now with escalating penalties',
        impact: 'high'
      },
      {
        title: 'Construction Industry Code of Conduct',
        description: 'Federal projects require demonstrated workplace culture programs. Psychosocial safety evidence is mandatory for tender compliance.',
        deadline: 'Required for government contracts',
        impact: 'high'
      },
      {
        title: 'Professional Liability Standards',
        description: 'Engineers Australia and architecture boards now expect firms to demonstrate team wellbeing programs for professional indemnity.',
        deadline: 'Ongoing requirement',
        impact: 'medium'
      }
    ],

    marketForces: [
      {
        title: 'Talent War Intensifies',
        description: 'Skills shortage across construction and professional services. Top talent demands better work-life balance and psychological safety.',
        urgency: 'Worsening annually',
        impact: 'high'
      },
      {
        title: 'Client Expectations Evolving',
        description: 'Major clients (government, corporates) now audit contractor safety culture. Psychosocial safety is a tender differentiator.',
        urgency: 'Immediate',
        impact: 'high'
      },
      {
        title: 'Insurance Premium Pressure',
        description: 'Workers comp and professional indemnity insurers offering discounts for proactive mental health programs.',
        urgency: 'Available now',
        impact: 'medium'
      }
    ],

    culturalShift: {
      title: 'Industry\'s Cultural Evolution',
      description: 'Construction and professional services are shifting from "tough it out" cultures to psychological safety. Leaders recognize that mental health drives both safety outcomes and project delivery.',
      evidence: [
        'Major contractors implementing mandatory mental health training',
        'Professional services firms hiring wellbeing coordinators',
        'Industry associations prioritizing psychosocial safety campaigns'
      ]
    }
  },

  solution: {
    headline: 'Data-Driven Psychosocial Safety for Project Teams',
    tagline: 'Transform team wellbeing in just 15 minutes per week',

    valuePropositions: [
      {
        title: 'Improve Safety Culture',
        description: 'Early detection of psychological safety issues that undermine physical safety. When teams feel safe to speak up, incidents decline.',
        metric: {
          value: '60%',
          label: 'Fewer safety incidents',
          improvement: '60%'
        },
        icon: '🦺'
      },
      {
        title: 'Deliver Projects On Time',
        description: 'Proactive burnout prevention reduces project delays from staff turnover and performance degradation.',
        metric: {
          value: '45%',
          label: 'Fewer delays from burnout',
          improvement: '45%'
        },
        icon: '🎯'
      },
      {
        title: 'Retain Top Talent',
        description: 'Regular team check-ins address root causes of dissatisfaction before senior staff leave mid-project.',
        metric: {
          value: '40%',
          label: 'Improved retention',
          improvement: '40%'
        },
        icon: '💼'
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
        description: '90-second check-in captures site/project team mood, workload pressure, and psychological safety indicators.',
        benefit: 'Early warning system for safety culture breakdown'
      },
      {
        title: 'Project Team Dashboard',
        description: 'Real-time visibility into team wellbeing trends, deadline stress, and communication health across active projects.',
        benefit: 'Data-driven project management decisions'
      },
      {
        title: 'Guided Team Conversations',
        description: 'Structured 15-minute weekly toolbox talks build psychological safety and address emerging issues.',
        benefit: 'Transform site/project culture systematically'
      },
      {
        title: 'Safety Incident Correlation',
        description: 'Track how team wellbeing metrics correlate with safety incident rates and near-miss reports.',
        benefit: 'Prove ROI to executives and safety managers'
      },
      {
        title: 'Privacy-First Design',
        description: 'Team-level aggregation only. No individual surveillance. Designed to build trust on sites and in teams.',
        benefit: 'Workers and professionals trust the system'
      },
      {
        title: 'Compliance Evidence',
        description: 'Automated reports demonstrate compliance with WHS regulations, tender requirements, and insurance criteria.',
        benefit: 'Streamlined audits and tender responses'
      }
    ],

    differentiators: [
      {
        title: 'Project-Based Design',
        description: 'Built for fluctuating teams, site rotations, and project lifecycles. Not a generic employee survey.',
        why: 'Project work demands specialized tools'
      },
      {
        title: 'Safety-Centric Analytics',
        description: 'Every metric links to safety culture and incident prevention. Psychosocial safety drives physical safety.',
        why: 'Site leaders need safety-relevant insights'
      },
      {
        title: 'Trust by Design',
        description: 'Team-level data only. Meets industrial privacy standards and builds psychological safety.',
        why: 'Workers won\'t engage without privacy guarantees'
      }
    ],

    implementationHighlights: {
      title: 'Live in 6 Weeks',
      description: 'From contract signature to full team adoption across sites/projects in one sprint.',
      timeline: [
        { phase: 'Weeks 1-2', milestone: 'Baseline assessment & team setup' },
        { phase: 'Weeks 3-4', milestone: 'Pilot with 2-3 project teams or sites' },
        { phase: 'Weeks 5-6', milestone: 'Full rollout & leader training' }
      ]
    }
  },

  howItWorks: {
    headline: 'Simple Weekly Rhythm, Transformational Safety Culture',
    subheadline: '15 minutes per week to build resilient project teams',

    overview: 'CultureCrunch integrates into your existing safety and project management systems with minimal disruption. The weekly rhythm builds psychological safety systematically.',

    weeklyWorkflow: [
      {
        step: 1,
        title: 'Monday: Team Pulse Check',
        description: 'Each team member takes a 90-second pulse survey at start of week (toolbox talk or project standup). Anonymous responses capture mood, workload, safety culture.',
        duration: '90 seconds per person',
        deliverables: ['Real-time team health score', 'Flagged risk areas', 'Week-over-week trends'],
        responsible: 'All site workers / project team members'
      },
      {
        step: 2,
        title: 'Wednesday: Leader Review',
        description: 'Site manager or project lead reviews team dashboard. AI highlights emerging patterns and suggests conversation topics for toolbox talk.',
        duration: '5 minutes',
        deliverables: ['Prioritized discussion topics', 'Trend analysis', 'Recommended interventions'],
        responsible: 'Site supervisor / project manager'
      },
      {
        step: 3,
        title: 'Friday: Team Conversation',
        description: 'Structured 15-minute toolbox talk or team meeting using CultureCrunch prompts. Discuss week\'s challenges, celebrate wins, commit to improvements.',
        duration: '15 minutes',
        deliverables: ['Documented action items', 'Team agreements', 'Progress tracking'],
        responsible: 'Whole site team / project team'
      }
    ],

    outcomeTimeline: {
      title: 'Expected Outcomes by Timeframe',
      milestones: [
        {
          timeframe: 'Weeks 1-4',
          outcome: 'Baseline Established',
          description: 'Teams develop routine, trust builds, initial patterns emerge',
          metrics: ['Weekly participation >75%', 'Team trust scores rising', 'Early risk flags identified']
        },
        {
          timeframe: 'Weeks 5-12',
          outcome: 'Cultural Shift Visible',
          description: 'Team communication improves, proactive problem-solving increases, safety culture strengthens',
          metrics: ['Burnout indicators down 25%', 'Safety reporting up 35%', 'Team cohesion improving']
        },
        {
          timeframe: 'Weeks 13-26',
          outcome: 'Measurable Results',
          description: 'Retention improves, safety incidents decline, project delivery metrics improve, ROI evident',
          metrics: ['Turnover reduced 30%', 'Safety incidents down 40%', 'Positive ROI demonstrated']
        }
      ]
    }
  },

  roiCalculator: {
    title: 'Construction & Professional Services ROI Calculator',
    description: 'Calculate your organization\'s potential savings and outcomes from improved team wellbeing and safety culture.',

    inputs: [
      {
        id: 'staffCount',
        label: 'Number of Site Workers / Professionals',
        defaultValue: 150,
        min: 20,
        max: 1000,
        step: 10
      },
      {
        id: 'currentTurnover',
        label: 'Current Annual Turnover Rate (%)',
        defaultValue: 31,
        min: 10,
        max: 50,
        step: 1
      },
      {
        id: 'avgReplacementCost',
        label: 'Average Replacement Cost ($)',
        defaultValue: 65000,
        min: 30000,
        max: 200000,
        step: 1000
      },
      {
        id: 'avgSalary',
        label: 'Average Staff Salary ($)',
        defaultValue: 95000,
        min: 50000,
        max: 200000,
        step: 5000
      },
      {
        id: 'annualSafetyIncidents',
        label: 'Annual Safety Incidents (Lost Time)',
        defaultValue: 8,
        min: 0,
        max: 50,
        step: 1
      },
      {
        id: 'avgIncidentCost',
        label: 'Average Incident Cost ($)',
        defaultValue: 45000,
        min: 10000,
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
        id: 'currentSafetyCost',
        label: 'Current Annual Safety Incident Cost',
        formula: (inputs) => {
          return inputs.annualSafetyIncidents * inputs.avgIncidentCost;
        },
        format: 'currency'
      },
      {
        id: 'productivityLoss',
        label: 'Current Burnout Productivity Loss',
        formula: (inputs) => {
          // 37% burnout rate, 30% productivity loss when burned out
          const burnoutStaff = inputs.staffCount * 0.37;
          return burnoutStaff * inputs.avgSalary * 0.30;
        },
        format: 'currency'
      },
      {
        id: 'projectedTurnoverReduction',
        label: 'Projected Turnover Reduction (40%)',
        formula: (inputs) => {
          const currentCost = (inputs.staffCount * inputs.currentTurnover / 100) * inputs.avgReplacementCost;
          return currentCost * 0.40;
        },
        format: 'currency'
      },
      {
        id: 'projectedSafetyReduction',
        label: 'Projected Safety Incident Reduction (60%)',
        formula: (inputs) => {
          const currentCost = inputs.annualSafetyIncidents * inputs.avgIncidentCost;
          return currentCost * 0.60;
        },
        format: 'currency'
      },
      {
        id: 'projectedProductivityGain',
        label: 'Projected Productivity Gain (45% burnout reduction)',
        formula: (inputs) => {
          const burnoutStaff = inputs.staffCount * 0.37;
          const productivityLoss = burnoutStaff * inputs.avgSalary * 0.30;
          return productivityLoss * 0.45;
        },
        format: 'currency'
      },
      {
        id: 'totalAnnualSavings',
        label: 'Total Projected Annual Savings',
        formula: (inputs) => {
          const turnoverReduction = ((inputs.staffCount * inputs.currentTurnover / 100) * inputs.avgReplacementCost) * 0.40;
          const safetyReduction = (inputs.annualSafetyIncidents * inputs.avgIncidentCost) * 0.60;
          const productivityGain = (inputs.staffCount * 0.37 * inputs.avgSalary * 0.30) * 0.45;
          return turnoverReduction + safetyReduction + productivityGain;
        },
        format: 'currency',
        highlight: true
      },
      {
        id: 'roi',
        label: 'Return on Investment',
        formula: (inputs) => {
          const platformCost = inputs.staffCount * 32 * 12; // $32/user/month
          const turnoverReduction = ((inputs.staffCount * inputs.currentTurnover / 100) * inputs.avgReplacementCost) * 0.40;
          const safetyReduction = (inputs.annualSafetyIncidents * inputs.avgIncidentCost) * 0.60;
          const productivityGain = (inputs.staffCount * 0.37 * inputs.avgSalary * 0.30) * 0.45;
          const totalSavings = turnoverReduction + safetyReduction + productivityGain;
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
        improvedValue: (inputs) => `${Math.round(inputs.currentTurnover * 0.60)}% turnover`,
        improvement: '40% reduction'
      },
      {
        title: 'Safety Incidents',
        baseline: 'Current State',
        improved: 'With CultureCrunch',
        baselineValue: (inputs) => `${inputs.annualSafetyIncidents} incidents/year`,
        improvedValue: (inputs) => `${Math.round(inputs.annualSafetyIncidents * 0.40)} incidents/year`,
        improvement: '60% reduction'
      },
      {
        title: 'Team Burnout',
        baseline: 'Current State',
        improved: 'With CultureCrunch',
        baselineValue: () => '37% experiencing burnout',
        improvedValue: () => '20% experiencing burnout',
        improvement: '45% reduction'
      }
    ],

    assumptions: [
      'Turnover reduction: 40% based on construction and professional services research',
      'Safety incident reduction: 60% based on psychological safety intervention studies',
      'Burnout reduction: 45% based on team intervention research',
      'Replacement cost: Includes recruitment, onboarding, and productivity ramp',
      'Incident cost: Workers comp, lost time, legal, reputation impact',
      'Platform cost: $32/user/month (enterprise pricing)'
    ]
  },

  brandColor: '#F59E0B', // Construction orange/amber
  accentColor: '#EAB308'  // Yellow accent
};
