import { Package, Zap, Target, Sparkles, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

interface DeliverablePhase {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Package;
  color: string;
  items: Array<{
    title: string;
    details: string[];
  }>;
  artifacts?: {
    title: string;
    items: string[];
  };
}

export default function DeliverablesSection() {
  const phases: DeliverablePhase[] = [
    {
      id: "week1",
      title: "Week 1: Foundations & Baseline",
      subtitle: "Assessment, mapping, and baseline metrics",
      icon: Package,
      color: "indigo",
      items: [
        {
          title: "Red/Green Culture Mapping Session (90 mins with leadership team)",
          details: [
            "Identify 3-5 priority psychosocial hazards specific to their aged care provider",
            "Map current behaviours (Red) vs. desired behaviours (Green)",
            "Prioritise focus areas for the sprint"
          ]
        },
        {
          title: "Psychosocial Safety Compliance Audit",
          details: [
            "Gap analysis against WHS psychosocial requirements (17 hazards)",
            "Aged Care Quality Standards alignment (Standards 2 & 7)",
            "Risk register template populated with their context"
          ]
        },
        {
          title: "Baseline Pulse Survey (first team pulse)",
          details: [
            "3 rotating questions: Clarity, Recognition, Workload/Safety",
            "Anonymous, takes team 2 minutes",
            "Establishes starting metrics"
          ]
        }
      ],
      artifacts: {
        title: "Deliverable artifacts:",
        items: [
          "Red/Green Behaviour Map (visual, 1-page)",
          "Compliance Gap Report (2-3 pages)",
          "Baseline Culture Metrics Dashboard"
        ]
      }
    },
    {
      id: "weeks2-5",
      title: "Weeks 2-5: Active Sprint",
      subtitle: "AI-powered insights, team sessions, and behaviour shifts",
      icon: Zap,
      color: "purple",
      items: [
        {
          title: "Weekly AI-Generated Leader Briefs (every Monday, 7am)",
          details: [
            "120-150 word pulse snapshot",
            "One key insight from data (what's working/needs attention)",
            "One Red→Green behaviour focus for the week",
            "One specific micro-action (from your library) tailored to their context",
            "Takes leader 3 minutes to read"
          ]
        },
        {
          title: "Weekly Pulse Surveys (every Friday)",
          details: [
            "2-3 rotating questions focused on psychosocial safety indicators",
            "Results auto-flow to dashboard",
            "Anonymous, secure, mobile-friendly"
          ]
        },
        {
          title: "3 × Live Team Sessions (30-45 mins each)",
          details: [
            "Session 1 (Week 2): Trust & Psychological Safety kickoff - Run by Campbell/Ivan or trained associate, introduce micro-action approach, first behaviour experiment (e.g., 'kill 2 recurring meetings')",
            "Session 2 (Week 4): Recognition & Values in Action - Shout-out round facilitation, connect to aged care values (care, respect, safety), build recognition habit",
            "Session 3 (Week 6): Sustaining the Shift - Review progress data, embed habits into existing rhythms (huddles, handovers), transition to 12-month sustain phase"
          ]
        },
        {
          title: "Leader Support & Coaching",
          details: [
            "10-minute weekly check-in calls (Weeks 2-5)",
            "Conversation scripts for each micro-action",
            "Objection handling support",
            "Access to Campbell/Ivan via email/phone for questions"
          ]
        }
      ],
      artifacts: {
        title: "Deliverable artifacts:",
        items: [
          "4 × Weekly Leader Briefs (personalised AI summaries)",
          "4 × Pulse Survey Results (trend data)",
          "Session facilitation guides (for internal reuse)",
          "Micro-action log (what was tried, what happened)"
        ]
      }
    },
    {
      id: "week6",
      title: "Week 6: ROI Snapshot & Handover",
      subtitle: "Impact report, compliance evidence, and transition plan",
      icon: Target,
      color: "green",
      items: [
        {
          title: "Culture Impact Report (8-10 pages)",
          details: [
            "Before/After metrics: Pulse score trends (Clarity, Recognition, Workload), recognition event frequency, meeting load changes (if tracked), micro-actions completed and outcomes",
            "Psychosocial Safety Compliance Evidence: Documented risk controls implemented, consultation records (pulse surveys, team sessions), behaviour change evidence for audits, aligned to Standards 2 & 7",
            "ROI Projection: Turnover risk reduction estimate (based on pulse improvements), projected cost savings (using $40k-$49k replacement cost per departure), compliance risk mitigation value"
          ]
        },
        {
          title: "12-Month Sustain Plan",
          details: [
            "Recommended cadence (pulse frequency, brief schedule)",
            "Behaviour focus areas for next quarter",
            "Benchmarking data access setup",
            "Transition to self-serve dashboard"
          ]
        },
        {
          title: "Final Handover Call (60 mins)",
          details: [
            "Review ROI snapshot together",
            "Answer questions on 12-month license",
            "Set up ongoing access and training",
            "Collect testimonial and case study permissions"
          ]
        }
      ],
      artifacts: {
        title: "Deliverable artifacts:",
        items: [
          "Culture Impact Report (PDF + presentation)",
          "12-Month Roadmap (1-page)",
          "Access credentials to ongoing platform"
        ]
      }
    },
    {
      id: "12month",
      title: "12-Month License: Culture Sustain",
      subtitle: "$5-$10 per person per month - Ongoing support and continuous improvement",
      icon: Sparkles,
      color: "blue",
      items: [
        {
          title: "AI Leader Briefs (Ongoing)",
          details: [
            "Monthly or fortnightly AI-generated briefs (client chooses cadence)",
            "Continues pulse → insight → action loop",
            "Evolves focus based on progress and sector trends",
            "Delivered via email + dashboard"
          ]
        },
        {
          title: "Continuous Pulse Surveys",
          details: [
            "Rotating psychosocial questions (broader library than sprint)",
            "Covers all 17 WHS psychosocial hazards over 12 months",
            "Anonymous, secure, compliant with privacy requirements",
            "Real-time dashboard access for leaders"
          ]
        },
        {
          title: "CultureCrunch Dashboard (Leader Portal)",
          details: [
            "Current sprint status: Week tracker, focus behaviours",
            "Pulse metrics: Live scores + trend lines (6-month view)",
            "Recognition log: Team shout-outs and values in action",
            "Micro-action library: Browse and select from 40+ proven actions",
            "Action log: Submit outcomes, track completion",
            "Analytics: Red→Green behaviour index, Triple Goal proxy metrics"
          ]
        },
        {
          title: "Recognition System",
          details: [
            "Simple logging tool (web form or email)",
            "Leaders and staff can submit recognition events",
            "Tracks frequency and values alignment",
            "Feeds into briefs and dashboards",
            "Public feed option (if client wants team visibility)"
          ]
        },
        {
          title: "Sector Benchmarking (Added value as you scale)",
          details: [
            "Compare your facility to sector averages: Pulse scores (clarity, recognition, workload), recognition frequency, meeting load metrics, turnover risk indicators",
            "De-identified, aggregated data from all Culture Crunch clients",
            "Updated quarterly"
          ]
        },
        {
          title: "Micro-Action Library (Expanded)",
          details: [
            "40+ Red→Green micro-actions specific to aged care",
            "Categorised by psychosocial hazard and behaviour focus",
            "Includes: Scripts for conversations, implementation tips, success indicators, time estimates (all ≤15 mins)",
            "Continually updated based on client outcomes"
          ]
        },
        {
          title: "Compliance Documentation Support",
          details: [
            "Auto-generated compliance artifacts: Quarterly psychosocial risk review reports, consultation evidence logs (pulse survey records), control measure effectiveness reviews, audit-ready summaries for Quality Standards 2 & 7",
            "Regulatory updates: Alerts when WHS or Aged Care Standards change, updated compliance checklists, guidance notes for new requirements"
          ]
        },
        {
          title: "Quarterly Check-In Calls (30 mins)",
          details: [
            "Review progress with Campbell/Ivan or trained associate",
            "Troubleshoot challenges",
            "Refine focus areas for next quarter",
            "Share sector insights and emerging trends"
          ]
        },
        {
          title: "Community & Learning",
          details: [
            "Access to Culture Crunch Community: Quarterly webinars with aged care culture leaders, peer learning sessions (anonymised case sharing), early access to new features and research",
            "Resource library: Psychosocial safety guides, conversation scripts, session facilitation templates, ISO 45003 and Quality Standards resources"
          ]
        },
        {
          title: "Technical Support & Updates",
          details: [
            "Email support (response within 24 hours)",
            "Platform updates and new features automatically included",
            "Data export capabilities (for internal reporting)",
            "Integration support (if client wants to connect to existing systems)"
          ]
        }
      ]
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; icon: string; hover: string; accent: string }> = {
    indigo: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      icon: "text-indigo-600",
      hover: "hover:border-indigo-300",
      accent: "bg-indigo-100"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "text-purple-600",
      hover: "hover:border-purple-300",
      accent: "bg-purple-100"
    },
    green: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      icon: "text-indigo-600",
      hover: "hover:border-indigo-300",
      accent: "bg-indigo-100"
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "text-blue-600",
      hover: "hover:border-blue-300",
      accent: "bg-blue-100"
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-4">
          <Package className="w-4 h-4 text-indigo-600" />
          <span className="text-sm font-semibold text-indigo-600" style={{ letterSpacing: '-0.005em' }}>
            Comprehensive Deliverables
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8" style={{ letterSpacing: '-0.01em' }}>
          What You Get
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Complete support from baseline assessment to sustained culture improvement—every deliverable designed for aged care compliance and workforce retention
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {phases.map((phase) => {
          const colors = colorMap[phase.color];
          const Icon = phase.icon;

          return (
            <AccordionItem key={phase.id} value={phase.id} className="border-0">
              <Card className={`${colors.bg} ${colors.border} border-2 ${colors.hover} transition-all`}>
                <AccordionTrigger 
                  className="px-6 py-4 hover:no-underline"
                  data-testid={`accordion-trigger-${phase.id}`}
                >
                  <div className="flex items-start gap-4 text-left w-full">
                    <div className={`${colors.accent} p-3 rounded-lg flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-bold text-foreground mb-1" style={{ letterSpacing: '-0.01em' }}>
                        {phase.title}
                      </h4>
                      <p className="text-sm text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>
                        {phase.subtitle}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6 pt-4">
                    {phase.items.map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <h5 className="font-semibold text-foreground flex items-start gap-2">
                          <CheckCircle className={`w-4 h-4 ${colors.icon} flex-shrink-0 mt-0.5`} />
                          <span>{item.title}</span>
                        </h5>
                        <ul className="ml-6 space-y-1.5">
                          {item.details.map((detail, detailIdx) => (
                            <li key={detailIdx} className="text-sm text-muted-foreground leading-relaxed">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    
                    {phase.artifacts && (
                      <div className={`${colors.accent} p-4 rounded-lg mt-6`}>
                        <h5 className="font-semibold text-foreground mb-2">{phase.artifacts.title}</h5>
                        <ul className="space-y-1">
                          {phase.artifacts.items.map((artifact, artifactIdx) => (
                            <li key={artifactIdx} className="text-sm text-muted-foreground">
                              ✓ {artifact}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
