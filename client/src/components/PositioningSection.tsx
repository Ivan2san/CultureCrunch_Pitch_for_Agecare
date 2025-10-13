import { Shield, Zap, Target, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function PositioningSection() {
  const advantages = [
    {
      icon: Shield,
      title: "Compliance-First Design",
      description:
        "Built around WHS psychosocial hazard regulations from day one. Not retrofitted compliance; it's our foundation.",
      differentiators: [
        "Evidence generation by default (Identify-Assess-Control-Review-Consult loop)",
        "Audit-ready reporting in ≤30 days",
        "Hazard register auto-maintained with consultation trails",
      ],
    },
    {
      icon: Zap,
      title: "Action-Oriented AI",
      description:
        "We don't just identify problems; we give managers the exact conversations and micro-actions to solve them, right when they need it.",
      differentiators: [
        "Agentic AI that autonomously detects + recommends (not just dashboards)",
        "OORA conversation framework with contextual nudges",
        "Behaviour-based (Green/Red) instead of generic engagement scores",
      ],
    },
    {
      icon: Target,
      title: "Manager-Centric Approach",
      description:
        "Managers are 70% of the variance. We make their job manageable, not add to their burden with more training they won't use.",
      differentiators: [
        "10-minute weekly commitment (not 2-hour workshops)",
        "AI co-pilot that learns their team's patterns",
        "Micro-actions proven to work (from 10+ years research)",
      ],
    },
    {
      icon: Lock,
      title: "Privacy-First Architecture",
      description:
        "Metadata only. No content. No surveillance. Australian data residency. Opt-in participation. Trust built in.",
      differentiators: [
        "Zero message content ingestion (activity patterns only)",
        "Aggregate reporting (min cohort size enforced)",
        "Transparent AI: managers see the 'why' behind every nudge",
      ],
    },
  ];

  const moat = [
    {
      title: "Triple Goal Leadership Model™",
      description:
        "10+ years of organisational behaviour research distilled into our AI training. Competitors don't have this foundation.",
    },
    {
      title: "Regulatory Deep Integration",
      description:
        "We're not a survey tool adapting to compliance. We're compliance-native with AI layered on top.",
    },
    {
      title: "Founding Partner Network",
      description:
        "Early adopters co-design the product, creating switching costs and network effects as best practices emerge.",
    },
    {
      title: "Closed-Loop Learning",
      description:
        "Every action tracked → outcomes measured → AI improves. The more it's used, the smarter it gets (org-specific).",
    },
  ];

  return (
    <section id="positioning" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Positioning & <span className="text-purple-600">Competitive Moat</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            Why CultureCrunch is uniquely positioned to dominate this emerging market
          </p>
        </div>

        {/* Competitive Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card key={index} className="p-8 bg-white hover:shadow-xl transition-all" data-testid={`advantage-${index}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{advantage.title}</h3>
                </div>

                <p className="text-gray-700 mb-4">{advantage.description}</p>

                <div className="space-y-2">
                  {advantage.differentiators.map((diff, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{diff}</p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Competitive Moat */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Competitive Moat</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moat.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200"
                data-testid={`moat-${index}`}
              >
                <h4 className="text-xl font-bold text-purple-900 mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Positioning */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Market Positioning</h3>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            We're not competing with engagement survey tools (Culture Amp, Peakon). We're not competing with compliance consultants. 
            We're creating a <span className="font-bold underline">new category</span>: <strong>AI-Powered Psychosocial Safety Platforms</strong>, 
            where compliance meets continuous action, and managers become equipped leaders.
          </p>
        </div>
      </div>
    </section>
  );
}
