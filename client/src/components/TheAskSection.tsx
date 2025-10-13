import { CheckCircle, FileText, TrendingUp, Shield, Users, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TheAskSection() {
  const handleDownloadLOI = () => {
    console.log("Download LOI template triggered");
    // In production, this would trigger a file download
    window.open("/loi-template.pdf", "_blank");
  };

  return (
    <section id="ask" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Ask: <span className="text-purple-600">Be a Founding Partner</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700">
            Help us build the future of psychosocial safety and secure your competitive advantage
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* What We're Seeking */}
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-600">What We're Seeking</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h4 className="font-bold text-xl text-purple-900 mb-3">Letter of Intent (LOI) for 12-Week Pilot</h4>
                <p className="text-gray-700 mb-4">
                  A non-binding commitment to participate in our validation pilot program
                </p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Timeline:</strong> Q1–Q2 2026 (MVP pilot phase)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Scope:</strong> 10–15 managers, 100–150 employees
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Investment:</strong> $25,000 AUD (12 weeks)
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-lg text-gray-800 mb-3">What the LOI Demonstrates:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Your organisation sees this as a strategic priority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Budget and stakeholder alignment for pilot participation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Intent to convert to full subscription if pilot succeeds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Real market demand for investors</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* What You Get */}
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-600">What You Get as a Founding Partner</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h4 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Founding Partner Pricing (Locked In)
                </h4>
                <p className="text-gray-700">
                  $25K pilot price guaranteed; won't be available after launch. Post-pilot subscription at founding
                  partner rates (30% below standard pricing)
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h4 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  White-Glove Implementation
                </h4>
                <p className="text-gray-700">
                  Direct access to our team throughout the pilot. Weekly check-ins, rapid iteration and customised
                  support
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h4 className="font-bold text-lg text-blue-900 mb-2">Co-Design the Product</h4>
                <p className="text-gray-700">
                  Shape features, workflows and reporting to match your needs. Your feedback directly influences our
                  roadmap
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h4 className="font-bold text-lg text-blue-900 mb-2">Early Mover Compliance Advantage</h4>
                <p className="text-gray-700">
                  Get ahead of WHS psychosocial regulations with evidence-based risk management, before competitors
                  catch up
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h4 className="font-bold text-lg text-blue-900 mb-2">No Long-Term Commitment</h4>
                <p className="text-gray-700">
                  LOI is non-binding. Pilot only. If it doesn't work, you've invested $25K to learn, not committed years
                  of budget
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Why This Matters */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 mb-12 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Your LOI Matters to Us (And to You)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-xl mb-3">For CultureCrunch:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Proves real market demand to investors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Secures funding to build the full platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Validates our solution with real organisations</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-3">For Your Organisation:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Secures founding partner pricing before it disappears</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Gets you compliant before enforcement intensifies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Creates competitive moat in talent attraction/retention</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <Card className="p-8 mb-12 bg-white">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Next Steps & Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Next Week", desc: "30-min discovery call to align on pilot scope and success metrics" },
              { num: "2", title: "Week 2", desc: "Custom pilot proposal delivered to match your organisation" },
              { num: "3", title: "Week 4", desc: "LOI signed, stakeholder alignment confirmed" },
              { num: "4", title: "Q2–Q3 2026", desc: "Launch with 10 paying customers, proven compliance outcomes" },
            ].map((step, index) => (
              <div key={index} className="text-center" data-testid={`timeline-step-${index}`}>
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* The Direct Ask */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">We're Looking for 3–5 Founding Partners</h3>
          <p className="text-xl mb-8 text-gray-300">
            Organisations ready to lead on psychosocial safety, not follow
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto mb-8">
            <p className="text-2xl font-bold mb-4">The Question:</p>
            <p className="text-xl mb-6">
              Would your organisation provide a Letter of Intent to participate in our Q1–Q2 2026 pilot program?
            </p>
            <p className="text-lg text-gray-300">
              (Non-binding, subject to final agreement; enables us to secure funding and ensures you get founding
              partner benefits)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleDownloadLOI}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
              data-testid="button-download-loi"
            >
              <Download className="w-5 h-5 mr-2" />
              View & Download LOI Template
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
              data-testid="button-schedule-call"
            >
              Schedule Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
