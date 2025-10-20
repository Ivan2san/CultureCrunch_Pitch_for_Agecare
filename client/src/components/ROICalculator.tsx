import { useState } from "react";
import { DollarSign, TrendingUp, Users, AlertTriangle, Calculator, ChevronDown, Info, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import MethodologyDialog from "@/components/MethodologyDialog";
import { useParallax } from "@/hooks/useParallax";

type ProviderType = "residential" | "home_care";

export default function ROICalculator() {
  const [providerType, setProviderType] = useState<ProviderType>("residential");
  const [employeeCount, setEmployeeCount] = useState(150);
  const [managerCount, setManagerCount] = useState(12);
  const [currentMentalHealthClaims, setCurrentMentalHealthClaims] = useState(4);
  const [avgTurnoverRate, setAvgTurnoverRate] = useState(30);
  const [avgSalary, setAvgSalary] = useState(70000);
  const [currentEngagementScore, setCurrentEngagementScore] = useState(40);
  const [showMethodology, setShowMethodology] = useState(false);
  const [showFullMethodology, setShowFullMethodology] = useState(false);

  const handleProviderTypeChange = (type: ProviderType) => {
    setProviderType(type);
    if (type === "residential") {
      // Large residential care centre: 100-200 staff (typical RN span-of-control reality)
      setEmployeeCount(150);
      setManagerCount(12);
      setCurrentMentalHealthClaims(4);
      setAvgTurnoverRate(30);
      setAvgSalary(70000);
    } else {
      // Home care defaults: smaller teams, higher turnover, different patterns
      setEmployeeCount(15);
      setManagerCount(3);
      setCurrentMentalHealthClaims(1);
      setAvgTurnoverRate(35);
      setAvgSalary(65000);
    }
  };

  // Constants - Aged Care Sector Specific
  const MENTAL_HEALTH_CLAIM_COST = 58600;
  const TURNOVER_COST_MULTIPLIER = 0.7;
  const PRODUCTIVITY_LOSS_DISENGAGED = 0.18;
  const ABSENTEEISM_COST_PER_EMPLOYEE = 3500;
  const FOUNDING_PARTNER_ANNUAL_COST = 25000;
  const EXPECTED_CLAIM_REDUCTION = 0.4;
  const EXPECTED_TURNOVER_REDUCTION = 0.25;
  const EXPECTED_ENGAGEMENT_IMPROVEMENT = 0.3;
  const EXPECTED_ABSENTEEISM_REDUCTION = 0.2;

  // Current State Costs
  const annualMentalHealthClaimsCost = currentMentalHealthClaims * MENTAL_HEALTH_CLAIM_COST;
  const turnoverCount = Math.round((employeeCount * avgTurnoverRate) / 100);
  const annualTurnoverCost = turnoverCount * avgSalary * TURNOVER_COST_MULTIPLIER;
  const disengagedEmployees = Math.round(employeeCount * (1 - currentEngagementScore / 100));
  const annualProductivityLoss = disengagedEmployees * avgSalary * PRODUCTIVITY_LOSS_DISENGAGED;
  const annualAbsenteeismCost = employeeCount * ABSENTEEISM_COST_PER_EMPLOYEE;
  const totalAnnualCost =
    annualMentalHealthClaimsCost +
    annualTurnoverCost +
    annualProductivityLoss +
    annualAbsenteeismCost;

  // Savings
  const claimsSavings = annualMentalHealthClaimsCost * EXPECTED_CLAIM_REDUCTION;
  const turnoverSavings = annualTurnoverCost * EXPECTED_TURNOVER_REDUCTION;
  const productivityGains = annualProductivityLoss * EXPECTED_ENGAGEMENT_IMPROVEMENT;
  const absenteeismSavings = annualAbsenteeismCost * EXPECTED_ABSENTEEISM_REDUCTION;
  const totalAnnualSavings =
    claimsSavings + turnoverSavings + productivityGains + absenteeismSavings;

  const annualSubscriptionCost = FOUNDING_PARTNER_ANNUAL_COST;
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

  const headerParallax = useParallax({ speed: -0.1 });

  return (
    <section id="roi" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div ref={headerParallax.ref} style={headerParallax.style} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-12 h-12 text-purple-600" />
            <h2 className="text-4xl font-bold text-foreground">Aged Care ROI Calculator</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Calculate the financial impact of reducing psychosocial risk in your aged care service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24 bg-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-600" />
                Your Aged Care Service
              </h3>

              <div className="mb-6">
                <Label className="mb-3 block">Provider Type</Label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant={providerType === "residential" ? "default" : "outline"}
                    onClick={() => handleProviderTypeChange("residential")}
                    className="flex-1"
                    data-testid="button-provider-residential"
                  >
                    Residential
                  </Button>
                  <Button
                    type="button"
                    variant={providerType === "home_care" ? "default" : "outline"}
                    onClick={() => handleProviderTypeChange("home_care")}
                    className="flex-1"
                    data-testid="button-provider-homecare"
                  >
                    Home Care
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="employee-count">Total Staff (e.g., 100-200 for large residential centres, 15 for home care)</Label>
                  <Input
                    id="employee-count"
                    type="number"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(Number(e.target.value))}
                    min="20"
                    max="500"
                    data-testid="input-employee-count"
                  />
                </div>

                <div>
                  <Label htmlFor="leader-count">Number of Care Managers/Team Leaders</Label>
                  <Input
                    id="leader-count"
                    type="number"
                    value={managerCount}
                    onChange={(e) => setManagerCount(Number(e.target.value))}
                    min="2"
                    max="50"
                    data-testid="input-leader-count"
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
            <Card className="p-6 bg-card">
              <h3 className="text-2xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Current Annual Costs
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200" data-testid="cost-mental-health">
                  <p className="text-sm text-muted-foreground mb-1">Mental Health Claims</p>
                  <p className="text-2xl font-bold text-purple-700">{formatCurrency(annualMentalHealthClaimsCost)}</p>
                  <p className="text-xs text-muted-foreground mt-1">{currentMentalHealthClaims} claims × $58.6K each</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200" data-testid="cost-turnover">
                  <p className="text-sm text-muted-foreground mb-1">Staff Replacement Costs</p>
                  <p className="text-2xl font-bold text-purple-700">{formatCurrency(annualTurnoverCost)}</p>
                  <p className="text-xs text-muted-foreground mt-1">{turnoverCount} departures × 70% avg salary</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200" data-testid="cost-productivity">
                  <p className="text-sm text-muted-foreground mb-1">Productivity Loss</p>
                  <p className="text-2xl font-bold text-purple-700">{formatCurrency(annualProductivityLoss)}</p>
                  <p className="text-xs text-muted-foreground mt-1">{disengagedEmployees} disengaged × 18% loss</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200" data-testid="cost-absenteeism">
                  <p className="text-sm text-muted-foreground mb-1">Absenteeism</p>
                  <p className="text-2xl font-bold text-purple-700">{formatCurrency(annualAbsenteeismCost)}</p>
                  <p className="text-xs text-muted-foreground mt-1">$3,500 per employee</p>
                </div>

                <div className="bg-purple-600 p-4 rounded-lg text-white md:col-span-2" data-testid="cost-total">
                  <p className="text-sm mb-1">TOTAL ANNUAL COST</p>
                  <p className="text-3xl font-bold">{formatCurrency(totalAnnualCost)}</p>
                  <p className="text-xs mt-1 opacity-90">Status quo impact</p>
                </div>
              </div>
            </Card>

            {/* Savings */}
            <Card className="p-6 bg-card">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Expected Annual Savings
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <p className="text-sm text-muted-foreground mb-1">Claims Reduction (40%)</p>
                  <p className="text-2xl font-bold text-indigo-700">{formatCurrency(claimsSavings)}</p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <p className="text-sm text-muted-foreground mb-1">Turnover Reduction (25%)</p>
                  <p className="text-2xl font-bold text-indigo-700">{formatCurrency(turnoverSavings)}</p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <p className="text-sm text-muted-foreground mb-1">Productivity Gains (30%)</p>
                  <p className="text-2xl font-bold text-indigo-700">{formatCurrency(productivityGains)}</p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <p className="text-sm text-muted-foreground mb-1">Absenteeism Reduction (20%)</p>
                  <p className="text-2xl font-bold text-indigo-700">{formatCurrency(absenteeismSavings)}</p>
                </div>

                <div className="bg-indigo-600 p-4 rounded-lg text-white md:col-span-2">
                  <p className="text-sm mb-1">TOTAL ANNUAL SAVINGS</p>
                  <p className="text-3xl font-bold">{formatCurrency(totalAnnualSavings)}</p>
                </div>
              </div>
            </Card>

            {/* ROI Summary */}
            <Card className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6" />
                Your ROI with CultureCrunch
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center sm:text-left">
                  <p className="text-sm opacity-90 mb-1">Annual Investment</p>
                  <p className="text-3xl font-bold">{formatCurrency(annualSubscriptionCost)}</p>
                  <p className="text-xs opacity-75 mt-1">Founding partner rate</p>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-sm opacity-90 mb-1">Net Annual ROI</p>
                  <p className="text-3xl font-bold">{formatCurrency(netAnnualROI)}</p>
                  <p className="text-xs opacity-75 mt-1">Savings minus investment</p>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-sm opacity-90 mb-1">ROI Multiple</p>
                  <p className="text-3xl font-bold">{roiMultiple}x</p>
                  <p className="text-xs opacity-75 mt-1">Return on investment</p>
                </div>
              </div>
            </Card>

            {/* Methodology Section */}
            <Card className="p-6 bg-card mt-6">
              <Button
                variant="ghost"
                onClick={() => setShowMethodology(!showMethodology)}
                className="w-full justify-between p-4 hover-elevate"
                data-testid="button-toggle-methodology"
              >
                <div className="flex items-center gap-3">
                  <Info className="w-5 h-5 text-purple-600" />
                  <span className="text-lg font-bold text-foreground">How the Calculator Works</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    showMethodology ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {showMethodology && (
                <div className="mt-6 space-y-6 border-t border-border pt-6">
                  {/* Cost Calculations */}
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4">Current Cost Calculations</h4>
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h5 className="font-bold text-foreground mb-2">1. Mental Health Claims Cost</h5>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Formula:</strong> Claims × $58,600
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Source:</strong> $58,600 median payout for aged care mental health claims with 34 weeks median time off 
                          (4× longer than other injuries) - Safe Work Australia 2020-21 aged care sector data
                        </p>
                      </div>

                      <div className="bg-muted p-4 rounded-lg">
                        <h5 className="font-bold text-foreground mb-2">2. Turnover Costs</h5>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Formula:</strong> (Employee Count × Turnover Rate %) × Salary × 0.7
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Source:</strong> 70% of salary replacement cost for aged care sector (27% national turnover rate, 
                          43,000 vacancies nationwide) - Aged Care Provider Workforce Survey 2023
                        </p>
                      </div>

                      <div className="bg-muted p-4 rounded-lg">
                        <h5 className="font-bold text-foreground mb-2">3. Productivity Loss from Disengagement</h5>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Formula:</strong> Disengaged Employees × Salary × 18%
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Calculation:</strong> Disengaged = Total × (1 - Engagement Score ÷ 100)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Context:</strong> 18% productivity loss amplified in aged care by workforce stress - only 49% report 
                          manageable workloads (Aged Care Provider Workforce Survey 2023)
                        </p>
                      </div>

                      <div className="bg-muted p-4 rounded-lg">
                        <h5 className="font-bold text-foreground mb-2">4. Absenteeism Cost</h5>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Formula:</strong> Employee Count × $3,500
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Context:</strong> $3,500 per employee amplified by aged care hazards (resident aggression, 
                          dementia behaviors, family complaints) - Safe Work Australia aged care sector data
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Savings Calculations */}
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4">Expected Savings (Research-Backed Reduction Rates)</h4>
                    <div className="space-y-4">
                      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                        <h5 className="font-bold text-indigo-800 mb-2">Mental Health Claims: 40% Reduction</h5>
                        <p className="text-sm text-muted-foreground">
                          Early intervention crucial for aged care: 82% residential compliance, 65% home care, 255 regulatory 
                          actions (2023-24), proactive hazard management reduces claims
                        </p>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                        <h5 className="font-bold text-indigo-800 mb-2">Turnover: 25% Reduction</h5>
                        <p className="text-sm text-muted-foreground">
                          Critical for aged care workforce crisis: 84,900 staff exits (27% turnover), leadership support 
                          programs reduce voluntary departures and improve retention
                        </p>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                        <h5 className="font-bold text-indigo-800 mb-2">Productivity: 30% Improvement</h5>
                        <p className="text-sm text-muted-foreground">
                          Engagement interventions address aged care stress factors (resident aggression, dementia care, 
                          family complaints) through targeted leadership support
                        </p>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                        <h5 className="font-bold text-indigo-800 mb-2">Absenteeism: 20% Reduction</h5>
                        <p className="text-sm text-muted-foreground">
                          Preventive support reduces aged care absenteeism: 25% increase in NSW inspector visits, 
                          Victoria psychological health regulations (Dec 2025) driving focus on prevention
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Investment */}
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4">Investment & ROI Calculation</h4>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h5 className="font-bold text-purple-800 mb-3">Founding Partner Annual Investment</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Special Founding Partner Rate:</strong> $25,000 per year (flat fee)
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        Early adopters receive exclusive flat-rate pricing regardless of organisation size,
                        providing exceptional value for pilot program participants.
                      </p>
                      <div className="border-t border-purple-300 pt-3 mt-3">
                        <p className="text-sm text-muted-foreground mb-1">
                          <strong>Net ROI:</strong> Total Savings - Annual Investment ($25,000)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>ROI Multiple:</strong> Total Savings ÷ Annual Investment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Full Methodology Button */}
            <Card className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 mt-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h4 className="font-bold text-foreground">Complete Research Documentation</h4>
                    <p className="text-sm text-muted-foreground">View full methodology with all sources and citations</p>
                  </div>
                </div>
                <Button
                  onClick={() => setShowFullMethodology(true)}
                  className="bg-indigo-600 hover:bg-indigo-700"
                  data-testid="button-view-full-methodology"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Full Methodology & Sources
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Methodology Dialog */}
        <MethodologyDialog 
          open={showFullMethodology} 
          onOpenChange={setShowFullMethodology}
        />
      </div>
    </section>
  );
}
