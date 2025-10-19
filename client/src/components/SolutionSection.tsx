import { useState } from "react";
import { MessageSquare, Repeat, TrendingUp, CheckCircle, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParallax } from "@/hooks/useParallax";

const benefitCards = [
  {
    icon: MessageSquare,
    title: "Clear Conversations & Accountability",
    description: "Conversations become clear and accountable; actions are small and finished."
  },
  {
    icon: Repeat,
    title: "Improved Team Rhythm",
    description: "Team rhythm improves as micro-practices remove friction and add recognition."
  },
  {
    icon: TrendingUp,
    title: "Dashboard Visibility",
    description: "A simple dashboard surfaces shifts in workload, trust and recognition."
  }
];

const weeklyTimeline = [
  {
    week: 1,
    title: "Baselines",
    description: "Triple Goal, leadership workshop, LGP360 launch, app setup, baseline pulse."
  },
  {
    week: 2,
    title: "Mindset Installation",
    description: "Install the mindset for safe, accountable dialogue; dashboard finalised; optional ONA."
  },
  {
    week: 3,
    title: "First Sprint",
    description: "First AI Brief 7 a.m. Monday; first Accountability Conversation; one micro-practice; tracking on."
  },
  {
    week: 4,
    title: "Momentum",
    description: "Momentum; LGP360 debrief; ongoing loop; live shifts visible."
  },
  {
    week: 5,
    title: "Team Review",
    description: "Team Review; confirm One Big Practice; behavioural impact logged."
  },
  {
    week: 6,
    title: "Impact & Transition",
    description: "Impact Report plus compliance pack aligned to WHS and Aged Care Quality Standards; transition to a 12-month sustain licence."
  }
];

export default function SolutionSection() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);
  const headerParallax = useParallax({ speed: -0.08 });
  const benefitsParallax = useParallax({ speed: 0.05 });
  
  const toggleWeek = (week: number) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };
  
  return (
    <section id="solution" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerParallax.ref} style={headerParallax.style} className="text-center mb-16">
          <Badge variant="outline" className="mb-6" data-testid="badge-solution">
            The Solution
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8" style={{ letterSpacing: '-0.01em' }}>
            What It Is
          </h2>
        </div>

        {/* Hero Value Statement */}
        <div className="mb-20">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-2 border-purple-200 dark:border-purple-800">
            <p className="text-2xl md:text-3xl font-semibold text-foreground text-center leading-relaxed" style={{ letterSpacing: '-0.01em' }} data-testid="text-hero-statement">
              A lightweight weekly system that helps aged-care leaders run safer, steadier teams by focusing on one meaningful shift per week. Each Monday, leaders receive a plain-English AI Brief, run a 20-minute Accountability Conversation, choose one micro-action, and watch evidence build through the week.
            </p>
          </Card>
        </div>

        {/* What Changes For You */}
        <div ref={benefitsParallax.ref} style={benefitsParallax.style} className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center" style={{ letterSpacing: '-0.01em' }}>
            What Changes for You
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefitCards.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 hover-elevate" data-testid={`card-benefit-${index}`}>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-950/40 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* What You Get in 6 Weeks - Accordion */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center" style={{ letterSpacing: '-0.01em' }}>
            What You Get in 6 Weeks
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-indigo-400 to-purple-600 -translate-x-1/2 rounded-full" />
            
            {/* Timeline items */}
            <div className="space-y-8">
              {weeklyTimeline.map((item, index) => {
                const isExpanded = expandedWeek === item.week;
                return (
                  <div 
                    key={index} 
                    className={`relative flex items-center gap-6 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    data-testid={`timeline-week-${item.week}`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <Card 
                        className={`inline-block w-full md:w-auto md:max-w-md cursor-pointer transition-all ${
                          isExpanded 
                            ? 'bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40 border-2 border-purple-400 dark:border-purple-600 shadow-lg' 
                            : 'hover-elevate'
                        }`}
                        onClick={() => toggleWeek(item.week)}
                        data-testid={`timeline-card-${item.week}`}
                      >
                        {/* Collapsed View - Week Badge and Title */}
                        <div className="p-6">
                          <div className={`flex items-center justify-between gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                              <Badge variant={isExpanded ? "default" : "secondary"} className="font-bold">
                                Week {item.week}
                              </Badge>
                              <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                            </div>
                            <ChevronDown 
                              className={`w-5 h-5 text-muted-foreground transition-transform ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                          
                          {/* Expanded View - Description */}
                          {isExpanded && (
                            <div className="mt-4 pt-4 border-t border-purple-200 dark:border-purple-800 animate-fade-in-up">
                              <p className="text-muted-foreground">{item.description}</p>
                            </div>
                          )}
                        </div>
                      </Card>
                    </div>
                    
                    {/* Center dot */}
                    <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full ${
                      isExpanded 
                        ? 'bg-gradient-to-br from-purple-600 to-indigo-600 scale-125' 
                        : 'bg-gradient-to-br from-purple-600 to-indigo-600'
                    } border-4 border-background items-center justify-center z-10 transition-transform`}>
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    
                    {/* Spacer */}
                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
