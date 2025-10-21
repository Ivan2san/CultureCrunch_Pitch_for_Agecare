import { Card } from "@/components/ui/card";
import { ArrowRight, AlertTriangle, RotateCw, TrendingDown, DollarSign, Shield, PackageX } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import SectionFeedbackButton from "@/components/SectionFeedbackButton";

const cycleStages = [
  { id: 1, label: "High Turnover", color: "#6366f1" },
  { id: 2, label: "Understaffing", color: "#6366f1" },
  { id: 3, label: "Increased Workload", color: "#8b5cf6" },
  { id: 4, label: "More Stress", color: "#8b5cf6" },
  { id: 5, label: "More Departures", color: "#6366f1" },
];

// Helper function to get color classes
const getColorClasses = (color: "rose" | "orange" | "blue" | "purple") => {
  const colorMap = {
    rose: {
      icon: "text-rose-600",
      stat: "text-rose-600"
    },
    orange: {
      icon: "text-orange-600",
      stat: "text-orange-600"
    },
    blue: {
      icon: "text-blue-600",
      stat: "text-blue-600"
    },
    purple: {
      icon: "text-purple-600",
      stat: "text-purple-600"
    }
  };
  return colorMap[color];
};

const crisisStats = [
  {
    category: "Human Cost",
    icon: TrendingDown,
    color: "rose" as const,
    stats: [
      { value: "41%", label: "Experiencing burnout", sublabel: "quite often or very often", source: "Palliative Care Australia 2024" },
      { value: "25-30%", label: "Annual turnover rate", sublabel: "industry consensus", source: "Aged Care Workforce Survey 2024" },
    ]
  },
  {
    category: "Financial Impact",
    icon: DollarSign,
    color: "orange" as const,
    stats: [
      { value: "$40-49K", label: "Per staff replacement", sublabel: "Australian aged care sector", source: "Roche et al. 2015" },
      { value: "$45.9K", label: "Mental health claim", sublabel: "5x cost of physical injuries", source: "Safe Work Australia 2024" },
    ]
  },
  {
    category: "Compliance Pressure",
    icon: Shield,
    color: "blue" as const,
    stats: [
      { value: "52%", label: "Feel confident", sublabel: "meeting psychosocial requirements", source: "ACCPA State of Sector 2024" },
      { value: "84%", label: "Expect greater strain", sublabel: "from new requirements", source: "ACCPA State of Sector 2024" },
    ]
  },
  {
    category: "Market Gap",
    icon: PackageX,
    color: "purple" as const,
    stats: [
      { value: "Zero", label: "Aged care-specific tools", sublabel: "for psychosocial safety", source: "CultureCrunch Market Scan 2025" },
      { value: "48.2%", label: "Cite burnout", sublabel: "as #1 reason for leaving", source: "Aged Care Worker Survey 2024" },
    ]
  }
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
  const headerParallax = useParallax({ speed: -0.1 });
  const statsParallax = useParallax({ speed: 0.05 });
  const diagramParallax = useParallax({ speed: 0.15 });

  return (
    <section id="problem" className="min-h-screen bg-corporate-gradient px-4 md:px-6 py-20 md:py-32 relative overflow-hidden">
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-40 right-20 w-[700px] h-[700px] bg-gradient-radial from-rose-400/30 via-pink-400/18 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-[750px] h-[750px] bg-gradient-radial from-purple-400/35 via-indigo-400/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-400/25 via-transparent to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerParallax.ref} style={headerParallax.style} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.01em' }}>
            A Crisis at the Intersection of Compliance, Workforce, and Care
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Aged care faces unprecedented regulatory pressure while managing a workforce crisis—with virtually no practical tools to address psychosocial safety.
          </p>
        </div>

        {/* Crisis in Numbers - Stat Cards by Category */}
        <div ref={statsParallax.ref} style={statsParallax.style} className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            The Crisis in Numbers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {crisisStats.map((category, catIndex) => {
              const Icon = category.icon;
              const colorClasses = getColorClasses(category.color);
              return (
                <div key={catIndex} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className={`w-6 h-6 ${colorClasses.icon}`} />
                    <h4 className="text-lg font-bold text-foreground">{category.category}</h4>
                  </div>
                  
                  {/* Stats for this category */}
                  <div className="grid grid-cols-1 gap-4">
                    {category.stats.map((stat, statIndex) => (
                      <Card key={statIndex} className="p-6" data-testid={`stat-card-${catIndex}-${statIndex}`}>
                        <div className={`text-3xl md:text-4xl font-bold ${colorClasses.stat} mb-2`} style={{ letterSpacing: '-0.01em' }}>
                          {stat.value}
                        </div>
                        <p className="text-sm font-semibold text-foreground mb-1">
                          {stat.label}
                        </p>
                        <p className="text-xs text-muted-foreground mb-3">
                          {stat.sublabel}
                        </p>
                        <p className="text-xs text-muted-foreground italic border-t border-border pt-2">
                          — {stat.source}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Current Tools Fail */}
        <Card className="p-8 bg-purple-50 border-l-4 border-purple-600" data-testid="market-gap-card">
          <div className="flex items-start gap-3">
            <PackageX className="w-7 h-7 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-purple-900 mb-3 text-lg">Why Current Tools Fail</h4>
              <p className="text-muted-foreground mb-4">
                Comprehensive market scan found <strong>zero aged care-specific psychosocial safety platforms</strong>. Existing tools focus on clinical documentation, rostering, or generic workplace surveys—none address the sector's unique challenges: dementia care, emotional labor, resident aggression, and death exposure.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-semibold text-purple-800 mb-1">What's Missing:</p>
                  <ul className="text-muted-foreground space-y-1 text-xs">
                    <li>• Proactive culture monitoring</li>
                    <li>• Early warning systems</li>
                    <li>• Sector-specific hazard libraries</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-purple-800 mb-1">Result:</p>
                  <ul className="text-muted-foreground space-y-1 text-xs">
                    <li>• 69% say reform pace too fast</li>
                    <li>• 74% need 6+ months to implement</li>
                    <li>• Only 30% have financial resources</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic mt-4 pt-3 border-t border-purple-200">
                — CultureCrunch Market Research 2025 (ACCPA State of Sector 2024)
              </p>
            </div>
          </div>
        </Card>
        <SectionFeedbackButton />
      </div>
    </section>
  );
}
