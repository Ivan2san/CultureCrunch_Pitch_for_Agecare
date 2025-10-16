import { MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import LeaderDashboardDemo from "@/components/LeaderDashboardDemo";
import SimpleStorySection from "@/components/SimpleStorySection";
import ImplementationJourneySection from "@/components/ImplementationJourneySection";
import TechnicalDeepDiveSection from "@/components/TechnicalDeepDiveSection";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16" style={{ letterSpacing: '-0.01em' }}>
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            A lightweight pulse-to-action system, co-designed for aged-care teams and grounded in proven behavioural science.
          </p>
        </div>

        {/* Simple 3-Step Story */}
        <SimpleStorySection />

        {/* Interactive Leader Dashboard Demo */}
        <Card className="p-8 mb-16 border-2 border-indigo-500">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="w-10 h-10 text-indigo-600" />
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Experience Monday Morning as a Care Manager</h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Step into the role of an aged care leader. See how CultureCrunch transforms psychosocial risk detection into a 15-minute weekly ritual—from AI-powered brief to measurable results.
            </p>
          </div>

          <LeaderDashboardDemo />
        </Card>

        {/* Implementation Journey (Collapsible) */}
        <ImplementationJourneySection />

        {/* Technical Deep Dive (Collapsible) */}
        <TechnicalDeepDiveSection />
      </div>
    </section>
  );
}
