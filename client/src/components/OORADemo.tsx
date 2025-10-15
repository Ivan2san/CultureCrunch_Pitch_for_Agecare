import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "leader" | "ai" | "system";
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
    id: "resident-aggression",
    title: "Resident Aggression",
    description: "Care worker experiencing repeated aggression from resident with dementia",
    concern: "Maria has been hit twice this week by Mr. Chen during morning care. She's becoming anxious about her shifts.",
    messages: [
      {
        role: "system",
        content: "Phase 1: Observe - Identifying Violence & Aggression Patterns",
        phase: "observe"
      },
      {
        role: "leader",
        content: "Maria has been hit twice this week by Mr. Chen during morning care. She's becoming anxious about her shifts.",
      },
      {
        role: "ai",
        content: "I've analysed the incident patterns: Mr. Chen has had 5 responsive behaviours in past 2 weeks (up from 0-1/month baseline). All incidents occurred 7-8am during personal care. Maria was involved in 3 of 5 incidents. Her shift sign-in shows increased time (avg +12 mins delay) before entering Mr. Chen's room. This indicates 'workplace violence' psychosocial hazard requiring immediate controls.",
      },
      {
        role: "system",
        content: "Phase 2: Orient - Assessing Violence Risk & Duty of Care",
        phase: "orient"
      },
      {
        role: "ai",
        content: "Risk assessment: High. Repeated physical aggression to same staff member indicates inadequate controls. This violates WHS duty of care and Quality Standard 3 (Personal care and clinical care). Maria's avoidance behaviour suggests psychological harm. Immediate action required: 1) Remove Maria from solo care duties with Mr. Chen, 2) Clinical review of Mr. Chen's care plan, 3) Support for Maria.",
      },
      {
        role: "system",
        content: "Phase 3: Respond - Implementing Violence Prevention Controls",
        phase: "respond"
      },
      {
        role: "ai",
        content: "Hierarchy of controls applied: 1) IMMEDIATE: Paired care for Mr. Chen (elimination of solo exposure), 2) Clinical review scheduled (11am today with RN), 3) Behaviour support assessment requested, 4) Maria referred to EAP and offered alternative duties. I've also identified morning sundowning pattern—recommend care routine adjustment. Would you like me to brief the clinical team?",
      },
      {
        role: "leader",
        content: "Yes, and what about the other PCAs? They need to know how to stay safe too.",
      },
      {
        role: "ai",
        content: "Agreed. I've: 1) Created safety briefing for all morning shift staff (flagged in handover notes), 2) Updated Mr. Chen's care plan with triggers and de-escalation techniques, 3) Scheduled de-escalation training refresh for team (next week), 4) Set up daily behaviour monitoring for Mr. Chen. All incidents logged in hazard register with controls documented per Code of Practice.",
      },
      {
        role: "system",
        content: "Phase 4: Assess - Monitoring Violence Reduction & Staff Safety",
        phase: "assess"
      },
      {
        role: "ai",
        content: "Monitoring: Mr. Chen's responsive behaviours (target: <2/month within 4 weeks), staff incident reports (target: zero physical contact within 2 weeks), Maria's wellbeing check-ins (weekly for 4 weeks). Clinical team will review behaviour triggers and adjust care approach. I'll alert you if any staff report feeling unsafe. All Quality Standards compliance documented.",
      },
      {
        role: "leader",
        content: "[Three weeks later] The behaviour support team adjusted his care routine and Maria feels safe again. What's the outcome?",
      },
      {
        role: "ai",
        content: "Excellent result! Mr. Chen's responsive behaviours decreased to 1 in past 3 weeks (within acceptable range). Zero physical contact incidents. Maria completed EAP sessions and returned to Mr. Chen's care (with paired support). Team trained in trauma-informed dementia care. Successful violence hazard control—documented in register with ongoing monitoring.",
      },
    ],
  },
  {
    id: "caregiver-burnout",
    title: "Caregiver Burnout",
    description: "Personal care assistant showing signs of exhaustion and emotional fatigue",
    concern: "Jenny has called in sick 3 times this month. When she's here, she seems emotionally exhausted and withdrawn from residents.",
    messages: [
      {
        role: "system",
        content: "Phase 1: Observe - Detecting Burnout & Fatigue Patterns",
        phase: "observe"
      },
      {
        role: "leader",
        content: "Jenny has called in sick 3 times this month. When she's here, she seems emotionally exhausted and withdrawn from residents.",
      },
      {
        role: "ai",
        content: "Here's what I'm observing: Jenny has worked 14 consecutive days (no days off in 2 weeks), averaging 9.2 hours/day. Sick leave: 3 days this month vs 0.5/month baseline. Resident interaction time decreased 35% (from care documentation timestamps). She's been assigned to high-care dementia wing 89% of shifts without rotation. This indicates 'high job demands' and 'inadequate recovery time' psychosocial hazards.",
      },
      {
        role: "system",
        content: "Phase 2: Orient - Assessing Burnout Risk & Workforce Sustainability",
        phase: "orient"
      },
      {
        role: "ai",
        content: "Risk assessment: High. Pattern indicates burnout trajectory per aged care workforce research (41% sector burnout rate). Emotional exhaustion + physical fatigue + inadequate rest = high turnover risk. This violates Quality Standard 7 (psychological safety) and WHS fatigue hazard requirements. Immediate intervention needed—typical aged care turnover costs $40-49K per PCA replacement.",
      },
      {
        role: "system",
        content: "Phase 3: Respond - Implementing Fatigue & Workload Controls",
        phase: "respond"
      },
      {
        role: "ai",
        content: "Hierarchy of controls: 1) IMMEDIATE: 3 consecutive days off (rostered from tomorrow), 2) Roster review to ensure maximum 5 consecutive days, 3) Wing rotation implemented (alternate high-care/low-care), 4) Supportive check-in conversation. Here's your approach: 'Jenny, I've noticed you've been working really hard without breaks. I'm concerned about your wellbeing. Let's talk about how we can better support you.'",
      },
      {
        role: "leader",
        content: "We're already short-staffed. How can I give her 3 days off?",
      },
      {
        role: "ai",
        content: "I understand the constraint. However, burnout-driven turnover costs $40-49K replacement + 87 days to fill role. I've identified: 1) Agency coverage available for 2 of 3 days ($384 cost vs $49K turnover), 2) Shift swaps possible with 2 staff willing to trade, 3) If Jenny leaves, you'll face 3+ months shortage. Short-term agency cost prevents long-term crisis. I can coordinate the roster changes now.",
      },
      {
        role: "system",
        content: "Phase 4: Assess - Monitoring Recovery & Retention",
        phase: "assess"
      },
      {
        role: "ai",
        content: "Recovery monitoring: Days off compliance (min 2 per 7 days), shift duration (target <8.5 hours average), sick leave trend (target ≤1/month), resident interaction quality (via care notes). EAP referral provided. I'll alert you if fatigue patterns re-emerge. All controls documented per Quality Standards and WHS Code. Monthly check-ins scheduled for 3 months.",
      },
      {
        role: "leader",
        content: "[Six weeks later] Jenny took the break, we fixed the roster rotation, and she seems like her old self again. What's the status?",
      },
      {
        role: "ai",
        content: "Excellent outcome! Jenny's sick leave normalized (0 days in 4 weeks), resident interaction time restored to baseline, she's engaged in team handovers again. Roster now includes proper recovery time and wing rotation. Burnout risk reduced from High to Low. Successful retention—saved $40-49K replacement cost. Documented as effective psychosocial control in hazard register.",
      },
    ],
  },
  {
    id: "family-complaint",
    title: "Family Complaint Stress",
    description: "Staff experiencing distress from aggressive family interactions",
    concern: "Mrs. Thompson's daughter has been verbally abusive to night shift staff, accusing them of neglect. The team is stressed.",
    messages: [
      {
        role: "system",
        content: "Phase 1: Observe - Identifying External Aggression & Role Conflict",
        phase: "observe"
      },
      {
        role: "leader",
        content: "Mrs. Thompson's daughter has been verbally abusive to night shift staff, accusing them of neglect. The team is stressed.",
      },
      {
        role: "ai",
        content: "I've documented the pattern: 4 incidents in past week, all between 8-10pm (daughter's visit time). 3 different night staff involved. Incident reports show accusations of 'not answering call bell fast enough' and 'poor care'. Staff rostering data shows 2 staff have requested shift changes to avoid the family. This indicates 'external violence' and 'role conflict' psychosocial hazards under WHS Code and Quality Standard 1 (Consumer dignity and choice).",
      },
      {
        role: "system",
        content: "Phase 2: Orient - Assessing Complaint Validity & Staff Wellbeing Risk",
        phase: "orient"
      },
      {
        role: "ai",
        content: "Risk assessment: Medium-High. Analysis shows: Call bell response times for Mrs. Thompson averaged 3.2 minutes (within 5-min standard). Care documentation complete and timely. No clinical concerns. However, verbal aggression toward staff violates 'freedom from violence' principle. Staff avoidance behaviour indicates psychological harm. This requires both family support intervention AND staff protection per duty of care.",
      },
      {
        role: "system",
        content: "Phase 3: Respond - Balancing Family Support & Staff Protection",
        phase: "respond"
      },
      {
        role: "ai",
        content: "Dual approach (hierarchy of controls): FOR STAFF: 1) Immediate support meeting with night team, 2) Clear reporting protocol for aggression, 3) Buddy system when interacting with this family. FOR FAMILY: 1) Compassionate family meeting to understand concerns (I've identified daughter is caregiver burnout risk), 2) Provide care transparency (activity logs, care plan review), 3) Set respectful communication expectations. Shall I schedule the family meeting for tomorrow?",
      },
      {
        role: "leader",
        content: "Yes, but I'm worried this will escalate. How do I handle it if she becomes aggressive in the meeting?",
      },
      {
        role: "ai",
        content: "Safety plan prepared: 1) Meeting held in office (private, safe exit available), 2) Two staff present (you + Clinical Manager for credibility), 3) De-escalation phrases scripted: 'I can see you're concerned about your mum's care. Let's look at the care records together.' 4) If aggression continues: meeting paused, offer cooling-off period, document behaviour. I've also flagged potential caregiver support services for the daughter. Zero tolerance for abuse—staff safety is non-negotiable.",
      },
      {
        role: "system",
        content: "Phase 4: Assess - Monitoring Resolution & Team Recovery",
        phase: "assess"
      },
      {
        role: "ai",
        content: "Tracking: Incident reports involving this family (target: zero verbal aggression within 2 weeks), staff shift change requests (monitoring for avoidance), family satisfaction indicators, Mrs. Thompson's care quality metrics. I'll prompt weekly check-ins with night staff for 4 weeks. If aggression continues, escalation to family meeting with external mediator. All documented per Quality Standards consumer/workforce safety requirements.",
      },
      {
        role: "leader",
        content: "[Three weeks later] The family meeting helped. The daughter was dealing with grief and guilt. She apologized and staff feel safe again. Outcome?",
      },
      {
        role: "ai",
        content: "Excellent resolution! Zero aggression incidents in 3 weeks. Daughter connected with grief counseling and caregiver support group. Night staff no longer requesting shift changes—psychological safety restored. Mrs. Thompson's care quality maintained throughout. Family relationship repaired. Successful management of external violence hazard with compassionate approach. Documented in hazard register with lessons learned for future family distress situations.",
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
  useEffect(() => {
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
  }, [isPlaying, currentStep, scenario.messages.length]);

  const phases = [
    { id: "observe", label: "Identification", description: "Gather Facts" },
    { id: "orient", label: "Risk assessment", description: "Understand Risk" },
    { id: "respond", label: "Action", description: "Take Action" },
    { id: "assess", label: "Monitoring", description: "Monitor Impact" },
  ];

  const getCurrentPhaseIndex = () => {
    const phaseOrder = ["observe", "orient", "respond", "assess"];
    return phaseOrder.indexOf(currentPhase || "observe");
  };

  return (
    <div className="space-y-6">
      {/* Scenario Selector */}
      <div className="space-y-3">
        <h4 className="font-bold text-foreground">Choose a Scenario:</h4>
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
      <div className="bg-card rounded-lg p-6 border-2 border-border">
        <h4 className="font-bold text-foreground mb-4">Framework Progress</h4>
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
                  isActive ? `${colors.bg} ${colors.border}` : "bg-muted border-border",
                  isCompleted && "opacity-60"
                )}
                role="status"
                aria-label={`${phase.label} phase: ${isActive ? 'current' : isCompleted ? 'completed' : 'pending'}. ${phase.description}`}
                aria-current={isActive ? "step" : undefined}
                data-testid={`phase-indicator-${phase.id}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div 
                    className={cn(
                      "w-3 h-3 rounded-full",
                      isActive ? colors.accent : isCompleted ? "bg-muted-foreground/60" : "bg-muted-foreground/40"
                    )}
                    aria-hidden="true"
                  />
                  <span className={cn(
                    "font-bold text-sm",
                    isActive ? colors.text : "text-muted-foreground"
                  )}>
                    {phase.label}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{phase.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Conversation Display */}
      <Card className="p-6 min-h-[400px] bg-muted/30">
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

            const isLeader = message.role === "leader";
            return (
              <div
                key={index}
                className={cn(
                  "flex",
                  isLeader ? "justify-end" : "justify-start"
                )}
              >
                <div className={cn(
                  "max-w-[80%] rounded-lg p-4",
                  isLeader 
                    ? "bg-indigo-600 text-white" 
                    : "bg-card border-2 border-border text-foreground"
                )}>
                  <div className="text-xs font-bold mb-1 opacity-70">
                    {isLeader ? "Leader" : "CultureCrunch AI"}
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

        <div className="text-sm text-muted-foreground">
          Step {currentStep + 1} of {scenario.messages.length}
        </div>
      </div>
    </div>
  );
}
