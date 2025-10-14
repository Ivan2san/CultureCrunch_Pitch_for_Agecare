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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
            ThriveGuide AI: <span className="text-indigo-600 dark:text-indigo-400">Compliance-First</span>, Behaviour-Powered
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Turn psychosocial compliance into auditable action and better leadership, automatically
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-card/60 border border-border" data-testid={`solution-stat-${index}`}>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Multi-Level Leader Support Architecture */}
        <div className="bg-card rounded-xl p-8 mb-16 border border-border">
          <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
            Multi-Level Leader Support: From Frontline to Boardroom
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-8">
            One platform serving leaders at every level—team leads get actionable insights while executives track compliance and business impact
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Team-Level Insights */}
            <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-2 border-indigo-300 dark:border-indigo-700">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                <h4 className="text-xl font-bold text-foreground">Team-Level: Leader Action Dashboard</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Frontline leaders (team leads, middle managers) receive:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Weekly nudges with specific, actionable team insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>AI-generated OORA conversation frameworks for detected risks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Micro-action library with evidence-based interventions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Real-time feedback on action effectiveness</span>
                </li>
              </ul>
            </Card>

            {/* Executive/Board Dashboard */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h4 className="text-xl font-bold text-foreground">Executive/Board: Compliance & Impact</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                C-suite and board members access:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Organization-wide psychosocial hazard tracking and risk registers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Audit-ready compliance reports with evidence trails</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Business impact metrics: productivity, engagement, performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Leadership capability trends across all organizational levels</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              → Unified platform addressing external business pressures at every leadership level
            </p>
          </div>
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
        <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-border">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2" style={{ letterSpacing: '-0.01em' }}>
            Behaviour Drives Outcomes
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-6" style={{ letterSpacing: '-0.005em' }}>
            ThriveGuide turns culture into performance—linking behaviour to results through the Triple Goal framework and a proven psychological safety playbook.
          </p>
          <div className="border-t-2 border-dotted border-teal-400 dark:border-teal-600 mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Reduce Section */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950 rounded-2xl p-6 relative">
              <h4 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4" style={{ letterSpacing: '-0.01em' }}>
                Reduce
              </h4>
              <p className="text-foreground mb-6 leading-relaxed" style={{ letterSpacing: '-0.005em' }}>
                Behaviours that provide short term results or comfort, but drag the triple goal down in the long run
              </p>
              <div className="flex flex-col items-center mt-8">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-md">
                  <Anchor className="w-10 h-10 text-teal-600 dark:text-teal-400" />
                </div>
                <ArrowDown className="w-12 h-12 text-red-600 dark:text-red-400" strokeWidth={3} />
              </div>
            </div>

            {/* 3 Outcomes (Triple Goal) */}
            <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-950 dark:to-green-950 rounded-2xl p-6 relative">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-teal-700 dark:text-teal-300 mb-1" style={{ letterSpacing: '-0.01em' }}>
                  3 Outcomes
                </h4>
                <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-4" style={{ letterSpacing: '-0.005em' }}>
                  (Triple Goal)
                </p>
                <ol className="text-left space-y-1 mb-6 text-teal-700 dark:text-teal-300 font-semibold" style={{ letterSpacing: '-0.005em' }}>
                  <li>1. Great Performance</li>
                  <li>2. Great Learning</li>
                  <li>3. Great Workplace</li>
                </ol>
                <div className="flex justify-center">
                  <ArrowUp className="w-16 h-16 text-green-600 dark:text-green-400" strokeWidth={3} />
                </div>
              </div>
            </div>

            {/* Cultivate Section */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-2xl p-6 relative">
              <h4 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4" style={{ letterSpacing: '-0.01em' }}>
                Cultivate
              </h4>
              <p className="text-foreground mb-6 leading-relaxed" style={{ letterSpacing: '-0.005em' }}>
                Values based behaviours that generate trust, accountability, belonging, learning etc. and put "rocket fuel" into the triple goal.
              </p>
              <div className="flex flex-col items-center mt-8">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-md">
                  <Rocket className="w-10 h-10 text-teal-600 dark:text-teal-400" />
                </div>
                <ArrowUp className="w-12 h-12 text-green-600 dark:text-green-400" strokeWidth={3} />
              </div>
            </div>
          </div>

          <div className="border-t-2 border-dotted border-teal-400 dark:border-teal-600 mt-8 pt-6">
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span>© Awakened Mind Group</span>
              <span>www.triplegoal.com</span>
              <span className="font-semibold text-teal-600 dark:text-teal-400">TripleGoal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
