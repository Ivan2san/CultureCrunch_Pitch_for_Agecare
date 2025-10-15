import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function SolutionSection() {
  const outcomes = [
    "Meets compliance requirements (WHS + Aged Care Quality Standards)",
    "Reduces turnover by addressing root causes (burnout, lack of support, stress)",
    "Takes 15 minutes/week from leaders—designed for managers drowning in the same hazards"
  ];

  return (
    <section id="solution" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16" style={{ letterSpacing: '-0.01em' }}>
            The Solution: <span className="text-indigo-600">Psychosocial Safety Installed, Not Workshopped</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Culture Crunch is a 6-week sprint that meets compliance, reduces turnover, and takes just 15 minutes per week
          </p>
        </div>

        {/* 6-Week Sprint Description */}
        <div className="mb-12 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-8" style={{ letterSpacing: '-0.01em' }}>
            A 6-Week Sprint That:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-outcome-${index}`}>
                <div className="flex flex-col items-center text-center gap-4">
                  <CheckCircle className="w-12 h-12 text-indigo-600 flex-shrink-0" />
                  <p className="text-lg md:text-xl font-medium text-foreground" style={{ letterSpacing: '-0.005em' }}>
                    {outcome}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Leaders are Drowning Too */}
        <div className="mb-16 mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border-2 border-purple-200">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4" style={{ letterSpacing: '-0.01em' }}>
              Built for Leaders Drowning in the Same Storm
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Research shows: "Psychosocial hazards do not just affect frontline workers; they extend to management and administration staff." 
              Burnt-out managers don't have hours for workshops or complex dashboards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-white/70 rounded-lg p-5 border border-purple-200">
                <p className="font-bold text-purple-700 mb-2">15-Minute Monday Ritual</p>
                <p className="text-sm text-muted-foreground">
                  Brief delivered at 8am Monday. One micro-action. No login required. No analytics to interpret. Leaders under stress can't absorb complexity.
                </p>
              </div>
              <div className="bg-white/70 rounded-lg p-5 border border-indigo-200">
                <p className="font-bold text-indigo-700 mb-2">AI Does the Heavy Lifting</p>
                <p className="text-sm text-muted-foreground">
                  AI analyzes pulse trends, identifies risks, and recommends one simple action. Leaders execute, don't analyze. Built for managers who are themselves experiencing psychosocial hazards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Positioning Statements */}
        <div className="space-y-6 text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.01em' }}>
            Not consulting. An installable operating rhythm.
          </p>
          
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg">
            <p className="text-2xl md:text-3xl font-bold text-white" style={{ letterSpacing: '-0.01em' }}>
              "We don't run workshops; we install habits."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
