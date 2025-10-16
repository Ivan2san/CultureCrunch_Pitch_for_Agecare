import { useState } from "react";
import { Users, MessageSquare, TrendingUp, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SimpleStorySection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: "Weekly Pulse",
      subtitle: "Staff answer 3 questions",
      time: "2 min/week",
      icon: Users,
      color: "blue",
      summary: "Quick, mobile-friendly pulse survey sent every Friday at 3pm—no logins, plain language, shift-aligned delivery",
      details: [
        "3 simple questions covering clarity, recognition, and workload",
        "Works on any phone with magic link—no app download needed",
        "De-identified responses protect individual privacy",
        "Team-level aggregation for actionable insights",
      ],
    },
    {
      number: 2,
      title: "Monday Brief",
      subtitle: "Leaders get 1 insight + 1 action",
      time: "5 min/week",
      icon: MessageSquare,
      color: "purple",
      summary: "Intelligence-powered brief delivered every Monday at 6am with one headline insight and one 15-minute micro-action",
      details: [
        "One data-driven insight from weekly pulse trends",
        "One evidence-based Red→Green behaviour focus",
        "One practical micro-action (<15 minutes to complete)",
        "Context-aware guidance tailored to team size and recent patterns",
      ],
    },
    {
      number: 3,
      title: "Measurable Change",
      subtitle: "Track results over 6 weeks",
      time: "Weekly tracking",
      icon: TrendingUp,
      color: "indigo",
      summary: "Simple dashboard shows team trends, action completion, and compliance evidence—built for aged care reality",
      details: [
        "6-week trend views by team and facility",
        "Action completion tracking with outcome logging",
        "Red→Green index (0-100 score) for quick assessment",
        "Exportable evidence for psychosocial safety audits",
      ],
    },
  ];

  return (
    <div className="mb-16">
      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center" style={{ letterSpacing: '-0.01em' }}>
        The Simple Story: 3 Steps to Culture Change
      </h3>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
        From pulse to action to results—designed for the operational reality of aged care teams
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => {
          const Icon = step.icon;
          const isExpanded = expandedStep === step.number;
          const colorClass = step.color === "indigo" ? "indigo" : step.color === "purple" ? "purple" : "blue";

          return (
            <Card
              key={step.number}
              className={`p-6 border-t-4 transition-all ${
                colorClass === "indigo"
                  ? "border-t-indigo-500"
                  : colorClass === "purple"
                  ? "border-t-purple-500"
                  : "border-t-blue-500"
              }`}
              data-testid={`simple-story-step-${step.number}`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className={`p-4 rounded-full ${
                  colorClass === "indigo" ? "bg-indigo-100" :
                  colorClass === "purple" ? "bg-purple-100" :
                  "bg-blue-100"
                }`}>
                  <Icon className={`w-12 h-12 ${
                    colorClass === "indigo" ? "text-indigo-600" :
                    colorClass === "purple" ? "text-purple-600" :
                    "text-blue-600"
                  }`} />
                </div>
              </div>

              <div className="text-center mb-4">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${
                  colorClass === "indigo" ? "bg-indigo-100 text-indigo-700" :
                  colorClass === "purple" ? "bg-purple-100 text-purple-700" :
                  "bg-blue-100 text-blue-700"
                }`}>
                  Step {step.number}
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-1" style={{ letterSpacing: '-0.01em' }}>
                  {step.title}
                </h4>
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  {step.subtitle}
                </p>
                <p className={`text-lg font-bold ${
                  colorClass === "indigo" ? "text-indigo-600" :
                  colorClass === "purple" ? "text-purple-600" :
                  "text-blue-600"
                }`}>
                  {step.time}
                </p>
              </div>

              <p className="text-sm text-muted-foreground mb-4 text-center">
                {step.summary}
              </p>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setExpandedStep(isExpanded ? null : step.number)}
                className="w-full"
                data-testid={`button-expand-step-${step.number}`}
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="ml-2 w-4 h-4" />
                  </>
                ) : (
                  <>
                    Learn More <ChevronDown className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>

              {isExpanded && (
                <div className="mt-4 p-4 bg-muted/50 rounded-lg animate-fade-in-up">
                  <div className="space-y-2">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          colorClass === "indigo" ? "text-indigo-600" :
                          colorClass === "purple" ? "text-purple-600" :
                          "text-blue-600"
                        }`} />
                        <p className="text-sm text-muted-foreground">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
