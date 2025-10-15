import { Scale, HeartCrack, BrainCircuit, ArrowRight } from "lucide-react";

type Force = {
  id: "reg" | "burnout" | "ai";
  title: string;
  period: string;
  icon: React.ElementType;
  tone: "blue" | "red" | "green";
  bullets: string[];
};

const FORCES: Force[] = [
  {
    id: "reg",
    title: "Aged Care Regulatory Tsunami",
    period: "(2023–2025)",
    icon: Scale,
    tone: "blue",
    bullets: [
      "WHS psychosocial regs (April 2023): Manage 17 specific hazards",
      "NSW inspector visits up 25%; Victoria detailed regs Dec 2025",
      "255 regulatory actions in 2023-24; penalties up to $1.5M per breach",
    ],
  },
  {
    id: "burnout",
    title: "Workforce Crisis & Burnout",
    period: "(2023–2025)",
    icon: HeartCrack,
    tone: "red",
    bullets: [
      "43,000 vacancies now; 84,900 staff left in 12 months (27% turnover)",
      "Mental health claims: $58.6K median, 34 weeks off (4x other injuries)",
      "Only 49% of workers say workload is manageable",
    ],
  },
  {
    id: "ai",
    title: "AI Maturity for Aged Care",
    period: "(2024–2025)",
    icon: BrainCircuit,
    tone: "green",
    bullets: [
      "Agentic AI can now detect burnout patterns in real-time",
      "Privacy-preserving analysis suitable for aged care compliance",
      "Transforms reactive incident response into proactive risk management",
    ],
  },
];

const toneStyles = {
  blue: "border-2 border-indigo-400 hover:border-indigo-500 focus:ring-indigo-300/40",
  red: "border-2 border-purple-400 hover:border-purple-500 focus:ring-purple-300/40",
  green: "border-2 border-blue-400 hover:border-blue-500 focus:ring-blue-300/40",
};

const iconColors = {
  blue: "text-indigo-600",
  red: "text-purple-600",
  green: "text-blue-600",
};

const bulletColors = {
  blue: "bg-indigo-400/70",
  red: "bg-purple-400/70",
  green: "bg-blue-400/70",
};

export default function WhyNowSection() {
  return (
    <section id="why-now" className="relative isolate bg-corporate-gradient px-6 py-32 flex-wrap">
      {/* Heading */}
      <div className="mx-auto max-w-7xl text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16" style={{ letterSpacing: '-0.01em' }}>
          WHY NOW: <span className="text-indigo-600">Three forces converge</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>
          Clear lanes show regulatory pressure, leaders under strain from external forces, and
          the leap in AI capability—meeting at a single decision point.
        </p>
      </div>

      {/* Desktop: 3 lanes -> convergence bar */}
      <div className="mx-auto mt-14 hidden max-w-7xl lg:grid lg:grid-cols-12 lg:gap-6 lg:items-stretch">
        {FORCES.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={f.id}
              data-testid={`force-card-${f.id}`}
              className={`col-span-4 group rounded-xl bg-card/90 backdrop-blur p-6 shadow-md transition-all hover:shadow-lg focus-within:ring-2 h-full flex flex-col ${toneStyles[f.tone]}`}
            >
              <div className="flex items-start gap-3">
                <div className="size-12 rounded-full bg-muted grid place-items-center shrink-0">
                  <Icon className={`size-7 ${iconColors[f.tone]}`} aria-hidden />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-xl font-bold leading-tight text-foreground" style={{ letterSpacing: '-0.01em' }}>
                    {f.title}
                  </h3>
                  <p className="text-xs font-semibold text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>{f.period}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>
                {f.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2" data-testid={`bullet-${f.id}-${j}`}>
                    <span className={`mt-1.5 size-1.5 rounded-full shrink-0 ${bulletColors[f.tone]}`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* chevron into convergence rail */}
              <div className="mt-auto pt-6 flex items-center text-sm text-muted-foreground flex-wrap gap-2" style={{ letterSpacing: '-0.005em' }}>
                <ArrowRight className="size-4 shrink-0" />
                <span>Flows into the Convergence Point</span>
              </div>
            </div>
          );
        })}

        {/* Convergence rail (sits under lanes, spans all columns) */}
        <div className="col-span-12 mt-8 relative">
          <div className="h-3 w-full rounded-full bg-gradient-to-r from-indigo-300 via-purple-400 to-blue-300" />
          <div className="absolute inset-x-0 -top-4 flex justify-center">
            <div className="relative w-full max-w-3xl">
              {/* pulsing glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-purple-400/40 to-indigo-400/40 blur-xl animate-pulse" />
              {/* card */}
              <div 
                className="relative rounded-2xl border-2 border-purple-400 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 p-6 text-center shadow-2xl"
                data-testid="convergence-point"
              >
                <h4 className="text-white text-2xl font-bold" style={{ letterSpacing: '-0.01em' }}>The Convergence Point</h4>
                <p className="mt-2 text-white/95" style={{ letterSpacing: '-0.005em' }}>
                  Aged care compliance mandates × Workforce crisis × AI capability →{" "}
                  <span className="font-semibold">
                    the moment to transform psychosocial risk into retention.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stepper (1-2-3 → convergence) */}
      <div className="mx-auto mt-10 space-y-4 max-w-xl lg:hidden">
        {FORCES.map((f, idx) => {
          const Icon = f.icon;
          return (
            <div
              key={f.id}
              data-testid={`mobile-force-${f.id}`}
              className={`relative rounded-xl bg-card/90 backdrop-blur p-5 shadow-md ${toneStyles[f.tone]}`}
            >
              <div className="absolute -left-3 -top-3 rounded-full bg-foreground text-background size-8 grid place-items-center text-xs font-bold">
                {idx + 1}
              </div>
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-full bg-muted grid place-items-center shrink-0">
                  <Icon className={`size-6 ${iconColors[f.tone]}`} aria-hidden />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-base font-bold text-foreground" style={{ letterSpacing: '-0.01em' }}>{f.title}</h3>
                  <p className="text-xs font-semibold text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>{f.period}</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>
                {f.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className={`mt-1.5 size-1.5 rounded-full shrink-0 ${bulletColors[f.tone]}`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-400/30 to-indigo-400/30 blur animate-pulse" />
          <div 
            className="relative rounded-2xl border-2 border-purple-400 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 p-5 text-center shadow-xl"
            data-testid="mobile-convergence-point"
          >
            <h4 className="text-white text-xl font-bold" style={{ letterSpacing: '-0.01em' }}>The Convergence Point</h4>
            <p className="mt-1.5 text-white/95 text-sm" style={{ letterSpacing: '-0.005em' }}>
              The three forces align → time to turn aged care compliance into workforce retention.
            </p>
          </div>
        </div>
      </div>

      {/* Footer caption */}
      <div className="mx-auto mt-12 lg:mt-40 max-w-4xl text-center">
        <p className="text-lg md:text-xl font-semibold text-foreground" style={{ letterSpacing: '-0.005em' }}>
          <span className="font-bold text-indigo-600">2025:</span> Aged care providers can now transform{" "}
          psychosocial compliance into a workforce retention strategy.
        </p>
      </div>

      {/* Performance Gap - The Business Case */}
      <div className="mx-auto mt-16 max-w-7xl">
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-10 border-2 border-indigo-300">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
            The ROI of Psychosocial Safety: Direct Impact on Profit & Productivity
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-4xl mx-auto mb-8">
            Psychosocial safety isn't a "nice to have"—it's a competitive advantage. Engaged teams dramatically outperform disengaged ones:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "21%", label: "Higher Profitability", desc: "Direct bottom-line impact" },
              { value: "23%", label: "Higher Productivity", desc: "More output per employee" },
              { value: "59%", label: "Lower Turnover", desc: "Reduced hiring costs" },
              { value: "70%", label: "Fewer Safety Incidents", desc: "Lower risk exposure" },
            ].map((item, index) => (
              <div key={index} className="text-center p-5 bg-white rounded-xl border-2 border-indigo-400 hover-elevate transition-all">
                <div className="text-4xl md:text-5xl font-bold text-indigo-700 mb-2" style={{ letterSpacing: '-0.01em' }}>{item.value}</div>
                <div className="text-base font-bold text-foreground mb-1" style={{ letterSpacing: '-0.005em' }}>{item.label}</div>
                <div className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t-2 border-indigo-300">
            <p className="text-center text-base font-semibold text-indigo-700 mb-2">
              → Leaders who address psychosocial risks unlock measurable business performance
            </p>
            <p className="text-center text-sm text-muted-foreground">
              Source: Gallup Q12 Meta-Analysis (955,905 employees, 152 organisations)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
