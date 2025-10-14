import { TrendingDown, AlertTriangle, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ProblemSection() {
  const stats = [
    { value: "58%", label: "Action Gap", sublabel: "Only 58% act on feedback", color: "red" },
    { value: "82%", label: "Trust Collapse", sublabel: "Don't trust leaders", color: "red" },
    { value: "44%", label: "Zero ROI", sublabel: "From engagement efforts", color: "red" },
    { value: "$8.9T", label: "Lost Productivity", sublabel: "Annually worldwide", color: "red" },
  ];

  return (
    <section id="problem" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
            The Problem: <span className="text-red-600">The Accountability Failure Cascade</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Organisations measure engagement but fail to act—destroying trust and creating a $8.9 trillion productivity crisis
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic max-w-4xl mx-auto">
            All statistics sourced from peer-reviewed research, government reports, and major industry studies published 2023-2025
          </p>
        </div>

        {/* Global Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center bg-card border-2 border-red-200 hover:shadow-xl transition-all hover:-translate-y-1"
              data-testid={`stat-card-${index}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-red-700 mb-2" style={{ letterSpacing: '-0.01em' }}>{stat.value}</div>
              <div className="text-sm font-semibold text-foreground" style={{ letterSpacing: '-0.005em' }}>{stat.label}</div>
              <div className="text-xs text-muted-foreground mt-1" style={{ letterSpacing: '-0.005em' }}>{stat.sublabel}</div>
            </Card>
          ))}
        </div>

        {/* Section Headings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center gap-3">
            <TrendingDown className="w-8 h-8 text-red-600" />
            <h3 className="text-2xl font-bold text-red-600">The Action Gap & Trust Collapse</h3>
          </div>
          <div className="flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-orange-600" />
            <h3 className="text-2xl font-bold text-orange-600">The Capability & ROI Crisis</h3>
          </div>
        </div>

        {/* Main Content Grid - 4 Symmetrical Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 lg:grid-rows-2">
          {/* Box 1: Organisations Fail to Act */}
          <Card className="p-6 bg-card flex flex-col h-full">
            <h4 className="font-bold text-lg text-red-900 mb-3">Organisations Fail to Act on Feedback</h4>
            <ul className="space-y-2 text-muted-foreground text-sm flex-1">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Only <strong>58%</strong> of organisations take action to improve after receiving employee feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span><strong>65%</strong> of employees say their organisation does NOT take meaningful action on survey results</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span><strong>45%</strong> say their feedback leads to no noticeable changes or improvements</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t">Sources: Harvard Business Review; Quantum Workplace 2023</p>
          </Card>

          {/* Box 2: Leader Capability Gap */}
          <Card className="p-6 bg-card flex flex-col h-full">
            <h4 className="font-bold text-lg text-orange-900 mb-3">Leader Capability Gap</h4>
            <div className="space-y-2 text-muted-foreground text-sm flex-1">
              <p><strong>70%</strong> of engagement variance explained by leaders, yet leader engagement fell from 30% to 27%</p>
              <p><strong>Only 26%</strong> of leaders display behaviours that instill psychological safety</p>
              <p><strong>Only 50%</strong> of workers say leaders create psychological safety</p>
              <p><strong>Only 44%</strong> of leaders globally have received any training</p>
            </div>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t">Sources: Gallup 2024-2025; McKinsey 2021; Deloitte 2024</p>
          </Card>

          {/* Box 3: When Action Fails, Trust Collapses */}
          <Card className="p-6 bg-card flex flex-col h-full">
            <h4 className="font-bold text-lg text-red-900 mb-3">When Action Fails, Trust Collapses</h4>
            <ul className="space-y-2 text-muted-foreground text-sm flex-1">
              <li>• <strong>82%</strong> of employees don't trust their leader to tell the truth</li>
              <li>• <strong>Only 52%</strong> believe change will happen as a result of surveys</li>
              <li>• <strong>Only 33%</strong> strongly trust their organisation's leadership</li>
              <li>• Trust drops <strong>40%</strong> when no action follows feedback</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t">Sources: People Insight 2024; Gallup 2024; Harvard Business Review 2024</p>
          </Card>

          {/* Box 4: The ROI Failure */}
          <Card className="p-6 bg-card flex flex-col h-full">
            <h4 className="font-bold text-lg text-orange-900 mb-3">The ROI Failure</h4>
            <div className="space-y-2 text-muted-foreground text-sm flex-1">
              <p><strong>Only 56%</strong> achieve positive ROI from engagement investments (44% see zero return)</p>
              <p><strong>89%</strong> report retention getting more difficult despite engagement efforts</p>
              <p><strong>75%</strong> updated leadership programs but see no results</p>
              <p><strong>Only 10%</strong> of $200B in training delivers real results</p>
            </div>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t">Sources: Harvard Business Review; Workbuzz 2023/24; Gartner 2024</p>
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
              <div key={index} className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <div className="text-3xl font-bold text-green-700 mb-1" style={{ letterSpacing: '-0.01em' }}>{item.value}</div>
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
