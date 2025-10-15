import { ArrowRight, Settings, Rocket, RefreshCcw } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function CustomerJourneyFlow() {
  const phases = [
    {
      id: "setup",
      title: "Setup & Align",
      duration: "Weeks 1-2",
      icon: Settings,
      color: "indigo",
      summary: "Quick configuration and team alignment",
      keyPoints: [
        "Define organisational structure & teams",
        "Map Red→Green target behaviours",
        "Configure pulse survey delivery times",
        "First Friday pulse survey launched"
      ]
    },
    {
      id: "sprint",
      title: "Active Sprint",
      duration: "Weeks 3-6",
      icon: Rocket,
      color: "purple",
      summary: "Weekly pulse-to-brief rhythm with micro-actions",
      keyPoints: [
        "Monday 6am AI Brief with one micro-action",
        "Leaders implement 15-min actions weekly",
        "Dashboard tracks pulse trends + outcomes",
        "OORA conversations as needed",
        "Mid-sprint calibration (Week 4)"
      ]
    },
    {
      id: "operating",
      title: "Operating Rhythm",
      duration: "12-Month License",
      icon: RefreshCcw,
      color: "green",
      summary: "Sustained habits, ongoing insights, continuous improvement",
      keyPoints: [
        "Weekly pulse + brief cycle continues",
        "Dashboard tracks 6-week trends",
        "Evidence exports for compliance",
        "Quarterly action reviews",
        "System adjustments as needed"
      ]
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; icon: string; text: string }> = {
    indigo: {
      bg: "bg-indigo-50 dark:bg-indigo-950",
      border: "border-indigo-200 dark:border-indigo-800",
      icon: "text-indigo-600 dark:text-indigo-400",
      text: "text-indigo-600 dark:text-indigo-400"
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-950",
      border: "border-purple-200 dark:border-purple-800",
      icon: "text-purple-600 dark:text-purple-400",
      text: "text-purple-600 dark:text-purple-400"
    },
    green: {
      bg: "bg-green-50 dark:bg-green-950",
      border: "border-green-200 dark:border-green-800",
      icon: "text-green-600 dark:text-green-400",
      text: "text-green-600 dark:text-green-400"
    }
  };

  return (
    <div className="space-y-8">
      {/* Journey Overview Header */}
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
          The Customer Journey
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          From setup to sustained operating rhythm in 6 weeks, then continuous improvement for 12 months
        </p>
      </div>

      {/* Phase Cards with Flow Arrows */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
        {phases.map((phase, index) => {
          const colors = colorMap[phase.color];
          const Icon = phase.icon;
          
          return (
            <div key={phase.id} className="flex flex-col md:flex-row items-center gap-6 md:gap-4">
              {/* Phase Card */}
              <Card 
                className={`p-6 ${colors.border} border-2 hover-elevate transition-all w-full md:w-80`}
                data-testid={`journey-card-${phase.id}`}
              >
                {/* Header */}
                <div className={`flex items-center gap-3 mb-4 pb-4 border-b ${colors.border}`}>
                  <div className={`p-2 rounded-lg ${colors.bg}`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground" style={{ letterSpacing: '-0.01em' }}>
                      {phase.title}
                    </h4>
                    <p className={`text-sm font-semibold ${colors.text}`}>
                      {phase.duration}
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  {phase.summary}
                </p>

                {/* Key Points */}
                <ul className="space-y-2">
                  {phase.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                      <span className={`mt-1.5 size-1.5 rounded-full ${colors.icon} shrink-0`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Arrow Connector (hidden after last item) */}
              {index < phases.length - 1 && (
                <ArrowRight 
                  className="hidden md:block w-8 h-8 text-muted-foreground/40 shrink-0" 
                  data-testid={`arrow-${index}`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-xl">
        <p className="text-lg font-semibold text-foreground mb-2" style={{ letterSpacing: '-0.01em' }}>
          6 weeks to compliance + culture shift
        </p>
        <p className="text-muted-foreground">
          Then 12 months of AI-powered operating rhythm that sustains the habits
        </p>
      </div>
    </div>
  );
}
