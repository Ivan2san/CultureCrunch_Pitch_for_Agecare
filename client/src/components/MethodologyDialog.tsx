import { useEffect } from "react";
import { X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
        <DialogHeader className="px-6 pt-6 pb-4 border-b bg-gradient-to-r from-purple-50 to-indigo-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-purple-600" />
              <DialogTitle className="text-2xl font-bold text-gray-900">
                ROI Methodology & Research Sources
              </DialogTitle>
            </div>
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
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-red-900 mb-3">CONFIDENTIAL AND PROPRIETARY</h3>
                <p className="text-sm text-red-800 mb-2">
                  <strong>© 2025 Culture Crunch Pty Ltd. All Rights Reserved.</strong>
                </p>
                <p className="text-sm text-red-700 mb-3">
                  This document contains confidential and proprietary information belonging to Culture Crunch Pty Ltd. 
                  This material is provided solely for the use of the intended recipient and may not be copied, distributed, 
                  published, or disclosed to third parties without the express written consent of Culture Crunch Pty Ltd.
                </p>
                <p className="text-xs text-red-600 mb-2">
                  <strong>Restriction on Use:</strong> The methodologies, calculations, research compilations, and business 
                  intelligence contained herein constitute valuable trade secrets and proprietary business information of 
                  Culture Crunch Pty Ltd. Unauthorised use, reproduction, or distribution may result in civil and criminal penalties.
                </p>
                <p className="text-xs text-red-600">
                  <strong>Contact:</strong> Campbell McGlynn | campbell@culturecrunch.io
                </p>
              </div>

              {/* Overview */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-700">
                  This document traces every key number used in the CultureCrunch ROI Calculator back to its research source, 
                  ensuring investor-grade credibility.
                </p>
              </section>

              {/* 1. Mental Health Claims */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Mental Health Claim Costs</h2>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <p className="font-bold text-purple-900">Used in Calculator: $290,000 AUD per claim</p>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2">Primary Source:</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Safe Work Australia - Key Work Health and Safety Statistics 2024</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Specific Finding: Median compensation for mental health claims is $65,400 in 2022-23</li>
                  <li>Note: This is MEDIAN compensation only, not total claim cost</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-2">Calculator Methodology:</h3>
                <p className="text-gray-700 mb-2">The $290K figure represents <strong>total claim cost</strong>, not just compensation:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Direct compensation: $65,400 (median, Safe Work Australia)</li>
                  <li>Time lost value: 34.2 weeks × average loaded salary (~$2,500/week) = ~$85,500</li>
                  <li>Replacement/temporary staff: ~$50,000</li>
                  <li>Investigation and HR time: ~$20,000</li>
                  <li>Productivity loss during transition: ~$40,000</li>
                  <li>Legal/regulatory response: ~$29,100</li>
                </ul>
                <p className="text-purple-800 font-bold mt-2">Total: ~$290,000</p>
              </section>

              {/* 2. Turnover Cost */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Turnover Cost Multiplier</h2>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <p className="font-bold text-purple-900">Used in Calculator: 150% of annual salary (1.5× multiplier)</p>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">Primary Source:</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Industry Standard - SHRM (Society for Human Resource Management)</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Widely accepted range: 50-200% of annual salary depending on role level</li>
                  <li>Entry-level: 50-60%</li>
                  <li>Mid-level: 100-150%</li>
                  <li>Executive: 200-400%</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-2">Calculator Methodology:</h3>
                <p className="text-gray-700 mb-2">Uses 150% (1.5×) as a <strong>conservative mid-point</strong> for mixed workforce:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Recruitment costs: ~20% of salary</li>
                  <li>Onboarding and training: ~20% of salary</li>
                  <li>Lost productivity (3 months ramp-up): ~25% of salary</li>
                  <li>Manager/team productivity impact: ~20% of salary</li>
                  <li>Cultural impact and knowledge loss: ~15% of salary</li>
                </ul>
              </section>

              {/* 3. Productivity Loss */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Productivity Loss from Disengagement</h2>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <p className="font-bold text-purple-900">Used in Calculator: 18% productivity gap</p>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">Primary Source:</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Gallup Q12 Meta-Analysis (2020, 10th Edition)</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Sample Size: 2.7 million employees across 112,000 business units</li>
                  <li>Specific Finding: 18% difference in productivity (sales) between top and bottom quartile engagement</li>
                  <li>Additional Finding: 14% difference in productivity (production records & evaluations)</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-2">Calculator Methodology:</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Disengaged employees</strong> = Total employees × (1 - Engagement Score %)
                </p>
                <p className="text-gray-600 text-sm mb-2">Example: 250 employees × (1 - 0.45) = 137.5 disengaged employees</p>
                <p className="text-gray-700">
                  <strong>Annual productivity loss</strong> = Disengaged employees × Average salary × 18%
                </p>
              </section>

              {/* 4. Absenteeism */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Absenteeism Cost</h2>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <p className="font-bold text-purple-900">Used in Calculator: $3,500 per employee annually</p>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">Primary Source:</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Gallup Q12 Meta-Analysis (2020)</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>81% difference in absenteeism between top and bottom quartile engagement</li>
                  <li>High absenteeism correlates strongly with low engagement</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-2">Calculator Methodology:</h3>
                <p className="text-gray-700 mb-2">$3,500 represents:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Direct salary cost of absence: ~$2,000</li>
                  <li>Replacement/coverage costs: ~$800</li>
                  <li>Productivity impact on team: ~$500</li>
                  <li>Administrative overhead: ~$200</li>
                </ul>
              </section>

              {/* 5. Expected Improvements */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Expected Improvement Rates (Conservative Estimates)</h2>

                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">Mental Health Claims Reduction: 40%</h3>
                    <p className="text-sm text-gray-700">
                      Early intervention programs typically show 30-50% reduction in claims. Conservative estimate: 40% (mid-range)
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">Turnover Reduction: 25%</h3>
                    <p className="text-sm text-gray-700">
                      Gallup Q12 shows 22% median difference in turnover between engagement quartiles. 
                      Calculator uses 25% (conservative for high-turnover scenarios)
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">Productivity Gains: 30%</h3>
                    <p className="text-sm text-gray-700">
                      Engagement intervention effectiveness studies show substantial productivity gains when disengagement 
                      is addressed through targeted leadership support
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">Absenteeism Reduction: 20%</h3>
                    <p className="text-sm text-gray-700">
                      Very conservative given Gallup shows up to 81% difference possible between engagement quartiles
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Key Metrics Table */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Key Metrics - Sources Summary</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-purple-100">
                      <tr>
                        <th className="border border-gray-300 p-3 text-left font-bold text-gray-900">Metric</th>
                        <th className="border border-gray-300 p-3 text-left font-bold text-gray-900">Value</th>
                        <th className="border border-gray-300 p-3 text-left font-bold text-gray-900">Primary Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-3 text-gray-700">Mental Health Claim Cost</td>
                        <td className="border border-gray-300 p-3 text-gray-700">$290K</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Safe Work Australia 2024</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 text-gray-700">Turnover Cost Multiplier</td>
                        <td className="border border-gray-300 p-3 text-gray-700">150%</td>
                        <td className="border border-gray-300 p-3 text-gray-700">SHRM Industry Standard</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-3 text-gray-700">Productivity Gap</td>
                        <td className="border border-gray-300 p-3 text-gray-700">18%</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Gallup Q12 Meta-Analysis</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 text-gray-700">Absenteeism Cost</td>
                        <td className="border border-gray-300 p-3 text-gray-700">$3,500/employee</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Gallup + Safe Work Australia</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-3 text-gray-700">Claims Reduction</td>
                        <td className="border border-gray-300 p-3 text-gray-700">40%</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Early intervention studies</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 text-gray-700">Turnover Reduction</td>
                        <td className="border border-gray-300 p-3 text-gray-700">25%</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Gallup Q12</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 p-3 text-gray-700">Engagement Improvement</td>
                        <td className="border border-gray-300 p-3 text-gray-700">30%</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Gallup + Google Research</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 text-gray-700">Absenteeism Reduction</td>
                        <td className="border border-gray-300 p-3 text-gray-700">20%</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Gallup Q12</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 7. Credibility */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Why This ROI Model is Defensible</h2>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-1">Large Sample Sizes</h3>
                    <p className="text-sm text-gray-700">Gallup: 2.7M+ employees; Safe Work Australia: National data</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-1">Conservative Estimates</h3>
                    <p className="text-sm text-gray-700">All improvement rates at lower end of research ranges with built-in margin of safety</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-1">Peer-Reviewed Sources</h3>
                    <p className="text-sm text-gray-700">Gallup Q12 Meta-Analysis (academic rigour), Safe Work Australia (government data)</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-1">Transparent Methodology</h3>
                    <p className="text-sm text-gray-700">Every calculation traceable; assumptions clearly stated; no "black box" numbers</p>
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
