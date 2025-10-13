import { Rocket, Users, TrendingUp, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function RoadmapSection() {
  // Color mappings for proper Tailwind compilation
  const colorClasses = {
    blue: {
      icon: "text-blue-600",
      border: "border-blue-400",
    },
    purple: {
      icon: "text-purple-600",
      border: "border-purple-400",
    },
    green: {
      icon: "text-green-600",
      border: "border-green-400",
    },
    indigo: {
      icon: "text-indigo-600",
      border: "border-indigo-400",
    },
  } as const;

  const phases = [
    {
      phase: "Phase 1: Validation",
      timeline: "Q4 2025",
      target: "Target ~5 LOIs",
      icon: Users,
      color: "blue" as keyof typeof colorClasses,
      goals: [
        "5 qualified LOIs across 2–3 industries (incl. 1 healthcare)",
        "Validate: detection signal set, OORA micro-practice cadence, and audit artefacts",
        "Prove manager action rate ≥ 60% with ≤ 10 min/week",
      ],
      exitCriteria: [
        "5 signed LOIs + 3 drafted SoWs",
        "2 redacted case blurbs",
        "Privacy fact sheet + DPA template approved by one legal team",
      ],
      deliverables: [
        "Clickable demo (Manager Brief → OORA → Audit Pack)",
        "Audit pack sample (PDF/JSON)",
        "Procurement packet v1: data minimisation, AU residency, cohort thresholds",
      ],
    },
    {
      phase: "Phase 2: Seek Funding",
      timeline: "Q4 2025–Q1 2026",
      icon: Rocket,
      color: "purple" as keyof typeof colorClasses,
      goals: [
        "Raise a seed to cover 12–15 months; secure 2–3 domain angels",
        "Lock first hires: founding engineer, PM/implementer, RevOps contractor",
      ],
      exitCriteria: [
        "Term sheet signed; capital ≥ runway target",
        "Security baseline docs ratified (RBAC, encryption, retention policy)",
      ],
      deliverables: [
        "Investor deck + 18-month plan, financial model, product roadmap",
        "Trust pack: InfoSec policy set, SOC2 readiness plan, DPIA template",
      ],
    },
    {
      phase: "Phase 3: Build MVP with Early Adopters",
      timeline: "Q1–Q2 2026",
      icon: TrendingUp,
      color: "green" as keyof typeof colorClasses,
      goals: [
        "Ship MVP to 3 early adopters, ≥ 50 managers live",
        "Achieve time-to-first-action ≤ 7 days; weekly active managers ≥ 60%; action rate ≥ 70%",
        "Demonstrate two compliance wins: risk register entries + review logs used in governance",
      ],
      exitCriteria: [
        "3 live tenants",
        "2 documented before/after deltas (e.g., after-hours ↓ 20%+)",
        "One board/exec pack delivered",
      ],
      deliverables: [
        "SafetyShield v1: signals, hazard cards, risk rating, consultation timeline",
        "ManagerGPT Coach v1: goals, weekly check-ins, \"next best micro-practice\"",
        "ActionLoop v1: milestones, review pulses, audit export",
        "Light integrations: M365 calendar + Slack events; Perceptyx import adapter read-only",
      ],
    },
    {
      phase: "Phase 4: Launch",
      timeline: "Q2–Q3 2026",
      icon: Globe,
      color: "indigo" as keyof typeof colorClasses,
      goals: [
        "10 paying customers, ≥ 200 managers covered; net MRR milestone; churn < 5% quarterly",
        "Self-serve onboarding for small teams; procurement path documented for enterprise",
      ],
      exitCriteria: [
        "Price/packaging validated",
        "2 public case studies",
        "First external audit or ISO/SOC letter of intent in motion",
      ],
      deliverables: [
        "Pricing page + contracts",
        "Integration pack v1 (M365, Slack, HRIS read-only)",
        "Exec reporting suite",
        "Partner playbook",
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
                      <Icon className={`w-8 h-8 ${colorClasses[phase.color].icon}`} />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                        <p className="text-sm text-gray-600">{phase.timeline}</p>
                        {phase.target && <p className="text-xs text-gray-500 italic">{phase.target}</p>}
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
                        <h4 className="font-bold text-gray-800 mb-2">Exit Criteria:</h4>
                        <ul className={`space-y-1 text-sm text-gray-700 ${isEven ? "md:text-right" : "md:text-left"}`}>
                          {phase.exitCriteria.map((criteria, i) => (
                            <li key={i}>• {criteria}</li>
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
                    className={`hidden md:flex w-16 h-16 rounded-full bg-white border-4 ${colorClasses[phase.color].border} items-center justify-center flex-shrink-0 z-10`}
                  >
                    <Icon className={`w-8 h-8 ${colorClasses[phase.color].icon}`} />
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Path Forward</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            From 5 founding partners to 10 paying customers in 12 months. We're building trust through validation, 
            securing the right capital and talent, shipping an MVP that proves value, and launching with a repeatable 
            go-to-market motion. Every milestone brings us closer to making psychosocial safety a strategic advantage, 
            not just a compliance burden.
          </p>
        </div>
      </div>
    </section>
  );
}
