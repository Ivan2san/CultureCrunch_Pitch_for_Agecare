import type { GenericLandingConfig } from './types';

/**
 * Generic Landing Page Configuration
 *
 * This configuration is used for the main landing page at "/"
 * It provides an industry-agnostic overview and links to specific industries.
 */

export const genericLandingConfig: GenericLandingConfig = {
  // Hero Section
  hero: {
    headline: 'Transform Workplace Culture with Data-Driven Insights',
    subheadline: 'CultureCrunch turns psychosocial compliance requirements into actionable leadership insights that reduce turnover, improve engagement, and build high-performance teams.',
    ctaText: 'Explore Your Industry',
    ctaLink: '#industries',
    features: [
      'Reduce staff turnover by 25%',
      'Decrease mental health claims by 40%',
      'Improve team engagement by 30%',
      'Only 15 minutes per week from leadership',
    ],
  },

  // Industries We Serve
  industries: [
    {
      slug: 'aged-care',
      displayName: 'Aged Care',
      shortDescription: 'Purpose-built for Australian aged care providers facing workforce challenges and new compliance requirements.',
      icon: '🏥',
    },
    {
      slug: 'healthcare',
      displayName: 'Healthcare',
      shortDescription: 'Address clinical burnout, improve patient safety, and retain healthcare talent through data-driven team wellbeing.',
      icon: '⚕️',
    },
    {
      slug: 'construction-professional-services',
      displayName: 'Construction & Professional Services',
      shortDescription: 'Build safety culture, reduce project team stress, and retain top talent in high-pressure environments.',
      icon: '🏗️',
    },
  ],

  // Universal Value Propositions
  valuePropositions: [
    {
      title: 'Privacy by Minimalism',
      description: 'Team-level data aggregation only. No individual tracking. Compliant with all privacy regulations.',
      icon: '🔒',
    },
    {
      title: 'Compliance-Ready',
      description: 'Built-in audit trails and reporting aligned to psychosocial safety regulations.',
      icon: '✅',
    },
    {
      title: 'Minimal Time Investment',
      description: 'Just 15 minutes per week from leadership. Weekly pulse surveys under 60 seconds for teams.',
      icon: '⏱️',
    },
    {
      title: 'Proven Framework',
      description: 'Based on Genos Emotional Intelligence methodology with measurable outcomes.',
      icon: '📊',
    },
  ],

  // How It Works (High-Level)
  howItWorksOverview: [
    {
      step: 1,
      title: 'Weekly Pulse',
      description: 'Team members answer 3 quick questions via SMS/email. Under 60 seconds, mobile-optimized.',
    },
    {
      step: 2,
      title: 'Monday Brief',
      description: 'Leadership receives data-driven insights every Monday morning with recommended actions.',
    },
    {
      step: 3,
      title: 'Team Check-In',
      description: 'Clear, accountable conversations using structured frameworks. Actions tracked to completion.',
    },
  ],
};

export default genericLandingConfig;
