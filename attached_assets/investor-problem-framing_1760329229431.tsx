import React from 'react';
import { TrendingDown, AlertTriangle, DollarSign, Scale, Users, Brain } from 'lucide-react';

const InvestorProblemFraming = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            The Problem: <span className="text-red-600">A System-Level Failure</span>
          </h1>
          <p className="text-2xl text-gray-700">
            Organizations measure more than ever, yet engagement has fallen to a 10-year low
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - The Paradox */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center gap-3">
              <TrendingDown className="w-8 h-8" />
              The Measurement Paradox
            </h2>
            
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-xl text-red-900 mb-3">
                  More Surveys, Worse Outcomes
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>21% global engagement</strong> (2024) — down from 23% in 2023, representing $8.9 trillion in lost productivity annually
                      <p className="text-sm text-gray-600 mt-1">Source: Gallup State of Global Workplace 2025 (128,278+ employees, 160 countries)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>31% US engagement</strong> — lowest level in a decade, matching 2014 levels (8M fewer engaged employees since 2020 peak)
                      <p className="text-sm text-gray-600 mt-1">Source: Gallup US Employee Engagement Report 2024 (79,087 adults)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>27% manager engagement</strong> — down from 30%, with individual contributors flat at 18%
                      <p className="text-sm text-gray-600 mt-1">Source: Gallup 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-800 mb-3">
                  The Trust Collapse:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span><strong>65%</strong> of employees say their organization does NOT take meaningful action on survey results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span><strong>82%</strong> don't trust their manager to tell the truth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span><strong>Only 52%</strong> believe change will happen from surveys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Response rates drop to <strong>59%</strong> when surveying 4+ times annually (vs 77% for 1-2 surveys)</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-600 mt-3">Sources: Quantum Workplace 2023; People Insight 2024; Workforce Science Associates</p>
              </div>
            </div>
          </div>

          {/* Right Column - The Costs */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center gap-3">
              <DollarSign className="w-8 h-8" />
              The Cost: Australian Context
            </h2>
            
            <div className="space-y-4">
              <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
                <h3 className="font-bold text-lg text-orange-900 mb-2 flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Mental Health Crisis (2024 Data)
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>$290K</strong> — Average mental health claim cost (3× physical injuries)</p>
                  <p><strong>97.3%</strong> — Increase in mental health claims over 10 years (7,200 → 14,600 claims)</p>
                  <p><strong>34.2 weeks</strong> — Median time lost for mental health (vs 8.0 weeks for physical)</p>
                  <p><strong>$10.9-12.8B</strong> — Annual cost to Australian employers</p>
                  <p className="text-sm text-gray-600 mt-2">Source: Safe Work Australia Key WHS Statistics 2024; CEDA 2024</p>
                </div>
              </div>

              <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
                <h3 className="font-bold text-lg text-orange-900 mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Burnout Epidemic (2024)
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>38%</strong> of Australian workers experienced burnout (42% women vs 30% men)</p>
                  <p><strong>61%</strong> of Australian workers report burnout vs 48% globally</p>
                  <p><strong>47%</strong> experience daily stress (2nd highest globally)</p>
                  <p className="text-sm text-gray-600 mt-2">Sources: Infinite Potential 2024; BCG 2024 (11,000 workers, 8 countries); Gallup 2023</p>
                </div>
              </div>

              <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
                <h3 className="font-bold text-lg text-orange-900 mb-2 flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  Regulatory Pressure (Active 2024)
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>All states</strong> — Psychosocial hazard regulations active (except Victoria)</p>
                  <p><strong>$11.5M</strong> — Maximum Category 1 penalties for corporations</p>
                  <p><strong>25% increase</strong> — SafeWork NSW inspector visits for psych risks (2024-2026 strategy)</p>
                  <p><strong>Mandatory checks</strong> — 200+ employee workplaces targeted</p>
                  <p className="text-sm text-gray-600 mt-2">Sources: SafeWork NSW Psychological Health Strategy 2024-2026; Safe Work Australia 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Action Gap Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Current Solutions Are Failing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3">The Action Gap:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Only 58%</strong> of organizations take action to improve after receiving feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Only 39%</strong> evaluate and act on engagement results independently</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>44%</strong> see zero ROI from engagement investments</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>70%</strong> of engagement variance is explained by managers — yet only 26% of leaders create psychological safety</span>
                </li>
              </ul>
              <p className="text-xs mt-3 opacity-90">Sources: Harvard Business Review 2024; McKinsey 2021</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Why Training Fails:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>75%</strong> of organizations updated leadership development but see no results</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Only 44%</strong> of managers globally have received any training</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Only 10%</strong> of $200B spent yearly on US corporate training delivers real results</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Making the manager job more manageable is <strong>5× more effective</strong> than improving skills proficiency</span>
                </li>
              </ul>
              <p className="text-xs mt-3 opacity-90">Sources: Gartner 2024 (805 HR leaders); Skillademia 2023-2024</p>
            </div>
          </div>
        </div>

        {/* The Performance Gap */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The Quantified Opportunity: Performance Gap Between Engaged & Disengaged Teams
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-5 bg-green-50 rounded-lg border-2 border-green-200">
              <p className="text-4xl font-bold text-green-700 mb-2">21%</p>
              <p className="text-sm font-semibold text-gray-700">Higher Profitability</p>
            </div>
            <div className="text-center p-5 bg-green-50 rounded-lg border-2 border-green-200">
              <p className="text-4xl font-bold text-green-700 mb-2">23%</p>
              <p className="text-sm font-semibold text-gray-700">Higher Productivity</p>
            </div>
            <div className="text-center p-5 bg-green-50 rounded-lg border-2 border-green-200">
              <p className="text-4xl font-bold text-green-700 mb-2">59%</p>
              <p className="text-sm font-semibold text-gray-700">Lower Turnover</p>
            </div>
            <div className="text-center p-5 bg-green-50 rounded-lg border-2 border-green-200">
              <p className="text-4xl font-bold text-green-700 mb-2">70%</p>
              <p className="text-sm font-semibold text-gray-700">Fewer Safety Incidents</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Source: Gallup Q12 Meta-Analysis 2009 (955,905 employees, 152 organizations) & Gallup 2024 updates
          </p>
        </div>

        {/* Bottom Line */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">
            The Market Opportunity
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Organizations need not more surveys or training programs, but fundamentally different systems that enable managers to create psychological safety, take action on insights, and build trust through consistent follow-through.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-3xl font-bold mb-2">$8.9T</p>
                <p className="text-sm">Global productivity losses annually</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">$297-342B</p>
                <p className="text-sm">Australian mental health costs (annual)</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">44%</p>
                <p className="text-sm">Current interventions produce zero ROI</p>
              </div>
            </div>
            <p className="text-lg font-semibold">
              Solutions that actually work — that close the action gap, persist beyond training sessions, and create genuine psychological safety — represent massive economic value capture in a market desperate for better answers.
            </p>
          </div>
        </div>

        {/* Citation Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 italic">
            All statistics sourced from peer-reviewed research, government reports, and major industry studies published 2023-2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestorProblemFraming;