import { useState } from "react";
import { Brain, Shield, Users, MessageSquare, Zap, CheckCircle, Lock, RefreshCw, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CompliancePrivacyDiagram from "@/components/CompliancePrivacyDiagram";

export default function TechnicalDeepDiveSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedLayer, setExpandedLayer] = useState<number | null>(null);

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
      title: "AI Layer",
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
      description: "Fast dashboard loads, scheduled delivery to local time zones, enterprise-grade infrastructure",
    },
    {
      title: "Continuity Assurance",
      icon: RefreshCw,
      color: "green",
      value: "Built-In Resilience",
      description: "Automatic retries for sends, delivery success monitoring, admin controls to pause/adjust timing",
    },
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-6">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
          Technical Deep Dive
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          For technical buyers: architecture, security, privacy, and service level details
        </p>
        
        <Button
          variant="outline"
          size="default"
          onClick={() => setIsExpanded(!isExpanded)}
          data-testid="button-toggle-technical"
        >
          {isExpanded ? (
            <>
              Hide Technical Details <ChevronUp className="ml-2 w-4 h-4" />
            </>
          ) : (
            <>
              Show Technical Details <ChevronDown className="ml-2 w-4 h-4" />
            </>
          )}
        </Button>
      </div>

      {isExpanded && (
        <div className="space-y-12 animate-fade-in-up">
          {/* Technical Architecture */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="text-center mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-300">
                  <h4 className="text-lg font-bold text-blue-700 mb-2">Technical Setup</h4>
                  <p className="text-sm text-muted-foreground">Send us data in your preferred format, we handle the rest—<span className="font-semibold text-blue-700">days, not months</span></p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border-2 border-purple-300">
                  <h4 className="text-lg font-bold text-purple-700 mb-2">Leadership Impact</h4>
                  <p className="text-sm text-muted-foreground">6-week transformation with <span className="font-semibold text-purple-700">expert coaching and AI-powered insights</span></p>
                </div>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
                System Architecture: <span className="text-indigo-600">Simple & Secure</span>
              </h4>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto" style={{ letterSpacing: '-0.005em' }}>
                From weekly pulse to Monday morning action—designed for aged care reality
              </p>
            </div>

            {/* Three Column Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {techLayers.map((layer, index) => {
                const Icon = layer.icon;
                const isLayerExpanded = expandedLayer === index;
                const colorClass = layer.color === "green" ? "indigo" : layer.color === "purple" ? "purple" : "blue";

                return (
                  <Card
                    key={index}
                    className={`p-6 border-t-4 transition-all ${
                      colorClass === "indigo"
                        ? "border-t-indigo-500"
                        : colorClass === "purple"
                        ? "border-t-purple-500"
                        : "border-t-blue-500"
                    }`}
                    data-testid={`tech-layer-${index}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-md bg-muted">
                        <Icon className={`w-8 h-8 ${
                          colorClass === "indigo" ? "text-indigo-600" :
                          colorClass === "purple" ? "text-purple-600" :
                          "text-blue-600"
                        }`} />
                      </div>
                      <div>
                        <h5 className="text-xl font-bold text-foreground" style={{ letterSpacing: '-0.01em' }}>{layer.title}</h5>
                        <p className="text-sm font-semibold text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>{layer.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4" style={{ letterSpacing: '-0.005em' }}>{layer.summary}</p>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setExpandedLayer(isLayerExpanded ? null : index)}
                      className="w-full"
                      data-testid={`button-expand-tech-layer-${index}`}
                    >
                      {isLayerExpanded ? "Show Less" : "Show Details"}
                    </Button>

                    {isLayerExpanded && (
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
                            colorClass === "indigo" ? "border-indigo-500" :
                            colorClass === "purple" ? "border-purple-500" :
                            "border-blue-500"
                          }`}>
                            <div className="flex items-start gap-2">
                              <Lock className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                colorClass === "indigo" ? "text-indigo-600" :
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

            {/* Compliance & Privacy Architecture Diagram */}
            <div className="mt-12">
              <CompliancePrivacyDiagram />
            </div>
          </div>

          {/* Service Levels */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center" style={{ letterSpacing: '-0.01em' }}>Service Levels</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                        : level.color === "green"
                        ? "border-green-500"
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
                            : level.color === "green"
                            ? "text-green-600"
                            : "text-indigo-600"
                        }`}
                      />
                      <h5 className="text-lg font-bold text-foreground">{level.title}</h5>
                    </div>
                    <p className="text-3xl font-bold text-foreground mb-3">{level.value}</p>
                    <p className="text-sm text-muted-foreground">{level.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
