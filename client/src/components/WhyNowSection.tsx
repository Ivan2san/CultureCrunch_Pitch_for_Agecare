import { Scale, HeartCrack, BrainCircuit } from "lucide-react";

export default function WhyNowSection() {
  return (
    <section id="why-now" className="min-h-screen bg-corporate-gradient px-6 py-32 flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          WHY NOW: <span className="text-blue-600">Three Forces Have Collided</span>
        </h2>
        <p className="text-xl text-gray-700 mb-16">The perfect storm creating unprecedented opportunity</p>

        {/* Venn Diagram */}
        <div className="relative w-full max-w-4xl h-[500px] mx-auto mb-12">
          {/* Circle 1: Regulatory Compliance */}
          <div className="absolute top-0 left-[10%] w-[350px] h-[350px] rounded-full bg-blue-200/70 backdrop-blur-sm flex items-center justify-center p-8 border-4 border-blue-400 hover:scale-105 transition-transform" data-testid="circle-regulatory">
            <div className="text-center text-blue-900">
              <Scale className="w-12 h-12 mx-auto mb-3 text-blue-700" />
              <h3 className="text-lg font-bold mb-2">REGULATORY COMPLIANCE</h3>
              <p className="text-xs">(2022-2024)</p>
              <ul className="text-left text-sm space-y-1 mt-2">
                <li>• Active in all AU states</li>
                <li>• Penalties up to $11.5M</li>
                <li>• Mandatory proof required</li>
              </ul>
            </div>
          </div>

          {/* Circle 2: Burnout Crisis */}
          <div className="absolute top-[150px] left-[50%] -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-red-200/70 backdrop-blur-sm flex items-center justify-center p-8 border-4 border-red-400 hover:scale-105 transition-transform" data-testid="circle-burnout">
            <div className="text-center text-red-900">
              <HeartCrack className="w-12 h-12 mx-auto mb-3 text-red-700" />
              <h3 className="text-lg font-bold mb-2">BURNOUT CRISIS</h3>
              <p className="text-xs">(2023-2025)</p>
              <ul className="text-left text-sm space-y-1 mt-2">
                <li>• 61% AU workers burned out</li>
                <li>• 97% ↑ mental health claims</li>
                <li>• Managers ARE the problem</li>
              </ul>
            </div>
          </div>

          {/* Circle 3: AI Maturity */}
          <div className="absolute top-0 right-[10%] w-[350px] h-[350px] rounded-full bg-green-200/70 backdrop-blur-sm flex items-center justify-center p-8 border-4 border-green-400 hover:scale-105 transition-transform" data-testid="circle-ai">
            <div className="text-center text-green-900">
              <BrainCircuit className="w-12 h-12 mx-auto mb-3 text-green-700" />
              <h3 className="text-lg font-bold mb-2">AI MATURITY</h3>
              <p className="text-xs">(2024-2025)</p>
              <ul className="text-left text-sm space-y-1 mt-2">
                <li>• Agentic AI now ready</li>
                <li>• Privacy-preserving</li>
                <li>• 90% cost reduction</li>
              </ul>
            </div>
          </div>

          {/* Center: The Convergence Point */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-center p-4 border-4 border-purple-700 z-10 animate-pulse-ring" data-testid="convergence-center">
            <p className="text-lg font-bold">
              The Convergence Point
            </p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">
          <p className="text-2xl text-gray-800 font-semibold">
            <span className="font-bold text-blue-600">2025:</span> The market is ready for a solution 
            that bridges compliance requirements with practical, AI-driven action
          </p>
        </div>
      </div>
    </section>
  );
}
