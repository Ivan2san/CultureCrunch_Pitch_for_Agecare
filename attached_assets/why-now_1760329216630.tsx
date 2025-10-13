import React from 'react';
import { Scale, HeartCrack, BrainCircuit } from 'lucide-react';

const WhyNow = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-12">
          WHY NOW: <span className="text-blue-600">Three Forces Have Collided</span>
        </h1>

        <div className="relative w-[700px] h-[500px] mx-auto mb-12">
          {/* Circle 1: Regulatory Compliance */}
          <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-blue-200 opacity-70 mix-blend-multiply flex items-center justify-center p-8 shadow-lg border-4 border-blue-400">
            <div className="text-center text-blue-900">
              <Scale className="w-16 h-16 mx-auto mb-4 text-blue-700" />
              <h3 className="text-2xl font-bold mb-2">REGULATORY COMPLIANCE <br/>(2022-2024)</h3>
              <ul className="list-disc list-inside text-left text-lg space-y-1">
                <li>Psychosocial hazard regulations now active in all Australian states</li>
                <li>SafeWork NSW mandates checks for 200+ employee workplaces (2024)</li>
                <li>Penalties up to $11.5M for Category 1 offenses</li>
                <li>Organizations must prove they're managing psych risk—right now</li>
              </ul>
            </div>
          </div>

          {/* Circle 2: Burnout Crisis */}
          <div className="absolute top-[150px] left-[175px] w-[350px] h-[350px] rounded-full bg-red-200 opacity-70 mix-blend-multiply flex items-center justify-center p-8 shadow-lg border-4 border-red-400">
            <div className="text-center text-red-900">
              <HeartCrack className="w-16 h-16 mx-auto mb-4 text-red-700" />
              <h3 className="text-2xl font-bold mb-2">BURNOUT CRISIS <br/>(2023-2025)</h3>
              <ul className="list-disc list-inside text-left text-lg space-y-1">
                <li>76% of Australian workers report burnout</li>
                <li>Mental health claims have doubled in a decade (97% increase)</li>
                <li>Managers account for 70% of engagement variance (Gallup)</li>
                <li>The people who should solve this ARE the problem</li>
              </ul>
            </div>
          </div>

          {/* Circle 3: AI Maturity */}
          <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-green-200 opacity-70 mix-blend-multiply flex items-center justify-center p-8 shadow-lg border-4 border-green-400">
            <div className="text-center text-green-900">
              <BrainCircuit className="w-16 h-16 mx-auto mb-4 text-green-700" />
              <h3 className="text-2xl font-bold mb-2">AI MATURITY <br/>(2024-2025)</h3>
              <ul className="list-disc list-inside text-left text-lg space-y-1">
                <li>Agentic AI can now autonomously interpret behavioral data</li>
                <li>Privacy-preserving analysis (metadata only) is production-ready</li>
                <li>Cost per analysis has dropped 90% since 2023</li>
                <li>Technology finally matches the problem complexity</li>
              </ul>
            </div>
          </div>

          {/* Center: The Convergence Point */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-center p-4 shadow-xl border-4 border-purple-700 z-10">
            <p className="text-xl font-bold">
              The Convergence Point
            </p>
          </div>
        </div>

        <p className="text-3xl text-gray-800 font-semibold mt-8">
          <span className="font-bold text-blue-600">2025:</span> The market is ready for a solution that bridges compliance requirements with practical, AI-driven action
        </p>
      </div>
    </div>
  );
};

export default WhyNow;

