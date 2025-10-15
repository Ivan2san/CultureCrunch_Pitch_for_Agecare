import {
  Shield,
  Brain,
  Users,
  MessageSquare,
  RefreshCcw,
  BarChart3,
  ChevronDown,
  Calendar,
  Send
} from "lucide-react";

export default function ProcessFlowAnimation() {
  const nodes = {
    FridayPulse: [
      {
        title: "Friday 3pm Pulse",
        subtitle: "2-Minute Staff Check-In",
        points: ["3 rotating questions", "Plain language scales", "Mobile-friendly", "No logins required"],
        icon: Users,
        color: "blue"
      }
    ],
    DataStore: [
      {
        title: "Secure Data Store",
        subtitle: "Aggregated Scores",
        points: ["De-identified summaries", "Team-level aggregation", "Privacy-minimal storage", "Audit-ready format"],
        icon: Shield,
        color: "purple"
      }
    ],
    Intelligence: [
      {
        title: "Weekly Intelligence",
        subtitle: "Brief with 1 Action",
        points: ["Red→Green index calculation", "Context-aware guidance", "Micro-action selection", "Evidence-based library"],
        icon: Brain,
        color: "purple"
      }
    ],
    MondayBrief: [
      {
        title: "Monday 6am Brief",
        subtitle: "Leader Email",
        points: ["One headline insight", "One behaviour focus", "One micro-action (<15 min)", "Aligned to local time zone"],
        icon: Send,
        color: "green"
      }
    ],
    Action: [
      {
        title: "Micro-Action",
        subtitle: "< 15 Minutes",
        points: ["Leader implements action", "Outcome logged", "Progress tracked", "Fits around rosters"],
        icon: MessageSquare,
        color: "green"
      }
    ],
    Dashboard: [
      {
        title: "Dashboard Updates",
        subtitle: "Trends & Actions",
        points: ["6-week trend views", "Action completion", "Evidence exports", "Gentle reminders if needed"],
        icon: BarChart3,
        color: "indigo"
      }
    ]
  };

  const colorClasses = {
    blue: "text-blue-600 dark:text-blue-400",
    purple: "text-purple-600 dark:text-purple-400",
    green: "text-green-600 dark:text-green-400",
    indigo: "text-indigo-600 dark:text-indigo-400"
  };

  const Stage = ({ data, color }: { data: any[]; color: string }) => (
    <div className="flex flex-col items-center space-y-4 py-4">
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item: any) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="w-full max-w-md rounded-xl bg-card/90 backdrop-blur border-2 border-border p-6 shadow-md hover:shadow-lg transition-all"
              data-testid={`process-card-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className={`h-6 w-6 ${colorClasses[item.color as keyof typeof colorClasses]}`} />
                <div>
                  <h4 className="text-lg font-bold text-foreground" style={{ letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <ul className="text-muted-foreground space-y-1 text-sm" style={{ letterSpacing: '-0.005em' }}>
                {item.points.map((p: string) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
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

  const FlowArrow = ({ gradientClass, iconClass }: { gradientClass: string; iconClass: string }) => (
    <div className="flex justify-center items-center py-2" data-testid="flow-arrow">
      <div className="flex flex-col items-center">
        <div className={`h-8 w-1 ${gradientClass}`}></div>
        <ChevronDown className={`h-8 w-8 ${iconClass} -mt-2`} />
      </div>
    </div>
  );

  return (
    <div className="w-full bg-corporate-gradient px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-center text-4xl md:text-5xl font-bold text-foreground mb-4" 
          style={{ letterSpacing: '-0.01em' }}
          data-testid="heading-process-flow"
        >
          Weekly Pulse-to-Action Flow
        </h2>
        <p 
          className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12" 
          style={{ letterSpacing: '-0.005em' }}
          data-testid="text-process-flow-description"
        >
          From Friday pulse to Monday morning action—a predictable weekly rhythm
        </p>

        <div className="relative">
          <Stage data={nodes.FridayPulse} color="blue" />
          
          <FlowArrow 
            gradientClass="bg-gradient-to-b from-blue-500 to-purple-500" 
            iconClass="text-purple-500"
          />
          
          <Stage data={nodes.DataStore} color="purple" />
          
          <FlowArrow 
            gradientClass="bg-gradient-to-b from-purple-500 to-purple-600" 
            iconClass="text-purple-600"
          />
          
          <Stage data={nodes.Intelligence} color="purple" />
          
          <FlowArrow 
            gradientClass="bg-gradient-to-b from-purple-600 to-green-500" 
            iconClass="text-green-500"
          />
          
          <Stage data={nodes.MondayBrief} color="green" />
          
          <FlowArrow 
            gradientClass="bg-gradient-to-b from-green-500 to-green-600" 
            iconClass="text-green-600"
          />
          
          <Stage data={nodes.Action} color="green" />
          
          <FlowArrow 
            gradientClass="bg-gradient-to-b from-green-600 to-indigo-500" 
            iconClass="text-indigo-500"
          />
          
          <Stage data={nodes.Dashboard} color="indigo" />
        </div>

        {/* Low Response Rate Reminder */}
        <div className="mt-8 relative">
          <div 
            className="w-full rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 p-5 border border-purple-400/30"
            data-testid="section-reminders"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 
                    className="text-lg font-bold text-white" 
                    style={{ letterSpacing: '-0.01em' }}
                    data-testid="heading-reminders"
                  >
                    Gentle Reminders Built-In
                  </h4>
                  <p 
                    className="text-white/90 text-sm" 
                    style={{ letterSpacing: '-0.005em' }}
                    data-testid="text-reminders-subtitle"
                  >
                    If response rates drop, leaders get a polite Thursday nudge
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-white/90 text-sm" style={{ letterSpacing: '-0.005em' }}>
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-white/80" />
                  <span>Automatic retries</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-white/80" />
                  <span>Admin pause controls</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-white/80" />
                  <span>Delivery tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feedback Loop Indicator */}
        <div className="flex justify-center mt-8" data-testid="feedback-loop-indicator">
          <div className="flex items-center gap-3 flex-wrap justify-center bg-muted/50 px-6 py-3 rounded-lg">
            <RefreshCcw className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-semibold text-foreground" style={{ letterSpacing: '-0.005em' }} data-testid="text-feedback-loop">
              Action outcomes flow back to refine next week's brief
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
