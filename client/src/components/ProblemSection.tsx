import { Card } from "@/components/ui/card";
import { ArrowRight, AlertTriangle, RotateCw } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const cycleStages = [
  { id: 1, label: "High Turnover", color: "#6366f1" },
  { id: 2, label: "Understaffing", color: "#6366f1" },
  { id: 3, label: "Increased Workload", color: "#8b5cf6" },
  { id: 4, label: "More Stress", color: "#8b5cf6" },
  { id: 5, label: "More Departures", color: "#6366f1" },
];

function SvgViciousCycle() {
  const centerX = 150;
  const centerY = 150;
  const radius = 75;
  const numStages = cycleStages.length;
  
  const angleStep = (2 * Math.PI) / numStages;
  const startAngle = -Math.PI / 2;
  
  const stagePositions = cycleStages.map((stage, i) => {
    const angle = startAngle + i * angleStep;
    return {
      ...stage,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      angle: angle,
    };
  });

  const createArrowPath = (from: { x: number; y: number; angle: number }, to: { x: number; y: number; angle: number }, color: string) => {
    const midAngle = Math.atan2(to.y - from.y, to.x - from.x);
    
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const offsetX = -dy * 0.15;
    const offsetY = dx * 0.15;
    const controlX = midX + offsetX;
    const controlY = midY + offsetY;
    
    const arrowSize = 8;
    const arrowAngle = Math.atan2(to.y - controlY, to.x - controlX);
    const arrowX = to.x - arrowSize * 1.5 * Math.cos(arrowAngle);
    const arrowY = to.y - arrowSize * 1.5 * Math.sin(arrowAngle);
    
    const leftX = arrowX + arrowSize * Math.cos(arrowAngle + Math.PI * 2.7/3);
    const leftY = arrowY + arrowSize * Math.sin(arrowAngle + Math.PI * 2.7/3);
    const rightX = arrowX + arrowSize * Math.cos(arrowAngle - Math.PI * 2.7/3);
    const rightY = arrowY + arrowSize * Math.sin(arrowAngle - Math.PI * 2.7/3);
    
    return {
      path: `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${arrowX} ${arrowY}`,
      arrowHead: `M ${to.x} ${to.y} L ${leftX} ${leftY} L ${rightX} ${rightY} Z`,
    };
  };

  const labelRadius = radius + 40;

  return (
    <svg viewBox="0 0 340 340" className="w-full max-w-lg mx-auto">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <marker
          id="circle-arrow"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto"
        >
          <path d="M 2 2 L 8 5 L 2 8 z" fill="#8b5cf6" opacity="0.6" />
        </marker>
      </defs>

      {/* Dashed circular guideline - drawn first to appear in background */}
      <circle
        cx={170}
        cy={170}
        r={labelRadius}
        fill="none"
        stroke="#c7d2fe"
        strokeWidth="2"
        strokeDasharray="6,8"
        opacity="0.5"
      />

      {/* Clockwise direction arrows on the circle */}
      {stagePositions.map((stage, i) => {
        const nextLabelAngle = startAngle + ((i + 0.5) * angleStep);
        const arrowX1 = 170 + (labelRadius - 5) * Math.cos(nextLabelAngle - 0.05);
        const arrowY1 = 170 + (labelRadius - 5) * Math.sin(nextLabelAngle - 0.05);
        const arrowX2 = 170 + (labelRadius - 5) * Math.cos(nextLabelAngle + 0.05);
        const arrowY2 = 170 + (labelRadius - 5) * Math.sin(nextLabelAngle + 0.05);
        
        return (
          <line
            key={`circle-arrow-${i}`}
            x1={arrowX1}
            y1={arrowY1}
            x2={arrowX2}
            y2={arrowY2}
            stroke="#8b5cf6"
            strokeWidth="2"
            markerEnd="url(#circle-arrow)"
            opacity="0.4"
          />
        );
      })}

      {/* Center icon with subtle glow */}
      <g transform={`translate(${170 - 16}, ${170 - 16})`}>
        <circle cx="16" cy="16" r="16" fill="#f5f3ff" opacity="0.9" />
        <circle cx="16" cy="16" r="14" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.3" />
        <text x="16" y="21" textAnchor="middle" fontSize="20" fill="#6366f1" fontWeight="600">↻</text>
      </g>

      {/* Arrow paths and heads */}
      {stagePositions.map((stage, i) => {
        const nextStage = stagePositions[(i + 1) % numStages];
        const adjustedStage = { ...stage, x: stage.x + 20, y: stage.y + 20 };
        const adjustedNextStage = { ...nextStage, x: nextStage.x + 20, y: nextStage.y + 20 };
        const { path, arrowHead } = createArrowPath(adjustedStage, adjustedNextStage, stage.color);
        
        return (
          <g key={`arrow-${i}`}>
            <path
              d={path}
              fill="none"
              stroke={stage.color}
              strokeWidth="2.5"
              opacity="0.7"
            />
            <path
              d={arrowHead}
              fill={stage.color}
              opacity="0.8"
              filter="url(#glow)"
            />
          </g>
        );
      })}

      {/* Stage labels with clean styling */}
      {stagePositions.map((stage, i) => {
        const labelAngle = startAngle + i * angleStep;
        const labelX = 170 + labelRadius * Math.cos(labelAngle);
        const labelY = 170 + labelRadius * Math.sin(labelAngle);
        
        return (
          <g key={`label-${stage.id}`}>
            <rect
              x={labelX - 50}
              y={labelY - 12}
              width="100"
              height="24"
              rx="12"
              fill="white"
              opacity="0.95"
              stroke={stage.color}
              strokeWidth="1.5"
            />
            <text
              x={labelX}
              y={labelY + 3}
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              fill={stage.color}
            >
              {stage.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function MobileViciousCycle() {
  return (
    <div className="flex flex-col items-center gap-4 py-6">
      {cycleStages.map((stage, index) => (
        <div key={stage.id} className="flex flex-col items-center">
          <div
            className="px-6 py-3 rounded-full text-sm font-semibold text-white shadow-md"
            style={{ backgroundColor: stage.color }}
          >
            {stage.label}
          </div>
          {index < cycleStages.length - 1 && (
            <ArrowRight className="my-2 rotate-90" style={{ color: stage.color }} size={24} />
          )}
        </div>
      ))}
      <div className="mt-2 flex items-center gap-2">
        <RotateCw className="text-indigo-600" size={20} />
        <div className="h-px w-12 bg-indigo-400"></div>
        <span className="text-xs text-muted-foreground">Cycle repeats</span>
      </div>
    </div>
  );
}

export default function ProblemSection() {
  const headerParallax = useParallax({ speed: -0.2 });
  const diagramParallax = useParallax({ speed: 0.15 });

  return (
    <section id="the-problem" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerParallax.ref} style={headerParallax.style} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.01em' }}>
            The Challenge in Aged Care
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Psychosocial hazards create a vicious cycle that impacts staff wellbeing, retention, and ultimately, quality of care.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">35%</div>
            <p className="text-sm text-muted-foreground">
              Annual turnover rate in aged care
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              — AIHW Workforce Report 2023
            </p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">2.3x</div>
            <p className="text-sm text-muted-foreground">
              Higher risk of mental health claims vs. other industries
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              — Safe Work Australia 2024
            </p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">78%</div>
            <p className="text-sm text-muted-foreground">
              Of aged care workers report experiencing psychosocial hazards
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              — HSU Research 2024
            </p>
          </Card>
        </div>

        {/* Vicious Cycle */}
        <div className="flex flex-col items-center gap-6 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            The Vicious Cycle
          </h3>

          <Card ref={diagramParallax.ref} style={diagramParallax.style} className="p-8 md:p-12 bg-card/40 backdrop-blur-sm">
            <div className="hidden md:flex flex-col items-center gap-6 mb-8">
              <SvgViciousCycle />
            </div>

            {/* Mobile Version */}
            <div className="md:hidden w-full">
              <MobileViciousCycle />
            </div>

            {/* Quote */}
            <div className="mt-8 text-center max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-muted-foreground italic">
                "Precarious resilience permeates all levels of the workforce. The emotional toll of caring work, combined with systemic understaffing and high turnover, creates a self-perpetuating cycle of stress and burnout."
              </p>
              <p className="text-sm text-muted-foreground">
                — The precarious resilience of aged care employees (2024)
              </p>
            </div>

            {/* Management Impact */}
            <div className="mt-6 bg-purple-50 rounded-lg p-8 md:p-10 border-l-4 border-purple-600">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-7 h-7 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-purple-700 mb-3 text-lg">Leaders Are Affected Too</p>
                  <p className="text-muted-foreground font-semibold">
                    "Psychosocial hazards are common for workers in the aged care sector, and this extends to management." The people trying to solve this crisis are drowning in it themselves.
                  </p>
                  <p className="text-xs text-muted-foreground mt-3 font-medium">
                    — Safe Work Australia, Psychosocial Hazards in Aged Care (2024)
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
