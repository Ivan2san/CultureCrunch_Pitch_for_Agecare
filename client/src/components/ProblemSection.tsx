import { Card } from "@/components/ui/card";
import { ArrowRight, AlertTriangle, RotateCw } from "lucide-react";

export default function ProblemSection() {
  return (
    <section id="problem" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16" style={{ letterSpacing: '-0.01em' }}>
            The Problem: <span className="text-purple-600">Aged Care's Compliance & Workforce Crisis</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Aged care providers face a perfect storm: 1 in 5 facilities failing compliance audits, 27% staff turnover, and psychosocial hazards driving mass exodus
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic max-w-4xl mx-auto">
            All statistics from Australian aged care research, Safe Work Australia, and sector workforce surveys (2023-2025)
          </p>
        </div>

        {/* Main Content Grid - 4 Stylish Stat Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Box 1: Compliance Crisis */}
          <Card className="p-8 bg-card/40 backdrop-blur-sm flex flex-col items-center text-center hover-elevate transition-all">
            <div className="text-6xl md:text-7xl font-bold text-purple-600 mb-4" style={{ letterSpacing: '-0.02em' }}>1 in 5</div>
            <h4 className="font-bold text-xl text-foreground mb-2">Facilities Failing Compliance</h4>
            <p className="text-muted-foreground text-sm max-w-md">
              Only 82% of residential providers met all Quality Standards in 2023-24. Home care worse at 65%. 255 regulatory actions issued.
            </p>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50 w-full">
              Source: Aged Care Quality & Safety Commission Annual Report 2023-24
            </p>
          </Card>

          {/* Box 2: Burnout Crisis */}
          <Card className="p-8 bg-card/40 backdrop-blur-sm flex flex-col items-center text-center hover-elevate transition-all">
            <div className="text-6xl md:text-7xl font-bold text-indigo-600 mb-4" style={{ letterSpacing: '-0.02em' }}>65%</div>
            <h4 className="font-bold text-xl text-foreground mb-2">Nurses Experiencing Burnout</h4>
            <p className="text-muted-foreground text-sm max-w-md">
              65% of aged care nurses report moderate to severe emotional exhaustion, with 41% of all workers burnt out
            </p>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50 w-full">
              Source: Palliative Care Australia; Aged Care Worker Survey 2024
            </p>
          </Card>

          {/* Box 3: Psychosocial Drivers */}
          <Card className="p-8 bg-card/40 backdrop-blur-sm flex flex-col items-center text-center hover-elevate transition-all">
            <div className="text-6xl md:text-7xl font-bold text-purple-600 mb-4" style={{ letterSpacing: '-0.02em' }}>48%</div>
            <h4 className="font-bold text-xl text-foreground mb-2">Staff Feeling Burnt Out</h4>
            <p className="text-muted-foreground text-sm max-w-md">
              Top reasons for leaving: burnout (48%), lack of support (46%), stress (45%), frustration (42%)—all psychosocial factors
            </p>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50 w-full">
              Source: Aged Care Worker Survey 2024 (n=21,197)
            </p>
          </Card>

          {/* Box 4: Mental Health Claims Cost */}
          <Card className="p-8 bg-card/40 backdrop-blur-sm flex flex-col items-center text-center hover-elevate transition-all">
            <div className="text-6xl md:text-7xl font-bold text-indigo-600 mb-4" style={{ letterSpacing: '-0.02em' }}>$58.6K</div>
            <h4 className="font-bold text-xl text-foreground mb-2">Per Mental Health Claim</h4>
            <p className="text-muted-foreground text-sm max-w-md">
              Median payout for psychosocial injury claims—4x higher than physical injuries. Aged care accounts for 25%+ of all serious mental health claims.
            </p>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50 w-full">
              Source: Safe Work Australia 2020-21; Health & Social Care Sector Data
            </p>
          </Card>
        </div>

        {/* Vicious Cycle Section */}
        <div className="mt-16 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
              The Self-Reinforcing Crisis
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              High turnover creates a vicious cycle that traditional surveys detect too late to prevent
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card/40 backdrop-blur-sm">
            {/* Vicious Cycle Flow - Circular with clear loop indicator */}
            <div className="flex flex-col items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <RotateCw className="w-6 h-6 text-purple-600" />
                <p className="text-lg font-bold text-foreground">The Vicious Cycle</p>
              </div>

              {/* Circular flow diagram */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 items-center w-full max-w-5xl">
                <div className="relative">
                  <div className="bg-purple-50 border-2 border-purple-400 rounded-lg px-4 py-3 text-center shadow-sm">
                    <p className="font-bold text-purple-700">High Turnover</p>
                  </div>
                  <ArrowRight className="hidden md:block absolute -right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-purple-600" />
                </div>
                <ArrowRight className="md:hidden mx-auto w-6 h-6 text-purple-600 rotate-90" />
                
                <div className="relative">
                  <div className="bg-purple-50 border-2 border-purple-300 rounded-lg px-4 py-3 text-center shadow-sm">
                    <p className="font-bold text-purple-700">Understaffing</p>
                  </div>
                  <ArrowRight className="hidden md:block absolute -right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-purple-600" />
                </div>
                <ArrowRight className="md:hidden mx-auto w-6 h-6 text-purple-600 rotate-90" />
                
                <div className="relative">
                  <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg px-4 py-3 text-center shadow-sm">
                    <p className="font-bold text-indigo-700">Increased Workload</p>
                  </div>
                  <ArrowRight className="hidden md:block absolute -right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-indigo-600" />
                </div>
                <ArrowRight className="md:hidden mx-auto w-6 h-6 text-indigo-600 rotate-90" />
                
                <div className="relative">
                  <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg px-4 py-3 text-center shadow-sm">
                    <p className="font-bold text-indigo-700">More Stress</p>
                  </div>
                  <ArrowRight className="hidden md:block absolute -right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-purple-600" />
                </div>
                <ArrowRight className="md:hidden mx-auto w-6 h-6 text-purple-600 rotate-90" />
                
                <div className="bg-purple-50 border-2 border-purple-300 rounded-lg px-4 py-3 text-center shadow-sm">
                  <p className="font-bold text-purple-700">More Departures</p>
                </div>
              </div>

              {/* Clear cycle indicator */}
              <div className="flex items-center gap-3 bg-purple-100 dark:bg-purple-950/30 rounded-full px-6 py-3 border-2 border-purple-400">
                <RotateCw className="w-5 h-5 text-purple-600" />
                <p className="text-sm font-bold text-purple-700 dark:text-purple-300">
                  Cycle repeats: More Departures → Back to High Turnover
                </p>
                <RotateCw className="w-5 h-5 text-purple-600" />
              </div>
            </div>

            {/* Quote */}
            <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-purple-500">
              <p className="text-muted-foreground italic mb-2">
                "High turnover leads to understaffing, which directly increases the workload and stress on remaining staff, exacerbating psychosocial risks like fatigue, moral distress, and emotional labor."
              </p>
              <p className="text-sm text-muted-foreground">
                — The precarious resilience of aged care employees (2024)
              </p>
            </div>

            {/* Management Impact */}
            <div className="mt-6 bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-purple-700 mb-2">Leaders Are Affected Too</p>
                  <p className="text-muted-foreground text-sm">
                    "Psychosocial hazards are common for workers in the aged care sector, and this extends to management." The people trying to solve this crisis are drowning in it themselves.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    — Safe Work Australia, Psychosocial Hazards in Aged Care (2024)
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
