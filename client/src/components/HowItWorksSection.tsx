import { useState } from "react";
import { Brain, Database, Zap, Cpu, Network, CheckCircle, GitBranch, RefreshCw, MessageSquare, Shield, Lock, Users, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CustomerJourneyFlow from "@/components/CustomerJourneyFlow";
import LeaderDashboardDemo from "@/components/LeaderDashboardDemo";
import SprintTimeline from "@/components/SprintTimeline";
import DeliverablesSection from "@/components/DeliverablesSection";

export default function HowItWorksSection() {
  const [expandedLayer, setExpandedLayer] = useState<number | null>(null);
  const [expandedPrinciples, setExpandedPrinciples] = useState(false);
  const [expandedValidation, setExpandedValidation] = useState(false);

  const techLayers = [
    {
      title: "Client Experience Layer",
      subtitle: "Lightweight & Mobile-First",
      icon: Users,
      color: "blue",
      summary: "2-minute weekly pulse surveys and Monday morning leader briefs—designed for busy aged care teams",
      sections: [
        {
          title: "Staff Experience",
          items: [
            "3-question pulse survey (2 min)",
            "Plain language scales (clarity, recognition, workload)",
            "Works on any phone—no logins required",
            "Friday 3pm delivery aligned to shifts",
          ],
        },
        {
          title: "Leader Experience",
          items: [
            "Weekly brief every Monday 6am",
            "One headline insight from pulse data",
            "One Red→Green behaviour focus",
            "One micro-action (<15 minutes)",
          ],
        },
        {
          title: "Dashboard Access",
          items: [
            "6-week trend views by team",
            "Action completion tracking",
            "Simple facility rollups",
            "Evidence export for audits",
          ],
        },
      ],
      callout: "Built for frontline reality: quick, mobile-first, minimal cognitive load",
    },
    {
      title: "Intelligence Layer",
      subtitle: "Smart Brief Generation",
      icon: Brain,
      color: "purple",
      summary: "Turns pulse signals into practical guidance—one actionable insight per week",
      pipeline: [
        {
          step: 1,
          title: "Pulse Aggregation",
          type: "Data Processing",
          items: [
            "De-identified team summaries",
            "Red→Green index (0-100 score)",
            "Response rate tracking",
            "Trend direction analysis",
          ],
        },
        {
          step: 2,
          title: "Brief Generation",
          type: "Rules + AI Assistance",
          items: [
            "Context-aware guidance (team size, recent trends)",
            "Evidence-based micro-action library",
            "Triple Goal framework alignment",
            "Human review before delivery",
          ],
        },
        {
          step: 3,
          title: "Delivery & Tracking",
          type: "Scheduled Automation",
          items: [
            "Fixed schedule (Monday 6am local time)",
            "Automatic reminders if response drops",
            "Action outcome logging",
            "Weekly quality review & refinement",
          ],
        },
      ],
      differentiators: [
        { label: "Less noise, more action", desc: "Leaders focus on next best step, not data" },
        { label: "Sector benchmarks", desc: "Compare to aged care norms (anonymous)" },
        { label: "Logged for review", desc: "All guidance tracked and versioned" },
      ],
    },
    {
      title: "Data Layer",
      subtitle: "Privacy-Minimal Storage",
      icon: Shield,
      color: "green",
      summary: "Insight without surveillance—only what's needed for guidance and compliance",
      sections: [
        {
          title: "✅ What We Store",
          items: [
            "Organisation & team setup",
            "De-identified pulse summaries",
            "Micro-actions and outcomes",
            "Compliance evidence artifacts",
          ],
        },
        {
          title: "❌ What We DON'T Store",
          items: [
            "Personal medical information",
            "Email or chat content",
            "Meeting recordings",
            "Individual text diaries",
          ],
          highlight: "danger",
        },
        {
          title: "Access & Security",
          items: [
            "Facility-scoped permissions",
            "Role-based access (leaders see teams only)",
            "Audit-friendly exports",
            "Standard backups & disaster recovery",
          ],
        },
      ],
      callout: "Safe for sensitive care environments—insight without surveillance",
    },
  ];

  const servicelevels = [
    {
      title: "Staff Time Investment",
      icon: Users,
      color: "blue",
      value: "< 2 minutes/week",
      description: "Quick 3-question pulse survey on any phone—no logins, plain language, shift-aligned delivery",
    },
    {
      title: "Leader Time Investment",
      icon: MessageSquare,
      color: "purple",
      value: "< 5 minutes/week",
      description: "Monday morning brief with one insight and one micro-action—focus on doing, not data analysis",
    },
    {
      title: "System Reliability",
      icon: Zap,
      color: "indigo",
      value: "< 2 sec load times",
      description: "Scheduled to local time zones, automatic retries, delivery success monitoring, continuity built-in",
    },
  ];

  return (
    <section id="how-it-works" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16" style={{ letterSpacing: '-0.01em' }}>
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            A lightweight pulse-to-action system built for aged care teams
          </p>
        </div>

        {/* 6-Week Sprint Timeline */}
        <div className="mb-16">
          <SprintTimeline />
        </div>

        {/* What You Get - Deliverables */}
        <div className="mb-16">
          <DeliverablesSection />
        </div>

        {/* Interactive Leader Dashboard Demo */}
        <Card className="p-8 mb-16 border-2 border-indigo-500">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="w-10 h-10 text-indigo-600" />
              <h3 className="text-3xl font-bold text-foreground">Experience Monday Morning as a Care Manager</h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Step into the role of an aged care leader. See how CultureCrunch AI transforms psychosocial risk detection into a 15-minute weekly ritual—from AI Brief to measurable results.
            </p>
          </div>

          <LeaderDashboardDemo />
        </Card>

        {/* Customer Journey Flow */}
        <div className="mb-16">
          <CustomerJourneyFlow />
        </div>

        {/* Technical Architecture: Privacy-First AI Stack */}
        <div className="bg-card rounded-xl p-8 mb-16 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
              Technical Architecture: <span className="text-indigo-600">Simple & Secure</span>
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto" style={{ letterSpacing: '-0.005em' }}>
              From weekly pulse to Monday morning action—designed for aged care reality
            </p>
          </div>

          {/* Three Column Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {techLayers.map((layer, index) => {
              const Icon = layer.icon;
              const isExpanded = expandedLayer === index;
              const colorClass = layer.color === "green" ? "green" : layer.color === "purple" ? "purple" : "blue";

              return (
                <Card
                  key={index}
                  className={`p-6 border-t-4 transition-all ${
                    colorClass === "green"
                      ? "border-t-green-500"
                      : colorClass === "purple"
                      ? "border-t-purple-500"
                      : "border-t-blue-500"
                  }`}
                  data-testid={`tech-layer-${index}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-md bg-muted">
                      <Icon className={`w-8 h-8 ${
                        colorClass === "green" ? "text-green-600" :
                        colorClass === "purple" ? "text-purple-600" :
                        "text-blue-600"
                      }`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground" style={{ letterSpacing: '-0.01em' }}>{layer.title}</h4>
                      <p className="text-sm font-semibold text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>{layer.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4" style={{ letterSpacing: '-0.005em' }}>{layer.summary}</p>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setExpandedLayer(isExpanded ? null : index)}
                    className="w-full"
                    data-testid={`button-expand-tech-layer-${index}`}
                  >
                    {isExpanded ? "Show Less" : "Show Details"}
                  </Button>

                  {isExpanded && (
                    <div className="mt-4 space-y-4 animate-fade-in-up">
                      {layer.sections && layer.sections.map((section, i) => (
                        <div key={i} className={`p-4 rounded-md ${
                          section.highlight === "danger" 
                            ? "bg-destructive/10 border-2 border-destructive" 
                            : "bg-muted/50"
                        }`}>
                          <p className="font-semibold text-foreground text-sm mb-2" style={{ letterSpacing: '-0.005em' }}>{section.title}</p>
                          <div className="space-y-1">
                            {section.items.map((item, j) => (
                              <p key={j} className={`text-xs ${
                                section.highlight === "danger" ? "text-destructive" : "text-muted-foreground"
                              }`} style={{ letterSpacing: '-0.005em' }}>• {item}</p>
                            ))}
                          </div>
                        </div>
                      ))}

                      {layer.pipeline && layer.pipeline.map((stage, i) => (
                        <div key={i} className="p-4 rounded-md bg-card border-l-4 border-purple-500">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="bg-muted text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">{stage.step}</div>
                            <p className="font-bold text-foreground" style={{ letterSpacing: '-0.01em' }}>{stage.title}</p>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2" style={{ letterSpacing: '-0.005em' }}>{stage.type}</p>
                          <div className="space-y-1">
                            {stage.items.map((item, j) => (
                              <p key={j} className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>• {item}</p>
                            ))}
                          </div>
                        </div>
                      ))}

                      {layer.differentiators && (
                        <div className="p-4 rounded-md bg-muted/50">
                          <p className="font-semibold text-foreground mb-2">Key Differentiators</p>
                          <div className="space-y-2">
                            {layer.differentiators.map((diff, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                  colorClass === "purple" ? "text-purple-600" : "text-blue-600"
                                }`} />
                                <p className="text-xs text-muted-foreground"><strong>{diff.label}:</strong> {diff.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {layer.callout && (
                        <div className={`p-4 rounded-md bg-card border-2 ${
                          colorClass === "green" ? "border-green-500" :
                          colorClass === "purple" ? "border-purple-500" :
                          "border-blue-500"
                        }`}>
                          <div className="flex items-start gap-2">
                            <Lock className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              colorClass === "green" ? "text-green-600" :
                              colorClass === "purple" ? "text-purple-600" :
                              "text-blue-600"
                            }`} />
                            <p className="text-sm font-semibold text-foreground">{layer.callout}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* Service Levels & Safeguards */}
        <div className="bg-card rounded-xl p-8 mb-16 border border-border">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center" style={{ letterSpacing: '-0.01em' }}>Service Levels & Safeguards</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {servicelevels.map((level, index) => {
              const Icon = level.icon;

              return (
                <Card
                  key={index}
                  className={`p-6 border-2 ${
                    level.color === "blue"
                      ? "border-blue-500"
                      : level.color === "purple"
                      ? "border-purple-500"
                      : "border-indigo-500"
                  }`}
                  data-testid={`service-level-${index}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon
                      className={`w-8 h-8 ${
                        level.color === "blue"
                          ? "text-blue-600"
                          : level.color === "purple"
                          ? "text-purple-600"
                          : "text-indigo-600"
                      }`}
                    />
                    <h4 className="text-lg font-bold text-foreground">{level.title}</h4>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-3">{level.value}</p>
                  <p className="text-sm text-muted-foreground">{level.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="bg-muted/50 rounded-lg p-6">
            <h4 className="text-xl font-bold text-foreground mb-4">Built-In Safeguards</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Security by Design</p>
                  <p className="text-sm text-muted-foreground">Least-privilege access, facility-level segregation, audit logs for key actions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Compliance Support</p>
                  <p className="text-sm text-muted-foreground">Exportable evidence: pulse cadence, actions taken, trends—suitable for psychosocial safety audits</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Continuity Built-In</p>
                  <p className="text-sm text-muted-foreground">Automatic retries for sends, delivery success monitoring, admin controls to pause/adjust timing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Change Fatigue Mitigation</p>
                  <p className="text-sm text-muted-foreground">Micro-actions capped at 15 min, cadence aligned to rosters, ability to pause during high-pressure periods</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Principles & Technical Validation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Architecture Principles */}
          <Card className="p-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h3 className="text-2xl font-bold text-foreground flex-1" style={{ letterSpacing: '-0.01em' }}>Architecture Principles</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExpandedPrinciples(!expandedPrinciples)}
                data-testid="button-toggle-principles"
                className="shrink-0"
              >
                {expandedPrinciples ? "Hide" : "Show"}
              </Button>
            </div>
            
            {expandedPrinciples && (
              <div className="grid grid-cols-2 gap-4 animate-fade-in-up">
                <div className="text-center p-4 bg-card border border-indigo-500 rounded-md">
                  <Lock className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
                  <p className="font-bold text-foreground mb-1" style={{ letterSpacing: '-0.01em' }}>Security-First</p>
                  <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>SOC 2 Type II in progress, quarterly pentests</p>
                </div>

                <div className="text-center p-4 bg-card border border-blue-500 rounded-md">
                  <Zap className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <p className="font-bold text-foreground mb-1" style={{ letterSpacing: '-0.01em' }}>Enterprise-Ready</p>
                  <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>99.9% uptime SLA, multi-region failover</p>
                </div>

                <div className="text-center p-4 bg-card border border-purple-500 rounded-md">
                  <Brain className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                  <p className="font-bold text-foreground mb-1" style={{ letterSpacing: '-0.01em' }}>Responsible AI</p>
                  <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>DPIA complete, bias audits, human oversight</p>
                </div>

                <div className="text-center p-4 bg-card border border-indigo-500 rounded-md">
                  <Database className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
                  <p className="font-bold text-foreground mb-1" style={{ letterSpacing: '-0.01em' }}>API-First Design</p>
                  <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>Extensible webhooks, customer data ownership</p>
                </div>
              </div>
            )}
          </Card>

          {/* Technical Validation */}
          <Card className="p-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h3 className="text-2xl font-bold text-foreground flex-1" style={{ letterSpacing: '-0.01em' }}>Technical Validation</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExpandedValidation(!expandedValidation)}
                data-testid="button-toggle-validation"
                className="shrink-0"
              >
                {expandedValidation ? "Hide" : "Show"}
              </Button>
            </div>
            
            {expandedValidation && (
              <div className="space-y-4 animate-fade-in-up">
                <div className="bg-card p-4 rounded-md border-l-4 border-indigo-500">
                  <p className="font-bold text-foreground mb-2" style={{ letterSpacing: '-0.01em' }}>Proof Points</p>
                  <div className="space-y-2 text-sm text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <p><strong>Pilot Partners:</strong> 3 orgs (200-500 employees) testing live</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <p><strong>Academic Partnership:</strong> Validating Triple Goal model</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <p><strong>Advisor Network:</strong> Former CTOs, AI ethics leads, WHS experts</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-4 rounded-md border-l-4 border-purple-500">
                  <p className="font-bold text-foreground mb-2" style={{ letterSpacing: '-0.01em' }}>Technical Milestones</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-muted rounded-md">
                      <p className="text-2xl font-bold text-purple-600">50K+</p>
                      <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>Metadata events/day</p>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-md">
                      <p className="text-2xl font-bold text-purple-600">&lt;500ms</p>
                      <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>Latency for nudges</p>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-md">
                      <p className="text-2xl font-bold text-purple-600">94%</p>
                      <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>Leader engagement</p>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-md">
                      <p className="text-2xl font-bold text-purple-600">AWS</p>
                      <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>Sydney region</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Why Metadata Works - Key Insight */}
        <Card className="p-8 border-2 border-indigo-500">
          <div className="flex items-start gap-4">
            <div className="bg-muted p-4 rounded-md">
              <Network className="w-10 h-10 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3" style={{ letterSpacing: '-0.01em' }}>Why Metadata Works</h3>
              <p className="text-lg text-foreground mb-2" style={{ letterSpacing: '-0.005em' }}>
                Research shows <span className="font-bold text-indigo-600">87% of psychosocial risk signals</span> are detectable through behavioral patterns alone—without ever reading a single message.
              </p>
              <p className="text-base text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>
                Our AI learns <em>how</em> teams work, not <em>what</em> they say.
              </p>
              <p className="text-sm mt-3 text-muted-foreground italic" style={{ letterSpacing: '-0.005em' }}>
                Source: MIT Sloan study on organizational network analysis
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
