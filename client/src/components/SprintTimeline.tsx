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
      id: "week1",
      weeks: "Week 1",
      title: "Foundations & Baseline",
      icon: Target,
      color: "indigo",
      summary: "Team alignment, system setup, leadership development kickoff",
      items: [
        "Four-Hour Red/Green Mapping Team Session:",
        "  • Inputs include the Triple Goal Team Development Survey",
        "  • Define target link between strategy, performance, and psychosocial safety",
        "  • Prioritise focus areas for the first 3 weekly team sprints",
        "  • Results in clear set of prioritised red and green zone behaviours",
        "Kick off the Leadership Growth Profile 360 (LGP360) for the leader and potentially all leadership team members",
        "CultureCrunch app configured for client organisation",
        "Leader onboards into app - uploads team data and TG Team Development survey priorities",
        "Baseline Pulse Survey (3 questions, 2 minutes, anonymous) - questions based on team's focus areas, not static"
      ]
    },
    {
      id: "week2",
      weeks: "Week 2",
      title: "Leadership Development",
      icon: Target,
      color: "indigo",
      summary: "Accountable Conversations foundation and system readiness",
      items: [
        "Module 1: Accountable Conversations (Mindset) - 2.5 hours virtual instructor-led for leadership team",
        "Dashboard configured for client",
        "App tested and ready for deployment",
        "First round of Organisational Network Analysis conducted and fed into app (if relevant)"
      ]
    },
    {
      id: "week3",
      weeks: "Week 3",
      title: "Skillset Installation + First Sprint",
      icon: Rocket,
      color: "purple",
      summary: "First AI-powered sprint cycle begins",
      items: [
        "Module 2: Accountable Conversations (Skillset) - 2.5 hours virtual instructor-led for leadership team",
        "First AI-generated Leader Brief delivered Monday @ 7am",
        "Leader runs first 10-min OORA conversation ritual",
        "Team picks one micro-practice or action for the week",
        "AI tracks: meeting load, shifts, rosters, overtime, recognition patterns, psychosocial trends",
        "Micro-action implemented: 'Kill 2 recurring meetings', '5-min recognition round', etc."
      ]
    },
    {
      id: "week4",
      weeks: "Week 4",
      title: "Momentum & Insight",
      icon: Rocket,
      color: "purple",
      summary: "Sprint cycle continues, leader receives 360 feedback",
      items: [
        "Leader LGP360 debrief (60-90 mins) with Grant or Campbell",
        "Weekly sprint cycle continues with AI brief and OORA ritual",
        "Team implements and tracks micro-actions",
        "Dashboard shows real-time culture shifts"
      ]
    },
    {
      id: "week5",
      weeks: "Week 5",
      title: "Embed & Refine",
      icon: CheckCircle,
      color: "green",
      summary: "Team review and sustained practice selection",
      items: [
        "Leader conducts Team Review with direct reports",
        "Team confirms One Big Practice for sustained adoption",
        "Weekly psychosocial sprint continues",
        "Team observes behaviour changes and action implementation"
      ]
    },
    {
      id: "week6",
      weeks: "Week 6",
      title: "Impact & Transition",
      icon: CheckCircle,
      color: "green",
      summary: "Culture impact assessment and sustained access begins",
      items: [
        "Culture Impact Report delivered with Net Gains in Selected Focus Areas metrics",
        "Final compliance audit documentation provided",
        "Team completes final sprint cycle",
        "Transition to 12-month sustain license"
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
