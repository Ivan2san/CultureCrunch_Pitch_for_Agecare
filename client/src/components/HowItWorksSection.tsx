import SimpleStorySection from "@/components/SimpleStorySection";
import ImplementationJourneySection from "@/components/ImplementationJourneySection";
import TechnicalDeepDiveSection from "@/components/TechnicalDeepDiveSection";
import { useParallax } from "@/hooks/useParallax";

export default function HowItWorksSection() {
  const headerParallax = useParallax({ speed: -0.2 });

  return (
    <section id="how-it-works" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerParallax.ref} style={headerParallax.style} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16" style={{ letterSpacing: '-0.01em' }}>
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            A lightweight pulse-to-action system, co-designed for aged-care teams and grounded in proven behavioural science.
          </p>
        </div>

        {/* Simple 3-Step Story */}
        <SimpleStorySection />

        {/* Implementation Journey (Collapsible) */}
        <ImplementationJourneySection />

        {/* Technical Deep Dive (Collapsible) */}
        <TechnicalDeepDiveSection />
      </div>
    </section>
  );
}
