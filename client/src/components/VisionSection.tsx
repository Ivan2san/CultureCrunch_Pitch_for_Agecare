import { Sparkles } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import SectionFeedbackButton from "@/components/SectionFeedbackButton";

export default function VisionSection() {
  const headlineParallax = useParallax({ speed: -0.3 });
  const visionParallax = useParallax({ speed: 0.2 });

  return (
    <section id="vision" className="min-h-screen bg-corporate-gradient flex items-center justify-center px-4 md:px-6 py-20 md:py-32 relative overflow-hidden">
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
              The Future of Workplace Wellbeing
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1]" style={{ letterSpacing: '-0.01em' }}>
            Transforming Psychosocial Compliance into High Performing Culture
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="text-intro">
            We are <span className="font-bold text-indigo-600">CultureCrunch</span>. In six weeks, we turn psychosocial safety from compliance to capability—installing a simple weekly rhythm that builds accountable, safe performance. Powered by real-time behavioural and risk data, your culture becomes visible, measurable, and continuously improving.
          </p>
        </div>

        {/* Vision Statement - Transformed into impactful quote centerpiece */}
        <div ref={visionParallax.ref} style={visionParallax.style} className="relative max-w-5xl mx-auto mt-24">
          <div className="bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-border/50">
            <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-medium" style={{ letterSpacing: '-0.01em' }}>
              A world where every aged care leader can spot psychosocial risks early and turn them into the conversations, actions, and habits that build trust, safety, and high performance.
            </p>
          </div>
        </div>
        <SectionFeedbackButton />
      </div>
    </section>
  );
}
