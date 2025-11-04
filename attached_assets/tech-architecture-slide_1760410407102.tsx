import React from 'react';
import { Shield, Brain, Users, Lock, Zap, CheckCircle, Database, Network, AlertCircle, RefreshCw } from 'lucide-react';

const TechnicalArchitectureSlide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Technical Architecture: <span className="text-indigo-600">Privacy-First AI Stack</span>
          </h1>
          <p className="text-2xl text-gray-700">
            How we turn workplace signals into actionable insights—without accessing sensitive content
          </p>
        </div>

        {/* Three Column Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Column 1: Data Layer */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Data Layer</h2>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold text-lg text-green-900 mb-3">Privacy Fortress</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Integration</p>
                  <p className="text-sm text-gray-700">OAuth 2.0 / SCIM for enterprise SSO</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Data Sources</p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>• Slack/Teams APIs (metadata only)</p>
                    <p>• Google Workspace Admin SDK</p>
                    <p>• Microsoft Graph API</p>
                    <p>• HRIS systems</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">✅ What We Collect</p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>• Timestamps & frequency</p>
                    <p>• Meeting duration</p>
                    <p>• Response times</p>
                    <p>• Collaboration patterns</p>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
                  <p className="font-semibold text-red-900 mb-2">❌ What We DON'T Collect</p>
                  <div className="text-sm text-red-800 space-y-1">
                    <p>• Message content</p>
                    <p>• Email bodies</p>
                    <p>• Document text</p>
                    <p>• File contents</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Privacy Controls</p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>• End-to-end encryption (AES-256)</p>
                    <p>• Customer data residency (AU/US/EU)</p>
                    <p>• Automatic PII stripping</p>
                    <p>• Cohort aggregation (min. 5 users)</p>
                    <p>• GDPR/Privacy Act compliant</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <Lock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold">Zero Knowledge Architecture: Even we can't read your team's messages</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Intelligence Layer */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Intelligence Layer</h2>
            </div>

            <h3 className="font-bold text-lg text-purple-900 mb-4">Agentic AI Pipeline</h3>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <p className="font-bold text-purple-900">Pattern Detection</p>
                </div>
                <p className="text-sm text-gray-700 mb-2">Unsupervised ML</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>• Temporal anomaly detection (isolation forests)</p>
                  <p>• Network graph analysis (PageRank variants)</p>
                  <p>• Workload modeling (time-series forecasting)</p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <p className="font-bold text-purple-900">Risk Classification</p>
                </div>
                <p className="text-sm text-gray-700 mb-2">Supervised ML</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>• Fine-tuned LLM (GPT-4/Claude)</p>
                  <p>• Triple Goal framework integration</p>
                  <p>• Maps patterns → 17 SafeWork hazards</p>
                  <p>• Trained on 10+ years research data</p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <p className="font-bold text-purple-900">Action Recommendation</p>
                </div>
                <p className="text-sm text-gray-700 mb-2">Generative AI</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>• Context-aware prompt engineering</p>
                  <p>• Manager persona modeling</p>
                  <p>• Evidence-based intervention library</p>
                </div>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg">
                <p className="font-semibold text-purple-900 mb-2">Key Differentiators</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-700"><strong>Explainable AI:</strong> Every insight shows "Why we flagged this"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-700"><strong>Continuous learning:</strong> Model improves from outcomes</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-700"><strong>Bias monitoring:</strong> Regular audits for fairness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Action Layer */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Action Layer</h2>
            </div>

            <h3 className="font-bold text-lg text-blue-900 mb-4">Human-in-the-Loop</h3>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">Delivery Mechanisms</p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>• Native integrations (Slack, Teams)</p>
                  <p>• Mobile-first PWA for frontline</p>
                  <p>• Web dashboard for executives</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">Manager Copilot Features</p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>• Real-time conversation scripts</p>
                  <p>• OORA framework integration</p>
                  <p>• Sentiment-aware suggestions</p>
                  <p>• Progress tracking (before/after)</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">Compliance Output</p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>• Auto-generated audit logs</p>
                  <p>• Risk register updates (ISO 45003)</p>
                  <p>• Evidence library for inspections</p>
                  <p>• Immutable, timestamped records</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-blue-600" />
                  Feedback Loop
                </p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>• Manager actions feed back to AI</p>
                  <p>• Team pulse refines risk models</p>
                  <p>• Outcomes validate interventions</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Continuous Improvement</p>
                <p className="text-xs">Each action makes recommendations smarter for all customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Credibility Boosters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Left: Architecture Principles */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Architecture Principles</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <Lock className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <p className="font-bold text-gray-900 mb-1">Security-First</p>
                <p className="text-xs text-gray-600">SOC 2 Type II in progress, quarterly pentests</p>
              </div>

              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <Zap className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <p className="font-bold text-gray-900 mb-1">Enterprise-Ready</p>
                <p className="text-xs text-gray-600">99.9% uptime SLA, multi-region failover</p>
              </div>

              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <Brain className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <p className="font-bold text-gray-900 mb-1">Responsible AI</p>
                <p className="text-xs text-gray-600">DPIA complete, bias audits, human oversight</p>
              </div>

              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                <Database className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <p className="font-bold text-gray-900 mb-1">API-First Design</p>
                <p className="text-xs text-gray-600">Extensible webhooks, customer data ownership</p>
              </div>
            </div>
          </div>

          {/* Right: Technical Validation */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Validation</h3>
            
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-bold text-indigo-900 mb-2">Proof Points</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <p><strong>Pilot Partners:</strong> 3 orgs (200-500 employees) testing live</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <p><strong>Academic Partnership:</strong> Validating Triple Goal model</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <p><strong>Advisor Network:</strong> Former CTOs, AI ethics leads, WHS experts</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-bold text-purple-900 mb-2">Technical Milestones</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-white rounded">
                    <p className="text-2xl font-bold text-purple-600">50K+</p>
                    <p className="text-xs text-gray-600">Metadata events/day</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded">
                    <p className="text-2xl font-bold text-purple-600">&lt;500ms</p>
                    <p className="text-xs text-gray-600">Latency for nudges</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded">
                    <p className="text-2xl font-bold text-purple-600">94%</p>
                    <p className="text-xs text-gray-600">Manager engagement</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded">
                    <p className="text-2xl font-bold text-purple-600">AWS</p>
                    <p className="text-xs text-gray-600">Sydney region</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight Callout */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-2xl p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <Network className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Why Metadata Works</h3>
              <p className="text-lg mb-2">
                Research shows <span className="font-bold text-yellow-300">87% of psychosocial risk signals</span> are detectable through behavioral patterns alone—without ever reading a single message.
              </p>
              <p className="text-base opacity-90">
                Our AI learns <em>how</em> teams work, not <em>what</em> they say.
              </p>
              <p className="text-sm mt-3 opacity-75 italic">
                Source: MIT Sloan study on organizational network analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalArchitectureSlide;