import Navigation from "@/components/Navigation";
import WelcomeNotice from "@/components/WelcomeNotice";
import {
  VisionTemplate,
  ProblemTemplate,
  WhyNowTemplate,
  SolutionTemplate,
  HowItWorksTemplate,
  ROICalculatorTemplate,
} from "@/components/templates";
import ProductFlowSection from "@/components/ProductFlowSection";
import AccountableConversations from "@/components/AccountableConversations";
import type { IndustryConfig } from "@/content/types";

interface IndustryPageProps {
  config: IndustryConfig;
}

/**
 * IndustryPage Component
 *
 * Wrapper component that orchestrates all template components for an industry-specific page.
 * Accepts an IndustryConfig object and passes sections to appropriate templates.
 */
export default function IndustryPage({ config }: IndustryPageProps) {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Welcome Notice */}
      <WelcomeNotice />

      {/* Vision Section */}
      <VisionTemplate config={config.vision} />

      {/* Problem Section */}
      <ProblemTemplate config={config.problem} />

      {/* Why Now Section */}
      <WhyNowTemplate config={config.whyNow} />

      {/* Solution Section */}
      <SolutionTemplate config={config.solution} />

      {/* Product Flow Section (using existing component for now) */}
      {config.productFlow && <ProductFlowSection />}

      {/* How It Works Section */}
      <HowItWorksTemplate config={config.howItWorks} />

      {/* Accountable Conversations (using existing component for now) */}
      {config.accountableConversations && (
        <section
          id="accountable-conversations"
          className="min-h-screen bg-corporate-gradient px-4 md:px-6 py-20 md:py-32"
        >
          <div className="max-w-7xl mx-auto">
            <AccountableConversations />
          </div>
        </section>
      )}

      {/* ROI Calculator Section */}
      <ROICalculatorTemplate config={config.roiCalculator} />

      {/* Additional sections can be added here based on config */}
    </div>
  );
}
