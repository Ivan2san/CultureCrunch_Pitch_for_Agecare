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
    <section id="how-it-works" className="min-h-screen bg-corporate-gradient px-6 py-32 relative overflow-hidden">
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-10 left-20 w-[700px] h-[700px] bg-gradient-radial from-indigo-400/32 via-purple-400/18 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-[750px] h-[750px] bg-gradient-radial from-pink-400/28 via-indigo-400/16 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-400/30 via-transparent to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
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
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-10 text-center border-2 border-purple-300">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-purple-900" style={{ letterSpacing: '-0.01em' }}>
            Simple. Sustainable. Measurable.
          </h3>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-purple-800">
            One loop. One week at a time. Continuous improvement that sticks.
          </p>
        </div>
        <SectionFeedbackButton />
      </div>
    </section>
  );
}
