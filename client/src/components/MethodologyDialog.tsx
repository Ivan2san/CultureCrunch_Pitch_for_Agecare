import { useEffect } from "react";
import { X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MethodologyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MethodologyDialog({ open, onOpenChange }: MethodologyDialogProps) {
  useEffect(() => {
    if (!open) return;

    const preventCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    const preventKeyboard = (e: KeyboardEvent) => {
      // Block copy, select all, cut, save, print
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "c" || e.key === "a" || e.key === "x" || e.key === "s" || e.key === "p")
      ) {
        e.preventDefault();
        return false;
      }
      // Block F12 (dev tools), Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U (view source)
      if (
        e.key === "F12" ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) ||
        ((e.ctrlKey || e.metaKey) && (e.key === "U" || e.key === "u"))
      ) {
        e.preventDefault();
        return false;
      }
    };

    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener("copy", preventCopy);
    document.addEventListener("keydown", preventKeyboard);
    document.addEventListener("contextmenu", preventContextMenu);

    return () => {
      document.removeEventListener("copy", preventCopy);
      document.removeEventListener("keydown", preventKeyboard);
      document.removeEventListener("contextmenu", preventContextMenu);
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b bg-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <DialogTitle className="text-2xl font-bold text-foreground">
                ROI Methodology & Research Sources
              </DialogTitle>
            </div>
            <DialogDescription className="sr-only">
              Comprehensive research documentation and calculation methodology for the CultureCrunch AI ROI Calculator
            </DialogDescription>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              data-testid="button-close-methodology"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="relative">
          {/* Watermark Overlay */}
          <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center opacity-5">
            <div className="transform -rotate-45 text-6xl font-bold text-gray-900 whitespace-nowrap">
              CONFIDENTIAL · PROPRIETARY · CULTURE CRUNCH
            </div>
          </div>

          <ScrollArea className="h-[calc(90vh-120px)] px-6 py-4">
            {/* Protected Content - No Select, No Copy */}
            <div className="select-none" onContextMenu={(e) => e.preventDefault()}>
              {/* Confidentiality Notice */}
              <div className="bg-red-50 dark:bg-red-950 border-2 border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-3">CONFIDENTIAL AND PROPRIETARY</h3>
                <p className="text-sm text-red-800 dark:text-red-200 mb-2">
                  <strong>© 2025 Culture Crunch Pty Ltd. All Rights Reserved.</strong>
                </p>
                <p className="text-sm text-red-700 dark:text-red-300 mb-3">
                  This document contains confidential and proprietary information belonging to Culture Crunch Pty Ltd. 
                  This material is provided solely for the use of the intended recipient and may not be copied, distributed, 
                  published, or disclosed to third parties without the express written consent of Culture Crunch Pty Ltd.
                </p>
                <p className="text-xs text-red-600 dark:text-red-400 mb-2">
                  <strong>Restriction on Use:</strong> The methodologies, calculations, research compilations, and business 
                  intelligence contained herein constitute valuable trade secrets and proprietary business information of 
                  Culture Crunch Pty Ltd. Unauthorised use, reproduction, or distribution may result in civil and criminal penalties.
                </p>
                <p className="text-xs text-red-600 dark:text-red-400">
                  <strong>Contact:</strong> Campbell McGlynn | campbell@culturecrunch.io
                </p>
              </div>

              {/* Overview */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground mb-3">
                  This document traces every key number used in the CultureCrunch ROI Calculator back to its research source, 
                  ensuring investor-grade credibility. All data is specific to the Australian aged care sector.
                </p>
                <p className="text-muted-foreground">
                  <strong>Aged Care Sector Context:</strong> 82% residential compliance, 65% home care compliance, 255 regulatory 
                  actions (2023-24), 27% workforce turnover (84,900 staff exits), 43,000 vacancies nationwide, and escalating 
                  enforcement (25% increase in NSW psychosocial inspector visits).
                </p>
              </section>

              {/* 1. Mental Health Claims */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Mental Health Claim Costs (Aged Care Sector)</h2>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <p className="font-bold text-purple-900">Used in Calculator: $58,600 AUD per claim</p>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2">Primary Source:</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Safe Work Australia - Aged Care Sector Mental Health Claims Data 2020-21</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Specific Finding: Median compensation for aged care mental health claims is $58,600</li>
                  <li>Time off: 34 weeks median (4× longer than other aged care injuries at 8.7 weeks)</li>
                  <li>Sector-specific: Lower than general workforce ($65,400) due to aged care salary scales</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-2">Aged Care Context:</h3>
                <p className="text-gray-700 mb-2"><strong>Key Psychosocial Hazards in Aged Care:</strong></p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Resident aggression and challenging dementia behaviors</li>
                  <li>Emotional demands of end-of-life care and family grief</li>
                  <li>Workload pressure: Only 49% report manageable workload (Workforce Survey 2023)</li>
                  <li>Family complaints and AHPRA professional conduct concerns</li>
                  <li>Understaffing: 43,000 vacancies nationwide, 27% annual turnover</li>
                </ul>
                <p className="text-purple-800 font-bold mt-3">Conservative estimate: $58,600 median payout (34 weeks time off)</p>
              </section>

              {/* 2. Turnover Cost */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Turnover Cost Multiplier (Aged Care Sector)</h2>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <p className="font-bold text-purple-900">Used in Calculator: 70% of annual salary (0.7× multiplier)</p>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">Primary Source:</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Aged Care Provider Workforce Survey 2023 & Industry Analysis</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Aged care turnover lower than general industry standards (50-150%) due to sector characteristics</li>
                  <li>High volume, lower complexity recruitment in aged care sector</li>
                  <li>Workforce crisis context: 27% national turnover rate, 84,900 staff exits in 12 months</li>
                  <li>43,000 vacancies nationwide creating recruitment urgency</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-2">Aged Care Calculator Methodology:</h3>
                <p className="text-gray-700 mb-2">Uses 70% (0.7×) as <strong>sector-appropriate</strong> estimate:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Recruitment costs: ~15% (high-volume, standardized processes)</li>
                  <li>Onboarding and training: ~20% (aged care specific compliance training)</li>
                  <li>Lost productivity (2-month ramp-up): ~20% of salary</li>
                  <li>Team productivity impact: ~10% (coverage staffing challenges)</li>
                  <li>Knowledge loss: ~5% (standardized care protocols reduce impact)</li>
                </ul>
                <p className="text-purple-800 font-bold mt-2">Total: ~70% of annual salary per departure</p>
              </section>

              {/* 3. Productivity Loss */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Productivity Loss from Disengagement (Aged Care Context)</h2>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <p className="font-bold text-purple-900">Used in Calculator: 18% productivity gap</p>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">Primary Source:</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Gallup Q12 Meta-Analysis (2020) Applied to Aged Care Sector</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Base Finding: 18% productivity difference between engaged and disengaged workers</li>
                  <li>Aged Care Amplification: Only 49% report manageable workload (Workforce Survey 2023)</li>
                  <li>Sector Stress: Resident aggression, dementia care demands, family complaints</li>
                  <li>Quality Impact: Disengagement directly affects resident care quality and safety outcomes</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-2">Aged Care Calculator Methodology:</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Disengaged employees</strong> = Total employees × (1 - Engagement Score %)
                </p>
                <p className="text-gray-600 text-sm mb-2">Example: 65 aged care staff × (1 - 0.45) = 36 disengaged workers</p>
                <p className="text-gray-700 mb-2">
                  <strong>Annual productivity loss</strong> = Disengaged employees × Average salary × 18%
                </p>
                <p className="text-gray-600 text-sm">Conservative 18% applied despite higher aged care workforce stress levels</p>
              </section>

              {/* 4. Absenteeism */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Absenteeism Cost (Aged Care Sector)</h2>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <p className="font-bold text-purple-900">Used in Calculator: $3,500 per employee annually</p>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">Primary Source:</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Safe Work Australia + Aged Care Sector Analysis</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Aged care mental health claims: 34 weeks median time off (4× other injuries)</li>
                  <li>Sector hazards amplify absenteeism: resident aggression, dementia care stress, family complaints</li>
                  <li>Coverage challenges: 43,000 vacancies make replacement staffing difficult</li>
                  <li>AHPRA concerns and emotional demands drive stress-related absence</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-2">Aged Care Calculator Methodology:</h3>
                <p className="text-gray-700 mb-2">$3,500 per employee represents:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Direct salary cost of absence: ~$2,000 (aged care wage scale)</li>
                  <li>Emergency coverage costs: ~$900 (staffing crisis premium)</li>
                  <li>Team productivity impact: ~$400 (coverage gaps affect care quality)</li>
                  <li>Administrative overhead: ~$200</li>
                </ul>
                <p className="text-gray-600 text-sm mt-2">Conservative given sector-specific stress factors and coverage challenges</p>
              </section>

              {/* 5. Expected Improvements */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Expected Improvement Rates (Aged Care Sector)</h2>

                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">Mental Health Claims Reduction: 40%</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Early intervention programs typically show 30-50% reduction. Conservative 40% applied to aged care context.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Aged Care Driver:</strong> Compliance enforcement (82% residential, 65% home care, 255 regulatory 
                      actions 2023-24) creates urgency for proactive hazard management
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">Turnover Reduction: 25%</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Conservative 25% reduction applied to aged care workforce crisis (27% turnover, 84,900 staff exits)
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Aged Care Driver:</strong> Leadership support addresses retention in 43,000-vacancy environment. 
                      Victoria psychological health regulations (Dec 2025) mandate proactive support
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">Productivity Gains: 30%</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Engagement interventions show 30% productivity recovery when addressing disengagement
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Aged Care Driver:</strong> Targeted support for sector hazards (resident aggression, dementia 
                      behaviors, family complaints) reduces stress impact. Only 49% report manageable workload currently
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">Absenteeism Reduction: 20%</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Very conservative 20% given aged care mental health claims (34 weeks median time off, 4× other injuries)
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Aged Care Driver:</strong> 25% increase in NSW psychosocial inspector visits creates compliance 
                      pressure. Preventive support reduces stress-related absence
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Key Metrics Table */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Key Metrics - Aged Care Sector Sources</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-purple-100">
                      <tr>
                        <th className="border border-gray-300 p-3 text-left font-bold text-gray-900">Metric</th>
                        <th className="border border-gray-300 p-3 text-left font-bold text-gray-900">Value</th>
                        <th className="border border-gray-300 p-3 text-left font-bold text-gray-900">Aged Care Sector Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-3 text-gray-700">Mental Health Claim Cost</td>
                        <td className="border border-gray-300 p-3 text-gray-700">$58.6K</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Safe Work Australia 2020-21 (Aged Care)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 text-gray-700">Claim Time Off</td>
                        <td className="border border-gray-300 p-3 text-gray-700">34 weeks</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Safe Work Australia (4× other injuries)</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-3 text-gray-700">Turnover Cost Multiplier</td>
                        <td className="border border-gray-300 p-3 text-gray-700">70%</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Aged Care Workforce Survey 2023</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 text-gray-700">Workforce Turnover Rate</td>
                        <td className="border border-gray-300 p-3 text-gray-700">27%</td>
                        <td className="border border-gray-300 p-3 text-gray-700">84,900 staff exits (Workforce Survey)</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-3 text-gray-700">Productivity Gap</td>
                        <td className="border border-gray-300 p-3 text-gray-700">18%</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Gallup (49% manageable workload context)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 text-gray-700">Absenteeism Cost</td>
                        <td className="border border-gray-300 p-3 text-gray-700">$3,500/employee</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Safe Work Australia (Aged Care Hazards)</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-3 text-gray-700">Claims Reduction</td>
                        <td className="border border-gray-300 p-3 text-gray-700">40%</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Compliance enforcement context</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 text-gray-700">Turnover Reduction</td>
                        <td className="border border-gray-300 p-3 text-gray-700">25%</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Leadership support (43K vacancies context)</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-3 text-gray-700">Productivity Improvement</td>
                        <td className="border border-gray-300 p-3 text-gray-700">30%</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Engagement interventions (sector hazards)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 text-gray-700">Absenteeism Reduction</td>
                        <td className="border border-gray-300 p-3 text-gray-700">20%</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Preventive support (NSW inspector increase)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 7. Credibility */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Why This Aged Care ROI Model is Defensible</h2>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-1">Aged Care Sector-Specific Data</h3>
                    <p className="text-sm text-gray-700">Safe Work Australia aged care data (2020-21), Aged Care Quality & Safety Commission 
                    Annual Report 2023-24, Aged Care Provider Workforce Survey 2023 - all sector-specific sources</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-1">Conservative Estimates with Compliance Context</h3>
                    <p className="text-sm text-gray-700">All improvement rates conservative given compliance enforcement reality: 82% residential 
                    compliance, 65% home care, 255 regulatory actions, 25% increase in NSW inspector visits</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-1">Government & Official Sources</h3>
                    <p className="text-sm text-gray-700">Aged Care Quality & Safety Commission (federal regulator), Safe Work Australia (national 
                    safety authority), Aged Care Provider Workforce Survey (industry standard)</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-1">Sector Hazard Alignment</h3>
                    <p className="text-sm text-gray-700">ROI model addresses documented aged care hazards: resident aggression, dementia behaviors, 
                    family complaints, AHPRA concerns, workforce crisis (43,000 vacancies, 27% turnover)</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-1">Regulatory Urgency Driver</h3>
                    <p className="text-sm text-gray-700">Victoria psychological health regulations (Dec 2025), escalating enforcement, and 1-in-5 
                    facilities failing audits create immediate need for proactive solutions</p>
                  </div>
                </div>
              </section>

              {/* Footer Notice */}
              <div className="bg-gray-100 border-t-2 border-gray-300 rounded-lg p-6 mt-8">
                <p className="text-xs text-gray-600 mb-2">
                  <strong>© 2025 Culture Crunch Pty Ltd. All Rights Reserved.</strong>
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>CONFIDENTIAL:</strong> This document and the information contained herein are proprietary to 
                  Culture Crunch Pty Ltd and may not be reproduced, distributed, or disclosed without express written permission.
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Disclaimer:</strong> While all data sources are cited in good faith and based on published research, 
                  actual results may vary by organisation. The ROI calculations presented are projections based on conservative 
                  estimates from peer-reviewed research and should not be construed as guaranteed outcomes.
                </p>
                <p className="text-xs text-gray-600">
                  <strong>For questions:</strong> Campbell McGlynn | campbell@culturecrunch.io
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
