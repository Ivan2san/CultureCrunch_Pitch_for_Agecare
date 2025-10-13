import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, AlertTriangle, CheckCircle, Calculator } from 'lucide-react';

const ROICalculator = () => {
  const [employeeCount, setEmployeeCount] = useState(250);
  const [managerCount, setManagerCount] = useState(25);
  const [currentMentalHealthClaims, setCurrentMentalHealthClaims] = useState(2);
  const [avgTurnoverRate, setAvgTurnoverRate] = useState(15);
  const [avgSalary, setAvgSalary] = useState(80000);
  const [currentEngagementScore, setCurrentEngagementScore] = useState(45);
  
  // Constants based on research
  const MENTAL_HEALTH_CLAIM_COST = 290000;
  const TURNOVER_COST_MULTIPLIER = 1.5; // 150% of salary
  const MANAGER_TIME_CRISIS_HOURS_WEEKLY = 5;
  const MANAGER_HOURLY_RATE = 75;
  const PRODUCTIVITY_LOSS_DISENGAGED = 0.18; // 18% productivity gap
  const ABSENTEEISM_COST_PER_EMPLOYEE = 3500;
  
  // CultureCrunch pricing
  const PILOT_COST = 25000;
  const PILOT_DURATION_WEEKS = 12;
  const SUBSCRIPTION_COST_PER_EMPLOYEE_MONTHLY = 10;
  const FOUNDING_PARTNER_DISCOUNT = 0.30;
  
  // Expected improvements (conservative estimates)
  const EXPECTED_CLAIM_REDUCTION = 0.40; // 40% reduction
  const EXPECTED_TURNOVER_REDUCTION = 0.25; // 25% reduction
  const EXPECTED_ENGAGEMENT_IMPROVEMENT = 0.30; // 30% improvement
  const EXPECTED_MANAGER_TIME_SAVED = 0.60; // 60% time saved on crisis
  const EXPECTED_ABSENTEEISM_REDUCTION = 0.20; // 20% reduction
  
  // Calculations - Current State Costs (Annual)
  const annualMentalHealthClaimsCost = currentMentalHealthClaims * MENTAL_HEALTH_CLAIM_COST;
  
  const turnoverCount = Math.round((employeeCount * avgTurnoverRate) / 100);
  const annualTurnoverCost = turnoverCount * avgSalary * TURNOVER_COST_MULTIPLIER;
  
  const annualManagerCrisisCost = managerCount * MANAGER_TIME_CRISIS_HOURS_WEEKLY * 52 * MANAGER_HOURLY_RATE;
  
  const disengagedEmployees = Math.round(employeeCount * (1 - currentEngagementScore / 100));
  const annualProductivityLoss = disengagedEmployees * avgSalary * PRODUCTIVITY_LOSS_DISENGAGED;
  
  const annualAbsenteeismCost = employeeCount * ABSENTEEISM_COST_PER_EMPLOYEE;
  
  const totalAnnualCost = annualMentalHealthClaimsCost + annualTurnoverCost + 
                          annualManagerCrisisCost + annualProductivityLoss + 
                          annualAbsenteeismCost;
  
  // Calculations - After CultureCrunch (Annual Savings)
  const claimsSavings = annualMentalHealthClaimsCost * EXPECTED_CLAIM_REDUCTION;
  const turnoverSavings = annualTurnoverCost * EXPECTED_TURNOVER_REDUCTION;
  const managerTimeSavings = annualManagerCrisisCost * EXPECTED_MANAGER_TIME_SAVED;
  const productivityGains = annualProductivityLoss * EXPECTED_ENGAGEMENT_IMPROVEMENT;
  const absenteeismSavings = annualAbsenteeismCost * EXPECTED_ABSENTEEISM_REDUCTION;
  
  const totalAnnualSavings = claimsSavings + turnoverSavings + managerTimeSavings + 
                             productivityGains + absenteeismSavings;
  
  // CultureCrunch Investment
  const annualSubscriptionCost = employeeCount * SUBSCRIPTION_COST_PER_EMPLOYEE_MONTHLY * 12 * (1 - FOUNDING_PARTNER_DISCOUNT);
  const netAnnualROI = totalAnnualSavings - annualSubscriptionCost;
  const roiMultiple = (totalAnnualSavings / annualSubscriptionCost).toFixed(1);
  const paybackMonths = (annualSubscriptionCost / (totalAnnualSavings / 12)).toFixed(1);
  
  // Pilot ROI (12 weeks)
  const pilotPeriodSavings = (totalAnnualSavings / 52) * PILOT_DURATION_WEEKS;
  const pilotROI = pilotPeriodSavings - PILOT_COST;
  const pilotROIPercentage = ((pilotROI / PILOT_COST) * 100).toFixed(0);
  
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-12 h-12 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              CultureCrunch ROI Calculator
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Calculate the financial impact of reducing psychosocial risk in your organization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Inputs */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-600" />
                Your Organization
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Employees
                  </label>
                  <input
                    type="number"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    min="50"
                    max="10000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Managers
                  </label>
                  <input
                    type="number"
                    value={managerCount}
                    onChange={(e) => setManagerCount(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    min="5"
                    max="500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mental Health Claims (Annual)
                  </label>
                  <input
                    type="number"
                    value={currentMentalHealthClaims}
                    onChange={(e) => setCurrentMentalHealthClaims(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    min="0"
                    max="50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Turnover Rate (%)
                  </label>
                  <input
                    type="number"
                    value={avgTurnoverRate}
                    onChange={(e) => setAvgTurnoverRate(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    min="0"
                    max="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Employee Salary (AUD)
                  </label>
                  <input
                    type="number"
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    min="40000"
                    max="200000"
                    step="5000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Engagement Score (%)
                  </label>
                  <input
                    type="number"
                    value={currentEngagementScore}
                    onChange={(e) => setCurrentEngagementScore(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    min="0"
                    max="100"
                  />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 italic">
                  All calculations based on Australian research data and conservative improvement estimates.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current State Costs */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Current Annual Costs
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-gray-600 mb-1">Mental Health Claims</p>
                  <p className="text-2xl font-bold text-red-700">{formatCurrency(annualMentalHealthClaimsCost)}</p>
                  <p className="text-xs text-gray-500 mt-1">{currentMentalHealthClaims} claims × $290K each</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-gray-600 mb-1">Turnover Costs</p>
                  <p className="text-2xl font-bold text-red-700">{formatCurrency(annualTurnoverCost)}</p>
                  <p className="text-xs text-gray-500 mt-1">{turnoverCount} employees × 150% salary</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-gray-600 mb-1">Manager Crisis Time</p>
                  <p className="text-2xl font-bold text-red-700">{formatCurrency(annualManagerCrisisCost)}</p>
                  <p className="text-xs text-gray-500 mt-1">5 hrs/week × {managerCount} managers</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-gray-600 mb-1">Productivity Loss</p>
                  <p className="text-2xl font-bold text-red-700">{formatCurrency(annualProductivityLoss)}</p>
                  <p className="text-xs text-gray-500 mt-1">{disengagedEmployees} disengaged × 18% loss</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-gray-600 mb-1">Absenteeism</p>
                  <p className="text-2xl font-bold text-red-700">{formatCurrency(annualAbsenteeismCost)}</p>
                  <p className="text-xs text-gray-500 mt-1">$3,500 per employee</p>
                </div>

                <div className="bg-red-600 p-4 rounded-lg text-white">
                  <p className="text-sm mb-1">TOTAL ANNUAL COST</p>
                  <p className="text-3xl font-bold">{formatCurrency(totalAnnualCost)}</p>
                  <p className="text-xs mt-1 opacity-90">Status quo impact</p>
                </div>
              </div>
            </div>

            {/* Expected Savings */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Expected Annual Savings with CultureCrunch
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Claims Reduction (40%)</p>
                  <p className="text-2xl font-bold text-green-700">{formatCurrency(claimsSavings)}</p>
                  <p className="text-xs text-gray-500 mt-1">Early identification prevents claims</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Turnover Reduction (25%)</p>
                  <p className="text-2xl font-bold text-green-700">{formatCurrency(turnoverSavings)}</p>
                  <p className="text-xs text-gray-500 mt-1">Better manager support = retention</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Manager Time Saved (60%)</p>
                  <p className="text-2xl font-bold text-green-700">{formatCurrency(managerTimeSavings)}</p>
                  <p className="text-xs text-gray-500 mt-1">Prevention vs. crisis management</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Productivity Gains (30%)</p>
                  <p className="text-2xl font-bold text-green-700">{formatCurrency(productivityGains)}</p>
                  <p className="text-xs text-gray-500 mt-1">Engagement improvement</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Absenteeism Reduction (20%)</p>
                  <p className="text-2xl font-bold text-green-700">{formatCurrency(absenteeismSavings)}</p>
                  <p className="text-xs text-gray-500 mt-1">Proactive wellbeing support</p>
                </div>

                <div className="bg-green-600 p-4 rounded-lg text-white">
                  <p className="text-sm mb-1">TOTAL ANNUAL SAVINGS</p>
                  <p className="text-3xl font-bold">{formatCurrency(totalAnnualSavings)}</p>
                  <p className="text-xs mt-1 opacity-90">Conservative estimate</p>
                </div>
              </div>
            </div>

            {/* Pilot ROI */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <DollarSign className="w-8 h-8" />
                12-Week Pilot ROI
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90 mb-1">Pilot Investment</p>
                  <p className="text-2xl font-bold">{formatCurrency(PILOT_COST)}</p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90 mb-1">Expected 12-Week Savings</p>
                  <p className="text-2xl font-bold">{formatCurrency(pilotPeriodSavings)}</p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90 mb-1">Net Pilot ROI</p>
                  <p className="text-2xl font-bold">{formatCurrency(pilotROI)}</p>
                  <p className="text-xs opacity-90 mt-1">{pilotROIPercentage}% return</p>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-lg font-semibold mb-2">💡 Pilot Insight:</p>
                <p className="text-sm opacity-95">
                  {pilotROI > 0 
                    ? `Even during the 12-week pilot, you're projected to see ${formatCurrency(pilotROI)} in net positive ROI—meaning the pilot pays for itself while validating the approach.`
                    : `The pilot is an investment in validation. While it may not fully pay for itself in 12 weeks, the annual savings of ${formatCurrency(totalAnnualSavings)} make the business case clear.`
                  }
                </p>
              </div>
            </div>

            {/* Full Subscription ROI */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                Annual Subscription ROI (After Pilot)
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Annual Savings</span>
                  <span className="text-2xl font-bold text-green-600">{formatCurrency(totalAnnualSavings)}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="text-gray-700 font-medium">CultureCrunch Subscription</span>
                    <p className="text-xs text-gray-500 mt-1">
                      {employeeCount} employees × ${SUBSCRIPTION_COST_PER_EMPLOYEE_MONTHLY}/month × 30% Founding Partner discount
                    </p>
                  </div>
                  <span className="text-xl font-bold text-gray-700">-{formatCurrency(annualSubscriptionCost)}</span>
                </div>

                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                  <div>
                    <span className="text-lg font-medium">Net Annual ROI</span>
                    <p className="text-sm opacity-90 mt-1">{roiMultiple}× return on investment</p>
                  </div>
                  <span className="text-3xl font-bold">{formatCurrency(netAnnualROI)}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                    <p className="text-sm text-gray-600 mb-1">ROI Multiple</p>
                    <p className="text-3xl font-bold text-blue-700">{roiMultiple}×</p>
                    <p className="text-xs text-gray-500 mt-1">Every $1 invested returns ${roiMultiple}</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
                    <p className="text-sm text-gray-600 mb-1">Payback Period</p>
                    <p className="text-3xl font-bold text-purple-700">{paybackMonths}</p>
                    <p className="text-xs text-gray-500 mt-1">Months to full ROI</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Assumptions */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-yellow-900 mb-3">📊 Methodology & Assumptions</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Conservative Estimates:</strong> All improvement percentages are based on lower-bound research findings</p>
                <p><strong>Mental Health Claims:</strong> $290K average per claim (Safe Work Australia 2024)</p>
                <p><strong>Turnover Cost:</strong> 150% of annual salary (recruitment, onboarding, lost productivity)</p>
                <p><strong>Manager Crisis Time:</strong> 5 hours/week average (Gallup research)</p>
                <p><strong>Engagement-Productivity Gap:</strong> 18% (Gallup Q12 Meta-Analysis)</p>
                <p><strong>Expected Improvements:</strong> 40% claims reduction, 25% turnover reduction, 30% engagement lift (based on pilot targets)</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to See These Results in Your Organization?</h3>
              <p className="text-lg mb-6 text-gray-300">
                Join 3-5 Founding Partners in our Q2 2025 pilot program
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  <div>
                    <p className="text-sm opacity-75 mb-1">Pilot Investment</p>
                    <p className="text-xl font-bold">{formatCurrency(PILOT_COST)}</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-75 mb-1">Projected Annual ROI</p>
                    <p className="text-xl font-bold">{formatCurrency(netAnnualROI)}</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-75 mb-1">ROI Multiple</p>
                    <p className="text-xl font-bold">{roiMultiple}×</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-300 italic">
                "The best time to address psychosocial safety was before the regulations. The second best time is now."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;