import { MessageSquare, Repeat, TrendingUp, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useParallax } from "@/hooks/useParallax";
import SectionFeedbackButton from "@/components/SectionFeedbackButton";
import type { SolutionConfig } from "@/content/types";

interface SolutionTemplateProps {
  config: SolutionConfig;
}

// Default icons for features (can be overridden in config)
const defaultIcons: Record<number, any> = {
  0: MessageSquare,
  1: Repeat,
  2: TrendingUp,
};

/**
 * SolutionTemplate Component
 *
 * Displays the solution section with value propositions and features.
 * Accepts a SolutionConfig object to customize all content.
 */
export default function SolutionTemplate({ config }: SolutionTemplateProps) {
  const headerParallax = useParallax({ speed: -0.08 });
  const benefitsParallax = useParallax({ speed: 0.05 });

  return (
    <section
      id="solution"
      className="min-h-screen bg-corporate-gradient px-4 md:px-6 py-20 md:py-32 relative overflow-hidden"
    >
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-20 right-10 w-[800px] h-[800px] bg-gradient-radial from-purple-400/35 via-indigo-400/22 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-[700px] h-[700px] bg-gradient-radial from-pink-400/30 via-purple-400/18 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/3 w-[650px] h-[650px] bg-gradient-radial from-indigo-400/25 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerParallax.ref} style={headerParallax.style} className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ letterSpacing: "-0.01em" }}
          >
            {config.headline}
          </h2>
          {config.tagline && (
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              {config.tagline}
            </div>
          )}
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto mt-4" style={{ letterSpacing: "-0.005em" }}>
            {config.description}
          </p>
        </div>

        {/* Value Propositions */}
        {config.valuePropositions && config.valuePropositions.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {config.valuePropositions.map((vp, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                {vp.metric && (
                  <div className="text-5xl font-bold text-primary mb-4">
                    {vp.metric.value}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {vp.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {vp.description}
                </p>
                {vp.metric && (
                  <p className="text-sm text-primary/70 mt-2 font-medium">
                    {vp.metric.label}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Features */}
        <div ref={benefitsParallax.ref} style={benefitsParallax.style} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {config.features.map((feature, index) => {
            const Icon = defaultIcons[index] || MessageSquare;

            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="p-8">
                  <div className="mb-6 text-primary">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  {feature.benefits && feature.benefits.length > 0 && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Core Promise */}
        {config.corePromise && (
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-md border border-primary/20">
              <p className="text-2xl font-semibold text-foreground" style={{ letterSpacing: "-0.01em" }}>
                {config.corePromise}
              </p>
            </div>
          </div>
        )}

        {/* Differentiators */}
        {config.differentiators && config.differentiators.length > 0 && (
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              What Makes Us Different
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {config.differentiators.map((diff, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border border-border/30"
                >
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                  <span className="text-foreground/90">{diff}</span>
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
