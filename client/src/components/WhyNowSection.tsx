import { Scale, HeartCrack, BrainCircuit } from "lucide-react";

export default function WhyNowSection() {
  return (
    <section id="why-now" className="min-h-screen bg-corporate-gradient px-6 py-32 flex items-center flex-wrap">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          WHY NOW: <span className="text-blue-600">Three Forces Have Collided</span>
        </h2>

        {/* Desktop: Modern Card Layout with Central Convergence */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8 mb-12">
            {/* Force 1: Regulatory Compliance */}
            <div className="relative" data-testid="circle-regulatory">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-400 h-full">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Scale className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 text-center">REGULATORY COMPLIANCE</h3>
                  <p className="text-sm text-blue-700 font-semibold">(2022-2024)</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2 flex-wrap">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Psychosocial hazard regulations now active in all Australian states</span>
                  </li>
                  <li className="flex items-start gap-2 flex-wrap">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>SafeWork NSW mandates checks for 200+ employee workplaces (2024)</span>
                  </li>
                  <li className="flex items-start gap-2 flex-wrap">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Penalties up to $11.5M for Category 1 offenses</span>
                  </li>
                  <li className="flex items-start gap-2 flex-wrap">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Organisations must prove they're managing psych risk—right now</span>
                  </li>
                </ul>
              </div>
              {/* Arrow pointing to center */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-blue-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 16l-6-6h12z"/>
                </svg>
              </div>
            </div>

            {/* Force 2: Burnout Crisis */}
            <div className="relative" data-testid="circle-burnout">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-400 h-full">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                    <HeartCrack className="w-10 h-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-red-900 text-center">BURNOUT CRISIS</h3>
                  <p className="text-sm text-red-700 font-semibold">(2023-2025)</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2 flex-wrap">
                    <span className="text-red-600 font-bold">•</span>
                    <span>76% of Australian workers report burnout</span>
                  </li>
                  <li className="flex items-start gap-2 flex-wrap">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Mental health claims have doubled in a decade (97% increase)</span>
                  </li>
                  <li className="flex items-start gap-2 flex-wrap">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Managers account for 70% of engagement variance (Gallup)</span>
                  </li>
                  <li className="flex items-start gap-2 flex-wrap">
                    <span className="text-red-600 font-bold">•</span>
                    <span>The people who should solve this ARE the problem</span>
                  </li>
                </ul>
              </div>
              {/* Arrow pointing to center */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-red-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 16l-6-6h12z"/>
                </svg>
              </div>
            </div>

            {/* Force 3: AI Maturity */}
            <div className="relative" data-testid="circle-ai">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-400 h-full">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <BrainCircuit className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 text-center">AI MATURITY</h3>
                  <p className="text-sm text-green-700 font-semibold">(2024-2025)</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2 flex-wrap">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Agentic AI can now autonomously interpret behavioural data</span>
                  </li>
                  <li className="flex items-start gap-2 flex-wrap">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Privacy-preserving analysis (metadata only) is production-ready</span>
                  </li>
                  <li className="flex items-start gap-2 flex-wrap">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Cost per analysis has dropped 90% since 2023</span>
                  </li>
                  <li className="flex items-start gap-2 flex-wrap">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Technology finally matches the problem complexity</span>
                  </li>
                </ul>
              </div>
              {/* Arrow pointing to center */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-green-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 16l-6-6h12z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Convergence Point */}
          <div className="flex justify-center mt-16" data-testid="convergence-center">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 shadow-2xl max-w-3xl text-center border-4 border-purple-700">
              <h3 className="text-2xl font-bold text-white mb-4">The Convergence Point</h3>
              <p className="text-lg text-white/90">
                For the first time, regulatory pressure, workplace crisis, and technological capability have aligned. 
                <span className="font-bold text-white"> Organizations need compliance-ready AI solutions—and they need them now.</span>
              </p>
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
              <li>• Psychosocial hazard regulations now active in all Australian states</li>
              <li>• SafeWork NSW mandates checks for 200+ employee workplaces (2024)</li>
              <li>• Penalties up to $11.5M for Category 1 offenses</li>
              <li>• Organisations must prove they're managing psych risk—right now</li>
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
              <li>• 76% of Australian workers report burnout</li>
              <li>• Mental health claims have doubled in a decade (97% increase)</li>
              <li>• Managers account for 70% of engagement variance (Gallup)</li>
              <li>• The people who should solve this ARE the problem</li>
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
              <li>• Agentic AI can now autonomously interpret behavioural data</li>
              <li>• Privacy-preserving analysis (metadata only) is production-ready</li>
              <li>• Cost per analysis has dropped 90% since 2023</li>
              <li>• Technology finally matches the problem complexity</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-lg shadow-xl border-4 border-purple-700">
            <h3 className="text-xl font-bold text-white mb-2">The Convergence Point</h3>
            <p className="text-sm text-white/90">
              For the first time, regulatory pressure, workplace crisis, and technological capability have aligned. 
              Organizations need compliance-ready AI solutions—and they need them now.
            </p>
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
