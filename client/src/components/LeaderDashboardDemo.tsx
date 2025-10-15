import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, Clock, AlertTriangle, TrendingDown, TrendingUp, 
  CheckCircle, Users, Shield, BarChart3, ArrowRight, RotateCcw 
} from "lucide-react";
import { cn } from "@/lib/utils";

type DemoStep = "brief" | "scenario" | "action" | "results";

interface RiskScenario {
  id: string;
  title: string;
  severity: "high" | "medium";
  category: string;
  concern: string;
  aiInsight: string;
  recommendation: string;
  microAction: string;
  weeklyTracking: string[];
  fridayResults: {
    outcome: string;
    metrics: { label: string; value: string; trend: "up" | "down" | "neutral" }[];
    compliance: string;
    timeInvested: string;
  };
}

const riskScenarios: RiskScenario[] = [
  {
    id: "resident-aggression",
    title: "Resident Aggression Pattern Detected",
    severity: "high",
    category: "Violence & Aggression",
    concern: "Maria has been hit twice this week by Mr. Chen during morning care. She's becoming anxious about her shifts.",
    aiInsight: "Mr. Chen has had 5 responsive behaviours in past 2 weeks (up from 0-1/month baseline). All incidents occurred 7-8am during personal care. Maria was involved in 3 of 5. Her shift sign-in shows +12 mins delay before entering his room. This is a workplace violence hazard requiring immediate controls.",
    recommendation: "Implement paired care for Mr. Chen, clinical review today at 11am, behaviour support assessment, and refer Maria to EAP with alternative duties offered.",
    microAction: "Immediate Paired Care Protocol + Clinical Review",
    weeklyTracking: [
      "Mr. Chen's responsive behaviours (target: <2/month)",
      "Staff incident reports (zero physical contact goal)",
      "Maria's wellbeing check-ins (weekly)",
      "Care plan adjustments logged"
    ],
    fridayResults: {
      outcome: "Within 3 weeks: Mr. Chen's behaviours decreased to 1 incident. Zero physical contact. Maria completed EAP and returned to care (with support). Team trained in trauma-informed dementia care.",
      metrics: [
        { label: "Responsive Behaviours", value: "1 incident/3 weeks", trend: "down" },
        { label: "Staff Safety Incidents", value: "0 physical contact", trend: "down" },
        { label: "Retention Cost Saved", value: "$40-49K (Maria retained)", trend: "up" }
      ],
      compliance: "Violence hazard controls documented in register per WHS Code. Quality Standard 3 compliance maintained. Maria retention avoids $40-49K replacement cost + 87-day vacancy.",
      timeInvested: "15 minutes total (Monday brief + Friday check-in)"
    }
  },
  {
    id: "caregiver-burnout",
    title: "Caregiver Burnout Risk Escalating",
    severity: "high",
    category: "High Job Demands",
    concern: "Jenny has called in sick 3 times this month. When she's here, she seems emotionally exhausted and withdrawn from residents.",
    aiInsight: "Jenny worked 14 consecutive days averaging 9.2 hours/day. Sick leave: 3 days this month vs 0.5/month baseline. Resident interaction time down 35%. Assigned to high-care dementia wing 89% of shifts without rotation. High burnout trajectory per aged care workforce research.",
    recommendation: "3 consecutive days off (rostered tomorrow), roster review to ensure max 5 consecutive days, wing rotation (alternate high-care/low-care), and supportive check-in conversation.",
    microAction: "Emergency Rest Period + Roster Rotation",
    weeklyTracking: [
      "Days off compliance (min 2 per 7 days)",
      "Shift duration (target <8.5 hours avg)",
      "Sick leave trend (target ≤1/month)",
      "Resident interaction quality"
    ],
    fridayResults: {
      outcome: "Within 6 weeks: Jenny took the break, roster rotation fixed, sick leave normalized (0 days in 4 weeks). Resident interaction time restored to baseline. She's engaged in team handovers again.",
      metrics: [
        { label: "Sick Leave", value: "0 days in 4 weeks", trend: "down" },
        { label: "Burnout Risk Level", value: "High → Low", trend: "down" },
        { label: "Retention Cost Saved", value: "$40-49K avoided", trend: "up" }
      ],
      compliance: "Burnout risk reduced High → Low. Jenny retained saves $40-49K replacement cost + 87-day vacancy. Documented as effective control in hazard register.",
      timeInvested: "16 minutes total (conversation + roster coordination)"
    }
  },
  {
    id: "family-complaint",
    title: "Family Complaint Causing Team Stress",
    severity: "medium",
    category: "External Violence & Role Conflict",
    concern: "Mrs. Thompson's daughter has been verbally abusive to night shift staff, accusing them of neglect. The team is stressed.",
    aiInsight: "4 incidents in past week, all 8-10pm (daughter's visit time). 3 different night staff involved. Accusations of 'not answering call bell fast enough'. 2 staff requested shift changes to avoid the family. External violence + role conflict hazards detected.",
    recommendation: "Clinical Manager meeting with daughter to address concerns, staff briefing on incident response, enhanced communication plan for family, and staff support/debrief.",
    microAction: "Family Engagement Protocol + Staff Support",
    weeklyTracking: [
      "Incident frequency (target: zero verbal abuse)",
      "Staff shift change requests (monitoring)",
      "Communication plan compliance",
      "Family satisfaction indicators"
    ],
    fridayResults: {
      outcome: "Within 2 weeks: Clinical Manager met with daughter, established care plan communication protocol. Staff trained in de-escalation. Zero verbal abuse incidents. Night shift morale improved.",
      metrics: [
        { label: "Verbal Abuse Incidents", value: "0 in 2 weeks", trend: "down" },
        { label: "Staff Retention Risk", value: "2 staff retained", trend: "up" },
        { label: "Cost Avoided", value: "$80-98K (2× turnover)", trend: "up" }
      ],
      compliance: "External violence hazard controlled. Quality Standard 1 (consumer dignity) and staff wellbeing protected. Documented in register. Preventing 2 staff departures saves $80-98K + 6-month recruitment gap.",
      timeInvested: "18 minutes total (briefing + follow-up)"
    }
  }
];

export default function LeaderDashboardDemo() {
  const [step, setStep] = useState<DemoStep>("brief");
  const [selectedRisk, setSelectedRisk] = useState<RiskScenario | null>(null);

  const handleRiskSelect = (risk: RiskScenario) => {
    setSelectedRisk(risk);
    setStep("scenario");
  };

  const handleReset = () => {
    setStep("brief");
    setSelectedRisk(null);
  };

  const severityColors = {
    high: "border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-950",
    medium: "border-orange-500 dark:border-orange-400 bg-orange-50 dark:bg-orange-950"
  };

  const severityTextColors = {
    high: "text-red-700 dark:text-red-300",
    medium: "text-orange-700 dark:text-orange-300"
  };

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {["brief", "scenario", "action", "results"].map((s, idx) => (
          <div key={s} className="flex items-center gap-2">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors",
              step === s 
                ? "bg-indigo-600 dark:bg-indigo-500 text-white" 
                : idx < ["brief", "scenario", "action", "results"].indexOf(step)
                  ? "bg-green-600 dark:bg-green-500 text-white"
                  : "bg-muted text-muted-foreground"
            )}>
              {idx + 1}
            </div>
            {idx < 3 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
          </div>
        ))}
      </div>

      {/* Step 1: Monday Morning AI Brief */}
      {step === "brief" && (
        <div className="space-y-6 animate-fade-in-up">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-950 rounded-full mb-4">
              <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">Monday, 7:00 AM</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2" style={{ letterSpacing: '-0.01em' }}>
              Your AI Leader Brief Has Arrived
            </h3>
            <p className="text-lg text-muted-foreground">
              ThriveGuide AI detected 3 psychosocial risks requiring your attention this week
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {riskScenarios.map((risk) => (
              <Card 
                key={risk.id}
                className={cn(
                  "p-6 border-2 hover-elevate cursor-pointer transition-all",
                  severityColors[risk.severity]
                )}
                onClick={() => handleRiskSelect(risk)}
                data-testid={`risk-card-${risk.id}`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className={cn("w-6 h-6 shrink-0", severityTextColors[risk.severity])} />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide mb-1" style={{ letterSpacing: '0.05em' }}>
                      {risk.category}
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2" style={{ letterSpacing: '-0.01em' }}>
                      {risk.title}
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-foreground mb-4">
                  {risk.concern}
                </p>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full"
                  data-testid={`button-select-risk-${risk.id}`}
                >
                  Address This Risk
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: OORA Conversation Script */}
      {step === "scenario" && selectedRisk && (
        <div className="space-y-6 animate-fade-in-up">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-950 rounded-full mb-4">
              <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">10-Minute OORA Conversation</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2" style={{ letterSpacing: '-0.01em' }}>
              {selectedRisk.title}
            </h3>
            <p className="text-lg text-muted-foreground">
              ThriveGuide AI has generated your conversation script
            </p>
          </div>

          <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-muted-foreground uppercase mb-2">AI Insight</h4>
                <p className="text-foreground">{selectedRisk.aiInsight}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-muted-foreground uppercase mb-2">Recommended Action</h4>
                <p className="text-foreground">{selectedRisk.recommendation}</p>
              </div>
            </div>
          </Card>

          <div className="flex gap-4">
            <Button 
              variant="outline" 
              onClick={handleReset}
              data-testid="button-back-to-brief"
            >
              Back to Brief
            </Button>
            <Button 
              variant="default" 
              onClick={() => setStep("action")}
              className="flex-1"
              data-testid="button-continue-to-action"
            >
              Continue to Micro-Action
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Micro-Action Selection */}
      {step === "action" && selectedRisk && (
        <div className="space-y-6 animate-fade-in-up">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950 rounded-full mb-4">
              <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-semibold text-green-900 dark:text-green-100">Team Micro-Action</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2" style={{ letterSpacing: '-0.01em' }}>
              This Week's Action
            </h3>
            <p className="text-lg text-muted-foreground">
              What gets tracked during the week
            </p>
          </div>

          <Card className="p-6 border-2 border-green-500 dark:border-green-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-xl font-bold text-foreground" style={{ letterSpacing: '-0.01em' }}>
                {selectedRisk.microAction}
              </h4>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-muted-foreground uppercase">Real-Time Tracking</p>
              <ul className="space-y-2">
                {selectedRisk.weeklyTracking.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <div className="flex gap-4">
            <Button 
              variant="outline" 
              onClick={() => setStep("scenario")}
              data-testid="button-back-to-scenario"
            >
              Back
            </Button>
            <Button 
              variant="default" 
              onClick={() => setStep("results")}
              className="flex-1"
              data-testid="button-see-results"
            >
              See Friday Results
            </Button>
          </div>
        </div>
      )}

      {/* Step 4: Friday Results Dashboard */}
      {step === "results" && selectedRisk && (
        <div className="space-y-6 animate-fade-in-up">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950 rounded-full mb-4">
              <BarChart3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">Friday, End of Week Results</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2" style={{ letterSpacing: '-0.01em' }}>
              Impact Dashboard
            </h3>
            <p className="text-lg text-muted-foreground">
              Measurable outcomes from this week's intervention
            </p>
          </div>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
            <div className="mb-6">
              <h4 className="text-sm font-bold text-muted-foreground uppercase mb-3">Outcome</h4>
              <p className="text-lg text-foreground">{selectedRisk.fridayResults.outcome}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {selectedRisk.fridayResults.metrics.map((metric, idx) => (
                <div key={idx} className="p-4 bg-card rounded-lg">
                  <div className="text-xs font-bold text-muted-foreground uppercase mb-1">{metric.label}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">{metric.value}</span>
                    {metric.trend === "down" && <TrendingDown className="w-5 h-5 text-green-600 dark:text-green-400" />}
                    {metric.trend === "up" && <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-bold text-muted-foreground uppercase mb-2">Compliance Evidence</h4>
                <p className="text-foreground">{selectedRisk.fridayResults.compliance}</p>
              </div>
              <div className="p-4 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-bold text-indigo-900 dark:text-indigo-100">
                    {selectedRisk.fridayResults.timeInvested}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex gap-4">
            <Button 
              variant="outline" 
              onClick={handleReset}
              className="flex-1"
              data-testid="button-try-another"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Another Scenario
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
