import { Brain, Sparkles, Users, Zap } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

export default function VisionSection() {
  const headlineParallax = useParallax({ speed: -0.3 });
  const visionParallax = useParallax({ speed: 0.2 });

  return (
    <section id="vision" className="min-h-screen bg-corporate-gradient flex items-center justify-center px-6 py-32">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Headline */}
        <div ref={headlineParallax.ref} style={headlineParallax.style} className="space-y-6 animate-fade-in-up">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              The Future of Workplace Wellbeing
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight" style={{ letterSpacing: '-0.01em' }}>
            AI That Transforms<br />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Compliance into Care
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're entering an era of abundance, where AI doesn't replace human connection, 
            but amplifies it. CultureCrunch empowers leaders with insight, 
            turning workplace data into moments of genuine support.
          </p>
        </div>

        {/* AI Evolution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-1" data-testid="card-ai-evolution-1">
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-950 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Agentic AI</h3>
            <p className="text-muted-foreground">
              Autonomous intelligence that detects psychosocial risks before they escalate, 
              interpreting behavioural patterns with privacy-first principles.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-1" data-testid="card-ai-evolution-2">
            <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Real-Time Nudges</h3>
            <p className="text-muted-foreground">
              Contextual guidance delivered to leaders at the perfect moment, 
              transforming cold data into warm, actionable conversations.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-1" data-testid="card-ai-evolution-3">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Human-Centered</h3>
            <p className="text-muted-foreground">
              Technology that enhances managerial capacity, not replaces it,
              building thriving teams through evidence-based micro-actions.
            </p>
          </div>
        </div>

        {/* Vision Statement */}
        <div ref={visionParallax.ref} style={visionParallax.style} className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-border">
          <p className="text-lg text-foreground leading-relaxed">
            <span className="font-bold text-purple-600 dark:text-purple-400">Our Vision:</span> A world where every leader 
            has an AI co-pilot that helps them see what surveys can't show, understand what their team 
            truly needs, and act with confidence every single week. Where compliance isn't a burden, 
            but a catalyst for creating workplaces where people genuinely thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
