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

export default function ProcessFlowAnimation() {
  const nodes = {
    Input: [
      {
        title: "Employees",
        subtitle: "Workplace Signals",
        points: ["Meeting patterns", "After-hours activity"],
        icon: Users,
        color: "blue"
      },
      {
        title: "System Integrations",
        subtitle: "Data Sources",
        points: ["Microsoft 365", "Google Workspace", "HRIS", "Slack / Teams"],
        icon: FileText,
        color: "blue"
      },
      {
        title: "LGP360 Reports",
        subtitle: "Leader Insights",
        points: ["Leadership behaviours", "Engagement drivers", "Psychosocial risk areas", "Team wellbeing metrics"],
        icon: FileBarChart,
        color: "blue"
      }
    ],
    Processing: [
      {
        title: "Agentic AI",
        subtitle: "Pattern Detection",
        points: ["Risk identification", "Anomaly detection", "Hazard mapping", "Pattern detection thresholds", "Ethical Boundaries (Human-in-the-loop)"],
        icon: Brain,
        color: "purple"
      },
      {
        title: "Generative AI",
        subtitle: "Nudge Creation",
        points: ["Context analysis", "Conversation scripts"],
        icon: Zap,
        color: "purple"
      },
      {
        title: "Network Analysis (ONA)",
        subtitle: "Patterns Across Teams",
        points: ["Graph Modelling", "Centrality Analysis", "Community Detection", "Inclusion Metrics"],
        icon: Share2,
        color: "purple"
      }
    ],
    Output: [
      {
        title: "Leaders",
        subtitle: "Weekly Briefs",
        points: ["Risk alerts", "OORA guides"],
        icon: MessageSquare,
        color: "green"
      },
      {
        title: "Compliance System",
        subtitle: "Evidence & Logs",
        points: ["Hazard register", "Consultation logs"],
        icon: Shield,
        color: "green"
      },
      {
        title: "Executive Dashboard",
        subtitle: "Key Indicators",
        points: ["Leader Action Rate (live)", "After-hours ↓ trends", "Trust & Engagement metrics", "Audit-readiness status"],
        icon: BarChart3,
        color: "green"
      }
    ]
  };

  const colorClasses = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    green: "text-green-600"
  };

  const Stage = ({ title, data, color }: { title: string; data: any[]; color: string }) => (
    <div className="flex flex-col items-center space-y-6 py-4">
      <h3 
        className={`text-2xl font-bold ${colorClasses[color as keyof typeof colorClasses]}`} 
        style={{ letterSpacing: '-0.01em' }}
        data-testid={`stage-heading-${title.toLowerCase()}`}
      >
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item: any) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="w-72 rounded-xl bg-white/90 backdrop-blur border-2 border-gray-200 p-6 shadow-md hover:shadow-lg transition-all"
              data-testid={`process-card-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className={`h-5 w-5 ${colorClasses[item.color as keyof typeof colorClasses]}`} />
                <h4 className="text-base font-bold text-gray-900" style={{ letterSpacing: '-0.01em' }}>
                  {item.title}
                </h4>
              </div>
              <p className="text-xs font-semibold text-gray-600 mb-2" style={{ letterSpacing: '-0.005em' }}>
                {item.subtitle}
              </p>
              <ul className="text-gray-700 space-y-1 text-xs" style={{ letterSpacing: '-0.005em' }}>
                {item.points.map((p: string) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-gray-400 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-corporate-gradient px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4" 
          style={{ letterSpacing: '-0.01em' }}
          data-testid="heading-process-flow"
        >
          Process Flow
        </h2>
        <p 
          className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12" 
          style={{ letterSpacing: '-0.005em' }}
          data-testid="text-process-flow-description"
        >
          How ThriveGuide transforms signals into insight.
        </p>

        <div className="space-y-10">
          <Stage title="Input" data={nodes.Input} color="blue" />
          <Stage title="Processing" data={nodes.Processing} color="purple" />
          <Stage title="Output" data={nodes.Output} color="green" />
        </div>

        <div className="mt-16 flex justify-center">
          <div 
            className="w-full max-w-2xl rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 p-6 shadow-lg text-center border-2 border-orange-400"
            data-testid="section-continuous-learning"
          >
            <div className="flex justify-center items-center gap-2 mb-2">
              <RefreshCcw className="h-5 w-5 text-white" />
              <h4 
                className="text-xl font-bold text-white" 
                style={{ letterSpacing: '-0.01em' }}
                data-testid="heading-continuous-learning"
              >
                Continuous Learning
              </h4>
            </div>
            <p 
              className="text-white/95 text-sm mb-3" 
              style={{ letterSpacing: '-0.005em' }}
              data-testid="text-continuous-learning-subtitle"
            >
              Closing the Loop Across All Stages
            </p>
            <ul className="text-white/90 text-sm space-y-1.5 text-left max-w-md mx-auto" style={{ letterSpacing: '-0.005em' }}>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 rounded-full bg-white/80 shrink-0" />
                <span>Tracks actions and outcomes across stages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 rounded-full bg-white/80 shrink-0" />
                <span>Feeds new insights back into AI systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 rounded-full bg-white/80 shrink-0" />
                <span>Improves accuracy and reduces noise</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
