import { CheckCircle, Rocket, Target, Sparkles, Calendar, Trophy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function SprintTimeline() {
  const phases = [
    {
      id: "phase1",
      weeks: "Weeks 1-2",
      title: "Setup & Align",
      icon: Target,
      color: "indigo",
      summary: "Leader and team alignment, system configuration, baseline assessment",
      items: [
        "Leader and team complete the Triple Goal Team Development Survey",
        "Leader and team trained in Triple Goal methodology including Accountable Conversations",
        "Leader and team define target state for high performance psychosocial safety using Triple Goal methodology (results in clear set of prioritised red and green zone behaviours)",
        "Leader and team align on the weekly or fortnightly sprint cycle (conducted in a single workshop)",
        "CultureCrunch app is configured for client organisation (LLM + app wrapper with nudge engine)",
        "Dashboard is configured for client",
        "CC app is tested ready for deployment",
        "Leader onboards self into CC app - uploads all relevant team static data and information (doc/data upload into app). This includes TG Team Development survey report + priorities red and green zone behaviours for the team",
        "Initiate LGP360 feedback assessment for leader",
        "First pulse survey conducted Friday of week 2 (3 questions, 2 minutes, anonymous)",
        "First round of ONA conducted and fed into CC app (if relevant)"
      ]
    },
    {
      id: "phase2",
      weeks: "Weeks 3-4",
      title: "Run & Track",
      icon: Rocket,
      color: "purple",
      summary: "AI-powered sprint cycles, micro-actions, real-time tracking",
      items: [
        "First AI-generated Leader Brief delivered Monday, week 3 @ 7am",
        "Leader runs first 10-min OORA conversation ritual and team picks one micro-practice or action for the week. Recommended day is Monday, PM",
        "AI tracks: meeting load, shifts, rosters, overtime, recognition patterns, psychosocial trends",
        "Micro-action / practice is implemented and tracked: 'Kill 2 recurring meetings', '5-min recognition round'",
        "Process is replicated for week 4",
        "Dashboard shows real-time culture shifts at the end of week 4"
      ]
    },
    {
      id: "phase3",
      weeks: "Weeks 5-6",
      title: "Embed & Report",
      icon: CheckCircle,
      color: "green",
      summary: "360 debrief, team review, ROI snapshot, sustained access",
      items: [
        "Leader LGP360 debrief and action planning",
        "Leader conducts Team Review with direct reports and confirms One Big Practice",
        "Weeks 5 + 6 continue the weekly psychosocial sprints",
        "Team sees behaviour changes and actions being implemented",
        "Final ROI snapshot for compliance audits"
      ]
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; icon: string; hover: string }> = {
    indigo: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      icon: "text-indigo-600",
      hover: "hover:border-indigo-300"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "text-purple-600",
      hover: "hover:border-purple-300"
    },
    green: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "text-blue-600",
      hover: "hover:border-blue-300"
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4">
          <Calendar className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-semibold text-purple-600">6-Week Sprint Program</span>
        </div>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Structured implementation pathway from setup to sustained adoption, designed for aged care leadership teams
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {phases.map((phase) => {
          const colors = colorMap[phase.color];
          const Icon = phase.icon;
          
          return (
            <AccordionItem key={phase.id} value={phase.id} className="border-0">
              <Card className={`border-2 ${colors.border} ${colors.hover} transition-all`}>
                <AccordionTrigger 
                  className="px-6 py-5 hover:no-underline [&[data-state=open]]:pb-3"
                  data-testid={`accordion-trigger-${phase.id}`}
                >
                  <div className="flex items-start gap-4 text-left w-full">
                    <div className={`p-3 rounded-lg ${colors.bg} shrink-0`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-sm font-semibold ${colors.icon}`}>{phase.weeks}</span>
                        <span className="text-lg font-bold text-foreground">{phase.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{phase.summary}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-2">
                  <ul className="space-y-3">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')} shrink-0`} />
                        <span className="text-sm text-muted-foreground flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </Card>
            </AccordionItem>
          );
        })}
      </Accordion>

      {/* 12-Month Sustain License - Highlighted Separately */}
      <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 pointer-events-none" />
        <div className="relative px-6 py-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="w-5 h-5 text-purple-600" />
                <h3 className="text-xl font-bold text-foreground">12-Month Sustain License</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Following the 6-week sprint program, founding partners receive ongoing AI Leader Co-pilot access 
                to sustain momentum and continue psychosocial safety improvements across their aged care teams.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-purple-700">
                <CheckCircle className="w-4 h-4" />
                <span>Included with Founding Partner Program</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
