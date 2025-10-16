import { useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp, ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Screenshot paths from public folder
const Q1Image = "/product-flow/Q1_1760596819943.PNG";
const Q2Image = "/product-flow/Q2_1760596819943.PNG";
const Q3Image = "/product-flow/Q3_1760596819943.PNG";
const ThankYouImage = "/product-flow/Thank you_1760596827437.PNG";
const DashboardImage = "/product-flow/Dashboard_1760596835006.PNG";

export default function SolutionSection() {
  const [showResearch, setShowResearch] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const outcomes = [
    "Installs the foundations for psychosocial safety",
    "Builds readiness for high performance",
    "Fits real leadership life"
  ];

  return (
    <section id="solution" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16" style={{ letterSpacing: '-0.01em' }}>
            Solution: <span className="text-indigo-600">Installing the Next Generation of Psychosocial Leadership</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            A 6-week, AI-enabled sprint that equips leaders and teams with the mindset, skill set, and rhythm for safe, high-performance work.
          </p>
        </div>

        {/* 6-Week Sprint Description */}
        <div className="mb-12 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-8" style={{ letterSpacing: '-0.01em' }}>
            A 6-Week Sprint That:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-outcome-${index}`}>
                <div className="flex flex-col items-center text-center gap-4">
                  <CheckCircle className="w-12 h-12 text-indigo-600 flex-shrink-0" />
                  <p className="text-lg md:text-xl font-medium text-foreground" style={{ letterSpacing: '-0.005em' }}>
                    {outcome}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Leaders are Drowning Too */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border-2 border-purple-200">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4" style={{ letterSpacing: '-0.01em' }}>
              Built for Leaders Drowning in the Same Storm
            </h3>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowResearch(!showResearch)}
              className="mb-4"
              data-testid="button-toggle-research"
            >
              {showResearch ? (
                <>
                  Hide Research <ChevronUp className="ml-2 w-4 h-4" />
                </>
              ) : (
                <>
                  Show Research <ChevronDown className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>

            {showResearch && (
              <div className="animate-fade-in-up">
                <p className="text-lg text-muted-foreground mb-6">
                  Research shows: "Psychosocial hazards do not just affect frontline workers; they extend to management and administration staff." 
                  Burnt-out leaders don't have hours for workshops or complex dashboards.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="bg-white/70 rounded-lg p-5 border border-purple-200">
                    <p className="font-bold text-purple-700 mb-2">15-Minute Monday Ritual</p>
                    <p className="text-sm text-muted-foreground">
                      Brief delivered at 8am Monday. One micro-action. No login required. No analytics to interpret. Leaders under stress can't absorb complexity.
                    </p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-5 border border-indigo-200">
                    <p className="font-bold text-indigo-700 mb-2">AI Does the Heavy Lifting</p>
                    <p className="text-sm text-muted-foreground">
                      AI analyzes pulse trends, identifies risks, and recommends one simple action. Leaders execute, don't analyze. Built for leaders who are themselves experiencing psychosocial hazards.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* See It In Action Section */}
        <div className="mt-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.01em' }}>
              See It In Action: <span className="text-indigo-600">From Pulse to Insight</span>
            </h3>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Experience the complete weekly rhythm—3 questions on Friday, AI-powered insights by Monday
            </p>
          </div>

          {/* Weekly Rhythm Timeline - Always Visible */}
          <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 bg-purple-50 dark:bg-purple-950/20 px-6 py-4 rounded-lg border-2 border-purple-300">
              <Calendar className="w-8 h-8 text-purple-600" />
              <div>
                <p className="font-bold text-purple-700 dark:text-purple-400">Friday 3:00 PM</p>
                <p className="text-sm text-muted-foreground">Weekly Pulse Survey</p>
              </div>
            </div>
            
            <ArrowRight className="w-8 h-8 text-indigo-600 transform rotate-90 md:rotate-0" />
            
            <div className="flex items-center gap-3 bg-indigo-50 dark:bg-indigo-950/20 px-6 py-4 rounded-lg border-2 border-indigo-300">
              <Sparkles className="w-8 h-8 text-indigo-600" />
              <div>
                <p className="font-bold text-indigo-700 dark:text-indigo-400">Monday 6:00 AM</p>
                <p className="text-sm text-muted-foreground">AI Brief + Actions</p>
              </div>
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <div className="text-center mb-16">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              size="lg"
              className="group"
              data-testid="button-toggle-product-flow"
            >
              {isExpanded ? (
                <>
                  Hide Complete Flow
                  <ChevronUp className="ml-2 w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
                </>
              ) : (
                <>
                  Explore the Complete Flow
                  <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-[2px] transition-transform" />
                </>
              )}
            </Button>
          </div>

          {/* Expandable Content */}
          {isExpanded && (
            <div className="animate-fade-in-up">
              {/* Step 1: Pulse Survey (3 Questions) */}
              <div className="mb-16">
                <div className="text-center mb-8">
                  <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full font-bold mb-4">
                    Step 1: Friday Pulse
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
                    3 Quick Questions, 2 Minutes
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Team members answer simple 1-5 scale questions on their phone—no login required
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="p-4 hover-elevate">
                    <div className="mb-3">
                      <span className="bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                        Question 1 of 3
                      </span>
                    </div>
                    <img 
                      src={Q1Image} 
                      alt="Question 1: How satisfied are you with team collaboration this week?" 
                      className="rounded-lg w-full border border-border"
                      data-testid="img-pulse-q1"
                    />
                    <p className="text-sm text-muted-foreground mt-3 text-center">
                      Team Collaboration
                    </p>
                  </Card>

                  <Card className="p-4 hover-elevate">
                    <div className="mb-3">
                      <span className="bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                        Question 2 of 3
                      </span>
                    </div>
                    <img 
                      src={Q2Image} 
                      alt="Question 2: How well is the team managing workload and stress?" 
                      className="rounded-lg w-full border border-border"
                      data-testid="img-pulse-q2"
                    />
                    <p className="text-sm text-muted-foreground mt-3 text-center">
                      Workload & Stress
                    </p>
                  </Card>

                  <Card className="p-4 hover-elevate">
                    <div className="mb-3">
                      <span className="bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                        Question 3 of 3
                      </span>
                    </div>
                    <img 
                      src={Q3Image} 
                      alt="Question 3: How would you rate overall team morale?" 
                      className="rounded-lg w-full border border-border"
                      data-testid="img-pulse-q3"
                    />
                    <p className="text-sm text-muted-foreground mt-3 text-center">
                      Team Morale
                    </p>
                  </Card>
                </div>

                {/* Confirmation */}
                <div className="max-w-md mx-auto">
                  <Card className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-2 border-purple-300">
                    <img 
                      src={ThankYouImage} 
                      alt="Thank you - Your pulse response has been recorded" 
                      className="rounded-lg w-full border border-border mb-4"
                      data-testid="img-pulse-thankyou"
                    />
                    <div className="text-center">
                      <p className="text-sm font-semibold text-foreground mb-2">
                        ✓ Response Recorded
                      </p>
                      <p className="text-xs text-muted-foreground">
                        AI analyzes responses over the weekend, delivering Monday morning insights
                      </p>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Flow Arrow */}
              <div className="flex items-center justify-center mb-16">
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    AI Processing Over Weekend
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-12 h-12 text-indigo-600 transform rotate-90" />
                </div>
              </div>

              {/* Step 2: Monday Dashboard */}
              <div className="mb-16">
                <div className="text-center mb-8">
                  <div className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full font-bold mb-4">
                    Step 2: Monday Morning Brief
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
                    AI-Powered Leader Dashboard
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Care managers receive actionable insights, recommended micro-actions, and trend visibility—all in under 5 minutes
                  </p>
                </div>

                <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-2 border-indigo-300">
                  <img 
                    src={DashboardImage} 
                    alt="Manager Dashboard showing Week 42 progress, AI-generated brief, recommended micro-actions, and 6-week pulse trends" 
                    className="rounded-lg w-full border-2 border-border shadow-lg"
                    data-testid="img-leader-dashboard"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white/70 dark:bg-black/30 rounded-lg p-4 border border-indigo-200">
                      <p className="font-bold text-indigo-700 dark:text-indigo-400 mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        AI-Generated Brief
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Analyzes pulse trends, identifies risks, and highlights what's working
                      </p>
                    </div>
                    
                    <div className="bg-white/70 dark:bg-black/30 rounded-lg p-4 border border-purple-200">
                      <p className="font-bold text-purple-700 dark:text-purple-400 mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Micro-Actions
                      </p>
                      <p className="text-sm text-muted-foreground">
                        15-minute actions proven to drive engagement and safety
                      </p>
                    </div>
                    
                    <div className="bg-white/70 dark:bg-black/30 rounded-lg p-4 border border-indigo-200">
                      <p className="font-bold text-indigo-700 dark:text-indigo-400 mb-2 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        6-Week Trends
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Track collaboration, workload, and morale over time
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Key Outcomes - Always Visible */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ letterSpacing: '-0.01em' }}>
              The Result: Proactive Leadership, Every Week
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="text-4xl font-bold mb-2">2 min</p>
                <p className="text-sm opacity-90">Team member time investment</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="text-4xl font-bold mb-2">5 min</p>
                <p className="text-sm opacity-90">Leader time to act on insights</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="text-4xl font-bold mb-2">Weekly</p>
                <p className="text-sm opacity-90">Rhythm that builds habits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
