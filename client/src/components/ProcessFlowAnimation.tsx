import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Brain, Zap, Target, CheckCircle, RefreshCw, Database, TrendingUp } from "lucide-react";

export default function ProcessFlowAnimation() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    setIsPlaying(!mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      setIsPlaying(!mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const stages = [
    { id: 0, name: "Input", active: true },
    { id: 1, name: "Processing", active: false },
    { id: 2, name: "Output", active: false },
    { id: 3, name: "Feedback", active: false },
  ];

  useEffect(() => {
    if (!isPlaying || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, prefersReducedMotion]);

  // Color mappings for proper Tailwind compilation
  const colorClasses = {
    blue: {
      border: "border-blue-500",
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    indigo: {
      border: "border-indigo-500",
      bg: "bg-indigo-50",
      text: "text-indigo-600",
    },
    purple: {
      border: "border-purple-500",
      bg: "bg-purple-50",
      text: "text-purple-600",
    },
    violet: {
      border: "border-violet-500",
      bg: "bg-violet-50",
      text: "text-violet-600",
    },
    green: {
      border: "border-green-500",
      bg: "bg-green-50",
      text: "text-green-600",
    },
    emerald: {
      border: "border-emerald-500",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
    },
    orange: {
      border: "border-orange-500",
      bg: "bg-orange-50",
      text: "text-orange-600",
    },
  };

  const stakeholders = [
    {
      id: "employees",
      title: "Employees",
      subtitle: "Workplace Signals",
      icon: Users,
      color: "blue" as const,
      items: [
        "Meeting patterns",
        "After-hours activity",
        "Response times",
        "Collaboration data",
      ],
      position: { x: 0, y: 50 },
    },
    {
      id: "integrations",
      title: "System Integrations",
      subtitle: "Data Sources",
      icon: Database,
      color: "indigo" as const,
      items: [
        "Microsoft 365",
        "Google Workspace",
        "Slack/Teams",
        "HRIS systems",
      ],
      position: { x: 0, y: 150 },
    },
  ];

  const aiProcessing = [
    {
      id: "agentic",
      title: "Agentic AI",
      subtitle: "Pattern Detection",
      icon: Brain,
      color: "purple" as const,
      items: [
        "Risk identification",
        "Anomaly detection",
        "Hazard mapping",
      ],
      position: { x: 300, y: 50 },
    },
    {
      id: "generative",
      title: "Generative AI",
      subtitle: "Nudge Creation",
      icon: Zap,
      color: "violet" as const,
      items: [
        "Context analysis",
        "Conversation scripts",
        "Action recommendations",
      ],
      position: { x: 300, y: 150 },
    },
  ];

  const outputs = [
    {
      id: "managers",
      title: "Managers",
      subtitle: "Weekly Briefs",
      icon: Target,
      color: "green" as const,
      items: [
        "Risk alerts",
        "OORA guides",
        "Micro-actions",
        "Team insights",
      ],
      position: { x: 600, y: 50 },
    },
    {
      id: "compliance",
      title: "Compliance System",
      subtitle: "Evidence Trail",
      icon: CheckCircle,
      color: "emerald" as const,
      items: [
        "Hazard register",
        "Consultation logs",
        "Control actions",
        "Audit reports",
      ],
      position: { x: 600, y: 150 },
    },
  ];

  const feedback = {
    id: "feedback",
    title: "Continuous Learning",
    subtitle: "Improvement Loop",
    icon: RefreshCw,
    color: "orange" as const,
    items: [
      "Action tracking",
      "Outcome measurement",
      "Model refinement",
      "Pattern learning",
    ],
    position: { x: 300, y: 250 },
  };

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Process Flow</h3>
        <p className="text-lg text-gray-600">See how data flows through the system</p>
        
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          data-testid="button-toggle-animation"
        >
          {isPlaying ? "Pause" : "Play"} Animation
        </button>
      </div>

      {/* Main Flow Diagram */}
      <div className="relative h-[400px] overflow-hidden">
        {/* Stage Labels */}
        <div className="absolute top-0 left-0 right-0 flex justify-around mb-4">
          {["Input", "Processing", "Output", "Feedback"].map((stage, idx) => (
            <motion.div
              key={stage}
              animate={{
                scale: activeStage === idx ? 1.15 : 1,
                y: activeStage === idx ? -2 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`text-sm font-semibold transition-colors duration-300 ${
                activeStage === idx ? "text-purple-600" : "text-gray-400"
              }`}
            >
              {stage}
            </motion.div>
          ))}
        </div>

        {/* Input Stakeholders */}
        <div className="absolute left-0 top-12 space-y-4">
          {stakeholders.map((stakeholder, idx) => {
            const Icon = stakeholder.icon;
            const isActive = activeStage === 0;
            return (
              <motion.div
                key={stakeholder.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: activeStage >= 0 ? 1 : 0.3,
                  x: 0,
                  scale: isActive ? 1.08 : 1,
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut",
                  delay: idx * 0.1 
                }}
                className={`w-48 p-4 rounded-lg border-2 transition-all duration-500 ${
                  isActive
                    ? `${colorClasses[stakeholder.color].border} ${colorClasses[stakeholder.color].bg} shadow-lg`
                    : "border-gray-200 bg-gray-50"
                }`}
                data-testid={`stakeholder-${stakeholder.id}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-5 h-5 ${colorClasses[stakeholder.color].text}`} />
                  <h4 className="text-sm font-bold text-gray-900">{stakeholder.title}</h4>
                </div>
                <p className="text-xs text-gray-600 mb-2">{stakeholder.subtitle}</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  {stakeholder.items.slice(0, 2).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* AI Processing */}
        <div className="absolute left-1/2 -translate-x-1/2 top-12 space-y-4">
          {aiProcessing.map((processor, idx) => {
            const Icon = processor.icon;
            const isActive = activeStage === 1;
            return (
              <motion.div
                key={processor.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: activeStage >= 1 ? 1 : 0.3,
                  scale: isActive ? 1.08 : 1,
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut",
                  delay: idx * 0.1 
                }}
                className={`w-48 p-4 rounded-lg border-2 transition-all duration-500 ${
                  isActive
                    ? `${colorClasses[processor.color].border} ${colorClasses[processor.color].bg} shadow-lg`
                    : "border-gray-200 bg-gray-50"
                }`}
                data-testid={`processor-${processor.id}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-5 h-5 ${colorClasses[processor.color].text}`} />
                  <h4 className="text-sm font-bold text-gray-900">{processor.title}</h4>
                </div>
                <p className="text-xs text-gray-600 mb-2">{processor.subtitle}</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  {processor.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Outputs */}
        <div className="absolute right-0 top-12 space-y-4">
          {outputs.map((output, idx) => {
            const Icon = output.icon;
            const isActive = activeStage === 2;
            return (
              <motion.div
                key={output.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: activeStage >= 2 ? 1 : 0.3,
                  x: 0,
                  scale: isActive ? 1.08 : 1,
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut",
                  delay: idx * 0.1 
                }}
                className={`w-48 p-4 rounded-lg border-2 transition-all duration-500 ${
                  isActive
                    ? `${colorClasses[output.color].border} ${colorClasses[output.color].bg} shadow-lg`
                    : "border-gray-200 bg-gray-50"
                }`}
                data-testid={`output-${output.id}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-5 h-5 ${colorClasses[output.color].text}`} />
                  <h4 className="text-sm font-bold text-gray-900">{output.title}</h4>
                </div>
                <p className="text-xs text-gray-600 mb-2">{output.subtitle}</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  {output.items.slice(0, 2).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Feedback Loop */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: activeStage >= 3 ? 1 : 0.3,
              y: 0,
              scale: activeStage === 3 ? 1.08 : 1,
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeInOut" 
            }}
            className={`w-64 p-4 rounded-lg border-2 transition-all duration-500 ${
              activeStage === 3
                ? `${colorClasses[feedback.color].border} ${colorClasses[feedback.color].bg} shadow-lg`
                : "border-gray-200 bg-gray-50"
            }`}
            data-testid="feedback-loop"
          >
            <div className="flex items-center gap-2 mb-2">
              <RefreshCw className={`w-5 h-5 ${colorClasses[feedback.color].text}`} />
              <h4 className="text-sm font-bold text-gray-900">{feedback.title}</h4>
            </div>
            <p className="text-xs text-gray-600 mb-2">{feedback.subtitle}</p>
            <ul className="text-xs text-gray-700 space-y-1">
              {feedback.items.slice(0, 2).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Animated Flow Lines */}
        <AnimatePresence>
          {activeStage >= 0 && (
            <>
              {/* Input to Processing */}
              <motion.svg
                className="absolute left-0 top-0 w-full h-full pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.path
                  d="M 200 80 Q 280 80 300 100"
                  stroke="#9333ea"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: activeStage >= 1 ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 200 180 Q 280 180 300 160"
                  stroke="#7c3aed"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: activeStage >= 1 ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                />

                {/* Processing to Output */}
                <motion.path
                  d="M 500 100 Q 580 100 600 100"
                  stroke="#10b981"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: activeStage >= 2 ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 500 160 Q 580 160 600 180"
                  stroke="#059669"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: activeStage >= 2 ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                />

                {/* Output to Feedback */}
                <motion.path
                  d="M 700 220 Q 650 260 450 280"
                  stroke="#f97316"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: activeStage >= 3 ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Feedback to Input */}
                <motion.path
                  d="M 350 300 Q 200 300 150 250"
                  stroke="#f97316"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: activeStage >= 3 ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                />
              </motion.svg>

              {/* Animated Particles */}
              {activeStage >= 1 && (
                <motion.div
                  className="absolute w-3 h-3 bg-purple-500 rounded-full"
                  animate={{
                    left: ["200px", "300px"],
                    top: ["80px", "100px"],
                  }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                />
              )}
              {activeStage >= 2 && (
                <motion.div
                  className="absolute w-3 h-3 bg-green-500 rounded-full"
                  animate={{
                    left: ["500px", "600px"],
                    top: ["100px", "100px"],
                  }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, delay: 1 }}
                />
              )}
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          <span className="font-semibold">Data Flow:</span> Employee signals → AI processing → Manager actions → Continuous improvement
        </p>
      </div>
    </div>
  );
}
