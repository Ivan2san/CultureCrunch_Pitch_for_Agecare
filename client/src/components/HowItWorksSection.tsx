import CircularLoop from "@/components/CircularLoop";
import WeekByWeekTimeline from "@/components/WeekByWeekTimeline";
import { useParallax } from "@/hooks/useParallax";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionFeedbackButton from "@/components/SectionFeedbackButton";

export default function HowItWorksSection() {
  const headerParallax = useParallax({ speed: -0.08 });
  const [showWeekly, setShowWeekly] = useState(false);

  return (
    <section id="how-it-works" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerParallax.ref} style={headerParallax.style} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8" style={{ letterSpacing: '-0.01em' }}>
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-4">
            A lightweight pulse-to-action system that builds sustainable culture change
          </p>
        </div>

        {/* The Loop at a Glance - Hero */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-8 text-center" style={{ letterSpacing: '-0.01em' }}>
            The Loop at a Glance
          </h3>
          <CircularLoop />
        </div>

        {/* Week-by-Week Install Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4" style={{ letterSpacing: '-0.01em' }}>
              Week-by-Week Install
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              From foundations to sustained impact in just 6 weeks
            </p>
            
            <Button
              variant="outline"
              size="default"
              onClick={() => setShowWeekly(!showWeekly)}
              data-testid="button-toggle-weekly"
            >
              {showWeekly ? (
                <>
                  Hide Weekly Breakdown <ChevronUp className="ml-2 w-4 h-4" />
                </>
              ) : (
                <>
                  Show Weekly Breakdown <ChevronDown className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </div>

          {showWeekly && (
            <div className="animate-fade-in-up">
              <WeekByWeekTimeline />
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-10 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ letterSpacing: '-0.01em' }}>
            Simple. Sustainable. Measurable.
          </h3>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            One loop. One week at a time. Continuous improvement that sticks.
          </p>
        </div>
        <SectionFeedbackButton />
      </div>
    </section>
  );
}
