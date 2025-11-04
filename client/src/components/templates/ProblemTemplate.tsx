import { Card } from "@/components/ui/card";
import { TrendingDown, DollarSign, Shield, PackageX, AlertTriangle } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import SectionFeedbackButton from "@/components/SectionFeedbackButton";
import type { ProblemConfig } from "@/content/types";

interface ProblemTemplateProps {
  config: ProblemConfig;
}

// Icon mapping for different pain point categories
const iconMap: Record<string, any> = {
  "Human Cost": TrendingDown,
  "Financial Impact": DollarSign,
  "Compliance Pressure": Shield,
  "Market Gap": PackageX,
  default: AlertTriangle,
};

// Color mapping for severity levels
const severityColors = {
  low: "blue",
  medium: "orange",
  high: "rose",
  critical: "purple",
};

const colorClasses = {
  rose: {
    icon: "text-rose-600",
    stat: "text-rose-600",
  },
  orange: {
    icon: "text-orange-600",
    stat: "text-orange-600",
  },
  blue: {
    icon: "text-blue-600",
    stat: "text-blue-600",
  },
  purple: {
    icon: "text-purple-600",
    stat: "text-purple-600",
  },
};

/**
 * ProblemTemplate Component
 *
 * Displays industry-specific problems, statistics, and pain points.
 * Accepts a ProblemConfig object to customize all content.
 */
export default function ProblemTemplate({ config }: ProblemTemplateProps) {
  const headerParallax = useParallax({ speed: -0.08 });
  const statsParallax = useParallax({ speed: 0.05 });

  return (
    <section
      id="problem"
      className="relative isolate bg-corporate-gradient px-4 md:px-6 py-20 md:py-32 overflow-hidden"
    >
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-10 right-10 w-[750px] h-[750px] bg-gradient-radial from-purple-400/35 via-pink-400/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-[700px] h-[700px] bg-gradient-radial from-indigo-400/30 via-blue-400/18 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-[650px] h-[650px] bg-gradient-radial from-purple-400/28 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerParallax.ref} style={headerParallax.style} className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ letterSpacing: "-0.01em" }}
          >
            THE PROBLEM
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto" style={{ letterSpacing: "-0.005em" }}>
            {config.mainIssue}
          </p>
          {config.description && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              {config.description}
            </p>
          )}
        </div>

        {/* Pain Points Grid */}
        <div ref={statsParallax.ref} style={statsParallax.style} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {config.painPoints.map((painPoint, index) => {
            const Icon = iconMap[painPoint.title] || iconMap.default;
            const color = severityColors[painPoint.severity || "medium"] as keyof typeof colorClasses;
            const colors = colorClasses[color];

            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-background/50 ${colors.icon}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {painPoint.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {painPoint.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Statistics Overview */}
        {config.statistics && config.statistics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {config.statistics.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border/50"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Impact Statement */}
        {config.impactStatement && (
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border/50">
              <p className="text-xl text-foreground/90 leading-relaxed" style={{ letterSpacing: "-0.005em" }}>
                {config.impactStatement}
              </p>
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
