import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Brain, Zap, Target, CheckCircle, RefreshCw, Database, TrendingUp } from "lucide-react";

export default function ProcessFlowAnimation() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Refs for card positions
  const inputRef1 = useRef<HTMLDivElement>(null);
  const inputRef2 = useRef<HTMLDivElement>(null);
  const processingRef1 = useRef<HTMLDivElement>(null);
  const processingRef2 = useRef<HTMLDivElement>(null);
  const outputRef1 = useRef<HTMLDivElement>(null);
  const outputRef2 = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [pathData, setPathData] = useState({
    input1ToProcess1: "",
    input2ToProcess2: "",
    process1ToOutput1: "",
    process2ToOutput2: "",
    outputToFeedback: "",
    feedbackToInput: "",
  });

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
  
  // Calculate connection paths based on actual card positions
  useEffect(() => {
    const calculatePaths = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current.getBoundingClientRect();
      
      const getCenter = (ref: React.RefObject<HTMLDivElement>) => {
        if (!ref.current) return { x: 0, y: 0 };
        const rect = ref.current.getBoundingClientRect();
        const containerRect = containerRef.current!.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      };
      
      // Calculate all paths using centers (unaffected by scale transform)
      const in1Center = getCenter(inputRef1);
      const in2Center = getCenter(inputRef2);
      const proc1Center = getCenter(processingRef1);
      const proc2Center = getCenter(processingRef2);
      const out1Center = getCenter(outputRef1);
      const out2Center = getCenter(outputRef2);
      
      // Get feedback center (also unaffected by scale)
      const feedbackCenter = getCenter(feedbackRef);
      
      // Calculate control points for smooth curves using centers
      const midX1 = (in1Center.x + proc1Center.x) / 2;
      const midX2 = (proc1Center.x + out1Center.x) / 2;
      const midX3 = (out2Center.x + feedbackCenter.x) / 2;
      const midY3 = (out2Center.y + feedbackCenter.y) / 2;
      const midX4 = (feedbackCenter.x + in1Center.x) / 2;
      const midY4 = (feedbackCenter.y + in1Center.y) / 2;
      
      setPathData({
        input1ToProcess1: `M ${in1Center.x} ${in1Center.y} Q ${midX1} ${in1Center.y} ${proc1Center.x} ${proc1Center.y}`,
        input2ToProcess2: `M ${in2Center.x} ${in2Center.y} Q ${midX1} ${in2Center.y} ${proc2Center.x} ${proc2Center.y}`,
        process1ToOutput1: `M ${proc1Center.x} ${proc1Center.y} Q ${midX2} ${proc1Center.y} ${out1Center.x} ${out1Center.y}`,
        process2ToOutput2: `M ${proc2Center.x} ${proc2Center.y} Q ${midX2} ${proc2Center.y} ${out2Center.x} ${out2Center.y}`,
        outputToFeedback: `M ${out2Center.x} ${out2Center.y} Q ${midX3} ${midY3} ${feedbackCenter.x} ${feedbackCenter.y}`,
        feedbackToInput: `M ${feedbackCenter.x} ${feedbackCenter.y} Q ${midX4} ${midY4} ${in1Center.x} ${in1Center.y}`,
      });
    };
    
    // Calculate immediately when stage changes
    calculatePaths();
    
    // Recalculate after animation completes (600ms duration)
    const timer = setTimeout(calculatePaths, 650);
    
    window.addEventListener('resize', calculatePaths);
    return () => {
      window.removeEventListener('resize', calculatePaths);
      clearTimeout(timer);
    };
  }, [activeStage]);

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
      <div ref={containerRef} className="relative h-[500px] overflow-hidden">
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
            const ref = idx === 0 ? inputRef1 : inputRef2;
            return (
              <motion.div
                key={stakeholder.id}
                ref={ref}
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
            const ref = idx === 0 ? processingRef1 : processingRef2;
            return (
              <motion.div
                key={processor.id}
                ref={ref}
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
            const ref = idx === 0 ? outputRef1 : outputRef2;
            return (
              <motion.div
                key={output.id}
                ref={ref}
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
        <div className="absolute left-1/2 -translate-x-1/2 top-[320px]">
          <motion.div
            ref={feedbackRef}
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
              {/* Dynamic Connection Lines */}
              <motion.svg
                className="absolute left-0 top-0 w-full h-full pointer-events-none hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {pathData.input1ToProcess1 && (
                  <motion.path
                    d={pathData.input1ToProcess1}
                    stroke="#9333ea"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: activeStage >= 1 ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                )}
                {pathData.input2ToProcess2 && (
                  <motion.path
                    d={pathData.input2ToProcess2}
                    stroke="#7c3aed"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: activeStage >= 1 ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                  />
                )}

                {/* Processing to Output */}
                {pathData.process1ToOutput1 && (
                  <motion.path
                    d={pathData.process1ToOutput1}
                    stroke="#10b981"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: activeStage >= 2 ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                )}
                {pathData.process2ToOutput2 && (
                  <motion.path
                    d={pathData.process2ToOutput2}
                    stroke="#059669"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: activeStage >= 2 ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                  />
                )}

                {/* Output to Feedback */}
                {pathData.outputToFeedback && (
                  <motion.path
                    d={pathData.outputToFeedback}
                    stroke="#f97316"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: activeStage >= 3 ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                )}

                {/* Feedback to Input */}
                {pathData.feedbackToInput && (
                  <motion.path
                    d={pathData.feedbackToInput}
                    stroke="#f97316"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: activeStage >= 3 ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                  />
                )}
              </motion.svg>

              {/* Animated Particles - hidden on mobile for simplicity */}
              {activeStage >= 1 && (
                <motion.div
                  className="absolute w-3 h-3 bg-purple-500 rounded-full hidden md:block"
                  style={{ left: "25%", top: "100px" }}
                  animate={{
                    left: ["25%", "40%"],
                  }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                />
              )}
              {activeStage >= 2 && (
                <motion.div
                  className="absolute w-3 h-3 bg-green-500 rounded-full hidden md:block"
                  style={{ left: "59%", top: "100px" }}
                  animate={{
                    left: ["59%", "75%"],
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
