import { Scale, HeartCrack, BrainCircuit } from "lucide-react";

export default function WhyNowSection() {
  return (
    <section id="why-now" className="min-h-screen bg-corporate-gradient px-6 py-32 flex items-center flex-wrap">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          WHY NOW: <span className="text-blue-600">Three Forces Have Collided</span>
        </h2>

        {/* Desktop: Triangular Convergence Layout */}
        <div className="hidden lg:block relative mb-16">
          {/* Top card - centered */}
          <div className="flex justify-center mb-12">
            <div className="w-80" data-testid="circle-regulatory">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-400 h-full">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Scale className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 text-center">REGULATORY COMPLIANCE</h3>
                  <p className="text-sm text-blue-700 font-semibold">(2022-2024)</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span>Psychosocial hazard regulations now active in all Australian states</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span>SafeWork NSW mandates checks for 200+ employee workplaces (2024)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span>Penalties up to $11.5M for Category 1 offenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span>Organisations must prove they're managing psych risk—right now</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom two cards */}
          <div className="grid grid-cols-2 gap-16 max-w-4xl mx-auto mb-12">
            {/* Force 2: Burnout Crisis */}
            <div className="flex justify-end" data-testid="circle-burnout">
              <div className="w-80 bg-white rounded-xl p-6 shadow-lg border-2 border-red-400 h-full">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                    <HeartCrack className="w-10 h-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-red-900 text-center">BURNOUT CRISIS</h3>
                  <p className="text-sm text-red-700 font-semibold">(2023-2025)</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold flex-shrink-0">•</span>
                    <span>76% of Australian workers report burnout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold flex-shrink-0">•</span>
                    <span>Mental health claims have doubled in a decade (97% increase)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold flex-shrink-0">•</span>
                    <span>Managers account for 70% of engagement variance (Gallup)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold flex-shrink-0">•</span>
                    <span>The people who should solve this ARE the problem</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Force 3: AI Maturity */}
            <div className="flex justify-start" data-testid="circle-ai">
              <div className="w-80 bg-white rounded-xl p-6 shadow-lg border-2 border-green-400 h-full">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <BrainCircuit className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 text-center">AI MATURITY</h3>
                  <p className="text-sm text-green-700 font-semibold">(2024-2025)</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold flex-shrink-0">•</span>
                    <span>Agentic AI can now autonomously interpret behavioural data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold flex-shrink-0">•</span>
                    <span>Privacy-preserving analysis (metadata only) is production-ready</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold flex-shrink-0">•</span>
                    <span>Cost per analysis has dropped 90% since 2023</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold flex-shrink-0">•</span>
                    <span>Technology finally matches the problem complexity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Convergence Lines - SVG connecting three forces */}
          <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            {/* Line from top card to center */}
            <line x1="50%" y1="180" x2="50%" y2="400" stroke="url(#gradient1)" strokeWidth="3" strokeDasharray="5,5" />
            {/* Line from bottom-left card to center */}
            <line x1="35%" y1="600" x2="50%" y2="400" stroke="url(#gradient2)" strokeWidth="3" strokeDasharray="5,5" />
            {/* Line from bottom-right card to center */}
            <line x1="65%" y1="600" x2="50%" y2="400" stroke="url(#gradient3)" strokeWidth="3" strokeDasharray="5,5" />
            
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient3" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Convergence Point */}
          <div className="absolute top-[420px] left-1/2 -translate-x-1/2 w-full max-w-2xl" style={{ zIndex: 10 }} data-testid="convergence-center">
            <div className="relative">
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl blur-xl opacity-40 animate-pulse"></div>
              
              {/* Main convergence box */}
              <div className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 rounded-2xl p-8 shadow-2xl border-4 border-purple-400">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center">THE CONVERGENCE POINT</h3>
                <p className="text-lg text-white/95 text-center leading-relaxed">
                  For the first time, regulatory pressure, workplace crisis, and technological capability have aligned. 
                  <span className="font-bold text-white block mt-2">Organizations need compliance-ready AI solutions—and they need them now.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Card Stack */}
        <div className="lg:hidden space-y-6 mb-12">
          <div className="bg-white p-6 rounded-lg border-2 border-blue-400 shadow-lg">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Scale className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900">REGULATORY COMPLIANCE</h3>
                <p className="text-xs text-blue-700 font-semibold">(2022-2024)</p>
              </div>
            </div>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Psychosocial hazard regulations now active in all Australian states</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>SafeWork NSW mandates checks for 200+ employee workplaces (2024)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Penalties up to $11.5M for Category 1 offenses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Organisations must prove they're managing psych risk—right now</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-red-400 shadow-lg">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <HeartCrack className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-900">BURNOUT CRISIS</h3>
                <p className="text-xs text-red-700 font-semibold">(2023-2025)</p>
              </div>
            </div>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <span>76% of Australian workers report burnout</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <span>Mental health claims have doubled in a decade (97% increase)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <span>Managers account for 70% of engagement variance (Gallup)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                <span>The people who should solve this ARE the problem</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-green-400 shadow-lg">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <BrainCircuit className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-900">AI MATURITY</h3>
                <p className="text-xs text-green-700 font-semibold">(2024-2025)</p>
              </div>
            </div>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span>Agentic AI can now autonomously interpret behavioural data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span>Privacy-preserving analysis (metadata only) is production-ready</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span>Cost per analysis has dropped 90% since 2023</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0">•</span>
                <span>Technology finally matches the problem complexity</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl blur-lg opacity-30"></div>
            <div className="relative bg-gradient-to-br from-purple-600 to-indigo-600 p-6 rounded-xl shadow-xl border-4 border-purple-400">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">THE CONVERGENCE POINT</h3>
              <p className="text-sm text-white/95 text-center">
                For the first time, regulatory pressure, workplace crisis, and technological capability have aligned. 
                Organizations need compliance-ready AI solutions—and they need them now.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200 mt-16">
          <p className="text-2xl md:text-3xl text-gray-800 font-semibold text-center">
            <span className="font-bold text-blue-600">2025:</span> The market is ready for a solution that bridges compliance requirements with practical, AI-driven action
          </p>
        </div>
      </div>
    </section>
  );
}
