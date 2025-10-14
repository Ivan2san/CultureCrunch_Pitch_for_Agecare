import { Card } from "@/components/ui/card";

export default function ProblemSection() {
  return (
    <section id="problem" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
            The Problem: <span className="text-red-600 dark:text-red-400">The Accountability Failure Cascade</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Organisations measure engagement but fail to act—destroying trust and creating a $8.9 trillion productivity crisis
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic max-w-4xl mx-auto">
            All statistics sourced from peer-reviewed research, government reports, and major industry studies published 2023-2025
          </p>
        </div>

        {/* Main Content Grid - 4 Stylish Stat Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Box 1: Action Gap */}
          <Card className="p-8 bg-card/40 backdrop-blur-sm flex flex-col items-center text-center hover-elevate transition-all">
            <div className="text-6xl md:text-7xl font-bold text-red-600 dark:text-red-400 mb-4" style={{ letterSpacing: '-0.02em' }}>58%</div>
            <h4 className="font-bold text-xl text-foreground mb-2">Organisations Fail to Act</h4>
            <p className="text-muted-foreground text-sm max-w-md">
              Only 58% of organisations take action after receiving employee feedback
            </p>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50 w-full">
              Source: Harvard Business Review; Quantum Workplace 2023
            </p>
          </Card>

          {/* Box 2: Leader Impact */}
          <Card className="p-8 bg-card/40 backdrop-blur-sm flex flex-col items-center text-center hover-elevate transition-all">
            <div className="text-6xl md:text-7xl font-bold text-orange-600 dark:text-orange-400 mb-4" style={{ letterSpacing: '-0.02em' }}>70%</div>
            <h4 className="font-bold text-xl text-foreground mb-2">Leader Capability Gap</h4>
            <p className="text-muted-foreground text-sm max-w-md">
              70% of engagement variance explained by leaders, yet most lack training
            </p>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50 w-full">
              Source: Gallup 2024-2025
            </p>
          </Card>

          {/* Box 3: Trust Collapse */}
          <Card className="p-8 bg-card/40 backdrop-blur-sm flex flex-col items-center text-center hover-elevate transition-all">
            <div className="text-6xl md:text-7xl font-bold text-red-600 dark:text-red-400 mb-4" style={{ letterSpacing: '-0.02em' }}>82%</div>
            <h4 className="font-bold text-xl text-foreground mb-2">Trust Collapse</h4>
            <p className="text-muted-foreground text-sm max-w-md">
              82% of employees don't trust their leader to tell the truth
            </p>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50 w-full">
              Source: People Insight 2024
            </p>
          </Card>

          {/* Box 4: ROI Failure */}
          <Card className="p-8 bg-card/40 backdrop-blur-sm flex flex-col items-center text-center hover-elevate transition-all">
            <div className="text-6xl md:text-7xl font-bold text-orange-600 dark:text-orange-400 mb-4" style={{ letterSpacing: '-0.02em' }}>44%</div>
            <h4 className="font-bold text-xl text-foreground mb-2">Zero ROI</h4>
            <p className="text-muted-foreground text-sm max-w-md">
              44% see zero return from engagement investments
            </p>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50 w-full">
              Source: Harvard Business Review; Workbuzz 2023/24
            </p>
          </Card>
        </div>

        {/* Performance Gap */}
        <div className="bg-card rounded-xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            The Opportunity: Performance Gap Between Engaged & Disengaged Teams
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "21%", label: "Higher Profitability" },
              { value: "23%", label: "Higher Productivity" },
              { value: "59%", label: "Lower Turnover" },
              { value: "70%", label: "Fewer Safety Incidents" },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-200 dark:border-green-800">
                <div className="text-3xl font-bold text-green-700 dark:text-green-400 mb-1" style={{ letterSpacing: '-0.01em' }}>{item.value}</div>
                <div className="text-sm font-semibold text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Source: Gallup Q12 Meta-Analysis (955,905 employees, 152 organisations)
          </p>
        </div>
      </div>
    </section>
  );
}
