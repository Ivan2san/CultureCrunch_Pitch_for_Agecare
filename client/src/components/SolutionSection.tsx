import { Shield, CheckCircle, AlertTriangle, Clock, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function SolutionSection() {
  const complianceSteps = [
    {
      title: "Identify",
      icon: AlertTriangle,
      color: "yellow",
      items: [
        "Signals: after-hours, 1:1 gaps, meeting load",
        "Worker/HSR pulse capture",
        "Hazard entry created",
      ],
    },
    {
      title: "Assess",
      icon: Target,
      color: "blue",
      items: [
        "Likelihood × severity × duration",
        "Compounding hazards escalate",
        "Risk rating rationale",
      ],
    },
    {
      title: "Control",
      icon: CheckCircle,
      color: "green",
      items: [
        "Hierarchy-biased chooser",
        "ManagerGPT scripts",
        "Controls implemented",
      ],
    },
    {
      title: "Review",
      icon: Clock,
      color: "indigo",
      items: [
        "Pre/post metrics",
        '"Still effective?" checks',
        "Review log + versioning",
      ],
    },
    {
      title: "Consult",
      icon: Users,
      color: "purple",
      items: [
        "Worker input & HSR co-sign",
        "Consultation timeline",
        "Participation evidence",
      ],
    },
  ];

  const stats = [
    { value: "≤ 30 days", label: "Time to Audit-Ready" },
    { value: "75%+", label: "Manager Action Rate" },
    { value: "25-35%", label: "After-hours ↓ in 4 wks" },
    { value: "1-click", label: "Evidence Generation" },
  ];

  return (
    <section id="solution" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ThriveGuard AI: <span className="text-indigo-600">Compliance-First</span>, Behaviour-Powered
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            Turn psychosocial compliance into auditable action and better leadership, automatically
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-white/60 border border-gray-200" data-testid={`solution-stat-${index}`}>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 mb-16 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Why it matters</h3>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Regulators need proof you're managing psychosocial hazards. Leaders need practical ways to do it.
            ThriveGuard gives you both: <span className="font-bold underline">evidence by default</span> and
            <span className="font-bold underline"> real-time manager coaching</span>.
          </p>
        </div>

        {/* Compliance Baseline */}
        <div className="bg-white rounded-2xl p-8 mb-16 border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">Compliance Baseline</h3>
          <p className="text-center text-lg text-gray-700 mb-8">
            Designed around the Code's loop so your evidence matches how inspectors think
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {complianceSteps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses = {
                yellow: "border-yellow-200 bg-yellow-50 text-yellow-600",
                blue: "border-blue-200 bg-blue-50 text-blue-600",
                green: "border-green-200 bg-green-50 text-green-600",
                indigo: "border-indigo-200 bg-indigo-50 text-indigo-600",
                purple: "border-purple-200 bg-purple-50 text-purple-600",
              };
              const bgColorClasses = {
                yellow: "bg-yellow-50",
                blue: "bg-blue-50",
                green: "bg-green-50",
                indigo: "bg-indigo-50",
                purple: "bg-purple-50",
              };

              return (
                <div
                  key={index}
                  className={`rounded-xl border-2 p-5 ${bgColorClasses[step.color as keyof typeof bgColorClasses]}`}
                  data-testid={`compliance-step-${step.title.toLowerCase()}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`h-6 w-6 ${colorClasses[step.color as keyof typeof colorClasses]}`} />
                    <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-800">
                    {step.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              "Job demands",
              "Low control",
              "Poor support",
              "Role clarity",
              "Change",
              "Justice & reward",
              "Bullying/harassment",
              "Remote/isolated work",
            ].map((hazard, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 border border-gray-200"
              >
                {hazard}
              </span>
            ))}
          </div>
        </div>

        {/* Behavioural Overlay */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
            TripleGoal/LGP Behavioural Overlay
          </h3>
          <p className="text-center text-lg text-gray-700 mb-8">
            Tie every hazard to leadership behaviours to amplify (Green) and counter (Red)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6">
              <h4 className="text-lg font-bold text-emerald-900 mb-3">Green behaviours to amplify</h4>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>• Respectful feedback and active listening</li>
                <li>• Empowerment: freedom/choice on approach</li>
                <li>• Focus: prioritise and reduce low-value meetings</li>
                <li>• Fairness: transparent decision-making</li>
              </ul>
            </div>

            <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-6">
              <h4 className="text-lg font-bold text-rose-900 mb-3">Red behaviours to counter</h4>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>• Micromanagement and meeting domination</li>
                <li>• Defensiveness and reactivity under pressure</li>
                <li>• Unrealistic deadlines and scope creep</li>
                <li>• Public blame and idea shutdowns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
