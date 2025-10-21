import { useState } from "react";
import { MessageSquare, Repeat, TrendingUp, CheckCircle, ChevronDown, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParallax } from "@/hooks/useParallax";
import SectionFeedbackButton from "@/components/SectionFeedbackButton";

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
    description: "Baselines (Triple Goal survey, pulse) and priorities agreed with the leadership team"
  },
  {
    week: 2,
    title: "Mindset Installation",
    description: "Install the mindset for safe, accountable dialogue; dashboard finalised; optional Organisational Network Analysis."
  },
  {
    week: 3,
    title: "Skillset Installation + First Sprint",
    description: "First Weekly Brief 7 a.m. Monday; first Team Check-In; one micro-practice; tracking on."
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
    <section id="solution" className="min-h-screen bg-corporate-gradient px-4 md:px-6 py-20 md:py-32 relative overflow-hidden">
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-20 right-10 w-[800px] h-[800px] bg-gradient-radial from-purple-400/35 via-indigo-400/22 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-[700px] h-[700px] bg-gradient-radial from-pink-400/30 via-purple-400/18 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/3 w-[650px] h-[650px] bg-gradient-radial from-indigo-400/25 via-transparent to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerParallax.ref} style={headerParallax.style} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12" style={{ letterSpacing: '-0.01em' }} data-testid="heading-solution">
            THE SOLUTION
          </h2>
          
          {/* Mission Marquee Card */}
          <Card className="max-w-4xl mx-auto mb-12 bg-gradient-to-br from-purple-50/80 to-indigo-50/80 dark:from-purple-950/40 dark:to-indigo-950/40 border-purple-200 dark:border-purple-800" data-testid="card-mission-marquee">
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-3">
                <Sparkles className="w-7 h-7 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" />
                <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight text-center" style={{ letterSpacing: '-0.01em' }} data-testid="text-mission">
                  We are on a mission to help operational aged care leaders run safer, more engaged teams.
                </p>
                <Sparkles className="w-7 h-7 md:w-7 md:h-7 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </Card>
          
          {/* Program Description - Bullet Format */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-semibold text-foreground mb-4">
              6-Week Psychosocial Leadership Installation Program
            </p>
            <ul className="text-left text-base md:text-lg text-muted-foreground space-y-2 list-none" data-testid="list-program-features">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                <span>Designed for 100-200 staff residential aged care facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                <span>Turns compliance into weekly leadership practice</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                <span>Builds accountable, high performance culture</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What Changes For You */}
        <div ref={benefitsParallax.ref} style={benefitsParallax.style} className="mb-20">
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
        <SectionFeedbackButton />
      </div>
    </section>
  );
}
