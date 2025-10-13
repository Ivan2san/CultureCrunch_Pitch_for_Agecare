import { useState } from "react";
import { Brain, Database, Zap, Cpu, Network, CheckCircle, GitBranch, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HowItWorksSection() {
  const [expandedLayer, setExpandedLayer] = useState<number | null>(null);

  const layers = [
    {
      title: "Data Ingestion Layer",
      icon: Database,
      color: "blue",
      summary: "Privacy-first metadata collection from workplace systems",
      details: [
        {
          name: "Metadata Collection",
          desc: "Calendar events, meeting duration, response times, activity patterns",
        },
        {
          name: "Integration APIs",
          desc: "Microsoft 365, Google Workspace, Slack, HRIS systems",
        },
        {
          name: "Privacy Filters",
          desc: "Zero content ingestion, cohort thresholds, opt-in only",
        },
      ],
    },
    {
      title: "AI Processing Layer",
      icon: Brain,
      color: "purple",
      summary: "Autonomous pattern recognition and risk identification",
      details: [
        {
          name: "Agentic AI Engine",
          desc: "Autonomous pattern recognition, anomaly detection, risk identification",
        },
        {
          name: "Generative AI (LLM)",
          desc: "Contextual nudge generation, conversation frameworks, action recommendations",
        },
        {
          name: "Network Analysis (ONA)",
          desc: "Collaboration mapping, influence detection, inclusion gaps",
        },
      ],
    },
    {
      title: "Action & Feedback Loop",
      icon: Zap,
      color: "green",
      summary: "Manager interface with continuous learning",
      details: [
        {
          name: "Manager Interface",
          desc: "Weekly nudges, OORA conversation guides, micro-action prompts",
        },
        {
          name: "Action Tracking",
          desc: "Implementation monitoring, team pulse measurement, outcome correlation",
        },
        {
          name: "Continuous Learning",
          desc: "Model refinement, organization-specific training, pattern reinforcement",
        },
      ],
    },
  ];

  const aiComponents = [
    {
      title: "Agentic AI: Autonomous Intelligence",
      icon: Cpu,
      color: "indigo",
      description:
        "AI systems that autonomously interpret behavioral data from internal systems, identify risk signals, and recommend leadership actions within ethical boundaries.",
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
        "Large Language Models (LLMs) translate cold data into warm, actionable manager nudges — with organization-specific context and evidence-based frameworks built in.",
      features: [
        "Contextual Training: Fine-tuned on Triple Goal Leadership Model™ + organizational language/culture",
        "Nudge Generation: Crafts specific, actionable manager briefs (not generic advice)",
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
        "Maps collaboration and communication patterns across teams — revealing hidden leaders, bottlenecks, inclusion gaps, and influence flows that traditional surveys miss entirely.",
      features: [
        "Graph Modeling: Builds network graphs from metadata (who communicates with whom, when, how often)",
        "Centrality Analysis: Identifies key connectors, influencers, and isolated team members",
        "Community Detection: Reveals informal sub-teams and collaboration clusters",
        "Inclusion Metrics: Surfaces diversity and belonging patterns across the organization",
      ],
      tech: "NetworkX, graph algorithms, community detection (Louvain), centrality measures",
    },
  ];

  return (
    <section id="how-it-works" className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Architecture: <span className="text-indigo-600">How It Works</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            Privacy-first AI that turns workplace signals into actionable leadership insights
          </p>
        </div>

        {/* System Architecture */}
        <div className="bg-white rounded-xl p-8 mb-16 border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">System Architecture</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const isExpanded = expandedLayer === index;

              return (
                <div
                  key={index}
                  className={`rounded-xl p-6 border-2 transition-all ${
                    layer.color === "blue"
                      ? "bg-blue-50 border-blue-300"
                      : layer.color === "purple"
                      ? "bg-purple-50 border-purple-300"
                      : "bg-green-50 border-green-300"
                  }`}
                  data-testid={`architecture-layer-${index}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon
                      className={`w-8 h-8 ${
                        layer.color === "blue"
                          ? "text-blue-600"
                          : layer.color === "purple"
                          ? "text-purple-600"
                          : "text-green-600"
                      }`}
                    />
                    <h4 className="text-xl font-bold text-gray-900">{index + 1}. {layer.title}</h4>
                  </div>

                  <p className="text-gray-700 mb-4">{layer.summary}</p>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setExpandedLayer(isExpanded ? null : index)}
                    className="w-full"
                    data-testid={`button-expand-layer-${index}`}
                  >
                    {isExpanded ? "Show Less" : "Show Details"}
                  </Button>

                  {isExpanded && (
                    <div className="mt-4 space-y-3 animate-fade-in-up">
                      {layer.details.map((detail, i) => (
                        <div key={i} className="bg-white p-3 rounded-lg">
                          <p className="font-semibold text-gray-800 text-sm mb-1">{detail.name}</p>
                          <p className="text-xs text-gray-600">{detail.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Flow Visualization */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              <GitBranch className="w-6 h-6 text-purple-600" />
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-green-400"></div>
              <RefreshCw className="w-6 h-6 text-green-600" />
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 font-medium">
            Closed-loop learning system: Data → Insight → Action → Outcome → Better Data
          </p>
        </div>

        {/* AI Components Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiComponents.map((component, index) => {
            const Icon = component.icon;
            return (
              <Card key={index} className="p-8 bg-white" data-testid={`ai-component-${index}`}>
                <div className="flex items-center gap-3 mb-6">
                  <Icon
                    className={`w-10 h-10 ${
                      component.color === "indigo"
                        ? "text-indigo-600"
                        : component.color === "purple"
                        ? "text-purple-600"
                        : "text-teal-600"
                    }`}
                  />
                  <h3 className="text-2xl font-bold text-gray-900">{component.title}</h3>
                </div>

                <p className="text-gray-700 mb-4">{component.description}</p>

                <div className="space-y-2 mb-4">
                  {component.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          component.color === "indigo"
                            ? "text-indigo-600"
                            : component.color === "purple"
                            ? "text-purple-600"
                            : "text-teal-600"
                        }`}
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div
                  className={`rounded-lg p-4 ${
                    component.color === "indigo"
                      ? "bg-indigo-50"
                      : component.color === "purple"
                      ? "bg-purple-50"
                      : "bg-teal-50"
                  }`}
                >
                  <p className="text-sm font-semibold text-gray-900 mb-1">Technical Stack:</p>
                  <p className="text-sm text-gray-700">{component.tech}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
