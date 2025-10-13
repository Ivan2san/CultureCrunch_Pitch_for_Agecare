import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

interface LOIPreviewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LOIPreview({ open, onOpenChange }: LOIPreviewProps) {
  const handleDownload = () => {
    console.log('Download LOI template triggered');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b bg-gradient-to-r from-purple-50 to-indigo-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-purple-600" />
              <div>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  Letter of Intent - Pilot Program
                </DialogTitle>
                <DialogDescription className="text-gray-600 mt-1">
                  Founding Partner Program Template
                </DialogDescription>
              </div>
            </div>
            <Button
              onClick={handleDownload}
              className="bg-indigo-600 hover:bg-indigo-700"
              data-testid="button-download-loi"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Template
            </Button>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-120px)] px-6 py-4">
          <div className="prose prose-sm max-w-none">
            {/* Header with Branding */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-6 -mx-2">
              <h1 className="text-2xl font-bold text-white mb-2">LETTER OF INTENT</h1>
              <p className="text-purple-100 text-lg">Pilot Program Participation</p>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 mb-4"><strong>Date:</strong> [Insert Date]</p>
              
              <p className="font-bold text-gray-900 mb-2">Between:</p>
              
              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <p className="font-bold text-indigo-900">Culture Crunch Pty Ltd</p>
                <p className="text-sm text-gray-700">ABN: [Pending Registration]</p>
                <p className="text-sm text-gray-700">Address: Melbourne, Victoria, Australia</p>
                <p className="text-sm text-gray-700">Contact: Campbell McGlynn, Founder & CEO</p>
                <p className="text-sm text-gray-700">Email: campbell@culturecrunch.io</p>
              </div>
              
              <p className="font-bold text-gray-900 mb-2">AND</p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-gray-900">[Client Organisation Name]</p>
                <p className="text-sm text-gray-700">ABN: [Client ABN]</p>
                <p className="text-sm text-gray-700">Address: [Client Address]</p>
                <p className="text-sm text-gray-700">Contact: [Contact Name], [Title]</p>
                <p className="text-sm text-gray-700">Email: [Contact Email]</p>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Section 1 */}
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. PURPOSE</h2>
            <p className="text-gray-700 mb-4">
              This Letter of Intent ("LOI") expresses [Client Organisation]'s intent to participate as a Founding Partner 
              in Culture Crunch's ThriveGuide AI pilot program, subject to mutually agreed terms in a subsequent formal agreement.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. PILOT PROGRAM OVERVIEW</h2>
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <p className="text-gray-800 mb-2"><strong>Program Name:</strong> ThriveGuide AI - Founding Partner Pilot</p>
              <p className="text-gray-800 mb-2"><strong>Duration:</strong> 12 weeks</p>
              <p className="text-gray-800 mb-2"><strong>Anticipated Start Date:</strong> Q2 2026</p>
              <p className="text-gray-800 mb-2"><strong>Pilot Scope:</strong></p>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>10-15 leaders participating</li>
                <li>Approximately 100-150 employees covered</li>
                <li>[Specify department/division if known]</li>
              </ul>
              <p className="text-gray-800 mt-3"><strong>Pilot Investment:</strong> $25,000 AUD (excluding GST)</p>
            </div>

            {/* Section 3 */}
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. PROGRAM DELIVERABLES</h2>
            <p className="text-gray-700 mb-3">Culture Crunch will provide:</p>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li className="text-gray-800">
                <strong>Weekly AI-Powered Leader Briefs</strong>
                <ul className="list-disc list-inside ml-6 mt-1 text-gray-700 text-sm">
                  <li>Behavioural insights based on workplace metadata</li>
                  <li>Psychosocial risk indicators</li>
                  <li>Actionable recommendations</li>
                </ul>
              </li>
              <li className="text-gray-800">
                <strong>OORA Conversation Framework</strong>
                <ul className="list-disc list-inside ml-6 mt-1 text-gray-700 text-sm">
                  <li>Structured 10-minute team conversation methodology</li>
                  <li>Micro-action library</li>
                  <li>Implementation support</li>
                </ul>
              </li>
              <li className="text-gray-800">
                <strong>Data Integration & Privacy Controls</strong>
                <ul className="list-disc list-inside ml-6 mt-1 text-gray-700 text-sm">
                  <li>Secure integration with [specify systems: e.g., Microsoft 365, Slack]</li>
                  <li>Privacy-first architecture (metadata only)</li>
                  <li>Compliance with Australian Privacy Principles</li>
                </ul>
              </li>
              <li className="text-gray-800">
                <strong>Leader Training & Support</strong>
                <ul className="list-disc list-inside ml-6 mt-1 text-gray-700 text-sm">
                  <li>Initial onboarding session (2 hours)</li>
                  <li>Weekly office hours</li>
                  <li>Direct support via Slack/Teams/Email</li>
                </ul>
              </li>
              <li className="text-gray-800">
                <strong>Impact Measurement & Reporting</strong>
                <ul className="list-disc list-inside ml-6 mt-1 text-gray-700 text-sm">
                  <li>Weekly action tracking</li>
                  <li>Monthly progress reports</li>
                  <li>End-of-pilot comprehensive assessment</li>
                </ul>
              </li>
              <li className="text-gray-800">
                <strong>Executive Dashboard</strong>
                <ul className="list-disc list-inside ml-6 mt-1 text-gray-700 text-sm">
                  <li>Real-time psychosocial risk overview</li>
                  <li>Compliance evidence documentation</li>
                  <li>ROI metrics</li>
                </ul>
              </li>
            </ol>

            {/* Section 5 - Founding Partner Benefits */}
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">5. FOUNDING PARTNER BENEFITS</h2>
            <p className="text-gray-700 mb-3">As a Founding Partner, [Client Organisation] will receive:</p>
            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-900 mb-2">1. Locked-In Pricing</p>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                  <li>Pilot price of $25,000 AUD (will not be offered after launch)</li>
                  <li>Post-pilot subscription pricing at 30% below standard rates</li>
                  <li>Price lock guaranteed for 24 months from pilot completion</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-900 mb-2">2. Product Co-Design Influence</p>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                  <li>Direct input on feature roadmap</li>
                  <li>Customisation to organisational needs</li>
                  <li>Priority for feature requests</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-900 mb-2">3. White-Glove Implementation</p>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                  <li>Dedicated customer success leader</li>
                  <li>Weekly check-ins throughout pilot</li>
                  <li>Rapid iteration and support</li>
                </ul>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-bold text-indigo-900 mb-2">4. Early Compliance Advantage</p>
                <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                  <li>WHS psychosocial safety documentation</li>
                  <li>Evidence-based risk management framework</li>
                  <li>Audit-ready reporting</li>
                </ul>
              </div>
            </div>

            {/* Key Terms */}
            <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-lg mt-6">
              <h3 className="font-bold text-amber-900 mb-3">Important: Non-Binding Nature</h3>
              <p className="text-gray-700 text-sm mb-3">
                This LOI is a non-binding expression of intent only. Neither party has any legal obligation to 
                proceed unless and until a formal Service Agreement is executed by both parties.
              </p>
              <p className="text-gray-700 text-sm">
                Either party may terminate discussions at any time without penalty.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-indigo-900 mb-2">For Culture Crunch:</p>
                  <p className="text-sm text-gray-700">Campbell McGlynn</p>
                  <p className="text-sm text-gray-700">Founder & CEO</p>
                  <p className="text-sm text-gray-700">Email: campbell@culturecrunch.io</p>
                  <p className="text-sm text-gray-700">Phone: [Contact for details]</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">For [Client Organisation]:</p>
                  <p className="text-sm text-gray-700">[Contact Name]</p>
                  <p className="text-sm text-gray-700">[Title]</p>
                  <p className="text-sm text-gray-700">Email: [Email]</p>
                  <p className="text-sm text-gray-700">Phone: [Phone]</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-8 italic">
              This preview shows key sections of the Letter of Intent template. 
              Download the full template to see all sections including client responsibilities, 
              conversion terms, success metrics, and appendices.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
