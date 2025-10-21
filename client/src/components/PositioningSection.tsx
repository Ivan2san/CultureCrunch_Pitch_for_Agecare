import { useState } from "react";
import { Shield, Zap, Target, Lock, ChevronRight, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function PositioningSection() {
  const [selectedAdvantage, setSelectedAdvantage] = useState<number | null>(null);

  const advantages = [
    {
      icon: Activity,
      title: "Aged Care-Specific Platform",
      description:
        "Purpose-built to detect hazards generic tools miss. The research is clear: there are virtually no aged care-specific psychosocial platforms.",
      differentiators: [
        "17 WHS psychosocial hazards + aged care-specific stressors",
        "Pulse questions calibrated to resident deaths, violence, moral distress",
        "System trained on aged care burnout patterns, not generic workplace stress",
      ],
      details: {
        overview: "Market research confirms: 'There are virtually no psychosocial safety software solutions tailored specifically for aged care.' Generic tools like FlourishDx (workplace mental health) and Rely (incident reporting) don't capture aged care's unique hazards. CultureCrunch is purpose-built from the ground up for aged care reality.",
        keyFeatures: [
          {
            title: "Sector-Specific Hazard Detection",
            description: "Monitors all 17 mandatory WHS psychosocial hazards PLUS aged care-specific stressors: exposure to resident deaths/decline, physical violence from dementia residents, moral distress from understaffing, emotional labor demands, and shift-work fatigue."
          },
          {
            title: "Calibrated Pulse Questions",
            description: "Questions specifically worded for aged care context: 'How manageable was your workload given resident acuity this week?' vs generic 'Rate your job demands 1-10'. Detects sector-specific risks that one-size-fits-all surveys miss."
          },
          {
            title: "Aged Care Burnout Patterns",
            description: "System trained on aged care workforce research, not generic employee engagement. Recognizes the unique burnout trajectory: emotional exhaustion from resident deaths → moral distress → departure."
          },
          {
            title: "Proactive vs Reactive",
            description: "Traditional surveys provide 'retrospective insights too late to prevent staff departure.' Our weekly pulse breaks the vicious cycle BEFORE high turnover creates more understaffing and stress."
          }
        ],
        impact: "Research shows aged care providers have 'minimal adoption' of existing psychosocial tools, indicating a massive unmet need. Purpose-built platforms can detect emerging risks 4-6 weeks earlier than generic engagement surveys."
      }
    },
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
        overview: "Unlike engagement tools that bolt on compliance features, CultureCrunch is architected from the ground up to meet Australian WHS psychosocial safety regulations. Every feature maps directly to your legal obligations.",
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
            description: "System monitors for emerging patterns that indicate new or escalating psychosocial hazards, alerting you before they become compliance issues."
          }
        ],
        impact: "Organisations using compliance-first systems reduce audit preparation time by 75% and demonstrate proactive leadership rather than reactive responses to incidents."
      }
    },
    {
      icon: Zap,
      title: "Lightweight Pulse-to-Action",
      description:
        "Simple weekly pulse → smart brief → one micro-action. No complex tech, no overwhelming data. Built for aged care reality.",
      differentiators: [
        "3-question pulse (2 min) vs 50-item surveys",
        "Built for paper-based workflows and digital skepticism, not complex analytics",
        "One actionable brief vs 20-page analytics reports",
        "Pulse-driven insights vs surveillance-based metadata",
      ],
      details: {
        overview: "Research shows aged care has 'deeply ingrained reliance on manual processes and skepticism towards digital solutions perceived as adding administrative burden.' CultureCrunch works WITH this reality—3-question pulse, zero training, works on any phone. No digital maturity required.",
        keyFeatures: [
          {
            title: "Minimal Staff Burden",
            description: "3 rotating questions, 2 minutes, Friday afternoon—aligned to shift patterns. No logins, no complex rating scales. Works on any phone."
          },
          {
            title: "Smart Brief Generation",
            description: "Data-driven system synthesizes pulse data into one headline insight and one micro-action (<15 min). Human-reviewed before delivery. Leaders act, not analyze."
          },
          {
            title: "Behaviour-Based Focus",
            description: "Red→Green index (0-100) shows protective vs risk behaviours. Clear, actionable, evidence-based—no vague engagement scores."
          },
          {
            title: "Privacy by Minimalism",
            description: "No email scraping, no chat monitoring, no calendar analysis. Only what staff voluntarily share in the pulse—nothing more."
          }
        ],
        impact: "Lightweight systems achieve 80%+ pulse response rates in aged care (vs 30% for complex surveys) and 90% leader action completion (vs 15% for lengthy reports)."
      }
    },
    {
      icon: Target,
      title: "Leader-Centric Approach",
      description:
        "Leaders are 70% of the variance. We make their job manageable, not add to their burden with more training they won't use.",
      differentiators: [
        "10-minute weekly commitment (not 2-hour workshops)",
        "A Leadership Co-Pilot that learns their team's patterns",
        "Micro-actions proven to work (from 30+ years research)",
      ],
      details: {
        overview: "Research shows leaders drive 70% of engagement variance, yet most tools overwhelm aged care managers with dashboards and generic training during workforce crises. We built a leadership co-pilot that makes leadership development effortless and effective.",
        keyFeatures: [
          {
            title: "Minimal Time Investment",
            description: "10-minute weekly commitment replaces hours of workshops. Micro-actions fit into existing workflows—no separate 'leadership development' time required."
          },
          {
            title: "Personalised Leadership Co-Pilot",
            description: "The system learns each leader's team patterns, communication style, and challenges. Recommendations become more precise over time, adapting to what works for this specific leader and team."
          },
          {
            title: "Research-Backed Actions",
            description: "Every recommendation draws from Triple Goal Leadership Model™ and 30+ years of peer-reviewed organisational behaviour research. No untested fads or generic advice."
          },
          {
            title: "Progressive Skill Building",
            description: "Leaders develop psychological safety capabilities through doing, not sitting in training. Each micro-action is a learning opportunity embedded in real work."
          }
        ],
        impact: "Leaders using co-pilot approaches show 44% better retention of practices vs traditional training, with measurable team psychological safety improvements within 6 weeks."
      }
    },
    {
      icon: Lock,
      title: "Privacy by Minimalism",
      description:
        "No workplace surveillance. No metadata scraping. Only what staff voluntarily share in 3 weekly questions. Trust through transparency.",
      differentiators: [
        "No system integration required (works with fragmented/paper-based reality)",
        "No rostering/HR/clinical data needed—zero data integration",
        "Zero workplace data collection (no email/chat/calendar)",
        "De-identified pulse aggregation (team-level only)",
      ],
      details: {
        overview: "Research shows aged care facilities have 'paper-based records and fragmented digital systems'—making unified data integration a nightmare. CultureCrunch requires NO integration. No rostering data, no HR systems, no clinical notes. Just voluntary pulse responses. This isn't a limitation—it's our competitive advantage.",
        keyFeatures: [
          {
            title: "Voluntary Data Only",
            description: "Staff choose to answer 3 simple questions weekly. No email scraping, no chat analysis, no calendar monitoring. If they don't respond, we have no data—and that's by design."
          },
          {
            title: "Team-Level Aggregation",
            description: "Individual responses never shown. Minimum team size enforced (typically 5+ staff). Leaders see trends, never individual tracking."
          },
          {
            title: "Transparent Briefs",
            description: "Every recommendation shows the evidence: 'Your team's workload score dropped 15 points' → here's why we're suggesting this action. No black-box algorithms."
          },
          {
            title: "Australian Data Residency",
            description: "All data stored in Australian data centres. Privacy Act compliant. No overseas transfers. Facility-level data segregation built-in."
          },
          {
            title: "No Hidden Monitoring",
            description: "We don't integrate with Microsoft 365, Slack, or HRIS systems for 'passive data'. If it's not in the pulse, we don't have it. Simple."
          }
        ],
        impact: "Privacy-minimal platforms achieve 85%+ pulse participation in aged care (vs 40% for surveillance-perceived tools) and maintain trust even during workforce pressures."
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16" style={{ letterSpacing: '-0.01em' }}>
            Positioning & <span className="text-purple-600">Competitive Moat</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Why CultureCrunch is uniquely positioned to dominate this emerging market
          </p>
        </div>

        {/* Competitive Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card key={index} className="p-8 bg-card hover:shadow-xl transition-all" data-testid={`advantage-${index}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{advantage.title}</h3>
                </div>

                <p className="text-muted-foreground mb-4">{advantage.description}</p>

                <div className="space-y-2 mb-6">
                  {advantage.differentiators.map((diff, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{diff}</p>
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

        {/* Competitive Landscape */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8" style={{ letterSpacing: '-0.01em' }}>
            Why Existing Solutions Fail in Aged Care
          </h3>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
            Research confirms: "There are virtually no psychosocial safety software solutions tailored specifically for aged care." Here's why the alternatives don't work:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-card border-2 border-purple-200">
              <h4 className="text-lg font-bold text-purple-700 mb-3">FlourishDx & Generic Tools</h4>
              <p className="text-sm text-muted-foreground mb-4">Generic workplace mental health platforms</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Require digital maturity aged care doesn't have</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Complex analytics perceived as adding administrative burden</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Miss sector-specific hazards: resident deaths, violence, moral distress</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-2 border-indigo-200">
              <h4 className="text-lg font-bold text-indigo-700 mb-3">Rely & Incident Systems</h4>
              <p className="text-sm text-muted-foreground mb-4">Reactive SIRS reporting platforms</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Reactive only — capture incidents after they happen</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">No proactive prevention or early warning</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">"Too late to prevent staff departure"</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-2 border-blue-200">
              <h4 className="text-lg font-bold text-blue-700 mb-3">People at Work Survey</h4>
              <p className="text-sm text-muted-foreground mb-4">Government free tool</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">One-size-fits-all questionnaire</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Not calibrated to aged care's unique stressors</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">No actionable insights or continuous monitoring</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-purple-700 mb-4">→ CultureCrunch's Advantage</h4>
              <p className="text-lg text-muted-foreground mb-6">
                The only platform purpose-built for aged care's reality: paper-based workflows, digital skepticism, fragmented systems, and sector-specific psychosocial hazards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="font-bold text-purple-700 mb-1">No Integration Needed</p>
                  <p className="text-muted-foreground">Works with fragmented/paper-based reality</p>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="font-bold text-indigo-700 mb-1">Proactive Detection</p>
                  <p className="text-muted-foreground">Weekly pulse prevents the vicious cycle</p>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="font-bold text-blue-700 mb-1">Aged Care Specific</p>
                  <p className="text-muted-foreground">17 WHS + sector-unique hazards</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Competitive Moat */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8" style={{ letterSpacing: '-0.01em' }}>Our Competitive Moat</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moat.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200"
                data-testid={`moat-${index}`}
              >
                <h4 className="text-xl font-bold text-purple-600 mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
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
            where compliance meets continuous action, and leaders become better equipped.
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
                <DialogDescription className="text-base text-muted-foreground">
                  {advantages[selectedAdvantage].details.overview}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4">Key Features</h4>
                  <div className="space-y-4">
                    {advantages[selectedAdvantage].details.keyFeatures.map((feature, i) => (
                      <div key={i} className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                        <h5 className="font-bold text-purple-600 mb-2">{feature.title}</h5>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
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
