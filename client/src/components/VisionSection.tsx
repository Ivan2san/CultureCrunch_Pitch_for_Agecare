import { Sparkles, Quote } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

export default function VisionSection() {
  const headlineParallax = useParallax({ speed: -0.3 });
  const visionParallax = useParallax({ speed: 0.2 });

  return (
    <section id="vision" className="min-h-screen bg-corporate-gradient flex items-center justify-center px-6 py-32">
      <div className="max-w-7xl mx-auto text-center space-y-20">
        {/* Headline - More dramatic and impactful */}
        <div ref={headlineParallax.ref} style={headlineParallax.style} className="space-y-8 animate-fade-in-up">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide">
              <Sparkles className="w-4 h-4" />
              The Future of Workplace Wellbeing
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
            AI That Transforms<br />
            <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
              Compliance into Care
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're entering an era of abundance, where AI doesn't replace human connection, 
            but amplifies it. CultureCrunch empowers leaders with insight, 
            turning workplace data into moments of genuine support.
          </p>
        </div>

        {/* Vision Statement - Transformed into impactful quote centerpiece */}
        <div ref={visionParallax.ref} style={visionParallax.style} className="relative max-w-5xl mx-auto mt-24">
          <div className="absolute -top-6 -left-4 md:-left-8">
            <Quote className="w-16 h-16 md:w-20 md:h-20 text-primary/20" />
          </div>
          
          <div className="bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-border/50">
            <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-medium" style={{ letterSpacing: '-0.01em' }}>
              A world where every leader has an{" "}
              <span className="text-primary font-bold">AI co-pilot</span>{" "}
              that helps them see what surveys can't show, understand what their team truly needs, 
              and act with confidence every single week.
            </p>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Where compliance isn't a burden, but a catalyst for creating workplaces where people genuinely thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
