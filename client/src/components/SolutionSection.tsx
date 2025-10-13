import { Shield, CheckCircle, AlertTriangle, Clock, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Anchor, Rocket, ArrowDown, ArrowUp } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

export default function SolutionSection() {
  const headerParallax = useParallax({ speed: -0.2 });

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
    { value: "75%+", label: "Leader Action Rate" },
    { value: "25-35%", label: "After-hours ↓ in 4 wks" },
    { value: "1-click", label: "Evidence Generation" },
  ];

  return (
    <section id="solution" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerParallax.ref} style={headerParallax.style} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.01em' }}>
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
            <span className="font-bold underline"> real-time leader coaching</span>.
          </p>
        </div>

        {/* Behaviour Drives Outcomes */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-gray-200">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ letterSpacing: '-0.01em' }}>
            Behaviour Drives Outcomes
          </h3>
          <div className="border-t-2 border-dotted border-teal-400 mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Reduce Section */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 relative">
              <h4 className="text-2xl font-bold text-red-700 mb-4" style={{ letterSpacing: '-0.01em' }}>
                Reduce
              </h4>
              <p className="text-gray-800 mb-6 leading-relaxed" style={{ letterSpacing: '-0.005em' }}>
                Behaviours that provide short term results or comfort, but drag the triple goal down in the long run
              </p>
              <div className="flex flex-col items-center mt-8">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-md">
                  <Anchor className="w-10 h-10 text-teal-600" />
                </div>
                <ArrowDown className="w-12 h-12 text-red-600" strokeWidth={3} />
              </div>
            </div>

            {/* 3 Outcomes (Triple Goal) */}
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 relative">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-teal-700 mb-1" style={{ letterSpacing: '-0.01em' }}>
                  3 Outcomes
                </h4>
                <p className="text-sm font-semibold text-teal-600 mb-4" style={{ letterSpacing: '-0.005em' }}>
                  (Triple Goal)
                </p>
                <ol className="text-left space-y-1 mb-6 text-teal-700 font-semibold" style={{ letterSpacing: '-0.005em' }}>
                  <li>1. Great Performance</li>
                  <li>2. Great Learning</li>
                  <li>3. Great Workplace</li>
                </ol>
                <div className="flex justify-center">
                  <ArrowUp className="w-16 h-16 text-green-600" strokeWidth={3} />
                </div>
              </div>
            </div>

            {/* Cultivate Section */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 relative">
              <h4 className="text-2xl font-bold text-green-700 mb-4" style={{ letterSpacing: '-0.01em' }}>
                Cultivate
              </h4>
              <p className="text-gray-800 mb-6 leading-relaxed" style={{ letterSpacing: '-0.005em' }}>
                Values based behaviours that generate trust, accountability, belonging, learning etc. and put "rocket fuel" into the triple goal.
              </p>
              <div className="flex flex-col items-center mt-8">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-md">
                  <Rocket className="w-10 h-10 text-teal-600" />
                </div>
                <ArrowUp className="w-12 h-12 text-green-600" strokeWidth={3} />
              </div>
            </div>
          </div>

          <div className="border-t-2 border-dotted border-teal-400 mt-8 pt-6">
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>© Awakened Mind Group</span>
              <span>www.triplegoal.com</span>
              <span className="font-semibold text-teal-600">TripleGoal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
