import { Card } from "@/components/ui/card";
import { ArrowRight, AlertTriangle, RotateCw } from "lucide-react";

const cycleStages = [
  { id: 1, label: "High Turnover", color: "purple" },
  { id: 2, label: "Understaffing", color: "purple" },
  { id: 3, label: "Increased Workload", color: "indigo" },
  { id: 4, label: "More Stress", color: "indigo" },
  { id: 5, label: "More Departures", color: "purple" },
];

function SvgViciousCycle() {
  const centerX = 175;
  const centerY = 175;
  const radius = 110;
  const numStages = cycleStages.length;
  
  const angleStep = (2 * Math.PI) / numStages;
  const startAngle = -Math.PI / 2;
  
  const stagePositions = cycleStages.map((stage, i) => {
    const angle = startAngle + i * angleStep;
    return {
      ...stage,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });

  const getRectangleEdgePoint = (centerX: number, centerY: number, angle: number) => {
    const boxWidth = 120;
    const boxHeight = 36;
    const halfWidth = boxWidth / 2;
    const halfHeight = boxHeight / 2;
    
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    
    const tan = Math.tan(angle);
    
    let edgeX, edgeY;
    
    if (Math.abs(tan * halfWidth) <= halfHeight) {
      edgeX = halfWidth * Math.sign(cos);
      edgeY = edgeX * tan;
    } else {
      edgeY = halfHeight * Math.sign(sin);
      edgeX = edgeY / tan;
    }
    
    return {
      x: centerX + edgeX,
      y: centerY + edgeY
    };
  };

  const createCurvedPath = (from: { x: number; y: number }, to: { x: number; y: number }) => {
    const angle = Math.atan2(to.y - from.y, to.x - from.x);
    const startEdge = getRectangleEdgePoint(from.x, from.y, angle);
    const endEdge = getRectangleEdgePoint(to.x, to.y, angle + Math.PI);
    
    const midX = (startEdge.x + endEdge.x) / 2;
    const midY = (startEdge.y + endEdge.y) / 2;
    const dx = endEdge.x - startEdge.x;
    const dy = endEdge.y - startEdge.y;
    const offsetX = -dy * 0.2;
    const offsetY = dx * 0.2;
    const controlX = midX + offsetX;
    const controlY = midY + offsetY;
    
    return `M ${startEdge.x} ${startEdge.y} Q ${controlX} ${controlY} ${endEdge.x} ${endEdge.y}`;
  };

  return (
    <svg viewBox="0 0 350 350" className="w-full max-w-xl mx-auto">
      <defs>
        <marker
          id="arrowhead-purple"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <polygon points="0 0, 8 4, 0 8" fill="#9333ea" />
        </marker>
        <marker
          id="arrowhead-indigo"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <polygon points="0 0, 8 4, 0 8" fill="#6366f1" />
        </marker>
      </defs>

      {/* Dashed circle guide */}
      <circle
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="none"
        stroke="#e9d5ff"
        strokeWidth="1"
        strokeDasharray="5,5"
      />

      {/* Center icon */}
      <g transform={`translate(${centerX - 16}, ${centerY - 16})`}>
        <circle cx="16" cy="16" r="16" fill="#faf5ff" opacity="0.8" />
        <text x="16" y="21" textAnchor="middle" fontSize="20" fill="#9333ea">↻</text>
      </g>

      {/* Curved connector paths with arrows */}
      {stagePositions.map((stage, i) => {
        const nextStage = stagePositions[(i + 1) % numStages];
        const markerColor = stage.color === "indigo" || nextStage.color === "indigo" ? "indigo" : "purple";
        const strokeColor = markerColor === "indigo" ? "#6366f1" : "#9333ea";
        
        return (
          <path
            key={`path-${i}`}
            d={createCurvedPath(stage, nextStage)}
            fill="none"
            stroke={strokeColor}
            strokeWidth="2.5"
            markerEnd={`url(#arrowhead-${markerColor})`}
          />
        );
      })}

      {/* Stage boxes */}
      {stagePositions.map((stage) => {
        const bgColor = stage.color === "indigo" ? "#eef2ff" : "#faf5ff";
        const borderColor = stage.id === 1 ? "#a855f7" : stage.color === "indigo" ? "#a5b4fc" : "#d8b4fe";
        const textColor = stage.color === "indigo" ? "#4338ca" : "#7e22ce";
        
        return (
          <g key={stage.id} transform={`translate(${stage.x}, ${stage.y})`}>
            <rect
              x="-60"
              y="-18"
              width="120"
              height="36"
              rx="6"
              fill={bgColor}
              stroke={borderColor}
              strokeWidth="2"
            />
            <text
              x="0"
              y="4"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill={textColor}
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
    <div className="relative">
      <div className="flex flex-col items-center gap-3 w-full max-w-xs mx-auto">
        {cycleStages.map((stage, i) => (
          <div key={stage.id}>
            <div className={`${
              stage.color === "indigo" ? "bg-indigo-50 border-indigo-300" : "bg-purple-50 border-purple-300"
            } ${stage.id === 1 ? "border-purple-400" : ""} border-2 rounded-lg px-6 py-3 text-center w-full shadow-sm`}>
              <p className={`font-bold ${
                stage.color === "indigo" ? "text-indigo-700" : "text-purple-700"
              }`}>{stage.label}</p>
            </div>
            {i < cycleStages.length - 1 && (
              <ArrowRight className={`mx-auto w-6 h-6 ${
                stage.color === "indigo" ? "text-indigo-600" : "text-purple-600"
              } rotate-90 my-1`} />
            )}
          </div>
        ))}
      </div>
      
      {/* Loop-back curved arrow */}
      <svg className="absolute -left-4 top-0 w-12 h-full" viewBox="0 0 50 300">
        <defs>
          <marker
            id="mobile-arrow"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
          >
            <polygon points="0 0, 8 4, 0 8" fill="#9333ea" />
          </marker>
        </defs>
        <path
          d="M 45 280 Q 10 250, 10 150 Q 10 50, 45 20"
          fill="none"
          stroke="#9333ea"
          strokeWidth="3"
          strokeDasharray="6,4"
          markerEnd="url(#mobile-arrow)"
        />
      </svg>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section id="problem" className="min-h-screen bg-corporate-gradient px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16" style={{ letterSpacing: '-0.01em' }}>
            The Problem: <span className="text-purple-600">Aged Care's Compliance & Workforce Crisis</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Aged care providers face a perfect storm: 1 in 5 facilities failing compliance audits, 27% staff turnover, and psychosocial hazards driving mass exodus
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic max-w-4xl mx-auto">
            All statistics from Australian aged care research, Safe Work Australia, and sector workforce surveys (2023-2025)
          </p>
        </div>

        {/* Main Content Grid - 4 Stylish Stat Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Box 1: Compliance Crisis */}
          <Card className="p-8 bg-card/40 backdrop-blur-sm flex flex-col items-center text-center hover-elevate transition-all">
            <div className="text-6xl md:text-7xl font-bold text-purple-600 mb-4" style={{ letterSpacing: '-0.02em' }}>1 in 5</div>
            <h4 className="font-bold text-xl text-foreground mb-2">Facilities Failing Compliance</h4>
            <p className="text-muted-foreground text-sm max-w-md">
              Only 82% of residential providers met all Quality Standards in 2023-24. Home care worse at 65%. 255 regulatory actions issued.
            </p>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50 w-full">
              Source: Aged Care Quality & Safety Commission Annual Report 2023-24
            </p>
          </Card>

          {/* Box 2: Burnout Crisis */}
          <Card className="p-8 bg-card/40 backdrop-blur-sm flex flex-col items-center text-center hover-elevate transition-all">
            <div className="text-6xl md:text-7xl font-bold text-indigo-600 mb-4" style={{ letterSpacing: '-0.02em' }}>65%</div>
            <h4 className="font-bold text-xl text-foreground mb-2">Nurses Experiencing Burnout</h4>
            <p className="text-muted-foreground text-sm max-w-md">
              65% of aged care nurses report moderate to severe emotional exhaustion, with 41% of all workers burnt out
            </p>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50 w-full">
              Source: Palliative Care Australia; Aged Care Worker Survey 2024
            </p>
          </Card>

          {/* Box 3: Psychosocial Drivers */}
          <Card className="p-8 bg-card/40 backdrop-blur-sm flex flex-col items-center text-center hover-elevate transition-all">
            <div className="text-6xl md:text-7xl font-bold text-purple-600 mb-4" style={{ letterSpacing: '-0.02em' }}>48%</div>
            <h4 className="font-bold text-xl text-foreground mb-2">Staff Feeling Burnt Out</h4>
            <p className="text-muted-foreground text-sm max-w-md">
              Top reasons for leaving: burnout (48%), lack of support (46%), stress (45%), frustration (42%)—all psychosocial factors
            </p>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50 w-full">
              Source: Aged Care Worker Survey 2024 (n=21,197)
            </p>
          </Card>

          {/* Box 4: Mental Health Claims Cost */}
          <Card className="p-8 bg-card/40 backdrop-blur-sm flex flex-col items-center text-center hover-elevate transition-all">
            <div className="text-6xl md:text-7xl font-bold text-indigo-600 mb-4" style={{ letterSpacing: '-0.02em' }}>$58.6K</div>
            <h4 className="font-bold text-xl text-foreground mb-2">Per Mental Health Claim</h4>
            <p className="text-muted-foreground text-sm max-w-md">
              Median payout for psychosocial injury claims—4x higher than physical injuries. Aged care accounts for 25%+ of all serious mental health claims.
            </p>
            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border/50 w-full">
              Source: Safe Work Australia 2020-21; Health & Social Care Sector Data
            </p>
          </Card>
        </div>

        {/* Vicious Cycle Section */}
        <div className="mt-16 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
              The Self-Reinforcing Crisis
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              High turnover creates a vicious cycle that traditional surveys detect too late to prevent
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card/40 backdrop-blur-sm">
            {/* Vicious Cycle - SVG Circular Diagram */}
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <RotateCw className="w-6 h-6 text-purple-600" />
                <p className="text-lg font-bold text-foreground">The Vicious Cycle</p>
              </div>

              {/* Desktop: Circular SVG diagram */}
              <div className="hidden md:block w-full">
                <SvgViciousCycle />
              </div>

              {/* Mobile: Vertical stack with loop-back arrow */}
              <div className="md:hidden w-full">
                <MobileViciousCycle />
              </div>
            </div>

            {/* Quote */}
            <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-purple-500">
              <p className="text-muted-foreground italic mb-2">
                "High turnover leads to understaffing, which directly increases the workload and stress on remaining staff, exacerbating psychosocial risks like fatigue, moral distress, and emotional labor."
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
