import { Brain, Sparkles, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VisionSection() {
  const logoUrl = new URL('../../attached_assets/CC Logo_1760349519905.PNG', import.meta.url).href;
  
  const scrollToNext = () => {
    const element = document.getElementById("problem");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="vision" className="min-h-screen bg-corporate-gradient flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Headline */}
        <div className="space-y-6 animate-fade-in-up">
          {/* Company Branding */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logoUrl} alt="CultureCrunch Logo" className="w-12 h-12 md:w-16 md:h-16" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">CultureCrunch</h2>
          </div>
          
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              The Future of Workplace Wellbeing
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            AI That Transforms<br />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Compliance into Care
            </span>
          </h1>
        </div>

        {/* AI Evolution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1" data-testid="card-ai-evolution-1">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Agentic AI</h3>
            <p className="text-gray-600">
              Autonomous intelligence that detects psychosocial risks before they escalate, 
              interpreting behavioural patterns with privacy-first principles.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1" data-testid="card-ai-evolution-2">
            <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Real-Time Nudges</h3>
            <p className="text-gray-600">
              Contextual guidance delivered to managers at the perfect moment, 
              transforming cold data into warm, actionable conversations.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1" data-testid="card-ai-evolution-3">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Human-Centered</h3>
            <p className="text-gray-600">
              Technology that enhances managerial capacity, not replaces it,
              building thriving teams through evidence-based micro-actions.
            </p>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="font-bold text-purple-600">Our Vision:</span> A world where every manager 
            has an AI co-pilot that helps them see what surveys can't show, understand what their team 
            truly needs, and act with confidence every single week. Where compliance isn't a burden, 
            but a catalyst for creating workplaces where people genuinely thrive.
          </p>
        </div>

        {/* CTA */}
        <div className="pt-8">
          <Button 
            size="lg" 
            onClick={scrollToNext}
            className="text-lg px-8 py-6"
            data-testid="button-explore-solution"
          >
            Explore the Solution
          </Button>
        </div>
      </div>
    </section>
  );
}
