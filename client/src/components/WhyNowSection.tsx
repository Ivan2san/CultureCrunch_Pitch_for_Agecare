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
    title: "Regulatory Compliance",
    period: "(2022–2024)",
    icon: Scale,
    tone: "blue",
    bullets: [
      "Psychosocial hazard regs active across Australia",
      "SafeWork NSW checks for 200+ employee orgs (2024)",
    ],
  },
  {
    id: "burnout",
    title: "Business Pressure & Leader Anxiety",
    period: "(2023–2025)",
    icon: HeartCrack,
    tone: "red",
    bullets: [
      "60% of leaders report high stress from external pressures (McKinsey)",
      "Leaders drive 70% of team outcomes yet lack support",
    ],
  },
  {
    id: "ai",
    title: "AI Maturity",
    period: "(2024–2025)",
    icon: BrainCircuit,
    tone: "green",
    bullets: [
      "Agentic AI interprets behavioural signals",
      "Privacy-preserving (metadata-only) analysis at scale",
    ],
  },
];

const toneStyles = {
  blue: "border-2 border-blue-400 dark:border-blue-600 hover:border-blue-500 dark:hover:border-blue-500 focus:ring-blue-300/40",
  red: "border-2 border-red-400 dark:border-red-600 hover:border-red-500 dark:hover:border-red-500 focus:ring-red-300/40",
  green: "border-2 border-green-400 dark:border-green-600 hover:border-green-500 dark:hover:border-green-500 focus:ring-green-300/40",
};

const iconColors = {
  blue: "text-blue-600 dark:text-blue-400",
  red: "text-red-600 dark:text-red-400",
  green: "text-green-600 dark:text-green-400",
};

const bulletColors = {
  blue: "bg-blue-400/70 dark:bg-blue-500/70",
  red: "bg-red-400/70 dark:bg-red-500/70",
  green: "bg-green-400/70 dark:bg-green-500/70",
};

export default function WhyNowSection() {
  return (
    <section id="why-now" className="relative isolate bg-corporate-gradient px-6 py-24 sm:py-32 flex-wrap">
      {/* Heading */}
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground" style={{ letterSpacing: '-0.01em' }}>
          WHY NOW: <span className="text-blue-600 dark:text-blue-400">Three forces converge</span>
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
              <div className="flex items-center gap-3 flex-wrap">
                <div className="size-12 rounded-full bg-muted grid place-items-center shrink-0">
                  <Icon className={`size-7 ${iconColors[f.tone]}`} aria-hidden />
                </div>
                <div className="text-left">
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
          <div className="h-3 w-full rounded-full bg-gradient-to-r from-blue-300 via-purple-400 to-green-300" />
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
                  Regulatory urgency × Leader pressure × AI capability →{" "}
                  <span className="font-semibold">
                    compliance-ready, leader-supporting action.
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
              <div className="flex items-center gap-3 flex-wrap">
                <div className="size-10 rounded-full bg-muted grid place-items-center shrink-0">
                  <Icon className={`size-6 ${iconColors[f.tone]}`} aria-hidden />
                </div>
                <div className="text-left">
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
              The three forces now align → time to support leaders with compliance-ready AI.
            </p>
          </div>
        </div>
      </div>

      {/* Footer caption */}
      <div className="mx-auto mt-12 lg:mt-40 max-w-4xl text-center">
        <p className="text-lg md:text-xl font-semibold text-foreground" style={{ letterSpacing: '-0.005em' }}>
          <span className="font-bold text-blue-600 dark:text-blue-400">2025:</span> The market is ready to bridge{" "}
          compliance requirements with practical, AI-driven action.
        </p>
      </div>

      {/* Performance Gap - The Business Case */}
      <div className="mx-auto mt-16 max-w-7xl">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-2xl p-10 border-2 border-green-300 dark:border-green-700">
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
              <div key={index} className="text-center p-5 bg-white dark:bg-background rounded-xl border-2 border-green-400 dark:border-green-600 hover-elevate transition-all">
                <div className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400 mb-2" style={{ letterSpacing: '-0.01em' }}>{item.value}</div>
                <div className="text-base font-bold text-foreground mb-1" style={{ letterSpacing: '-0.005em' }}>{item.label}</div>
                <div className="text-xs text-muted-foreground" style={{ letterSpacing: '-0.005em' }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t-2 border-green-300 dark:border-green-700">
            <p className="text-center text-base font-semibold text-green-700 dark:text-green-400 mb-2">
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
