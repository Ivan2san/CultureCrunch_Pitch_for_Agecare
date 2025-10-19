import { useState } from "react";
import { Sparkles, MessageSquare, Target, Activity, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";

const loopSteps = [
  {
    icon: Sparkles,
    title: "AI Brief",
    subtitle: "Monday 7 a.m.",
    description: "Brief lands Monday 7 a.m. with the 1–2 focus areas for the week.",
    color: "purple"
  },
  {
    icon: MessageSquare,
    title: "OORA Conversation",
    subtitle: "20 minutes",
    description: "Run one OORA, pick one micro-practice (e.g., kill two meetings, 5-min recognition).",
    color: "indigo"
  },
  {
    icon: Target,
    title: "Choose Micro-Action",
    subtitle: "One simple change",
    description: "Select one small, actionable practice that can be completed this week.",
    color: "purple"
  },
  {
    icon: Activity,
    title: "System Tracks",
    subtitle: "Background monitoring",
    description: "Tracking runs in the background; leaders see live shifts during the week.",
    color: "indigo"
  },
  {
    icon: TrendingUp,
    title: "Evidence Visible",
    subtitle: "Real-time dashboard",
    description: "Evidence visible on dashboard; feeds next week's AI Brief.",
    color: "purple"
  }
];

const installPhases = [
  {
    phase: "Foundations",
    description: "Establish baselines and priorities; launch LGP360; configure the app."
  },
  {
    phase: "Mindset",
    description: "Install accountable-conversation psychology; ready the dashboard; optional ONA."
  },
  {
    phase: "Skillset & Launch",
    description: "Practise dialogue techniques; ship first Brief; run first loop."
  },
  {
    phase: "Momentum",
    description: "Keep the loop; leaders complete LGP360 debriefs; dashboard shows emerging shifts."
  },
  {
    phase: "Embed",
    description: "Team Review; confirm One Big Practice; log behavioural impact."
  },
  {
    phase: "Impact & Transition",
    description: "Deliver the Impact Report and standards-aligned compliance documentation; shift to sustain."
  }
];

export default function HowItWorksSection() {
  const [showOrgView, setShowOrgView] = useState(false);
  const headerParallax = useParallax({ speed: -0.08 });

  return (
    <section id="how-it-works" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerParallax.ref} style={headerParallax.style} className="text-center mb-16">
          <Badge variant="outline" className="mb-6" data-testid="badge-how-it-works">
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8" style={{ letterSpacing: '-0.01em' }}>
            The Weekly Rhythm
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            A continuous loop that builds safer, steadier teams—one week at a time
          </p>
        </div>

        {/* Circular Loop Diagram */}
        <div className="mb-20">
          {/* Desktop: Circular Layout */}
          <div className="hidden lg:block relative mx-auto" style={{ width: '800px', height: '800px' }}>
            {/* Center text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <p className="text-2xl font-bold text-foreground mb-2">Weekly Loop</p>
              <p className="text-sm text-muted-foreground max-w-xs">Continuous improvement<br/>every Monday</p>
            </div>

            {/* Circular connecting line */}
            <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
              <circle
                cx="400"
                cy="400"
                r="280"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="text-purple-300 dark:text-purple-700"
                opacity="0.5"
              />
              {/* Animated circle to show flow */}
              <circle
                cx="400"
                cy="400"
                r="280"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="20 1740"
                className="text-purple-600 animate-spin-slow"
                opacity="0.8"
                style={{ animationDuration: '8s' }}
              />
            </svg>

            {/* Loop nodes positioned in a circle */}
            {loopSteps.map((step, index) => {
              const Icon = step.icon;
              const angle = (index * 72 - 90) * (Math.PI / 180); // 360/5 = 72 degrees per step, start at top
              const radius = 280;
              const x = 400 + radius * Math.cos(angle);
              const y = 400 + radius * Math.sin(angle);
              
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  data-testid={`loop-step-${index}`}
                >
                  <Card className={`p-6 w-48 hover-elevate bg-gradient-to-br ${
                    step.color === 'purple' 
                      ? 'from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/40 border-purple-300 dark:border-purple-700' 
                      : 'from-indigo-50 to-indigo-100 dark:from-indigo-950/40 dark:to-indigo-900/40 border-indigo-300 dark:border-indigo-700'
                  }`}>
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className={`w-12 h-12 rounded-full ${
                        step.color === 'purple' ? 'bg-purple-600' : 'bg-indigo-600'
                      } flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-foreground text-sm">{step.title}</h4>
                      <p className={`text-xs ${
                        step.color === 'purple' ? 'text-purple-600' : 'text-indigo-600'
                      } font-semibold`}>
                        {step.subtitle}
                      </p>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Mobile: Vertical Flow */}
          <div className="lg:hidden space-y-6">
            {loopSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} data-testid={`loop-step-mobile-${index}`}>
                  <Card className={`p-6 hover-elevate bg-gradient-to-br ${
                    step.color === 'purple' 
                      ? 'from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/40 border-purple-300 dark:border-purple-700' 
                      : 'from-indigo-50 to-indigo-100 dark:from-indigo-950/40 dark:to-indigo-900/40 border-indigo-300 dark:border-indigo-700'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full ${
                        step.color === 'purple' ? 'bg-purple-600' : 'bg-indigo-600'
                      } flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
                        <p className={`text-sm ${
                          step.color === 'purple' ? 'text-purple-600' : 'text-indigo-600'
                        } font-semibold mb-2`}>
                          {step.subtitle}
                        </p>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                  {index < loopSteps.length - 1 && (
                    <div className="flex justify-center py-3">
                      <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full" />
                    </div>
                  )}
                  {index === loopSteps.length - 1 && (
                    <div className="flex justify-center py-3">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-1 h-8 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full opacity-50" 
                             style={{ backgroundImage: 'repeating-linear-gradient(0deg, currentColor, currentColor 4px, transparent 4px, transparent 8px)' }} />
                        <p className="text-xs text-muted-foreground italic">Feeds next week's Brief</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 6-Week Install (Org View) */}
        <div className="text-center mb-12">
          <Button
            onClick={() => setShowOrgView(!showOrgView)}
            variant="outline"
            size="lg"
            className="group"
            data-testid="button-toggle-org-view"
          >
            {showOrgView ? (
              <>
                Hide 6-Week Install
                <ChevronUp className="ml-2 w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
              </>
            ) : (
              <>
                View 6-Week Install (Org View)
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-[2px] transition-transform" />
              </>
            )}
          </Button>
        </div>

        {showOrgView && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
                The 6-Week Install
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A structured onboarding that builds the foundations, installs the mindset, and launches the weekly loop
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {installPhases.map((phase, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover-elevate"
                  data-testid={`install-phase-${index}`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Badge variant="secondary" className="font-bold">
                      {index + 1}
                    </Badge>
                    <h4 className="text-xl font-bold text-foreground flex-1">{phase.phase}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
