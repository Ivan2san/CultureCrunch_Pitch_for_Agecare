import { Scale, HeartCrack, BrainCircuit } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import SectionFeedbackButton from "@/components/SectionFeedbackButton";
import type { WhyNowConfig } from "@/content/types";

interface WhyNowTemplateProps {
  config: WhyNowConfig;
}

// Icon mapping for different force types
const iconMap: Record<string, any> = {
  regulatory: Scale,
  burnout: HeartCrack,
  technology: BrainCircuit,
  default: Scale,
};

// Tone styles based on impact level
const impactStyles = {
  high: {
    border: "border-2 border-indigo-400 hover:border-indigo-500 focus:ring-indigo-300/40",
    icon: "text-indigo-600",
    bullet: "bg-indigo-400/70",
  },
  medium: {
    border: "border-2 border-purple-400 hover:border-purple-500 focus:ring-purple-300/40",
    icon: "text-purple-600",
    bullet: "bg-purple-400/70",
  },
  low: {
    border: "border-2 border-blue-400 hover:border-blue-500 focus:ring-blue-300/40",
    icon: "text-blue-600",
    bullet: "bg-blue-400/70",
  },
};

/**
 * WhyNowTemplate Component
 *
 * Displays the "Why Now" section with regulatory drivers and market forces.
 * Accepts a WhyNowConfig object to customize all content.
 */
export default function WhyNowTemplate({ config }: WhyNowTemplateProps) {
  const headerParallax = useParallax({ speed: -0.08 });
  const cardsParallax = useParallax({ speed: 0.05 });

  // Combine regulatory drivers and market forces for display
  const allForces = [
    ...config.regulatoryDrivers.map((driver) => ({
      title: driver.title,
      description: driver.description,
      details: [
        driver.effectiveDate ? `Effective: ${driver.effectiveDate}` : null,
        driver.penaltyAmount ? `Penalties: ${driver.penaltyAmount}` : null,
        driver.source ? `Source: ${driver.source}` : null,
      ].filter(Boolean) as string[],
      icon: "regulatory",
      impact: "high" as const,
    })),
    ...config.marketForces.map((force) => ({
      title: force.title,
      description: force.description,
      details: force.timeline ? [`Timeline: ${force.timeline}`] : [],
      icon: force.title.toLowerCase().includes("burnout") ? "burnout" : "technology",
      impact: force.impact,
    })),
  ];

  return (
    <section
      id="why-now"
      className="relative isolate bg-corporate-gradient px-4 md:px-6 py-20 md:py-32 overflow-hidden"
    >
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-10 left-10 w-[750px] h-[750px] bg-gradient-radial from-indigo-400/35 via-blue-400/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-[700px] h-[700px] bg-gradient-radial from-purple-400/30 via-pink-400/18 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-[650px] h-[650px] bg-gradient-radial from-indigo-400/28 via-transparent to-transparent rounded-full blur-3xl" />

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
        </div>

        {/* Forces Cards */}
        <div ref={cardsParallax.ref} style={cardsParallax.style} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {allForces.map((force, index) => {
            const Icon = iconMap[force.icon] || iconMap.default;
            const styles = impactStyles[force.impact];

            return (
              <div
                key={index}
                className={`relative group p-8 rounded-3xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] ${styles.border}`}
              >
                {/* Icon */}
                <div className={`mb-6 ${styles.icon}`}>
                  <Icon className="w-12 h-12" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4" style={{ letterSpacing: "-0.01em" }}>
                  {force.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {force.description}
                </p>

                {/* Details/Bullets */}
                {force.details && force.details.length > 0 && (
                  <ul className="space-y-3">
                    {force.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <span className={`flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full ${styles.bullet}`} />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Urgency Statement */}
        {config.urgencyStatement && (
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-md border border-primary/20">
              <p className="text-xl text-foreground leading-relaxed" style={{ letterSpacing: "-0.005em" }}>
                {config.urgencyStatement}
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
