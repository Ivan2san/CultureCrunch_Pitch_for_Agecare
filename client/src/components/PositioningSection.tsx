import { useState } from "react";
import { Shield, Zap, Target, Lock, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function PositioningSection() {
  const [selectedAdvantage, setSelectedAdvantage] = useState<number | null>(null);

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
      details: {
        overview: "Unlike engagement tools that bolt on compliance features, ThriveGuide AI is architected from the ground up to meet Australian WHS psychosocial safety regulations. Every feature maps directly to your legal obligations.",
        keyFeatures: [
          {
            title: "Automated Evidence Generation",
            description: "Every interaction creates an audit trail. The system automatically documents the full Identify → Assess → Control → Review → Consult cycle required by regulators."
          },
          {
            title: "Real-Time Hazard Register",
            description: "Your psychosocial hazard register updates automatically as risks are identified. Consultation records, control measures, and review dates all tracked in one place."
          },
          {
            title: "Rapid Audit Readiness",
            description: "Generate comprehensive compliance reports in under 30 days. Pre-formatted for SafeWork requirements with evidence chains intact."
          },
          {
            title: "Proactive Risk Management",
            description: "AI monitors for emerging patterns that indicate new or escalating psychosocial hazards, alerting you before they become compliance issues."
          }
        ],
        impact: "Organisations using compliance-first systems reduce audit preparation time by 75% and demonstrate proactive management rather than reactive responses to incidents."
      }
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
      details: {
        overview: "Most platforms stop at showing you problems. ThriveGuide AI is your action engine—providing managers with specific, contextual guidance on what to do, how to do it, and when to do it.",
        keyFeatures: [
          {
            title: "Agentic AI Detection",
            description: "Our AI doesn't wait for manual analysis. It autonomously identifies patterns, detects risks, and recommends specific interventions based on 30+ years of validated research."
          },
          {
            title: "OORA Conversation Framework",
            description: "Managers receive scripted conversation starters using the proven OORA method (Observe, Offer, Request, Agree) tailored to their team's specific situation."
          },
          {
            title: "Behaviour-Based Insights",
            description: "Instead of vague 'engagement scores', managers see clear Green (protective behaviours) and Red (risk indicators) signals with specific actions to reinforce or address each."
          },
          {
            title: "Just-in-Time Nudges",
            description: "Contextual prompts delivered when managers can act on them—not buried in weekly reports they'll never read."
          }
        ],
        impact: "Managers report 10-minute weekly time investment vs traditional 2-hour training sessions, with 3x higher action completion rates due to specific, timely guidance."
      }
    },
    {
      icon: Target,
      title: "Leader-Centric Approach",
      description:
        "Leaders are 70% of the variance. We make their job manageable, not add to their burden with more training they won't use.",
      differentiators: [
        "10-minute weekly commitment (not 2-hour workshops)",
        "An AI Leadership Co-Pilot that learns their team's patterns",
        "Micro-actions proven to work (from 30+ years research)",
      ],
      details: {
        overview: "Research shows managers drive 70% of engagement variance, yet most tools overwhelm them with dashboards and generic training. We built an AI co-pilot that makes leadership development effortless and effective.",
        keyFeatures: [
          {
            title: "Minimal Time Investment",
            description: "10-minute weekly commitment replaces hours of workshops. Micro-actions fit into existing workflows—no separate 'leadership development' time required."
          },
          {
            title: "Personalised AI Co-Pilot",
            description: "The AI learns each manager's team patterns, communication style, and challenges. Recommendations become more precise over time, adapting to what works for this specific leader and team."
          },
          {
            title: "Research-Backed Actions",
            description: "Every recommendation draws from Triple Goal Leadership Model™ and 30+ years of peer-reviewed organisational behaviour research. No untested fads or generic advice."
          },
          {
            title: "Progressive Skill Building",
            description: "Managers develop psychological safety capabilities through doing, not sitting in training. Each micro-action is a learning opportunity embedded in real work."
          }
        ],
        impact: "Leaders using AI co-pilot approaches show 44% better retention of practices vs traditional training, with measurable team psychological safety improvements within 6 weeks."
      }
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
      details: {
        overview: "Privacy isn't a feature we added—it's our architecture. From day one, ThriveGuide AI was designed to deliver insights without surveillance, building trust with employees and leaders alike.",
        keyFeatures: [
          {
            title: "Metadata-Only Analysis",
            description: "We never see message content, emails, or private communications. Analysis uses only metadata: meeting frequency, response times, collaboration patterns. Your sensitive information stays private."
          },
          {
            title: "Aggregated Intelligence",
            description: "Minimum cohort sizes enforced (typically 8+ employees). Individual patterns never exposed. Managers see team trends, never individual tracking data."
          },
          {
            title: "Transparent AI Reasoning",
            description: "Every recommendation shows the 'why'. Managers and employees understand the patterns that triggered suggestions, building trust in the system."
          },
          {
            title: "Australian Data Sovereignty",
            description: "All data stored in Australian data centres. Full GDPR and Privacy Act compliance. No overseas data transfers without explicit consent."
          },
          {
            title: "Opt-In Participation",
            description: "Employees choose to participate. Clear consent processes. Ability to withdraw data at any time. Privacy controls in employee hands."
          }
        ],
        impact: "Privacy-first platforms achieve 87% employee opt-in rates vs 34% for surveillance-perceived tools, and maintain 4x higher ongoing participation."
      }
    },
  ];

  const moat = [
    {
      title: "Triple Goal Leadership Model™",
      description:
        "30+ years of organisational behaviour research distilled into our AI training. Competitors don't have this foundation.",
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

                <div className="space-y-2 mb-6">
                  {advantage.differentiators.map((diff, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{diff}</p>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => setSelectedAdvantage(index)}
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                  data-testid={`button-learn-more-${index}`}
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
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

      {/* Details Dialog */}
      <Dialog open={selectedAdvantage !== null} onOpenChange={() => setSelectedAdvantage(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedAdvantage !== null && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    {(() => {
                      const Icon = advantages[selectedAdvantage].icon;
                      return <Icon className="w-6 h-6 text-purple-600" />;
                    })()}
                  </div>
                  <DialogTitle className="text-2xl font-bold">
                    {advantages[selectedAdvantage].title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-base text-gray-700">
                  {advantages[selectedAdvantage].details.overview}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features</h4>
                  <div className="space-y-4">
                    {advantages[selectedAdvantage].details.keyFeatures.map((feature, i) => (
                      <div key={i} className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                        <h5 className="font-bold text-purple-900 mb-2">{feature.title}</h5>
                        <p className="text-gray-700 text-sm">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-6 text-white">
                  <h4 className="text-lg font-bold mb-2">Impact</h4>
                  <p className="text-purple-50">{advantages[selectedAdvantage].details.impact}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
