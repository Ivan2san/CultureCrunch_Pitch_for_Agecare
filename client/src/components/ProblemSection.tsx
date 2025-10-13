import { TrendingDown, AlertTriangle, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ProblemSection() {
  const stats = [
    { value: "21%", label: "Global Engagement", sublabel: "Down from 23% in 2023", color: "red" },
    { value: "$8.9T", label: "Lost Productivity", sublabel: "Annually worldwide", color: "red" },
    { value: "65%", label: "No Action Taken", sublabel: "On survey results", color: "red" },
    { value: "82%", label: "Distrust Managers", sublabel: "Don't trust manager honesty", color: "red" },
  ];

  const australianStats = [
    { value: "$290K", label: "Mental Health Claim", sublabel: "Average cost per claim", color: "orange" },
    { value: "97%", label: "Claims Increase", sublabel: "Over 10 years", color: "orange" },
    { value: "61%", label: "Burnout Rate", sublabel: "Australian workers", color: "orange" },
    { value: "$11.5M", label: "Max Penalty", sublabel: "Category 1 offenses", color: "orange" },
  ];

  return (
    <section id="problem" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Problem: <span className="text-red-600">A System-Level Failure</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            Organisations measure more than ever, yet engagement has fallen to a 10-year low
          </p>
        </div>

        {/* Global Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center bg-white border-2 border-red-200 hover:shadow-xl transition-all hover:-translate-y-1"
              data-testid={`stat-card-${index}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-red-700 mb-2 font-mono">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-900">{stat.label}</div>
              <div className="text-xs text-gray-600 mt-1">{stat.sublabel}</div>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* The Measurement Paradox */}
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <TrendingDown className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-red-600">The Measurement Paradox</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-lg text-red-900 mb-2">More Surveys, Worse Outcomes</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Engagement dropped to <strong>21%</strong> globally (2024), representing $8.9T in lost productivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>31% US engagement</strong>: lowest in a decade (8M fewer engaged employees since 2020)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Response rates drop to <strong>59%</strong> when surveying 4+ times annually</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-600 mt-3">Source: Gallup 2024</p>
              </div>

              <div className="border-2 border-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Why Current Solutions Fail:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Only <strong>58%</strong> of organisations take action after surveys</li>
                  <li>• <strong>44%</strong> see zero ROI from engagement investments</li>
                  <li>• <strong>70%</strong> of engagement variance is from managers, yet only 26% create psychological safety</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Australian Context */}
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-orange-600">The Cost: Australian Context</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-bold text-lg text-orange-900 mb-2">Mental Health Crisis</h4>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><strong>$290K</strong> average mental health claim (3× physical injuries)</p>
                  <p><strong>97.3%</strong> increase in claims over 10 years</p>
                  <p><strong>34.2 weeks</strong> median time lost (vs 8.0 for physical)</p>
                  <p><strong>$10.9-12.8B</strong> annual cost to employers</p>
                </div>
                <p className="text-xs text-gray-600 mt-3">Source: Safe Work Australia Key WHS Statistics 2024; CEDA 2024</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-bold text-lg text-orange-900 mb-2">Regulatory Pressure</h4>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>Psychosocial hazard regulations <strong>active in all states</strong></p>
                  <p><strong>$11.5M</strong> maximum penalties for Category 1 offenses</p>
                  <p><strong>25% increase</strong> in SafeWork NSW inspections (2024-2026)</p>
                  <p><strong>200+ employee workplaces</strong> targeted for mandatory checks</p>
                </div>
                <p className="text-xs text-gray-600 mt-3">Sources: SafeWork NSW Psychological Health Strategy 2024-2026; Safe Work Australia 2024</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Performance Gap */}
        <div className="bg-white rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
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
                <div className="text-3xl font-bold text-green-700 mb-1">{item.value}</div>
                <div className="text-sm font-semibold text-gray-700">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Source: Gallup Q12 Meta-Analysis (955,905 employees, 152 organisations)
          </p>
        </div>
      </div>
    </section>
  );
}
