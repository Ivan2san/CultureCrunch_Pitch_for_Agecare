import React from "react";
import {
  Shield,
  Brain,
  CheckCircle,
  AlertTriangle,
  Clock,
  Target,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Zap,
  ArrowRightCircle,
  Lock,
  CalendarDays,
  ListChecks,
  ThumbsUp,
  Wand2
} from "lucide-react";

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200">
    {children}
  </span>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-xl bg-white/60 p-4 text-center ring-1 ring-gray-200">
    <div className="text-2xl font-bold text-gray-900">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

// NOTE: backend-facing ideas to wire later:
// - POST /controls/{id}/plan { owner, milestones:[{date,label}], expectedDeltas, reviewDate }
// - POST /hazards/{id}/pulse { q1, q2, anonymous:true, consent:true } -> attaches to review entry
// - ManagerGPT Coach: GET/PUT /managers/{id}/goals and /managers/{id}/next-practice

type Step = {
  title: string;
  subtitle: string;
  layer: "SafetyShield" | "ManagerGPT" | "ActionLoop" | "All";
  points: string[];
  icon: React.ElementType;
  badge: string;
};

const steps: Step[] = [
  {
    title: "Monday morning — 3–5 min Manager Brief",
    subtitle: "Theme, behaviour focus, suggested prompt, options for this week",
    layer: "SafetyShield",
    points: [
      "Signals (e.g., meeting load ↑, recognition ↓) summarised",
      "Behaviour focus surfaced (Green ↑ / Red ↓) with a practical prompt",
      "Preps the team for an OORA conversation later today"
    ],
    icon: CalendarDays,
    badge: "Identify · Assess"
  },
  {
    title: "Monday afternoon — 20-minute OORA",
    subtitle: "Ownership · Observations · Requests · Agreements",
    layer: "ManagerGPT",
    points: [
      "Agree one Micro Practice to run this week",
      "Redesign-first chooser biases toward better work design",
      "Log the agreement; schedule mid-week nudge + Friday pulse"
    ],
    icon: ListChecks,
    badge: "Control"
  },
  {
    title: "Tue–Thu — Micro Practice in action",
    subtitle: "Small daily habit with light nudges and peer recognition",
    layer: "ManagerGPT",
    points: [
      "Contextual nudge (e.g., decide in the meeting; close one today)",
      "Optional shout-outs to reinforce Green behaviours",
      "Light metadata checks: shorter meetings, decision tags, 1:1 cadence"
    ],
    icon: Zap,
    badge: "Control · Evidence"
  },
  {
    title: "Friday — Reflection & Pulse",
    subtitle: "2-minute check: did we practice it, did it work, who modelled it",
    layer: "ActionLoop",
    points: [
      "Quick thumbs/scale + recognition post to the team channel",
      "Auto-summary (e.g., decision speed ↑, meeting time ↓)",
      "Review entry attached to the hazard in the register"
    ],
    icon: ThumbsUp,
    badge: "Review · Consult"
  },
  {
    title: "AI learning layer",
    subtitle: "Learns which practices move the metrics for each team",
    layer: "All",
    points: [
      "Optimises next week’s brief and timing",
      "Feeds exec dashboard with trust/energy/alignment trends",
      "Improves detection thresholds to reduce alert fatigue"
    ],
    icon: Wand2,
    badge: "Personalise"
  },
  {
    title: "Weekly output snapshot",
    subtitle: "Everything needed for audit and continuous improvement",
    layer: "ActionLoop",
    points: [
      "1 Manager Brief delivered · 1 OORA completed",
      "1 Micro Practice executed with adherence data",
      "1 Reflection & Recognition pulse · behaviour trend updated"
    ],
    icon: FileText,
    badge: "Audit pack"
  }
];

// Lightweight runtime self-checks (acts like smoke tests in-page)
function DevChecks() {
  const issues: string[] = [];
  if (!Array.isArray(steps) || steps.length === 0) issues.push("steps array is empty");
  steps.forEach((s, idx) => {
    if (!s.title) issues.push(`step[${idx}] missing title`);
    if (!s.icon) issues.push(`step[${idx}] missing icon`);
    if (!Array.isArray(s.points) || s.points.length === 0) issues.push(`step[${idx}] has no points`);
  });
  if (issues.length === 0) return null;
  return (
    <div className="mb-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900">
      <strong>Dev checks failed:</strong>
      <ul className="list-disc pl-5 text-sm">
        {issues.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ThriveGuard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
      <div className="mx-auto max-w-7xl">
        <DevChecks />
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="mb-3 text-5xl font-bold text-gray-900">
            ThriveGuard AI — <span className="text-indigo-600">Compliance-First</span>, Behaviour-Powered
          </h1>
          <p className="text-2xl font-semibold text-gray-800">
            Turn psychosocial compliance into auditable action and better leadership, automatically.
          </p>
          <p className="mt-2 text-lg text-indigo-700">
            Baseline: Identify–Assess–Control–Review–Consult. Overlay: Green vs Red behaviours for real change.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Time to Audit-Ready" value="≤ 30 days" />
            <Stat label="Manager Action Rate (pilot)" value="75%+" />
            <Stat label="After-hours ↓ in 4 wks" value="25–35%" />
            <Stat label="1-click Evidence Items" value="Register • Controls • Reviews" />
          </div>
        </header>

        {/* Value Proposition */}
        <section className="mb-12 rounded-xl bg-gradient-to-r from-red-600 to-red-700 p-8 text-white shadow-2xl">
          <h2 className="mb-3 text-center text-3xl font-bold">Why it matters</h2>
          <p className="mx-auto max-w-4xl text-center text-xl leading-relaxed">
            Regulators need proof you’re managing psychosocial hazards. Leaders need practical ways to do it.
            ThriveGuard gives you both: <span className="font-semibold underline">evidence by default</span> and
            <span className="font-semibold underline"> real-time manager coaching</span>.
          </p>
        </section>

        {/* Compliance Baseline */}
        <section className="mb-12 rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-gray-200">
          <h3 className="mb-2 text-3xl font-bold text-gray-900 text-center">Compliance Baseline</h3>
          <p className="mb-6 text-center text-lg text-gray-700">
            Designed around the Code’s loop so your evidence matches how inspectors think.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {/* Identify */}
            <div className="rounded-xl border-2 border-yellow-200 bg-yellow-50 p-5">
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                <h4 className="text-lg font-bold text-yellow-900">Identify</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>Signals: after-hours, 1:1 gaps, meeting load</li>
                <li>Consult: worker/HSR pulse capture</li>
                <li>Artefact: hazard entry created</li>
              </ul>
            </div>

            {/* Assess */}
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-5">
              <div className="mb-3 flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                <h4 className="text-lg font-bold text-blue-900">Assess</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>Likelihood × severity × duration</li>
                <li>Compounding hazards escalate priority</li>
                <li>Artefact: risk rating rationale</li>
              </ul>
            </div>

            {/* Control */}
            <div className="rounded-xl border-2 border-green-200 bg-green-50 p-5">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h4 className="text-lg font-bold text-green-900">Control</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>Hierarchy-biased chooser (redesign first)</li>
                <li>ManagerGPT scripts at moment-of-need</li>
                <li>Artefact: controls implemented</li>
              </ul>
            </div>

            {/* Review */}
            <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-5">
              <div className="mb-3 flex items-center gap-2">
                <Clock className="h-6 w-6 text-indigo-600" />
                <h4 className="text-lg font-bold text-indigo-900">Review</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>Pre/post metrics and micro-pulse</li>
                <li>Scheduled “still effective?” checks</li>
                <li>Artefact: review log + versioning</li>
              </ul>
            </div>

            {/* Consult */}
            <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-5">
              <div className="mb-3 flex items-center gap-2">
                <Users className="h-6 w-6 text-purple-600" />
                <h4 className="text-lg font-bold text-purple-900">Consult</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>Worker input and HSR co-sign</li>
                <li>Consultation timeline per hazard</li>
                <li>Artefact: participation evidence</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <Pill>Job demands</Pill>
            <Pill>Low control</Pill>
            <Pill>Poor support</Pill>
            <Pill>Role clarity</Pill>
            <Pill>Change</Pill>
            <Pill>Justice & reward</Pill>
            <Pill>Bullying/harassment</Pill>
            <Pill>Remote/isolated work</Pill>
          </div>
        </section>

        {/* TripleGoal / LGP Behavioural Overlay */}
        <section className="mb-12 rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-gray-200">
          <h3 className="mb-2 text-center text-3xl font-bold text-gray-900">
            TripleGoal/LGP Behavioural Overlay
          </h3>
          <p className="mb-6 text-center text-lg text-gray-700">
            Tie every hazard to leadership behaviours to amplify (Green) and counter (Red). ManagerGPT uses these
            to generate situational scripts and work redesign prompts.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Green behaviours */}
            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6">
              <div className="mb-3 flex items-center gap-2">
                <Brain className="h-6 w-6 text-emerald-700" />
                <h4 className="text-lg font-bold text-emerald-900">Green behaviours to amplify</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>Respectful feedback and active listening</li>
                <li>Empowerment: freedom/choice on approach</li>
                <li>Focus: prioritise and reduce low-value meetings</li>
                <li>Fairness: transparent decision-making</li>
              </ul>
            </div>

            {/* Red behaviours */}
            <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-6">
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-rose-700" />
                <h4 className="text-lg font-bold text-rose-900">Red behaviours to counter</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>Micromanagement and meeting domination</li>
                <li>Defensiveness and reactivity under pressure</li>
                <li>Unrealistic deadlines and scope creep</li>
                <li>Public blame and idea shutdowns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* NEW: How it Works in Practice (timeline) */}
        <section id="how-it-works-in-practice" className="mb-12 rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-gray-200">
          <h3 className="mb-2 text-center text-3xl font-bold text-gray-900">How it Works in Practice</h3>
          <p className="mb-8 text-center text-lg text-gray-700">
            A simple weekly rhythm that converts signals into agreements, agreements into Micro Practices, and Micro Practices into auditable outcomes.
          </p>

          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-indigo-200 via-indigo-200 to-transparent md:left-1/2"></div>
            <div className="space-y-8">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const side = i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10";
                const align = i % 2 === 0 ? "md:items-end" : "md:items-start";
                return (
                  <div key={s.title} className={`relative grid grid-cols-[40px_1fr] items-start gap-4 md:grid-cols-2 ${align}`}>
                    <div className="relative ml-2 mt-2 h-10 w-10 rounded-full bg-indigo-600 text-white ring-4 ring-indigo-100 md:ml-0 md:translate-x-[-50%]">
                      <div className="flex h-10 w-10 items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className={`rounded-xl border border-gray-200 bg-gray-50 p-5 ${side}`}>
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <Pill>{s.badge}</Pill>
                        <Pill>{s.layer}</Pill>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">{s.title}</h4>
                      <p className="mb-3 text-sm text-gray-700">{s.subtitle}</p>
                      <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
                        {s.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm text-gray-800">
              Outputs funnel into the Audit Pack automatically: updated risk register entries, controls implemented, consultation artefacts, and review logs with before/after deltas.
            </p>
          </div>
        </section>

        {/* UPDATED: How it works — 3 layers with verbs */}
        <section className="mb-12 rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-gray-200">
          <h3 className="mb-6 text-center text-3xl font-bold text-gray-900">How it works: Detect · Decide · Do · Demonstrate</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-red-50 p-6 ring-1 ring-red-200">
              <div className="mb-3 flex items-center gap-3">
                <Shield className="h-8 w-8 text-red-600" />
                <h4 className="text-xl font-bold text-red-900">SafetyShield</h4>
              </div>
              <div className="mb-2 flex flex-wrap gap-2"><Pill>Detect</Pill></div>
              <p className="text-sm text-gray-800">
                Detects hazard patterns, creates register entries, and keeps documentation current.
              </p>
            </div>

            <div className="rounded-xl bg-purple-50 p-6 ring-1 ring-purple-200">
              <div className="mb-3 flex items-center gap-3">
                <Brain className="h-8 w-8 text-purple-600" />
                <h4 className="text-xl font-bold text-purple-900">ManagerGPT</h4>
              </div>
              <div className="mb-2 flex flex-wrap gap-2"><Pill>Decide</Pill><Pill>Do</Pill></div>
              <p className="text-sm text-gray-800">
                Redesign-first control chooser and conversation scripts grounded in Green/Red behaviours.
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-6 ring-1 ring-green-200">
              <div className="mb-3 flex items-center gap-3">
                <FileText className="h-8 w-8 text-green-600" />
                <h4 className="text-xl font-bold text-green-900">ActionLoop</h4>
              </div>
              <div className="mb-2 flex flex-wrap gap-2"><Pill>Do</Pill><Pill>Demonstrate</Pill></div>
              <p className="text-sm text-gray-800">
                Tracks action vs ignore, before/after deltas, and generates the audit export automatically.
              </p>
            </div>
          </div>
        </section>

        {/* NEW: What we’re adopting (surgically, not wholesale) */}
        <section id="worth-adopting" className="mb-12 rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-gray-200">
          <h3 className="mb-2 text-center text-3xl font-bold text-gray-900">What we’re adopting (surgically)</h3>
          <p className="mb-6 text-center text-lg text-gray-700">
            Inspired by best-in-class EX platforms. Integrated for psychosocial safety ops and WHS compliance.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Persistent AI Coaching persona */}
            <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6">
              <div className="mb-3 flex items-center gap-2">
                <Brain className="h-6 w-6 text-purple-700" />
                <h4 className="text-lg font-bold text-purple-900">ManagerGPT Coach (persistent)</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>Goals, weekly check-ins, and “next best micro-practice.”</li>
                <li>Success criteria linked to hazard reductions.</li>
                <li className="text-xs text-purple-900">
                  Impl note: <code>/managers/&lbrace;id&rbrace;/goals</code>, <code>/managers/&lbrace;id&rbrace;/next-practice</code>
                </li>
              </ul>
            </div>

            {/* Action plans with milestones */}
            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6">
              <div className="mb-3 flex items-center gap-2">
                <ListChecks className="h-6 w-6 text-emerald-700" />
                <h4 className="text-lg font-bold text-emerald-900">Templatized action plans</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>Owner, milestones, expected deltas, review date.</li>
                <li>Milestone nudges via ActionLoop.</li>
                <li className="text-xs text-emerald-900">
                  Impl note: <code>/controls/&lbrace;id&rbrace;/plan</code>
                </li>
              </ul>
            </div>

            {/* Conversational micro-pulses */}
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
              <div className="mb-3 flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-blue-700" />
                <h4 className="text-lg font-bold text-blue-900">Conversational micro-pulses</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>Optional, consented, 2-question narrative prompts at review.</li>
                <li>Anonymous by default; attached to a single hazard.</li>
                <li className="text-xs text-blue-900">
                  Impl note: <code>/hazards/&lbrace;id&rbrace;/pulse</code>
                </li>
              </ul>
            </div>

            {/* Healthcare Safety Culture template */}
            <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-6">
              <div className="mb-3 flex items-center gap-2">
                <Shield className="h-6 w-6 text-rose-700" />
                <h4 className="text-lg font-bold text-rose-900">Healthcare Safety Culture template</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>Preset mapping aligned to accreditation language.</li>
                <li>Ingest survey outputs if present; ops/evidence remains our differentiator.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm text-gray-800">
              These enhancements keep our positioning: listening tools surface themes; ThriveGuard turns them into
              redesign-first actions and audit-ready proof.
            </p>
          </div>
        </section>

        {/* Audit Pack + Privacy + ROI */}
        <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-gray-200">
            <div className="mb-3 flex items-center gap-2">
              <FileText className="h-6 w-6 text-gray-700" />
              <h4 className="text-lg font-bold text-gray-900">Audit Pack</h4>
            </div>
            <p className="text-sm text-gray-800">
              One-click bundle: risk register, consultation timeline, controls, review logs, and pre/post metrics.
            </p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">
              Export sample <ArrowRightCircle className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-gray-200">
            <div className="mb-3 flex items-center gap-2">
              <Lock className="h-6 w-6 text-gray-700" />
              <h4 className="text-lg font-bold text-gray-900">Privacy & Trust</h4>
            </div>
            <p className="text-sm text-gray-800">
              Metadata-only by default, transparent “why this alert,” team-level aggregation, opt-outs, HSR visibility.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Pill>Data minimisation</Pill>
              <Pill>Consultation centric</Pill>
              <Pill>Redaction</Pill>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-gray-200">
            <div className="mb-3 flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-gray-700" />
              <h4 className="text-lg font-bold text-gray-900">ROI & Outcomes</h4>
            </div>
            <p className="text-sm text-gray-800">
              Track action rate, time-to-mitigation, and impact deltas. Correlate Green behaviour uplift with risk
              reduction for a CFO-friendly story.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Pill>Action rate</Pill>
              <Pill>Time-to-mitigation</Pill>
              <Pill>After-hours ↓</Pill>
            </div>
          </div>
        </section>

        {/* CTA */}
        <footer className="text-center">
          <p className="mb-4 text-2xl font-semibold text-gray-800 italic">
            The platform that turns compliance obligations into repeatable manager behaviour change.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-700"
            >
              Start a 30-day compliance pilot <ArrowRightCircle className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-indigo-700 ring-1 ring-indigo-200 hover:bg-indigo-50"
            >
              View sample audit export <FileText className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50"
            >
              See ManagerGPT in action <MessageSquare className="h-5 w-5" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
