import { Card } from "@/components/ui/card";

export default function ProblemSection() {
  return (
    <section id="problem" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
            The Problem: <span className="text-red-600 dark:text-red-400">Aged Care's Compliance & Workforce Crisis</span>
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
            <div className="text-6xl md:text-7xl font-bold text-red-600 dark:text-red-400 mb-4" style={{ letterSpacing: '-0.02em' }}>1 in 5</div>
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
            <div className="text-6xl md:text-7xl font-bold text-orange-600 dark:text-orange-400 mb-4" style={{ letterSpacing: '-0.02em' }}>65%</div>
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
            <div className="text-6xl md:text-7xl font-bold text-red-600 dark:text-red-400 mb-4" style={{ letterSpacing: '-0.02em' }}>48%</div>
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
            <div className="text-6xl md:text-7xl font-bold text-orange-600 dark:text-orange-400 mb-4" style={{ letterSpacing: '-0.02em' }}>$58.6K</div>
            <h4 className="font-bold text-xl text-foreground mb-2">Per Mental Health Claim</h4>
            <p className="text-muted-foreground text-sm max-w-md">
              Median payout for psychosocial injury claims—4x higher than physical injuries. Aged care accounts for 25%+ of all serious mental health claims.
            </p>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50 w-full">
              Source: Safe Work Australia 2020-21; Health & Social Care Sector Data
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
