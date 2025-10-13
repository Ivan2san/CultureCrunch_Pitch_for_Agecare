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
            ThriveGuide AI: <span className="text-indigo-600">Compliance-First</span>, Behaviour-Powered
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
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 mb-16 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Why it matters</h3>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Regulators need proof you're managing psychosocial hazards. Leaders need practical ways to do it.
            ThriveGuide gives you both: <span className="font-bold underline">evidence by default</span> and
            <span className="font-bold underline"> real-time manager coaching</span>.
          </p>
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
