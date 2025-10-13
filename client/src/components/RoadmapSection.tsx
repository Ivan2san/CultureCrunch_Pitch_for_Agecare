import { Rocket, Users, TrendingUp, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function RoadmapSection() {
  const phases = [
    {
      phase: "Phase 1: Validation",
      timeline: "Q2 2025",
      icon: Users,
      color: "blue",
      goals: [
        "3–5 Founding Partner pilots (10–15 managers each)",
        "Validate core AI detection + nudge effectiveness",
        "Achieve 75%+ manager action rate",
        "Prove 30%+ improvement in wellbeing metrics",
      ],
      deliverables: [
        "MVP: OORA framework + weekly manager briefs",
        "Compliance evidence pack (audit-ready)",
        "Founding Partner case studies",
      ],
    },
    {
      phase: "Phase 2: Product-Market Fit",
      timeline: "Q3-Q4 2025",
      icon: Rocket,
      color: "purple",
      goals: [
        "Expand to 15–25 customers (200+ managers)",
        "Refine AI models based on pilot learnings",
        "Build self-service onboarding",
        "Achieve <15 min/week manager time investment",
      ],
      deliverables: [
        "Full compliance dashboard",
        "Integration marketplace (MS365, Slack, HRIS)",
        "Manager training automation",
        "Executive reporting suite",
      ],
    },
    {
      phase: "Phase 3: Scale",
      timeline: "2026",
      icon: TrendingUp,
      color: "green",
      goals: [
        "100+ enterprise customers",
        "$5M ARR milestone",
        "Industry-specific AI models",
        "Expand beyond Australia (NZ, UK, EU)",
      ],
      deliverables: [
        "Advanced ONA (Organizational Network Analysis)",
        "Predictive risk modeling (30-day forecasts)",
        "Manager co-pilot mobile app",
        "API for enterprise HRIS/ERP integration",
      ],
    },
    {
      phase: "Phase 4: Platform",
      timeline: "2027+",
      icon: Globe,
      color: "indigo",
      goals: [
        "Platform ecosystem with 3rd-party integrations",
        "Global market leader in psychosocial AI",
        "Research partnerships with universities",
        "Industry benchmarking network",
      ],
      deliverables: [
        "Open API for developers",
        "White-label solutions for consultancies",
        "Global compliance framework (OSHA, HSE, etc.)",
        "AI coaching for individual contributors",
      ],
    },
  ];

  return (
    <section id="roadmap" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Roadmap to <span className="text-indigo-600">Market Leadership</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            Building the future of workplace wellbeing, one milestone at a time
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-400 -translate-x-1/2" />

          <div className="space-y-16">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`flex items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Card */}
                  <Card
                    className={`flex-1 p-8 bg-white hover:shadow-xl transition-all ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                    data-testid={`roadmap-phase-${index}`}
                  >
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                      <Icon className={`w-8 h-8 text-${phase.color}-600`} />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                        <p className="text-sm text-gray-600">{phase.timeline}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Goals:</h4>
                        <ul className={`space-y-1 text-sm text-gray-700 ${isEven ? "md:text-right" : "md:text-left"}`}>
                          {phase.goals.map((goal, i) => (
                            <li key={i}>• {goal}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Deliverables:</h4>
                        <ul className={`space-y-1 text-sm text-gray-700 ${isEven ? "md:text-right" : "md:text-left"}`}>
                          {phase.deliverables.map((deliverable, i) => (
                            <li key={i}>• {deliverable}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>

                  {/* Icon Circle */}
                  <div
                    className={`hidden md:flex w-16 h-16 rounded-full bg-white border-4 border-${phase.color}-400 items-center justify-center flex-shrink-0 z-10`}
                  >
                    <Icon className={`w-8 h-8 text-${phase.color}-600`} />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our North Star</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            By 2027, every manager in the world should have an AI co-pilot that helps them build thriving teams. 
            CultureCrunch will be the platform that makes this vision real: starting with compliance, scaling with trust 
            and winning with outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
