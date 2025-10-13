import { useState } from "react";
import { DollarSign, TrendingUp, Users, AlertTriangle, Calculator } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ROICalculator() {
  const [employeeCount, setEmployeeCount] = useState(250);
  const [managerCount, setManagerCount] = useState(25);
  const [currentMentalHealthClaims, setCurrentMentalHealthClaims] = useState(2);
  const [avgTurnoverRate, setAvgTurnoverRate] = useState(15);
  const [avgSalary, setAvgSalary] = useState(80000);
  const [currentEngagementScore, setCurrentEngagementScore] = useState(45);

  // Constants
  const MENTAL_HEALTH_CLAIM_COST = 290000;
  const TURNOVER_COST_MULTIPLIER = 1.5;
  const MANAGER_TIME_CRISIS_HOURS_WEEKLY = 5;
  const MANAGER_HOURLY_RATE = 75;
  const PRODUCTIVITY_LOSS_DISENGAGED = 0.18;
  const ABSENTEEISM_COST_PER_EMPLOYEE = 3500;
  const SUBSCRIPTION_COST_PER_EMPLOYEE_MONTHLY = 10;
  const FOUNDING_PARTNER_DISCOUNT = 0.3;
  const EXPECTED_CLAIM_REDUCTION = 0.4;
  const EXPECTED_TURNOVER_REDUCTION = 0.25;
  const EXPECTED_ENGAGEMENT_IMPROVEMENT = 0.3;
  const EXPECTED_MANAGER_TIME_SAVED = 0.6;
  const EXPECTED_ABSENTEEISM_REDUCTION = 0.2;

  // Current State Costs
  const annualMentalHealthClaimsCost = currentMentalHealthClaims * MENTAL_HEALTH_CLAIM_COST;
  const turnoverCount = Math.round((employeeCount * avgTurnoverRate) / 100);
  const annualTurnoverCost = turnoverCount * avgSalary * TURNOVER_COST_MULTIPLIER;
  const annualManagerCrisisCost = managerCount * MANAGER_TIME_CRISIS_HOURS_WEEKLY * 52 * MANAGER_HOURLY_RATE;
  const disengagedEmployees = Math.round(employeeCount * (1 - currentEngagementScore / 100));
  const annualProductivityLoss = disengagedEmployees * avgSalary * PRODUCTIVITY_LOSS_DISENGAGED;
  const annualAbsenteeismCost = employeeCount * ABSENTEEISM_COST_PER_EMPLOYEE;
  const totalAnnualCost =
    annualMentalHealthClaimsCost +
    annualTurnoverCost +
    annualManagerCrisisCost +
    annualProductivityLoss +
    annualAbsenteeismCost;

  // Savings
  const claimsSavings = annualMentalHealthClaimsCost * EXPECTED_CLAIM_REDUCTION;
  const turnoverSavings = annualTurnoverCost * EXPECTED_TURNOVER_REDUCTION;
  const managerTimeSavings = annualManagerCrisisCost * EXPECTED_MANAGER_TIME_SAVED;
  const productivityGains = annualProductivityLoss * EXPECTED_ENGAGEMENT_IMPROVEMENT;
  const absenteeismSavings = annualAbsenteeismCost * EXPECTED_ABSENTEEISM_REDUCTION;
  const totalAnnualSavings =
    claimsSavings + turnoverSavings + managerTimeSavings + productivityGains + absenteeismSavings;

  const annualSubscriptionCost =
    employeeCount * SUBSCRIPTION_COST_PER_EMPLOYEE_MONTHLY * 12 * (1 - FOUNDING_PARTNER_DISCOUNT);
  const netAnnualROI = totalAnnualSavings - annualSubscriptionCost;
  const roiMultiple = (totalAnnualSavings / annualSubscriptionCost).toFixed(1);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="roi" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-12 h-12 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-900">CultureCrunch ROI Calculator</h2>
          </div>
          <p className="text-xl text-gray-600">
            Calculate the financial impact of reducing psychosocial risk in your organisation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24 bg-white">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-600" />
                Your Organisation
              </h3>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="employee-count">Total Employees</Label>
                  <Input
                    id="employee-count"
                    type="number"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(Number(e.target.value))}
                    min="50"
                    max="10000"
                    data-testid="input-employee-count"
                  />
                </div>

                <div>
                  <Label htmlFor="manager-count">Number of Managers</Label>
                  <Input
                    id="manager-count"
                    type="number"
                    value={managerCount}
                    onChange={(e) => setManagerCount(Number(e.target.value))}
                    min="5"
                    max="500"
                    data-testid="input-manager-count"
                  />
                </div>

                <div>
                  <Label htmlFor="mental-health-claims">Mental Health Claims (Annual)</Label>
                  <Input
                    id="mental-health-claims"
                    type="number"
                    value={currentMentalHealthClaims}
                    onChange={(e) => setCurrentMentalHealthClaims(Number(e.target.value))}
                    min="0"
                    max="50"
                    data-testid="input-mental-health-claims"
                  />
                </div>

                <div>
                  <Label htmlFor="turnover-rate">Average Turnover Rate (%)</Label>
                  <Input
                    id="turnover-rate"
                    type="number"
                    value={avgTurnoverRate}
                    onChange={(e) => setAvgTurnoverRate(Number(e.target.value))}
                    min="0"
                    max="100"
                    data-testid="input-turnover-rate"
                  />
                </div>

                <div>
                  <Label htmlFor="avg-salary">Average Employee Salary (AUD)</Label>
                  <Input
                    id="avg-salary"
                    type="number"
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                    min="40000"
                    max="200000"
                    step="5000"
                    data-testid="input-avg-salary"
                  />
                </div>

                <div>
                  <Label htmlFor="engagement-score">Current Engagement Score (%)</Label>
                  <Input
                    id="engagement-score"
                    type="number"
                    value={currentEngagementScore}
                    onChange={(e) => setCurrentEngagementScore(Number(e.target.value))}
                    min="0"
                    max="100"
                    data-testid="input-engagement-score"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Costs */}
            <Card className="p-6 bg-white">
              <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Current Annual Costs
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200" data-testid="cost-mental-health">
                  <p className="text-sm text-gray-600 mb-1">Mental Health Claims</p>
                  <p className="text-2xl font-bold text-red-700 font-mono">{formatCurrency(annualMentalHealthClaimsCost)}</p>
                  <p className="text-xs text-gray-500 mt-1">{currentMentalHealthClaims} claims × $290K each</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200" data-testid="cost-turnover">
                  <p className="text-sm text-gray-600 mb-1">Turnover Costs</p>
                  <p className="text-2xl font-bold text-red-700 font-mono">{formatCurrency(annualTurnoverCost)}</p>
                  <p className="text-xs text-gray-500 mt-1">{turnoverCount} employees × 150% salary</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200" data-testid="cost-manager-time">
                  <p className="text-sm text-gray-600 mb-1">Manager Crisis Time</p>
                  <p className="text-2xl font-bold text-red-700 font-mono">{formatCurrency(annualManagerCrisisCost)}</p>
                  <p className="text-xs text-gray-500 mt-1">5 hrs/week × {managerCount} managers</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200" data-testid="cost-productivity">
                  <p className="text-sm text-gray-600 mb-1">Productivity Loss</p>
                  <p className="text-2xl font-bold text-red-700 font-mono">{formatCurrency(annualProductivityLoss)}</p>
                  <p className="text-xs text-gray-500 mt-1">{disengagedEmployees} disengaged × 18% loss</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200" data-testid="cost-absenteeism">
                  <p className="text-sm text-gray-600 mb-1">Absenteeism</p>
                  <p className="text-2xl font-bold text-red-700 font-mono">{formatCurrency(annualAbsenteeismCost)}</p>
                  <p className="text-xs text-gray-500 mt-1">$3,500 per employee</p>
                </div>

                <div className="bg-red-600 p-4 rounded-lg text-white" data-testid="cost-total">
                  <p className="text-sm mb-1">TOTAL ANNUAL COST</p>
                  <p className="text-3xl font-bold font-mono">{formatCurrency(totalAnnualCost)}</p>
                  <p className="text-xs mt-1 opacity-90">Status quo impact</p>
                </div>
              </div>
            </Card>

            {/* Savings */}
            <Card className="p-6 bg-white">
              <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Expected Annual Savings
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Claims Reduction (40%)</p>
                  <p className="text-2xl font-bold text-green-700 font-mono">{formatCurrency(claimsSavings)}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Turnover Reduction (25%)</p>
                  <p className="text-2xl font-bold text-green-700 font-mono">{formatCurrency(turnoverSavings)}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Manager Time Saved (60%)</p>
                  <p className="text-2xl font-bold text-green-700 font-mono">{formatCurrency(managerTimeSavings)}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Productivity Gains (30%)</p>
                  <p className="text-2xl font-bold text-green-700 font-mono">{formatCurrency(productivityGains)}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Absenteeism Reduction (20%)</p>
                  <p className="text-2xl font-bold text-green-700 font-mono">{formatCurrency(absenteeismSavings)}</p>
                </div>

                <div className="bg-green-600 p-4 rounded-lg text-white">
                  <p className="text-sm mb-1">TOTAL ANNUAL SAVINGS</p>
                  <p className="text-3xl font-bold font-mono">{formatCurrency(totalAnnualSavings)}</p>
                </div>
              </div>
            </Card>

            {/* ROI Summary */}
            <Card className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6" />
                Your ROI with CultureCrunch
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm opacity-90 mb-1">Annual Investment (Founding Partner)</p>
                  <p className="text-3xl font-bold font-mono">{formatCurrency(annualSubscriptionCost)}</p>
                  <p className="text-xs opacity-75 mt-1">30% discount included</p>
                </div>

                <div>
                  <p className="text-sm opacity-90 mb-1">Net Annual ROI</p>
                  <p className="text-3xl font-bold font-mono">{formatCurrency(netAnnualROI)}</p>
                  <p className="text-xs opacity-75 mt-1">Savings minus investment</p>
                </div>

                <div>
                  <p className="text-sm opacity-90 mb-1">ROI Multiple</p>
                  <p className="text-3xl font-bold font-mono">{roiMultiple}x</p>
                  <p className="text-xs opacity-75 mt-1">Return on investment</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
