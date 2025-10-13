import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "manager" | "ai" | "system";
  content: string;
  phase?: string;
}

interface Scenario {
  id: string;
  title: string;
  description: string;
  concern: string;
  messages: Message[];
}

const scenarios: Scenario[] = [
  {
    id: "team-conflict",
    title: "Team Conflict",
    description: "Tension between team members affecting productivity",
    concern: "I've noticed Sarah and Tom have been avoiding each other in meetings, and their collaboration has dropped significantly.",
    messages: [
      {
        role: "system",
        content: "Phase 1: Observe - Gather Observable Facts",
        phase: "observe"
      },
      {
        role: "manager",
        content: "I've noticed Sarah and Tom have been avoiding each other in meetings, and their collaboration has dropped significantly.",
      },
      {
        role: "ai",
        content: "I've analysed recent patterns. Here's what I'm observing: Sarah and Tom's 1:1 meetings dropped from 2x/week to zero over the past 3 weeks. Their shared project updates decreased by 78%. Both are working extended hours (Sarah +6hrs/week, Tom +4hrs/week). Would you like to explore what might be contributing to this pattern?",
      },
      {
        role: "system",
        content: "Phase 2: Orient - Understand Context & Psychosocial Risk",
        phase: "orient"
      },
      {
        role: "ai",
        content: "Based on the patterns, this could indicate interpersonal conflict (psychosocial hazard). The extended hours suggest they're working around each other rather than together. Risk assessment: Medium-High. The duration (3 weeks) and intensity (78% collaboration drop) warrant attention. This aligns with 'poor workplace relationships' under the Code of Practice.",
      },
      {
        role: "system",
        content: "Phase 3: Respond - Guided Action Framework",
        phase: "respond"
      },
      {
        role: "ai",
        content: "Recommended approach using the hierarchy of controls: First, speak with each privately to understand their perspective. Here's a conversation starter: 'I've noticed some changes in how the team is collaborating. I wanted to check in with you about how things are going with the project and your working relationships.' Would you like me to prepare specific questions for each conversation?",
      },
      {
        role: "manager",
        content: "Yes, that would help. I want to make sure I handle this sensitively.",
      },
      {
        role: "ai",
        content: "Great. I've prepared two conversation guides with open-ended questions, active listening prompts, and escalation indicators. I've also scheduled 30-minute 1:1s with Sarah (tomorrow 2pm) and Tom (tomorrow 3:30pm) based on their calendar availability. After you meet with them, I'll help you determine if mediation or team restructuring is needed.",
      },
      {
        role: "system",
        content: "Phase 4: Assess - Monitor & Verify Effectiveness",
        phase: "assess"
      },
      {
        role: "ai",
        content: "I'll track: 1) Collaboration frequency (targeting return to 2x/week within 2 weeks), 2) Working hours normalisation (back to standard within 3 weeks), 3) Meeting participation patterns. I've set a review point for 2 weeks from now. You'll receive an alert if patterns don't improve or worsen. All actions are logged for compliance documentation.",
      },
    ],
  },
  {
    id: "workload-stress",
    title: "Workload Stress",
    description: "Employee showing signs of excessive workload and burnout",
    concern: "Alex has been working late every night and seems increasingly withdrawn during team meetings.",
    messages: [
      {
        role: "system",
        content: "Phase 1: Observe - Gather Observable Facts",
        phase: "observe"
      },
      {
        role: "manager",
        content: "Alex has been working late every night and seems increasingly withdrawn during team meetings.",
      },
      {
        role: "ai",
        content: "Here's what the data shows: Alex logged 62 hours last week (22 hours over standard). After-hours work: 89% of evenings, 3 weekend logins. Meeting participation decreased: 40% fewer contributions in team meetings over 2 weeks. Slack responsiveness down 55% during business hours but up 200% after 7pm. These are clear behavioural signals.",
      },
      {
        role: "system",
        content: "Phase 2: Orient - Understand Context & Psychosocial Risk",
        phase: "orient"
      },
      {
        role: "ai",
        content: "Risk assessment: High. This pattern indicates 'high job demands' and potential burnout (psychosocial hazards under the Code). The evening/weekend work combined with daytime withdrawal suggests Alex is struggling to manage workload during normal hours. Duration: 2+ weeks indicates this isn't a temporary spike. The lack of recovery time (no days off) elevates the risk.",
      },
      {
        role: "system",
        content: "Phase 3: Respond - Guided Action Framework",
        phase: "respond"
      },
      {
        role: "ai",
        content: "Immediate action recommended (hierarchy of controls - elimination first): 1) Have a supportive conversation today about workload, 2) Review and redistribute current tasks, 3) Set clear boundaries on after-hours work. Here's your conversation approach: 'Alex, I've noticed you've been putting in very long hours. I'm concerned about your wellbeing. Can we talk about your current workload and how I can support you?'",
      },
      {
        role: "manager",
        content: "Should I be worried about the weekend work? That's not normal for our team.",
      },
      {
        role: "ai",
        content: "Yes, weekend work combined with high after-hours activity is a strong burnout indicator. Recommended immediate actions: 1) Meet with Alex today (I've found a 30-min slot at 3pm based on their calendar), 2) Audit their current task load (I've prepared a list of their active projects: 7 ongoing, 3 overdue), 3) Consider temporary task redistribution. I can help you identify which tasks could be reassigned to reduce immediate pressure.",
      },
      {
        role: "system",
        content: "Phase 4: Assess - Monitor & Verify Effectiveness",
        phase: "assess"
      },
      {
        role: "ai",
        content: "Monitoring plan: Weekly hours target: ≤42 hours within 2 weeks. After-hours work target: <10% of total hours within 3 weeks. Meeting participation: return to baseline within 3 weeks. I'll send you a progress update next week and alert you if working hours exceed 50 hours. All control measures and consultation with Alex are documented for your psychosocial risk register.",
      },
    ],
  },
  {
    id: "bullying-concern",
    title: "Bullying Concern",
    description: "Reports of aggressive behaviour from a senior team member",
    concern: "Multiple people have mentioned that Jordan's behaviour in meetings has become aggressive and dismissive.",
    messages: [
      {
        role: "system",
        content: "Phase 1: Observe - Gather Observable Facts",
        phase: "observe"
      },
      {
        role: "manager",
        content: "Multiple people have mentioned that Jordan's behaviour in meetings has become aggressive and dismissive.",
      },
      {
        role: "ai",
        content: "I've analysed the patterns: 3 separate team members flagged concerns (via anonymous pulse, direct reports, and peer feedback). Meeting analysis shows Jordan's speaking time increased 340% in last month while others decreased 45%. Video analysis detected 7 interruptions per meeting (up from 1-2 baseline). Post-meeting Slack shows 2 team members consistently going silent after Jordan speaks. This requires immediate attention.",
      },
      {
        role: "system",
        content: "Phase 2: Orient - Understand Context & Psychosocial Risk",
        phase: "orient"
      },
      {
        role: "ai",
        content: "Risk classification: High. This pattern suggests 'workplace bullying and harassment' under psychosocial hazards. Multiple independent reports increase credibility. The silencing effect on other team members indicates psychological harm is occurring. This has legal and duty of care implications. Immediate intervention is required within 48 hours per Code of Practice guidance.",
      },
      {
        role: "system",
        content: "Phase 3: Respond - Guided Action Framework",
        phase: "respond"
      },
      {
        role: "ai",
        content: "This requires formal process (hierarchy of controls - elimination/substitution): 1) Private conversation with Jordan about behaviour impact (today), 2) Document specific incidents with witnesses, 3) Consider temporary meeting facilitation changes, 4) Provide support to affected team members. I've prepared: incident documentation template, conversation script for Jordan, and support resources for the team.",
      },
      {
        role: "manager",
        content: "This feels serious. Do I need to involve HR?",
      },
      {
        role: "ai",
        content: "Yes. Given multiple reports and the severity, HR consultation is essential. I've: 1) Created a confidential incident summary with timestamps and observable behaviours (no names in initial report per privacy), 2) Flagged this as 'bullying/harassment - requires HR involvement', 3) Prepared documentation showing you've met 'reasonable steps' requirement. Would you like me to schedule a meeting with HR today? I can also arrange immediate support for affected team members through EAP.",
      },
      {
        role: "system",
        content: "Phase 4: Assess - Monitor & Verify Effectiveness",
        phase: "assess"
      },
      {
        role: "ai",
        content: "Post-intervention monitoring (required for compliance): 1) Meeting behaviour analysis (weekly for 6 weeks), 2) Team member check-ins (I'll prompt you before each), 3) Anonymous pulse questions on psychological safety (bi-weekly), 4) HSR consultation logged. If behaviour doesn't improve within 2 weeks, escalation protocols will automatically trigger. All actions documented in hazard register with review dates.",
      },
    ],
  },
];

const phaseColors = {
  observe: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", accent: "bg-blue-500" },
  orient: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", accent: "bg-purple-500" },
  respond: { bg: "bg-green-50", border: "border-green-200", text: "text-green-700", accent: "bg-green-500" },
  assess: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700", accent: "bg-orange-500" },
};

export default function OORADemo() {
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scenario = scenarios[selectedScenario];
  const visibleMessages = scenario.messages.slice(0, currentStep + 1);
  const currentPhase = scenario.messages[currentStep]?.phase;

  const handleNext = () => {
    if (currentStep < scenario.messages.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsPlaying(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleScenarioChange = (index: number) => {
    setSelectedScenario(index);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  // Auto-play functionality
  useState(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        if (currentStep < scenario.messages.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2500);
    }
    return () => clearInterval(interval);
  });

  const phases = [
    { id: "observe", label: "Observe", description: "Gather Facts" },
    { id: "orient", label: "Orient", description: "Understand Risk" },
    { id: "respond", label: "Respond", description: "Take Action" },
    { id: "assess", label: "Assess", description: "Monitor Impact" },
  ];

  const getCurrentPhaseIndex = () => {
    const phaseOrder = ["observe", "orient", "respond", "assess"];
    return phaseOrder.indexOf(currentPhase || "observe");
  };

  return (
    <div className="space-y-6">
      {/* Scenario Selector */}
      <div className="space-y-3">
        <h4 className="font-bold text-gray-900">Choose a Scenario:</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {scenarios.map((s, index) => (
            <Button
              key={s.id}
              onClick={() => handleScenarioChange(index)}
              variant={selectedScenario === index ? "default" : "outline"}
              className="h-auto py-3 px-4 flex flex-col items-start gap-1"
              data-testid={`button-scenario-${s.id}`}
            >
              <span className="font-bold">{s.title}</span>
              <span className="text-xs opacity-80 text-left">{s.description}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* OORA Phase Indicators */}
      <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4">OORA Framework Progress</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {phases.map((phase, index) => {
            const isActive = getCurrentPhaseIndex() === index;
            const isCompleted = getCurrentPhaseIndex() > index;
            const colors = phaseColors[phase.id as keyof typeof phaseColors];
            
            return (
              <div
                key={phase.id}
                className={cn(
                  "p-3 rounded-lg border-2 transition-all",
                  isActive ? `${colors.bg} ${colors.border}` : "bg-gray-50 border-gray-200",
                  isCompleted && "opacity-60"
                )}
                data-testid={`phase-indicator-${phase.id}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className={cn(
                    "w-3 h-3 rounded-full",
                    isActive ? colors.accent : isCompleted ? "bg-gray-400" : "bg-gray-300"
                  )} />
                  <span className={cn(
                    "font-bold text-sm",
                    isActive ? colors.text : "text-gray-600"
                  )}>
                    {phase.label}
                  </span>
                </div>
                <p className="text-xs text-gray-600">{phase.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Conversation Display */}
      <Card className="p-6 min-h-[400px] bg-gray-50">
        <div className="space-y-4">
          {visibleMessages.map((message, index) => {
            if (message.role === "system") {
              const colors = phaseColors[message.phase as keyof typeof phaseColors];
              return (
                <div key={index} className="flex justify-center">
                  <div className={cn(
                    "px-4 py-2 rounded-full text-sm font-bold",
                    colors.bg, colors.text, colors.border, "border"
                  )}>
                    {message.content}
                  </div>
                </div>
              );
            }

            const isManager = message.role === "manager";
            return (
              <div
                key={index}
                className={cn(
                  "flex",
                  isManager ? "justify-end" : "justify-start"
                )}
              >
                <div className={cn(
                  "max-w-[80%] rounded-lg p-4",
                  isManager 
                    ? "bg-indigo-600 text-white" 
                    : "bg-white border-2 border-gray-200 text-gray-900"
                )}>
                  <div className="text-xs font-bold mb-1 opacity-70">
                    {isManager ? "Manager" : "ThriveGuide AI"}
                  </div>
                  <div className="text-sm leading-relaxed">{message.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Controls */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            variant="outline"
            size="icon"
            disabled={currentStep >= scenario.messages.length - 1}
            data-testid="button-play-pause"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            size="icon"
            data-testid="button-reset"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={handlePrevious}
            variant="outline"
            disabled={currentStep === 0}
            data-testid="button-previous"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentStep >= scenario.messages.length - 1}
            data-testid="button-next"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="text-sm text-gray-600">
          Step {currentStep + 1} of {scenario.messages.length}
        </div>
      </div>
    </div>
  );
}
