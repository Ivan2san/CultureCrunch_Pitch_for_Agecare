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
          className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-8" 
          style={{ letterSpacing: '-0.005em' }}
          data-testid="text-process-flow-description"
        >
          How ThriveGuide transforms signals into insight.
        </p>

        <div className="space-y-6">
          <Stage title="Input" data={nodes.Input} color="blue" />
          <Stage title="Processing" data={nodes.Processing} color="purple" />
          <Stage title="Output" data={nodes.Output} color="green" />
        </div>

        {/* Continuous Learning - Feedback Loop Bar */}
        <div className="mt-8 relative">
          <div 
            className="w-full rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-5 border border-purple-400/30"
            data-testid="section-continuous-learning"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <RefreshCcw className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 
                    className="text-lg font-bold text-white" 
                    style={{ letterSpacing: '-0.01em' }}
                    data-testid="heading-continuous-learning"
                  >
                    Continuous Learning Loop
                  </h4>
                  <p 
                    className="text-white/90 text-sm" 
                    style={{ letterSpacing: '-0.005em' }}
                    data-testid="text-continuous-learning-subtitle"
                  >
                    Feedback flows back to improve all stages
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-white/90 text-sm" style={{ letterSpacing: '-0.005em' }}>
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-white/80" />
                  <span>Tracks outcomes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-white/80" />
                  <span>Refines AI models</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-white/80" />
                  <span>Reduces noise</span>
                </div>
              </div>
            </div>
          </div>
          {/* Optional: Subtle connecting arrows */}
          <div className="absolute -top-3 left-0 right-0 flex justify-center opacity-50">
            <div className="flex gap-2">
              <div className="w-px h-3 bg-purple-400"></div>
              <div className="w-px h-3 bg-indigo-400"></div>
              <div className="w-px h-3 bg-blue-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
