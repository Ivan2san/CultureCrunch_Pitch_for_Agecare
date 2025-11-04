import React from 'react';
import { CheckCircle, Users, TrendingUp, Shield, FileText } from 'lucide-react';

const AskSlide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            The Ask: <span className="text-purple-600">Be a Founding Partner</span>
          </h1>
          <p className="text-2xl text-gray-700">
            Help us build the future of psychosocial safety—and secure your competitive advantage
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - What We're Seeking */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-purple-600 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8" />
              What We're Seeking
            </h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-xl text-purple-900 mb-3">
                  Letter of Intent (LOI) for 12-Week Pilot
                </h3>
                <p className="text-gray-700 mb-4">
                  A non-binding commitment to participate in our validation pilot program
                </p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Timeline:</strong> Q2 2025 (April-June)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Scope:</strong> 10-15 managers, 100-150 employees</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Investment:</strong> $25,000 AUD (12 weeks)</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-800 mb-3">
                  What the LOI Demonstrates:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Your organization sees this as a strategic priority</span>
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
          </div>

          {/* Right Column - What You Get */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8" />
              What You Get as a Founding Partner
            </h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Founding Partner Pricing (Locked In)
                </h3>
                <p className="text-gray-700">
                  $25K pilot price guaranteed—won't be available after launch. Post-pilot subscription at founding partner rates (30% below standard pricing)
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  White-Glove Implementation
                </h3>
                <p className="text-gray-700">
                  Direct access to our team throughout the pilot. Weekly check-ins, rapid iteration, and customized support
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-blue-900 mb-2">
                  Co-Design the Product
                </h3>
                <p className="text-gray-700">
                  Shape features, workflows, and reporting to match your needs. Your feedback directly influences our roadmap
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-blue-900 mb-2">
                  Early Mover Compliance Advantage
                </h3>
                <p className="text-gray-700">
                  Get ahead of WHS psychosocial regulations with evidence-based risk management—before competitors catch up
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-blue-900 mb-2">
                  Case Study & Brand Recognition
                </h3>
                <p className="text-gray-700">
                  Featured as an innovation leader in our launch materials and industry thought leadership
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-blue-900 mb-2">
                  No Long-Term Commitment
                </h3>
                <p className="text-gray-700">
                  LOI is non-binding. Pilot only. If it doesn't work, you've invested $25K to learn—not committed years of budget
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Matters Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Your LOI Matters to Us (And to You)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3">For CultureCrunch:</h3>
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
                  <span>Validates our solution with real organizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Enables us to deliver on our mission</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">For Your Organization:</h3>
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
                  <span>Demonstrates leadership commitment to employee wellbeing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Creates competitive moat in talent attraction/retention</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline and Next Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Next Steps & Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">This Week</h3>
              <p className="text-gray-600">
                30-min discovery call to align on pilot scope and success metrics
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Next Week</h3>
              <p className="text-gray-600">
                Custom pilot proposal delivered to match your organization
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Week 3</h3>
              <p className="text-gray-600">
                LOI signed, stakeholder alignment confirmed
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Q2 2025</h3>
              <p className="text-gray-600">
                Pilot begins (April-June), results in hand by July
              </p>
            </div>
          </div>
        </div>

        {/* The Direct Ask */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">
            We're Looking for 3-5 Founding Partners
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Organizations ready to lead on psychosocial safety, not follow
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto mb-8">
            <p className="text-2xl font-bold mb-4">
              The Question:
            </p>
            <p className="text-xl mb-6">
              Would your organization provide a Letter of Intent to participate in our Q2 2025 pilot program?
            </p>
            <p className="text-lg text-gray-300">
              (Non-binding, subject to final agreement, enables us to secure funding and ensures you get founding partner benefits)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-purple-600 hover:bg-purple-700 transition-colors px-8 py-4 rounded-lg">
              <p className="font-bold text-lg mb-1">Strong Interest</p>
              <p className="text-sm">Let's discuss LOI this week</p>
            </div>
            <div className="bg-blue-600 hover:bg-blue-700 transition-colors px-8 py-4 rounded-lg">
              <p className="font-bold text-lg mb-1">Need More Info</p>
              <p className="text-sm">Schedule discovery call</p>
            </div>
            <div className="bg-gray-600 hover:bg-gray-700 transition-colors px-8 py-4 rounded-lg">
              <p className="font-bold text-lg mb-1">Not Right Timing</p>
              <p className="text-sm">Stay in touch for future</p>
            </div>
          </div>
        </div>

        {/* Final Value Prop */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 italic">
            "The best time to address psychosocial safety was before the regulations. The second best time is now."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AskSlide;