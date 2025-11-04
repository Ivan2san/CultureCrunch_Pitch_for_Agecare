import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import SectionFeedbackButton from "@/components/SectionFeedbackButton";
import type { HowItWorksConfig } from "@/content/types";

interface HowItWorksTemplateProps {
  config: HowItWorksConfig;
}

/**
 * HowItWorksTemplate Component
 *
 * Displays the "How It Works" section with workflow steps/timeline.
 * Accepts a HowItWorksConfig object to customize all content.
 */
export default function HowItWorksTemplate({ config }: HowItWorksTemplateProps) {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const headerParallax = useParallax({ speed: -0.08 });
  const stepsParallax = useParallax({ speed: 0.05 });

  const toggleStep = (step: number) => {
    setExpandedStep(expandedStep === step ? null : step);
  };

  return (
    <section
      id="how-it-works"
      className="min-h-screen bg-corporate-gradient px-4 md:px-6 py-20 md:py-32 relative overflow-hidden"
    >
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-20 left-10 w-[800px] h-[800px] bg-gradient-radial from-indigo-400/35 via-blue-400/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-[700px] h-[700px] bg-gradient-radial from-purple-400/30 via-pink-400/18 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-[650px] h-[650px] bg-gradient-radial from-indigo-400/25 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerParallax.ref} style={headerParallax.style} className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ letterSpacing: "-0.01em" }}
          >
            {config.headline}
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto" style={{ letterSpacing: "-0.005em" }}>
            {config.description}
          </p>
          {config.timeCommitment && (
            <div className="inline-block mt-6 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
              <p className="text-sm font-semibold text-primary">
                ⏱️ Time Commitment: {config.timeCommitment}
              </p>
            </div>
          )}
        </div>

        {/* Workflow Steps */}
        <div ref={stepsParallax.ref} style={stepsParallax.style} className="max-w-4xl mx-auto space-y-4">
          {config.weeklyWorkflow.map((step) => (
            <div
              key={step.step}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleStep(step.step)}
                className="w-full text-left p-6 md:p-8 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-3xl transition-all"
                data-week-title={step.title}
                data-week-description={step.description}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6 flex-1">
                    {/* Step Number */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {step.step}
                      </span>
                    </div>

                    {/* Title and Duration */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {step.title}
                      </h3>
                      {step.duration && (
                        <p className="text-sm text-muted-foreground">
                          {step.duration}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <ChevronDown
                    className={`flex-shrink-0 w-6 h-6 text-muted-foreground transition-transform duration-300 ${
                      expandedStep === step.step ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Description (Expandable) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedStep === step.step ? "max-h-96 mt-6" : "max-h-0"
                  }`}
                >
                  <div className="pl-18 pr-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    {step.deliverable && (
                      <div className="mt-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                        <p className="text-sm font-medium text-primary mb-1">
                          Deliverable:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {step.deliverable}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Process Phases (Optional) */}
        {config.processPhases && config.processPhases.length > 0 && (
          <div className="max-w-6xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Program Phases
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.processPhases.map((phase) => (
                <div
                  key={phase.week}
                  className="p-6 rounded-2xl bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border border-border/30"
                >
                  <div className="text-sm font-semibold text-primary mb-2">
                    Week {phase.week}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {phase.description}
                  </p>
                  {phase.outcomes && phase.outcomes.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-foreground/70 mb-2">
                        Outcomes:
                      </p>
                      <ul className="space-y-1">
                        {phase.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-1 h-1 mt-1.5 rounded-full bg-primary" />
                            <span className="text-xs text-muted-foreground">
                              {outcome}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12">
          <SectionFeedbackButton />
        </div>
      </div>
    </section>
  );
}
