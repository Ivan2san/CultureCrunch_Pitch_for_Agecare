import React from "react";
import {
  Shield,
  Brain,
  Zap,
  Users,
  FileText,
  MessageSquare,
  RefreshCcw,
  BarChart3,
  FileBarChart,
  Share2
} from "lucide-react";

function ProcessFlow() {
  const nodes = {
    Input: [
      { title: "Employees", subtitle: "Workplace Signals", points: ["Meeting patterns", "After-hours activity"], icon: Users },
      { title: "System Integrations", subtitle: "Data Sources", points: ["Microsoft 365", "Google Workspace", "HRIS", "Slack / Teams"], icon: FileText },
      { title: "LGP360 Reports", subtitle: "Leader Insights", points: ["Leadership behaviours", "Engagement drivers", "Psychosocial risk areas", "Team wellbeing metrics"], icon: FileBarChart }
    ],
    Processing: [
      { title: "Agentic AI", subtitle: "Pattern Detection", points: ["Risk identification", "Anomaly detection", "Hazard mapping", "Pattern detection thresholds", "Ethical Boundaries (Human-in-the-loop)"], icon: Brain },
      { title: "Generative AI", subtitle: "Nudge Creation", points: ["Context analysis", "Conversation scripts"], icon: Zap },
      { title: "Network Analysis (ONA)", subtitle: "Patterns Across Teams", points: ["Graph Modeling", "Centrality Analysis", "Community Detection", "Inclusion Metrics"], icon: Share2 }
    ],
    Output: [
      { title: "Leaders", subtitle: "Weekly Briefs", points: ["Risk alerts", "OORA guides"], icon: MessageSquare },
      { title: "Compliance System", subtitle: "Evidence & Logs", points: ["Hazard register", "Consultation logs"], icon: Shield },
      { title: "Executive Dashboard", subtitle: "Key Indicators", points: ["Leader Action Rate (live)", "After-hours ↓ trends", "Trust & Engagement metrics", "Audit-readiness status"], icon: BarChart3 }
    ]
  };

  const Stage = ({ title, data, color }: any) => (
    <div className="flex flex-col items-center space-y-6 py-4">
      <h3 className={`text-xl font-bold ${color}`}>{title}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item: any) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="w-72 rounded-xl bg-white border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon className="h-5 w-5 text-indigo-500" />
                <h4 className="text-md font-semibold text-gray-900">{item.title}</h4>
              </div>
              <p className="text-xs font-medium text-gray-600 mb-1">{item.subtitle}</p>
              <ul className="text-left text-gray-700 space-y-0.5 list-disc list-inside text-xs">
                {item.points.map((p: string) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white text-gray-900 py-8 px-4">
      <h2 className="text-center text-3xl font-extrabold text-indigo-600 mb-4 tracking-tight">Process Flow</h2>
      <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-6">
        How ThriveGuard transforms signals into insight.
      </p>

      <div className="space-y-10">
        <Stage title="Input" data={nodes.Input} color="text-blue-600" />
        <Stage title="Processing" data={nodes.Processing} color="text-purple-600" />
        <Stage title="Output" data={nodes.Output} color="text-green-600" />
      </div>

      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-2xl rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 p-4 shadow-md text-center">
          <div className="flex justify-center items-center gap-2 mb-1">
            <RefreshCcw className="h-4 w-4 text-white" />
            <h4 className="text-lg font-semibold text-white">Continuous Learning</h4>
          </div>
          <p className="text-neutral-100 text-xs mb-1">Closing the Loop Across All Stages</p>
          <ul className="text-neutral-50 text-xs list-disc list-inside space-y-0.5 text-left max-w-md mx-auto">
            <li>Tracks actions and outcomes across stages</li>
            <li>Feeds new insights back into AI systems</li>
            <li>Improves accuracy and reduces noise</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProcessFlow;
