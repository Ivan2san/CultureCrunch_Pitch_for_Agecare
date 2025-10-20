import { Sparkles } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import SectionFeedbackButton from "@/components/SectionFeedbackButton";

export default function VisionSection() {
  const headlineParallax = useParallax({ speed: -0.3 });
  const visionParallax = useParallax({ speed: 0.2 });

  return (
    <section id="vision" className="min-h-screen bg-corporate-gradient flex items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-purple-300/20 via-pink-300/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-radial from-indigo-300/15 via-purple-300/10 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto text-center space-y-20 relative z-10">
        {/* Headline - More dramatic and impactful */}
        <div ref={headlineParallax.ref} style={headlineParallax.style} className="space-y-8 animate-fade-in-up">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-semibold text-sm" style={{ letterSpacing: '-0.005em' }}>
              <Sparkles className="w-4 h-4" />
              The Future of Workplace Wellbeing
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1]" style={{ letterSpacing: '-0.01em' }}>
            AI That Transforms<br />
            <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
              Psychosocial Compliance into Culture
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            In aged care, every team member matters. CultureCrunch empowers aged care leaders with AI insight, 
            turning psychosocial compliance into proactive support that keeps your team thriving.
          </p>
        </div>

        {/* Vision Statement - Transformed into impactful quote centerpiece */}
        <div ref={visionParallax.ref} style={visionParallax.style} className="relative max-w-5xl mx-auto mt-24">
          <div className="bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-border/50">
            <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-medium" style={{ letterSpacing: '-0.01em' }}>
              A world where every aged care leader has an{" "}
              <span className="text-primary font-bold">AI co-pilot</span>{" "}
              that detects psychosocial hazards before they lead to issues, 
              and provides the exact support conversation needed—every single week.
            </p>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Where psychosocial compliance becomes not just a requirement, but a catalyst for culture—
                unlocking discretionary effort, retention, and elevated resident outcomes.
              </p>
            </div>
          </div>
        </div>
        <SectionFeedbackButton />
      </div>
    </section>
  );
}
