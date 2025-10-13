import { Sparkles } from "lucide-react";
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
