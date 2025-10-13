import React from 'react';
import { Brain, Shield, Zap, Database, Network, Lock, RefreshCw, CheckCircle, Cpu, GitBranch } from 'lucide-react';

const AIArchitectureSlide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Technical Architecture: <span className="text-indigo-600">How It Works</span>
          </h1>
          <p className="text-2xl text-gray-700">
            Privacy-first AI that turns workplace signals into actionable leadership insights
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            System Architecture
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Layer 1: Data Ingestion */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-300">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900">1. Data Ingestion Layer</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800 mb-1">Metadata Collection</p>
                  <p className="text-sm text-gray-600">Calendar events, meeting duration, response times, activity patterns</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800 mb-1">Integration APIs</p>
                  <p className="text-sm text-gray-600">Microsoft 365, Google Workspace, Slack, HRIS systems</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800 mb-1">Privacy Filters</p>
                  <p className="text-sm text-gray-600">Zero content ingestion, cohort thresholds, opt-in only</p>
                </div>
              </div>
            </div>

            {/* Layer 2: AI Processing */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-300">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-purple-900">2. AI Processing Layer</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800 mb-1">Agentic AI Engine</p>
                  <p className="text-sm text-gray-600">Autonomous pattern recognition, anomaly detection, risk identification</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800 mb-1">Generative AI (LLM)</p>
                  <p className="text-sm text-gray-600">Contextual nudge generation, conversation frameworks, action recommendations</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800 mb-1">Network Analysis (ONA)</p>
                  <p className="text-sm text-gray-600">Collaboration mapping, influence detection, inclusion gaps</p>
                </div>
              </div>
            </div>

            {/* Layer 3: Action & Feedback */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-300">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">3. Action & Feedback Loop</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800 mb-1">Manager Interface</p>
                  <p className="text-sm text-gray-600">Weekly nudges, OORA conversation guides, micro-action prompts</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800 mb-1">Action Tracking</p>
                  <p className="text-sm text-gray-600">Implementation monitoring, team pulse measurement, outcome correlation</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800 mb-1">Continuous Learning</p>
                  <p className="text-sm text-gray-600">Model refinement, organization-specific training, pattern reinforcement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Flow Arrows */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              <GitBranch className="w-6 h-6 text-purple-600" />
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-green-400"></div>
              <RefreshCw className="w-6 h-6 text-green-600" />
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 font-medium">Closed-loop learning system: Data → Insight → Action → Outcome → Better Data</p>
        </div>

        {/* AI Components Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Agentic AI */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-10 h-10 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Agentic AI: Autonomous Intelligence</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-indigo-900 mb-2">What It Does:</h3>
                <p className="text-gray-700 mb-3">
                  Agentic AI represents the next evolution — AI systems that autonomously interpret behavioral data from internal systems, identify risk signals, and recommend leadership actions within ethical boundaries.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-indigo-900 mb-2">How It Works:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Pattern Recognition:</strong> Detects anomalies in meeting loads, response times, collaboration patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Risk Assessment:</strong> Maps patterns to 17 psychosocial hazards (per WHS regulations)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Autonomous Decision-Making:</strong> Determines urgency, severity, and recommended interventions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Ethical Boundaries:</strong> Human-in-the-loop for sensitive recommendations, audit trail for all decisions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-indigo-900">Technical Stack:</p>
                <p className="text-sm text-gray-700 mt-1">PyTorch-based neural networks, scikit-learn for statistical analysis, custom time-series models for behavioral forecasting</p>
              </div>
            </div>
          </div>

          {/* Generative AI */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-10 h-10 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Generative AI: Contextual Communication</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-purple-900 mb-2">What It Does:</h3>
                <p className="text-gray-700 mb-3">
                  Large Language Models (LLMs) translate cold data into warm, actionable manager nudges — with organization-specific context and evidence-based frameworks built in.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-purple-900 mb-2">How It Works:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Contextual Training:</strong> Fine-tuned on Triple Goal Leadership Model™ + organizational language/culture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Nudge Generation:</strong> Crafts specific, actionable manager briefs (not generic advice)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Conversation Frameworks:</strong> Generates OORA conversation starters tailored to detected risks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Micro-Action Library:</strong> Recommends evidence-based actions from 10+ years of org research</span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-purple-900">Technical Stack:</p>
                <p className="text-sm text-gray-700 mt-1">GPT-4 base models, fine-tuned with RAG (Retrieval-Augmented Generation), vector databases for organizational context</p>
              </div>
            </div>
          </div>

          {/* ONA */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Network className="w-10 h-10 text-teal-600" />
              <h2 className="text-2xl font-bold text-gray-900">Organizational Network Analysis (ONA)</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-teal-900 mb-2">What It Does:</h3>
                <p className="text-gray-700 mb-3">
                  Maps collaboration and communication patterns across teams — revealing hidden leaders, bottlenecks, inclusion gaps, and influence flows that traditional surveys miss entirely.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-teal-900 mb-2">How It Works:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Graph Modeling:</strong> Builds network graphs from metadata (who communicates with whom, when, how often)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Centrality Metrics:</strong> Identifies key connectors, isolated individuals, and communication silos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Inclusion Detection:</strong> Flags underrepresented voices and uneven information access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Change Tracking:</strong> Monitors network evolution over time (are silos breaking down or hardening?)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-teal-900">Technical Stack:</p>
                <p className="text-sm text-gray-700 mt-1">NetworkX for graph analysis, Neo4j for graph databases, custom algorithms for psychosocial risk mapping</p>
              </div>
            </div>
          </div>

          {/* Triple Goal Integration */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw className="w-10 h-10 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Triple Goal Leadership Model™</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-green-900 mb-2">Proprietary Behavioral Framework:</h3>
                <p className="text-gray-700 mb-3">
                  Our behavioral science IP connects AI insights to proven leadership actions across three dimensions of thriving teams.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold text-green-900 mb-1">1. Great Performance</p>
                  <p className="text-sm text-gray-700">Consistently high execution, clear goals, effective prioritization</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-bold text-blue-900 mb-1">2. Great Learning</p>
                  <p className="text-sm text-gray-700">High psychological safety, constructive feedback, experimentation culture</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="font-bold text-purple-900 mb-1">3. Great Workplace</p>
                  <p className="text-sm text-gray-700">Engagement, inclusion, recognition, positive mental health</p>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-green-900">Evidence Base:</p>
                <p className="text-sm text-gray-700 mt-1">10+ years of organizational research, validated with 50+ enterprise clients, mapped to WHS psychosocial hazards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy & Security Architecture */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-2xl p-8 mb-12 text-white">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-12 h-12 text-green-400" />
            <h2 className="text-3xl font-bold">Privacy-First Security Architecture</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold">Data Minimization</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>✅ Metadata only — zero content ingestion</li>
                <li>✅ Cohort thresholds (min. 5 people per insight)</li>
                <li>✅ Opt-in participation with clear outcomes</li>
                <li>✅ Automated data retention limits (90 days default)</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold">Encryption & Access</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>✅ End-to-end encryption (transit + at rest)</li>
                <li>✅ Role-based access controls (RBAC)</li>
                <li>✅ Australian data residency (AWS Sydney)</li>
                <li>✅ SOC 2 Type II roadmap (Month 12)</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold">Governance & Audit</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>✅ DPIA complete (Data Protection Impact Assessment)</li>
                <li>✅ Comprehensive audit logs for all AI decisions</li>
                <li>✅ Human-in-the-loop for sensitive recommendations</li>
                <li>✅ Regular bias audits & model evaluations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why This Architecture Wins */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why This Architecture Creates a Moat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-indigo-50 rounded-lg border-2 border-indigo-200">
              <RefreshCw className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl text-indigo-900 mb-3">Self-Improving System</h3>
              <p className="text-gray-700">
                Each customer makes our AI smarter through privacy-preserved learning. More usage = better recommendations = higher engagement.
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
              <Lock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl text-purple-900 mb-3">Privacy Competitive Edge</h3>
              <p className="text-gray-700">
                Metadata-only approach enables deployment in regulated industries (healthcare, finance) where competitors can't operate.
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200">
              <Brain className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl text-green-900 mb-3">Behavioral Science IP</h3>
              <p className="text-gray-700">
                Triple Goal Model™ + 10 years of research creates action library that competitors can't replicate through engineering alone.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Credibility Footer */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 italic">
            "The first AI system that autonomously identifies psychosocial risks AND guides managers to prevent them — without reading a single message or email."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIArchitectureSlide;