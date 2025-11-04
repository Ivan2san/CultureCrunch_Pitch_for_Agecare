import { Sparkles } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import SectionFeedbackButton from "@/components/SectionFeedbackButton";
import type { VisionConfig } from "@/content/types";

interface VisionTemplateProps {
  config: VisionConfig;
}

/**
 * VisionTemplate Component
 *
 * Displays the vision/hero section for any industry.
 * Accepts a VisionConfig object to customize all text and styling.
 */
export default function VisionTemplate({ config }: VisionTemplateProps) {
  const headlineParallax = useParallax({ speed: -0.3 });
  const visionParallax = useParallax({ speed: 0.2 });

  return (
    <section
      id="vision"
      className="min-h-screen bg-corporate-gradient flex items-center justify-center px-4 md:px-6 py-20 md:py-32 relative overflow-hidden"
    >
      {/* Decorative gradient backgrounds */}
      <div className="absolute bottom-40 -left-20 w-[700px] h-[700px] bg-gradient-radial from-indigo-400/35 via-blue-400/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-[800px] h-[800px] bg-gradient-radial from-purple-400/30 via-pink-400/18 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-60 left-32 w-[600px] h-[600px] bg-gradient-radial from-indigo-400/28 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto text-center space-y-20 relative z-10">
        {/* Headline - More dramatic and impactful */}
        <div ref={headlineParallax.ref} style={headlineParallax.style} className="space-y-8 animate-fade-in-up">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-semibold text-sm" style={{ letterSpacing: '-0.005em' }}>
              <Sparkles className="w-4 h-4" />
              {config.subheadline}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1]" style={{ letterSpacing: '-0.01em' }}>
            {config.headline}
          </h1>
        </div>

        {/* Vision Statement - Transformed into impactful quote centerpiece */}
        <div ref={visionParallax.ref} style={visionParallax.style} className="relative max-w-5xl mx-auto mt-24">
          <div className="bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-border/50">
            <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-medium" style={{ letterSpacing: '-0.01em' }}>
              {config.heroMessage || config.headline}
            </p>
          </div>

          {/* Optional stats display */}
          {config.stats && config.stats.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {config.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
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
        </div>
        <SectionFeedbackButton />
      </div>
    </section>
  );
}
