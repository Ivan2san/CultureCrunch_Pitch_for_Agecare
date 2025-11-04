# CultureCrunch – How the Technology Works (Client‑Safe Brief for Aged Care)

## Executive summary
- The solution is a secure, lightweight platform that captures short weekly staff check‑ins, turns them into manager‑ready briefs, and tracks follow‑through.
- Staff complete a 2‑minute mobile survey; managers receive a concise brief each Monday with one action that takes under 15 minutes.
- Smart reminders nudge teams if response rates dip and summarise progress without exposing personal details.
- A real‑time dashboard shows trends, risks and progress by facility and team, with simple controls to pause or focus attention.
- Data storage is minimised and de‑identified for insight, not surveillance; privacy and access are tightly controlled.
- The approach scales from a single facility to large provider networks without adding extra tools or manual effort.

---

## How it works

### 1) Client Experience Layer
**What staff see**
- A 3‑question weekly pulse that works on any phone. No logins or passwords required for staff.
- Clear, plain‑language scales (for example: clarity, recognition, workload) that take under 2 minutes.

**What leaders see**
- A short weekly brief in their inbox each Monday at 6 am local time: one headline insight, one red‑to‑green behaviour focus, and one micro‑action (<15 minutes).
- A simple web dashboard that shows last 6 weeks of trends, outstanding actions, and completion progress per team and facility.

**Why it helps aged care**
- Designed for frontline reality: quick, mobile‑first, low cognitive load during busy shifts.
- Consistent cadence builds habits without adding admin.

---

### 2) Action Layer
**Automated delivery**
- Briefs and surveys are sent on a fixed schedule aligned to provider time zones (for example: briefs Monday 6 am; pulse Friday 3 pm).
- If a team’s response rate drops below a threshold, a polite reminder goes to the leader on Thursday afternoon.

**Control & reliability**
- All sends are tracked, with automatic retries on temporary failures.
- Administrators can adjust timing per facility, trigger a send manually for testing, or pause a team during busy periods or audits.

**Outcome**
- Predictable weekly rhythm, fewer missed communications, less manual chasing.

---

### 3) Intelligence Layer
**Turning signals into guidance**
- Weekly pulse results are summarised into a concise leader brief that proposes one practical action, tuned to team size and recent context.
- A red‑to‑green index translates multiple indicators into a single 0–100 score to indicate direction of travel.
- Benchmarks show how a team compares to sector norms without naming other providers.

**Quality controls**
- All generated guidance is logged for review.
- Prompts and decision rules are versioned, allowing A/B testing to improve clarity and usefulness over time.

**Outcome**
- Less noise, more action. Leaders focus on the next best step rather than sifting through data.

---

### 4) Data Layer
**What is stored**
- Organisation and team setup, de‑identified pulse summaries, micro‑actions and their outcomes, audit‑friendly compliance artefacts.

**What is not stored**
- No personal medical information, no email/chat content, no meeting recordings, no individual open‑text diaries.

**Privacy & access**
- Data is scoped by facility and role‑based permissions (leaders see only their teams; executives see roll‑ups; auditors see evidence packs).
- Backups and disaster‑recovery are standard; changes to data structures are managed safely.

**Outcome**
- Insight without surveillance; safe to use in sensitive care environments.

---

## End‑to‑end flow (overview)
```mermaid
flowchart LR
  A[Fri 3 pm\n2‑min staff pulse] --> B[Secure data store\n(aggregated scores)]
  B --> C[Weekly intelligence\n(brief with 1 action)]
  C --> D[Mon 6 am\nLeader brief email]
  D --> E[Manager takes micro‑action\n(< 15 min)]
  E --> F[Dashboard updates\n(trends, actions)]
  F -->|Low response| G[Gentle reminder\nto leader]
  F -->|Audit period| H[Evidence pack\n(export)]
```

---

## Service levels and safeguards
- **Staff time:** < 2 minutes per week; **Leader time:** < 5 minutes per week.
- **Responsiveness:** typical page loads under 2 seconds; emails scheduled to local time zones.
- **Continuity:** automatic retries for sends; monitoring on delivery success.
- **Security by design:** least‑privilege access, facility‑level segregation, audit logs for key actions.
- **Compliance support:** exportable evidence showing pulse cadence, actions taken, and trends, suitable for psychosocial safety audits.

---

## Implementation path
**Week 1 – Foundation**
- Set up facilities, teams and access; confirm survey wording; launch basic dashboard.

**Week 2 – Core features live**
- Weekly pulse and brief cadence running; intelligence tuned on early feedback; evidence exports enabled.

**Week 3 – Pilot confirmation**
- First facility review; refine guidance messages; enable admin tools for provider operations.

Scales from a single facility to a provider network without changing the weekly experience.

---

## What this means for your organisation
- A lightweight, low‑burden way to keep a live pulse on psychosocial safety and team wellbeing across facilities.
- Clear, actionable guidance for leaders that fits around rosters, not on top of them.
- Transparent, audit‑ready evidence of identify‑assess‑control‑review cycles.

---

## Next 3 actions
1) Nominate one pilot facility and a manager sponsor.
2) Approve the 3 pulse questions and the weekly send times.
3) Provide a list of teams and leader emails to load into the system.

### Risks & mitigations
- **Low response rates:** built‑in reminders and simpler scales; option to run on‑shift prompts.
- **Email filtering:** pre‑launch allow‑listing and seed tests; automatic retries.
- **Change fatigue:** micro‑actions capped at 15 minutes; cadence aligned to rosters; ability to pause during high‑pressure periods.

