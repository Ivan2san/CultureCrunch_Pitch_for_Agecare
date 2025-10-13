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
    title: "Burnout Crisis",
    period: "(2023–2025)",
    icon: HeartCrack,
    tone: "red",
    bullets: [
      "76% of Australian workers report burnout",
      "Mental-health claims up ~97% over a decade",
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
  blue:
    "border-blue-300/70 hover:border-blue-400/90 focus:ring-blue-300/40 [&_svg]:text-blue-600",
  red:
    "border-red-300/70 hover:border-red-400/90 focus:ring-red-300/40 [&_svg]:text-red-600",
  green:
    "border-green-300/70 hover:border-green-400/90 focus:ring-green-300/40 [&_svg]:text-green-600",
};

export default function WhyNow() {
  return (
    <section id="why-now" className="relative isolate bg-white px-6 py-24 sm:py-28">
      {/* Heading */}
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          WHY NOW: <span className="text-indigo-600">Three forces converge</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Clear lanes show the pressure from regulation, the human cost of burnout, and
          the leap in AI capability—meeting at a single decision point.
        </p>
      </div>

      {/* Desktop: 3 lanes -> convergence bar */}
      <div className="mx-auto mt-14 hidden max-w-7xl lg:grid lg:grid-cols-12 lg:gap-6">
        {FORCES.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={f.id}
              className={`col-span-4 group rounded-2xl bg-white/90 backdrop-blur border p-6 shadow-sm transition-all focus-within:ring-2 ${toneStyles[f.tone]}`}
            >
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full bg-gray-50 grid place-items-center shrink-0">
                  <Icon className="size-7" aria-hidden />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold leading-tight text-gray-900">
                    {f.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-500">{f.period}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {f.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-gray-400/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* lane body */}
              <div className="mt-6 h-14 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-dashed border-gray-200" />

              {/* chevron into convergence rail */}
              <div className="mt-4 flex items-center text-sm text-gray-600">
                <ArrowRight className="mr-2 size-4" />
                Flows into the Convergence Point
              </div>
            </div>
          );
        })}

        {/* Convergence rail (sits under lanes, spans all columns) */}
        <div className="col-span-12 mt-8 relative">
          <div className="h-3 w-full rounded-full bg-gradient-to-r from-blue-200 via-purple-300 to-green-200" />
          <div className="absolute inset-x-0 -top-4 flex justify-center">
            <div className="relative w-full max-w-3xl">
              {/* glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-purple-400/30 to-indigo-400/30 blur-lg" />
              {/* card */}
              <div className="relative rounded-2xl border-2 border-purple-300 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 p-6 text-center shadow-2xl">
                <h4 className="text-white text-2xl font-bold">The Convergence Point</h4>
                <p className="mt-2 text-white/95">
                  Regulatory urgency × Burnout severity × AI capability →{" "}
                  <span className="font-semibold">
                    compliance-ready, evidence-based action.
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
              className={`relative rounded-2xl bg-white border p-5 shadow-sm ${toneStyles[f.tone]}`}
            >
              <div className="absolute -left-3 -top-3 rounded-full bg-gray-900 text-white size-8 grid place-items-center text-xs font-bold">
                {idx + 1}
              </div>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gray-50 grid place-items-center">
                  <Icon className="size-6" aria-hidden />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-semibold text-gray-900">{f.title}</h3>
                  <p className="text-xs font-medium text-gray-500">{f.period}</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-gray-700">
                {f.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-gray-400/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-400/25 to-indigo-400/25 blur" />
          <div className="relative rounded-2xl border-2 border-purple-300 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 p-5 text-center shadow-xl">
            <h4 className="text-white text-xl font-bold">The Convergence Point</h4>
            <p className="mt-1.5 text-white/95 text-sm">
              The three forces now align → time to act with a compliance-ready AI
              solution.
            </p>
          </div>
        </div>
      </div>

      {/* Footer caption */}
      <div className="mx-auto mt-12 max-w-4xl text-center">
        <p className="text-lg font-medium text-gray-800">
          <span className="font-bold text-indigo-600">2025:</span> The market is ready to bridge{" "}
          compliance requirements with practical, AI-driven action.
        </p>
      </div>
    </section>
  );
}
