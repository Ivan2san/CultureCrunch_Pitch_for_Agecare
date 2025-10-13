# Culture Crunch Pitch Web App - Design Guidelines

## Design Approach: Enterprise Design System with Custom Branding

**Selected Framework**: Material Design principles adapted for B2B SaaS pitch presentation, emphasizing data clarity, trust-building, and professional credibility. The design balances information density with visual appeal to engage potential pilot partners.

**Design Principles**:
- **Trust & Credibility**: Professional aesthetics that inspire confidence in psychosocial safety solutions
- **Data-First Clarity**: Complex information presented with visual hierarchy and breathing room
- **Progressive Disclosure**: Hybrid navigation revealing information strategically as users engage
- **Action-Oriented**: Clear pathways to understanding value and taking next steps

---

## Color Palette

### Primary Brand Colors
**Light Mode**:
- Primary: `250 85% 60%` (Vibrant indigo-purple for CTAs, key highlights)
- Primary Variant: `245 75% 55%` (Deeper purple for hover states)
- Secondary: `220 90% 56%` (Bright blue for secondary actions, trust indicators)
- Background: `220 40% 98%` (Soft blue-gray for sections)
- Surface: `0 0% 100%` (Pure white for cards, elevated content)

**Dark Mode**:
- Primary: `250 75% 65%` (Lighter purple for visibility)
- Background: `235 20% 12%` (Deep navy-black)
- Surface: `235 18% 16%` (Elevated dark cards)

### Semantic Colors
- Success: `142 76% 36%` (Green for positive metrics, ROI gains)
- Warning: `38 92% 50%` (Amber for alerts, attention items)
- Error: `0 84% 60%` (Red for crisis statistics, current state costs)
- Info: `199 89% 48%` (Cyan for informational callouts)

### Gradient Overlays
- Hero Gradient: `linear-gradient(135deg, 250 85% 60% → 220 90% 56%)`
- Section Dividers: `linear-gradient(90deg, 250 70% 55% → transparent)`
- Data Visualization: Multi-step gradients using primary + secondary at varying opacity

---

## Typography

**Font Stack**:
- **Headings**: Inter (700, 800 weights) - Clean, modern, professional
- **Body**: Inter (400, 500, 600 weights) - Excellent readability for data-heavy content
- **Data/Numbers**: JetBrains Mono (500, 600 weights) - Monospace for metrics, calculations

**Type Scale**:
- Hero Headline: `text-5xl md:text-6xl font-bold` (48px → 60px)
- Section Headers: `text-3xl md:text-4xl font-bold` (30px → 36px)
- Card Titles: `text-xl font-semibold` (20px)
- Body Text: `text-base md:text-lg` (16px → 18px)
- Captions/Citations: `text-sm text-gray-600` (14px)
- Data Labels: `text-xs font-mono` (12px)

**Line Heights**: Generous spacing for readability - `leading-relaxed` for body, `leading-tight` for headlines

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Section padding: `py-20 md:py-32` (vertical breathing room)
- Card padding: `p-6 md:p-8`
- Component gaps: `gap-6 md:gap-8`
- Container max-width: `max-w-7xl mx-auto`

**Grid Patterns**:
- Statistics/Metrics: `grid-cols-2 md:grid-cols-4` (responsive stat cards)
- Feature Showcase: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Architecture Layers: `grid-cols-1 md:grid-cols-3` (Data → AI → Action flow)
- Two-Column Content: `grid-cols-1 lg:grid-cols-2 gap-8`

**Viewport Strategy**:
- Hero Section: `min-h-screen` with centered content, not forced 100vh
- Content Sections: Natural height based on content with consistent `py-20 md:py-32`
- No floating elements - all content grounded with proper context

---

## Component Library

### Navigation
- **Hybrid Navigation Bar**: 
  - Sticky top navigation with section links and logo
  - Smooth scroll anchors with active section highlighting (purple underline)
  - Forward/Back arrow buttons (bottom-right fixed position)
  - Progress indicator showing completion through pitch

### Hero Section - Vision
- **Layout**: Full-width gradient background (`from-indigo-50 to-purple-50`)
- **Content**: Centered headline + subheadline + animated icon grid showing AI evolution
- **Visual**: Abstract illustration of AI-human collaboration (use placeholder with comment for custom graphic)
- **CTA**: Primary button "Explore the Solution" with subtle arrow animation

### Data Sections (Problem, Why Now, ROI)
- **Statistics Cards**: Elevated white cards with subtle shadow, hover lift effect
  - Large number display (4xl font, monospace)
  - Descriptive label (sm text, gray-600)
  - Source citation (xs text, gray-500)
  - Color-coded borders (red for problems, green for solutions)

- **Why Now Venn Diagram**: 
  - Three overlapping circles (CSS clip-path or SVG)
  - Regulatory (blue), Burnout (red), AI Maturity (green)
  - Animated reveal on scroll (Framer Motion)
  - Center convergence point with pulsing effect

### Interactive ROI Calculator
- **Left Panel**: Input form with sliders and number inputs
  - Sticky sidebar on desktop
  - Purple accent on active inputs
  - Real-time validation and formatting
  
- **Right Panel**: Results dashboard
  - Current costs (red gradient cards)
  - Projected savings (green gradient cards)
  - ROI metrics (large prominent numbers)
  - Visual comparison charts (bar charts showing before/after)

### Architecture Diagrams
- **Three-Layer Flow**: 
  - Sequential cards (Data Ingestion → AI Processing → Action Loop)
  - Connecting arrows with animated flow (gradient stroke)
  - Expandable detail cards on hover/click
  - Technical stack badges (pill-shaped, blue background)

### Solution Section (ThriveGuide)
- **Timeline View**: Horizontal scrollable cards showing weekly flow
  - Monday → Friday progression
  - Icon-led cards with color coding
  - Connecting dotted lines showing progression
  - Expandable detail views

### The Ask / LOI Section
- **Split Layout**: 
  - Left: What we're seeking (purple accent border)
  - Right: What you get (blue accent border)
- **Timeline**: Numbered steps (1-4) with vertical connector line
- **CTA**: Prominent "Download LOI Template" button with PDF icon

### Forms & Inputs
- Consistent input styling: `border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200`
- Rounded corners: `rounded-lg`
- Proper label spacing and hierarchy

### Cards & Surfaces
- Primary Cards: `bg-white rounded-xl shadow-lg border border-gray-100`
- Stat Cards: `bg-gradient-to-br from-{color}-50 to-{color}-100 border-2 border-{color}-200`
- Interactive Cards: `hover:shadow-xl hover:-translate-y-1 transition-all duration-200`

### Buttons
- Primary: `bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold`
- Secondary: `bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50`
- When on images: Add `backdrop-blur-sm bg-white/90` for clarity

---

## Animations & Interactions

**Scroll Animations** (Framer Motion):
- Fade in + slide up for section content: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`
- Stagger children animations for card grids: `staggerChildren: 0.1`
- Number count-up animations for statistics
- Progress bar animation as user scrolls through pitch

**Interactive Diagrams**:
- Architecture layers expand on click to show technical details
- Why Now circles pulse and highlight on hover
- Data flow arrows animate sequentially on scroll into view

**Micro-interactions**:
- Button hover: slight scale + shadow increase
- Card hover: lift effect with enhanced shadow
- Input focus: border color change + ring appearance
- Smooth scroll behavior with offset for fixed nav

---

## Images & Illustrations

**Hero Section**: 
- Abstract AI collaboration illustration (800x600px placeholder)
- Gradient overlay ensuring text readability
- Position: centered, 40% opacity background

**Section Dividers**:
- Subtle background patterns (dot grids, geometric shapes at 5% opacity)
- Purple/blue gradient accents between major sections

**Data Visualizations**:
- Use Chart.js or Recharts for ROI comparison charts
- Consistent color palette matching brand (purple for Culture Crunch, red for current state, green for improvements)

**Icons**: 
- Lucide React icons throughout (Shield, Brain, Users, TrendingUp, etc.)
- Consistent sizing: `w-6 h-6` for inline, `w-8 h-8` for feature highlights, `w-12 h-12` for hero elements

---

## Responsive Behavior

**Mobile (< 768px)**:
- Single column layouts
- Stacked navigation (hamburger menu)
- Simplified ROI calculator (accordion-style inputs)
- Touch-friendly tap targets (min 44px)

**Tablet (768px - 1024px)**:
- Two-column grids where appropriate
- Side-by-side comparisons for Problem/Solution
- Simplified architecture diagrams (vertical flow)

**Desktop (> 1024px)**:
- Full multi-column layouts
- Side-by-side content with sticky sidebars
- Expanded interactive diagrams
- Parallax effects (subtle, not distracting)

---

## Accessibility & Quality Standards

- WCAG AA contrast ratios (4.5:1 for body text, 3:1 for large text)
- Focus indicators on all interactive elements (purple ring)
- Semantic HTML structure (proper heading hierarchy)
- Alt text for all images and icons
- Keyboard navigation support
- Screen reader-friendly labels for data visualizations
- Reduced motion support via `prefers-reduced-motion` media query