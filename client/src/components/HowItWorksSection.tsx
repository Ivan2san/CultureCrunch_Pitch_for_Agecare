import { useState } from "react";
import { Brain, Database, Zap, Cpu, Network, CheckCircle, GitBranch, RefreshCw, MessageSquare, Shield, Lock, Users, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CustomerJourneyFlow from "@/components/CustomerJourneyFlow";
import OORADemo from "@/components/OORADemo";
import SprintTimeline from "@/components/SprintTimeline";
import DeliverablesSection from "@/components/DeliverablesSection";

export default function HowItWorksSection() {
  const [expandedLayer, setExpandedLayer] = useState<number | null>(null);
  const [expandedAIComponent, setExpandedAIComponent] = useState<number | null>(null);
  const [showOORADemo, setShowOORADemo] = useState(false);
  const [expandedPrinciples, setExpandedPrinciples] = useState(false);
  const [expandedValidation, setExpandedValidation] = useState(false);

  const techLayers = [
    {
      title: "Data Layer",
      subtitle: "Privacy Fortress",
      icon: Shield,
      color: "green",
      summary: "Zero-knowledge architecture: metadata collection without accessing sensitive content",
      sections: [
        {
          title: "Integration",
          items: ["OAuth 2.0 / SCIM for enterprise SSO"],
        },
        {
          title: "Data Sources",
          items: [
            "Slack/Teams APIs (metadata only)",
            "Google Workspace Admin SDK",
            "Microsoft Graph API",
            "HRIS systems",
          ],
        },
        {
          title: "✅ What We Collect",
          items: [
            "Timestamps & frequency",
            "Meeting duration",
            "Response times",
            "Collaboration patterns",
          ],
        },
        {
          title: "❌ What We DON'T Collect",
          items: [
            "Message content",
            "Email bodies",
            "Document text",
            "File contents",
          ],
          highlight: "danger",
        },
        {
          title: "Privacy Controls",
          items: [
            "End-to-end encryption (AES-256)",
            "Customer data residency (AU/US/EU)",
            "Automatic PII stripping",
            "Cohort aggregation (min. 5 users)",
            "GDPR/Privacy Act compliant",
          ],
        },
      ],
      callout: "Zero Knowledge Architecture: Even we can't read your team's messages",
    },
    {
      title: "Intelligence Layer",
      subtitle: "Agentic AI Pipeline",
      icon: Brain,
      color: "purple",
      summary: "Multi-stage AI processing: pattern detection, risk classification, action recommendations",
      pipeline: [
        {
          step: 1,
          title: "Pattern Detection",
          type: "Unsupervised ML",
          items: [
            "Temporal anomaly detection (isolation forests)",
            "Network graph analysis (PageRank variants)",
            "Workload modeling (time-series forecasting)",
          ],
        },
        {
          step: 2,
          title: "Risk Classification",
          type: "Supervised ML",
          items: [
            "Fine-tuned LLM (GPT-4/Claude)",
            "Triple Goal framework integration",
            "Maps patterns → 17 SafeWork hazards",
            "Trained on 10+ years research data",
          ],
        },
        {
          step: 3,
          title: "Action Recommendation",
          type: "Generative AI",
          items: [
            "Context-aware prompt engineering",
            "Leader persona modeling",
            "Evidence-based intervention library",
          ],
        },
      ],
      differentiators: [
        { label: "Explainable AI", desc: "Every insight shows 'Why we flagged this'" },
        { label: "Continuous learning", desc: "Model improves from outcomes" },
        { label: "Bias monitoring", desc: "Regular audits for fairness" },
      ],
    },
    {
      title: "Action Layer",
      subtitle: "Human-in-the-Loop",
      icon: Users,
      color: "blue",
      summary: "Leader-facing tools with compliance automation and continuous feedback",
      sections: [
        {
          title: "Delivery Mechanisms",
          items: [
            "Native integrations (Slack, Teams)",
            "Mobile-first PWA for frontline",
            "Web dashboard for executives",
          ],
        },
        {
          title: "Leader Copilot Features",
          items: [
            "Real-time conversation scripts",
            "OORA framework integration",
            "Sentiment-aware suggestions",
            "Progress tracking (before/after)",
          ],
        },
        {
          title: "Compliance Output",
          items: [
            "Auto-generated audit logs",
            "Risk register updates (ISO 45003)",
            "Evidence library for inspections",
            "Immutable, timestamped records",
          ],
        },
        {
          title: "Feedback Loop",
          items: [
            "Leader actions feed back to AI",
            "Team pulse refines risk models",
            "Outcomes validate interventions",
          ],
          icon: RefreshCw,
        },
      ],
      callout: "Each action makes recommendations smarter for all customers",
    },
  ];

  const aiComponents = [
    {
      title: "Agentic AI: Autonomous Intelligence",
      icon: Cpu,
      color: "indigo",
      description:
        "AI systems that autonomously interpret behavioural data from internal systems, identify risk signals, and recommend leadership actions within ethical boundaries.",
      features: [
        "Pattern Recognition: Detects anomalies in meeting loads, response times, collaboration patterns",
        "Risk Assessment: Maps patterns to 17 psychosocial hazards (per WHS regulations)",
        "Autonomous Decision-Making: Determines urgency, severity, and recommended interventions",
        "Ethical Boundaries: Human-in-the-loop for sensitive recommendations, audit trail for all decisions",
      ],
      tech: "PyTorch-based neural networks, scikit-learn for statistical analysis, custom time-series models",
    },
    {
      title: "Generative AI: Contextual Communication",
      icon: Brain,
      color: "purple",
      description:
        "Large Language Models (LLMs) translate cold data into warm, actionable leader nudges, with organisation-specific context and evidence-based frameworks built in.",
      features: [
        "Contextual Training: Fine-tuned on Triple Goal Leadership Model™ + organisational language/culture",
        "Nudge Generation: Crafts specific, actionable leader briefs (not generic advice)",
        "Conversation Frameworks: Generates OORA conversation starters tailored to detected risks",
        "Micro-Action Library: Recommends evidence-based actions from 10+ years of org research",
      ],
      tech: "GPT-4 base models, fine-tuned with RAG (Retrieval-Augmented Generation), vector databases",
    },
    {
      title: "Network Analysis (ONA)",
      icon: Network,
      color: "teal",
      description:
        "Maps collaboration and communication patterns across teams, revealing hidden leaders, bottlenecks, inclusion gaps and influence flows that traditional surveys miss entirely.",
      features: [
        "Graph Modeling: Builds network graphs from metadata (who communicates with whom, when, how often)",
        "Centrality Analysis: Identifies key connectors, influencers, and isolated team members",
        "Community Detection: Reveals informal sub-teams and collaboration clusters",
        "Inclusion Metrics: Surfaces diversity and belonging patterns across the organisation",
      ],
      tech: "NetworkX, graph algorithms, community detection (Louvain), centrality measures",
    },
  ];

  return (
    <section id="how-it-works" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Privacy-first AI that turns workplace signals into actionable leadership insights
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

        {/* OORA Conversation Framework Demo */}
        <Card className="p-8 mb-16 border-2 border-indigo-500 dark:border-indigo-400">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-3xl font-bold text-foreground">Interactive ThriveGuide AI-Copilot Leader Issue Resolution</h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              Experience how ThriveGuide AI guides leaders through psych safety identification, risk assessment and mitigation.
            </p>
            
            {!showOORADemo && (
              <Button
                onClick={() => setShowOORADemo(true)}
                variant="default"
                size="lg"
                data-testid="button-toggle-oora-demo"
              >
                Try Interactive Demo
              </Button>
            )}
          </div>

          {showOORADemo && (
            <div className="mt-8 animate-fade-in-up">
              <OORADemo />
            </div>
          )}
        </Card>

        {/* Customer Journey Flow */}
        <div className="mb-16">
          <CustomerJourneyFlow />
        </div>

        {/* Technical Architecture: Privacy-First AI Stack */}
        <div className="bg-card rounded-xl p-8 mb-16 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
              Technical Architecture: <span className="text-indigo-600 dark:text-indigo-400">Privacy-First AI Stack</span>
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto" style={{ letterSpacing: '-0.005em' }}>
              How we turn workplace signals into actionable insights—without accessing sensitive content
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
                      ? "border-t-green-500 dark:border-t-green-400"
                      : colorClass === "purple"
                      ? "border-t-purple-500 dark:border-t-purple-400"
                      : "border-t-blue-500 dark:border-t-blue-400"
                  }`}
                  data-testid={`tech-layer-${index}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-md bg-muted">
                      <Icon className={`w-8 h-8 ${
                        colorClass === "green" ? "text-green-600 dark:text-green-400" :
                        colorClass === "purple" ? "text-purple-600 dark:text-purple-400" :
                        "text-blue-600 dark:text-blue-400"
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
                        <div key={i} className="p-4 rounded-md bg-card border-l-4 border-purple-500 dark:border-purple-400">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="bg-muted text-purple-600 dark:text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">{stage.step}</div>
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
                                  colorClass === "purple" ? "text-purple-600 dark:text-purple-400" : "text-blue-600 dark:text-blue-400"
                                }`} />
                                <p className="text-xs text-muted-foreground"><strong>{diff.label}:</strong> {diff.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {layer.callout && (
                        <div className={`p-4 rounded-md bg-card border-2 ${
                          colorClass === "green" ? "border-green-500 dark:border-green-400" :
                          colorClass === "purple" ? "border-purple-500 dark:border-purple-400" :
                          "border-blue-500 dark:border-blue-400"
                        }`}>
                          <div className="flex items-start gap-2">
                            <Lock className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              colorClass === "green" ? "text-green-600 dark:text-green-400" :
                              colorClass === "purple" ? "text-purple-600 dark:text-purple-400" :
                              "text-blue-600 dark:text-blue-400"
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

        {/* Core AI Capabilities */}
        <div className="bg-card rounded-xl p-8 border border-border">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Core AI Capabilities</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiComponents.map((component, index) => {
              const Icon = component.icon;
              const isExpanded = expandedAIComponent === index;

              return (
                <div
                  key={index}
                  className={`rounded-xl p-6 border-2 transition-all bg-card ${
                    component.color === "indigo"
                      ? "border-indigo-500 dark:border-indigo-400"
                      : component.color === "purple"
                      ? "border-purple-500 dark:border-purple-400"
                      : "border-teal-500 dark:border-teal-400"
                  }`}
                  data-testid={`ai-component-${index}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon
                      className={`w-8 h-8 ${
                        component.color === "indigo"
                          ? "text-indigo-600 dark:text-indigo-400"
                          : component.color === "purple"
                          ? "text-purple-600 dark:text-purple-400"
                          : "text-teal-600 dark:text-teal-400"
                      }`}
                    />
                    <h4 className="text-xl font-bold text-foreground">{component.title}</h4>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm">{component.description}</p>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setExpandedAIComponent(isExpanded ? null : index)}
                    className="w-full"
                    data-testid={`button-expand-ai-${index}`}
                  >
                    {isExpanded ? "Show Less" : "Learn More"}
                  </Button>

                  {isExpanded && (
                    <div className="mt-4 space-y-3 animate-fade-in-up">
                      <div className="space-y-2">
                        {component.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 bg-background p-2 rounded-lg">
                            <CheckCircle
                              className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                component.color === "indigo"
                                  ? "text-indigo-600 dark:text-indigo-400"
                                  : component.color === "purple"
                                  ? "text-purple-600 dark:text-purple-400"
                                  : "text-teal-600 dark:text-teal-400"
                              }`}
                            />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-background p-3 rounded-lg">
                        <p className="text-xs font-semibold text-foreground mb-1">Technical Stack:</p>
                        <p className="text-xs text-muted-foreground">{component.tech}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Architecture Principles & Technical Validation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Architecture Principles */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-foreground" style={{ letterSpacing: '-0.01em' }}>Architecture Principles</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExpandedPrinciples(!expandedPrinciples)}
                data-testid="button-toggle-principles"
              >
                {expandedPrinciples ? "Hide" : "Show"}
              </Button>
            </div>
            
            {expandedPrinciples && (
              <div className="grid grid-cols-2 gap-4 animate-fade-in-up">
                <div className="text-center p-4 bg-card border border-green-500 dark:border-green-400 rounded-md">
                  <Lock className="w-10 h-10 text-green-600 dark:text-green-400 mx-auto mb-3" />
                  <p className="font-bold text-foreground mb-1" style={{ letterSpacing: '-0.01em' }}>Security-First</p>
                  <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>SOC 2 Type II in progress, quarterly pentests</p>
                </div>

                <div className="text-center p-4 bg-card border border-blue-500 dark:border-blue-400 rounded-md">
                  <Zap className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <p className="font-bold text-foreground mb-1" style={{ letterSpacing: '-0.01em' }}>Enterprise-Ready</p>
                  <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>99.9% uptime SLA, multi-region failover</p>
                </div>

                <div className="text-center p-4 bg-card border border-purple-500 dark:border-purple-400 rounded-md">
                  <Brain className="w-10 h-10 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                  <p className="font-bold text-foreground mb-1" style={{ letterSpacing: '-0.01em' }}>Responsible AI</p>
                  <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>DPIA complete, bias audits, human oversight</p>
                </div>

                <div className="text-center p-4 bg-card border border-orange-500 dark:border-orange-400 rounded-md">
                  <Database className="w-10 h-10 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
                  <p className="font-bold text-foreground mb-1" style={{ letterSpacing: '-0.01em' }}>API-First Design</p>
                  <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>Extensible webhooks, customer data ownership</p>
                </div>
              </div>
            )}
          </Card>

          {/* Technical Validation */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-foreground" style={{ letterSpacing: '-0.01em' }}>Technical Validation</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExpandedValidation(!expandedValidation)}
                data-testid="button-toggle-validation"
              >
                {expandedValidation ? "Hide" : "Show"}
              </Button>
            </div>
            
            {expandedValidation && (
              <div className="space-y-4 animate-fade-in-up">
                <div className="bg-card p-4 rounded-md border-l-4 border-indigo-500 dark:border-indigo-400">
                  <p className="font-bold text-foreground mb-2" style={{ letterSpacing: '-0.01em' }}>Proof Points</p>
                  <div className="space-y-2 text-sm text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                      <p><strong>Pilot Partners:</strong> 3 orgs (200-500 employees) testing live</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                      <p><strong>Academic Partnership:</strong> Validating Triple Goal model</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                      <p><strong>Advisor Network:</strong> Former CTOs, AI ethics leads, WHS experts</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-4 rounded-md border-l-4 border-purple-500 dark:border-purple-400">
                  <p className="font-bold text-foreground mb-2" style={{ letterSpacing: '-0.01em' }}>Technical Milestones</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-muted rounded-md">
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">50K+</p>
                      <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>Metadata events/day</p>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-md">
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">&lt;500ms</p>
                      <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>Latency for nudges</p>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-md">
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">94%</p>
                      <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>Leader engagement</p>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-md">
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">AWS</p>
                      <p className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>Sydney region</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Why Metadata Works - Key Insight */}
        <Card className="p-8 border-2 border-indigo-500 dark:border-indigo-400">
          <div className="flex items-start gap-4">
            <div className="bg-muted p-4 rounded-md">
              <Network className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3" style={{ letterSpacing: '-0.01em' }}>Why Metadata Works</h3>
              <p className="text-lg text-foreground mb-2" style={{ letterSpacing: '-0.005em' }}>
                Research shows <span className="font-bold text-indigo-600 dark:text-indigo-400">87% of psychosocial risk signals</span> are detectable through behavioral patterns alone—without ever reading a single message.
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
