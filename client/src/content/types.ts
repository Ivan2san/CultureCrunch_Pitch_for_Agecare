/**
 * Content Configuration Types for Multi-Industry Architecture
 *
 * These types define the structure of industry-specific content configurations.
 * Each industry page uses these types to ensure consistency and type safety.
 */

// ============================================================================
// Vision Section Types
// ============================================================================

export interface VisionConfig {
  headline: string;
  subheadline: string;
  heroMessage?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundStyle?: {
    gradient?: string;
    image?: string;
  };
  stats?: {
    label: string;
    value: string;
    description?: string;
  }[];
}

// ============================================================================
// Problem Section Types
// ============================================================================

export interface ProblemStatistic {
  label: string;
  value: string | number;
  unit?: string;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface ProblemPainPoint {
  title: string;
  description: string;
  icon?: string;
  severity?: 'low' | 'medium' | 'high' | 'critical';
}

export interface ChartData {
  type: 'bar' | 'line' | 'pie' | 'area';
  title: string;
  data: {
    label: string;
    value: number;
    color?: string;
  }[];
  xAxisLabel?: string;
  yAxisLabel?: string;
}

export interface ProblemConfig {
  mainIssue: string;
  description: string;
  statistics: ProblemStatistic[];
  painPoints: ProblemPainPoint[];
  charts?: ChartData[];
  impactStatement?: string;
}

// ============================================================================
// Why Now Section Types
// ============================================================================

export interface RegulatoryDriver {
  title: string;
  description: string;
  effectiveDate?: string;
  penaltyAmount?: string;
  source?: string;
  url?: string;
}

export interface MarketForce {
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  timeline?: string;
}

export interface WhyNowConfig {
  headline: string;
  description: string;
  urgencyStatement: string;
  regulatoryDrivers: RegulatoryDriver[];
  marketForces: MarketForce[];
  timeline?: {
    date: string;
    event: string;
    importance: 'critical' | 'high' | 'medium';
  }[];
}

// ============================================================================
// Solution Section Types
// ============================================================================

export interface SolutionFeature {
  title: string;
  description: string;
  icon?: string;
  benefits?: string[];
}

export interface ValueProposition {
  title: string;
  description: string;
  metric?: {
    value: string;
    label: string;
  };
}

export interface SolutionConfig {
  headline: string;
  tagline: string;
  description: string;
  valuePropositions: ValueProposition[];
  features: SolutionFeature[];
  differentiators?: string[];
  corePromise?: string;
}

// ============================================================================
// How It Works Section Types
// ============================================================================

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
  deliverable?: string;
  icon?: string;
}

export interface ProcessPhase {
  week: number;
  title: string;
  description: string;
  activities: string[];
  outcomes: string[];
}

export interface HowItWorksConfig {
  headline: string;
  description: string;
  weeklyWorkflow: WorkflowStep[];
  processPhases?: ProcessPhase[];
  timeCommitment?: string;
  cadence?: string;
}

// ============================================================================
// ROI Calculator Types
// ============================================================================

export interface ROIMetric {
  id: string;
  label: string;
  description?: string;
  defaultValue: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  prefix?: string;
  suffix?: string;
}

export interface ROICalculation {
  id: string;
  label: string;
  formula: (inputs: Record<string, number>) => number;
  format?: 'currency' | 'percentage' | 'number';
  description?: string;
}

export interface ROIImpactArea {
  title: string;
  description: string;
  baselineFormula: (inputs: Record<string, number>) => number;
  improvedFormula: (inputs: Record<string, number>) => number;
  improvementPercentage: number;
}

export interface ROICalculatorConfig {
  headline: string;
  description: string;
  industryContext?: string;
  inputs: ROIMetric[];
  calculations: ROICalculation[];
  impactAreas: ROIImpactArea[];
  assumptions: string[];
  sources?: {
    title: string;
    url?: string;
    description?: string;
  }[];
}

// ============================================================================
// Accountable Conversations Types
// ============================================================================

export interface AccountableConversationsConfig {
  headline: string;
  description: string;
  framework?: {
    name: string;
    description: string;
    source?: string;
  };
  benefits: string[];
  process?: string[];
}

// ============================================================================
// Product Flow Types
// ============================================================================

export interface ProductFlowConfig {
  headline: string;
  description: string;
  steps: {
    title: string;
    description: string;
    image?: string;
    features?: string[];
  }[];
}

// ============================================================================
// Main Industry Configuration
// ============================================================================

export interface IndustryConfig {
  // Meta information
  slug: string;
  displayName: string;
  shortName?: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];

  // Content sections
  vision: VisionConfig;
  problem: ProblemConfig;
  whyNow: WhyNowConfig;
  solution: SolutionConfig;
  howItWorks: HowItWorksConfig;
  roiCalculator: ROICalculatorConfig;
  accountableConversations?: AccountableConversationsConfig;
  productFlow?: ProductFlowConfig;

  // Optional customization
  brandColor?: string;
  accentColor?: string;
  customCSS?: string;
}

// ============================================================================
// Company-Specific Configuration
// ============================================================================

export interface CompanyCustomization {
  companyName: string;
  logoUrl?: string;
  primaryContact?: string;
  specificPainPoints?: string[];
  customROIInputs?: Partial<Record<string, number>>;
  additionalNotes?: string;
  presentationDate?: string;
}

export interface CompanyConfig extends IndustryConfig {
  companySlug: string;
  customizations: CompanyCustomization;
  // Extends industry config with company-specific overrides
  baseIndustry: string; // Reference to the base industry (e.g., "aged-care")
}

// ============================================================================
// Generic Landing Page Configuration
// ============================================================================

export interface GenericHeroConfig {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  features: string[];
}

export interface IndustryCardConfig {
  slug: string;
  displayName: string;
  shortDescription: string;
  icon?: string;
  comingSoon?: boolean;
}

export interface GenericLandingConfig {
  hero: GenericHeroConfig;
  industries: IndustryCardConfig[];
  valuePropositions: {
    title: string;
    description: string;
    icon?: string;
  }[];
  howItWorksOverview: {
    step: number;
    title: string;
    description: string;
  }[];
}
