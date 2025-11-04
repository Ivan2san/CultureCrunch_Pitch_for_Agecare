# CultureCrunch Multi-Industry Migration Plan

## 🎯 Goal
Transform current aged-care-specific landing page into a content-driven, multi-industry platform supporting:
- Generic main landing page
- Industry-specific pages (Aged Care, Healthcare, Hospitality, etc.)
- Company-specific custom pitches

## 📊 Current State
- **Repo**: ivan-ai-san/LandingPage_CultureCrunch
- **Live Site**: culturecrunch.io (via Vercel)
- **Architecture**: Single-page app with hardcoded aged care content
- **Route**: `/` (home page with aged care content)

## 🎯 Target State
- **Main Landing**: `/` (generic CultureCrunch overview)
- **Industry Pages**: `/aged-care`, `/healthcare`, `/hospitality`
- **Company Pages**: `/partners/:companySlug`
- **Architecture**: Content-driven with reusable template components

---

## 📅 Migration Phases

### **Phase 0: Preparation (1 day)**
Setup and safety measures before making changes

### **Phase 1: Content Extraction (2-3 days)**
Extract aged care content into configuration files

### **Phase 2: Template Components (3-4 days)**
Convert hardcoded components to configurable templates

### **Phase 3: Routing & Structure (1-2 days)**
Implement multi-page routing system

### **Phase 4: Generic Landing Page (2-3 days)**
Create new main landing page at `/`

### **Phase 5: New Industries (1-2 days per industry)**
Add healthcare, hospitality, and other industries

### **Phase 6: Company-Specific Pages (2-3 days)**
Implement dynamic company pitch system

### **Phase 7: Polish & Launch (2-3 days)**
Testing, optimization, and go-live

---

## 📋 Detailed Phase Breakdown

---

## Phase 0: Preparation

### Objectives
- Create safety backups
- Set up feature branch workflow
- Document current architecture
- Define success criteria

### Tasks

#### Task 0.1: Create Backup Branch
```bash
git checkout -b backup/pre-migration-aged-care
git push github backup/pre-migration-aged-care
```

#### Task 0.2: Create Feature Branch
```bash
git checkout -b feature/multi-industry-architecture
```

#### Task 0.3: Document Current Components
Create inventory of components that need refactoring:
- VisionSection.tsx
- ProblemSection.tsx
- WhyNowSection.tsx
- SolutionSection.tsx
- ROICalculator.tsx
- HowItWorksSection.tsx
- AccountableConversations.tsx

#### Task 0.4: Set Up Testing Strategy
- Manual testing checklist
- Key user journeys to validate
- Performance benchmarks

### Deliverables
- ✅ Backup branch created
- ✅ Feature branch ready
- ✅ Component inventory documented
- ✅ Testing checklist prepared

---

## Phase 1: Content Extraction

### Objectives
- Extract all aged care content into config files
- Create TypeScript types for content structure
- Maintain current functionality while refactoring

### Tasks

#### Task 1.1: Create Content Types
**File**: `client/src/content/types.ts`

Define TypeScript interfaces:
```typescript
export interface IndustryConfig {
  slug: string;
  displayName: string;
  metaTitle: string;
  metaDescription: string;
  vision: VisionConfig;
  problem: ProblemConfig;
  whyNow: WhyNowConfig;
  solution: SolutionConfig;
  howItWorks: HowItWorksConfig;
  roiCalculator: ROICalculatorConfig;
}
```

#### Task 1.2: Extract Vision Content
**File**: `client/src/content/industries/aged-care.config.ts`

Extract from VisionSection.tsx:
- Headline text
- Subheadline
- Hero messaging
- CTA button text
- Background styling preferences

#### Task 1.3: Extract Problem Content
Extract from ProblemSection.tsx:
- Statistics (30-50% turnover, $58,600 claims)
- Pain points
- Data visualization configs
- Charts and graphs data

#### Task 1.4: Extract Why Now Content
Extract from WhyNowSection.tsx:
- Regulatory drivers
- Market timing
- Compliance pressures
- Timeline/urgency messaging

#### Task 1.5: Extract Solution Content
Extract from SolutionSection.tsx:
- Value propositions
- Key features
- Benefit cards
- Product highlights

#### Task 1.6: Extract ROI Calculator Config
Extract from ROICalculator.tsx:
- Default values (staff count, turnover rate)
- Calculation formulas
- Industry-specific metrics
- Labels and help text

#### Task 1.7: Extract How It Works Content
Extract from HowItWorksSection.tsx:
- Workflow steps
- Weekly process description
- Timeline details

### Deliverables
- ✅ `client/src/content/types.ts` created
- ✅ `client/src/content/industries/aged-care.config.ts` completed
- ✅ All aged care content extracted
- ✅ TypeScript types defined

---

## Phase 2: Template Components

### Objectives
- Convert hardcoded components to accept config props
- Maintain visual design and functionality
- Enable component reuse across industries

### Tasks

#### Task 2.1: Create Templates Directory
```bash
mkdir -p client/src/components/templates
```

#### Task 2.2: Convert VisionSection to Template
**File**: `client/src/components/templates/VisionTemplate.tsx`

Changes:
- Accept `config: VisionConfig` prop
- Replace hardcoded text with `config.headline`, `config.subheadline`
- Keep all styling and animations
- Add prop validation

Test with aged care config to ensure no visual changes.

#### Task 2.3: Convert ProblemSection to Template
**File**: `client/src/components/templates/ProblemTemplate.tsx`

Changes:
- Accept `config: ProblemConfig` prop
- Make charts/data visualization configurable
- Support dynamic statistics
- Maintain responsive design

#### Task 2.4: Convert WhyNowSection to Template
**File**: `client/src/components/templates/WhyNowTemplate.tsx`

Changes:
- Accept `config: WhyNowConfig` prop
- Support configurable regulatory/market drivers
- Keep timeline animations

#### Task 2.5: Convert SolutionSection to Template
**File**: `client/src/components/templates/SolutionTemplate.tsx`

Changes:
- Accept `config: SolutionConfig` prop
- Support dynamic feature cards
- Configurable benefit lists

#### Task 2.6: Convert ROICalculator to Template
**File**: `client/src/components/templates/ROICalculatorTemplate.tsx`

Changes:
- Accept `config: ROICalculatorConfig` prop
- Support industry-specific defaults
- Configurable calculation formulas
- Dynamic metric labels

**Note**: This is the most complex component. May need industry-specific overrides.

#### Task 2.7: Convert HowItWorksSection to Template
**File**: `client/src/components/templates/HowItWorksTemplate.tsx`

Changes:
- Accept `config: HowItWorksConfig` prop
- Support dynamic workflow steps
- Configurable timeline

#### Task 2.8: Create Template Index
**File**: `client/src/components/templates/index.ts`

Export all templates for easy import.

### Testing Checkpoint
- Verify aged care page looks identical with template components
- Check all interactions still work
- Validate responsive design on mobile/tablet
- Confirm animations functioning

### Deliverables
- ✅ All template components created
- ✅ Aged care page uses templates with config
- ✅ Visual parity maintained
- ✅ All functionality preserved

---

## Phase 3: Routing & Structure

### Objectives
- Implement multi-page routing
- Create IndustryPage wrapper component
- Set up navigation system

### Tasks

#### Task 3.1: Create IndustryPage Component
**File**: `client/src/pages/IndustryPage.tsx`

Purpose: Wrapper that orchestrates all industry templates

```typescript
interface IndustryPageProps {
  config: IndustryConfig;
}

export default function IndustryPage({ config }: IndustryPageProps) {
  return (
    <div className="min-h-screen">
      <Navigation industrySlug={config.slug} />
      <VisionTemplate config={config.vision} />
      <ProblemTemplate config={config.problem} />
      <WhyNowTemplate config={config.whyNow} />
      <SolutionTemplate config={config.solution} />
      <HowItWorksTemplate config={config.howItWorks} />
      <ROICalculatorTemplate config={config.roiCalculator} />
    </div>
  );
}
```

#### Task 3.2: Update App.tsx with New Routes
**File**: `client/src/App.tsx`

Add routes:
```typescript
import { agedCareConfig } from '@/content/industries/aged-care.config';

<Switch>
  <Route path="/" component={Home} />
  <Route path="/aged-care">
    <IndustryPage config={agedCareConfig} />
  </Route>
  <Route component={NotFound} />
</Switch>
```

#### Task 3.3: Update Navigation Component
**File**: `client/src/components/Navigation.tsx`

Add industry dropdown or menu:
- Link to main landing
- Links to industry pages
- Active state highlighting

#### Task 3.4: Create Industry Index
**File**: `client/src/content/industries/index.ts`

```typescript
export { agedCareConfig } from './aged-care.config';
// Future: export { healthcareConfig } from './healthcare.config';

export const ALL_INDUSTRIES = [
  agedCareConfig,
  // healthcareConfig,
];
```

### Testing Checkpoint
- Navigate to `/aged-care` - should show current content
- Check all internal links work
- Validate navigation highlights active page
- Test back/forward browser buttons

### Deliverables
- ✅ IndustryPage component created
- ✅ Routing implemented
- ✅ Navigation updated
- ✅ `/aged-care` route functional

---

## Phase 4: Generic Landing Page

### Objectives
- Create new main landing page at `/`
- Position as industry-agnostic overview
- Showcase all available industries
- Drive traffic to specific industry pages

### Tasks

#### Task 4.1: Design Generic Landing Page
**File**: `client/src/pages/Home.tsx` (rewrite)

Sections:
1. **Hero**: "Transform Workplace Culture with Data-Driven Insights"
2. **Industries We Serve**: Cards linking to industry pages
3. **Core Value Props**: Universal benefits (reduce turnover, improve engagement)
4. **How It Works**: High-level 3-step process
5. **Social Proof**: Generic testimonials or stats
6. **CTA**: "Explore Your Industry" → Industry selection

#### Task 4.2: Create Industry Cards Component
**File**: `client/src/components/shared/IndustryCards.tsx`

Display clickable cards for:
- Aged Care
- Healthcare
- Hospitality
- (More coming soon)

Each card shows:
- Industry icon
- Industry name
- Brief description
- "Learn More" CTA

#### Task 4.3: Create Generic Content Config
**File**: `client/src/content/generic.config.ts`

Generic messaging:
- Hero headline
- Value propositions
- Process overview
- CTA messaging

#### Task 4.4: Update Meta Tags & SEO
- Update main page title
- Generic meta description
- Industry-specific meta tags for sub-pages

### Testing Checkpoint
- Visit `/` - should see generic landing
- Click industry cards - should navigate to specific pages
- Check SEO tags on all pages
- Validate mobile responsive design

### Deliverables
- ✅ New generic landing page at `/`
- ✅ Industry selector/cards
- ✅ SEO properly configured
- ✅ Clear navigation flow

---

## Phase 5: Add New Industries

### Objectives
- Add healthcare industry page
- Add hospitality industry page
- Validate content-driven architecture works

### Tasks

#### Task 5.1: Create Healthcare Config
**File**: `client/src/content/industries/healthcare.config.ts`

Content specific to healthcare:
- Vision: "Transform Healthcare Workplace Safety"
- Problem: Burnout, staffing shortages, patient safety
- ROI: Different metrics (nurse retention, patient outcomes)
- Why Now: Healthcare regulations, post-pandemic challenges

#### Task 5.2: Add Healthcare Route
**File**: `client/src/App.tsx`

```typescript
import { healthcareConfig } from '@/content/industries/healthcare.config';

<Route path="/healthcare">
  <IndustryPage config={healthcareConfig} />
</Route>
```

#### Task 5.3: Create Hospitality Config
**File**: `client/src/content/industries/hospitality.config.ts`

Content specific to hospitality:
- Vision: "Elevate Guest Experience Through Team Culture"
- Problem: High turnover, seasonal stress, customer complaints
- ROI: Guest satisfaction, staff retention, revenue impact

#### Task 5.4: Add Hospitality Route
**File**: `client/src/App.tsx`

```typescript
import { hospitalityConfig } from '@/content/industries/hospitality.config';

<Route path="/hospitality">
  <IndustryPage config={hospitalityConfig} />
</Route>
```

#### Task 5.5: Update Industry Cards on Home Page
Add healthcare and hospitality cards.

### Testing Checkpoint
- Visit `/healthcare` - verify content is industry-specific
- Visit `/hospitality` - verify content is industry-specific
- Check ROI calculators use appropriate defaults
- Validate all links work

### Deliverables
- ✅ Healthcare industry page live
- ✅ Hospitality industry page live
- ✅ All three industries accessible
- ✅ Content properly differentiated

---

## Phase 6: Company-Specific Pages

### Objectives
- Enable custom pitches for specific companies
- Support dynamic URL parameters
- Allow per-company content customization

### Tasks

#### Task 6.1: Create Company Config Type
**File**: `client/src/content/types.ts`

```typescript
export interface CompanyConfig extends IndustryConfig {
  companyName: string;
  companySlug: string;
  customizations: {
    logoUrl?: string;
    primaryContact?: string;
    specificPainPoints?: string[];
    customROI?: Partial<ROICalculatorConfig>;
  };
}
```

#### Task 6.2: Create Example Company Config
**File**: `client/src/content/companies/example-aged-care-facility.config.ts`

Extends aged care config with company-specific details.

#### Task 6.3: Create CompanyPitch Component
**File**: `client/src/pages/CompanyPitch.tsx`

```typescript
import { useRoute } from 'wouter';
import { getCompanyConfig } from '@/content/companies';

export default function CompanyPitch() {
  const [, params] = useRoute('/partners/:companySlug');
  const config = getCompanyConfig(params.companySlug);

  if (!config) return <NotFound />;

  return <IndustryPage config={config} />;
}
```

#### Task 6.4: Add Company Route
**File**: `client/src/App.tsx`

```typescript
<Route path="/partners/:companySlug" component={CompanyPitch} />
```

#### Task 6.5: Create Company Config Loader
**File**: `client/src/content/companies/index.ts`

Helper function to load company configs dynamically.

### Testing Checkpoint
- Visit `/partners/example-aged-care-facility`
- Verify company-specific content shows
- Test with non-existent slug (should 404)
- Check customizations apply correctly

### Deliverables
- ✅ Company-specific routing works
- ✅ Can create custom company pitches
- ✅ Extends industry configs properly
- ✅ 404 handling for invalid companies

---

## Phase 7: Polish & Launch

### Objectives
- Performance optimization
- SEO finalization
- Testing across all pages
- Documentation
- Deploy to production

### Tasks

#### Task 7.1: Performance Optimization
- Code splitting by route
- Lazy load heavy components
- Optimize images
- Minimize bundle size

#### Task 7.2: SEO & Meta Tags
- Unique meta titles for each page
- Industry-specific descriptions
- Open Graph tags
- Sitemap generation

#### Task 7.3: Comprehensive Testing
- Test all industry pages
- Verify all internal links
- Mobile responsive check
- Browser compatibility (Chrome, Safari, Firefox)
- Performance testing (Lighthouse)

#### Task 7.4: Create Documentation
**File**: `README.md`

Document:
- Architecture overview
- How to add new industries
- How to create company configs
- Content structure guide
- Development workflow

#### Task 7.5: Update Vercel Configuration
Verify build works with new routing:
```bash
npm run build
npm start
# Test locally before pushing
```

#### Task 7.6: Deploy to Production
```bash
git checkout main
git merge feature/multi-industry-architecture
git push github main
# Vercel auto-deploys
```

#### Task 7.7: Post-Deployment Validation
- Check all pages on live site
- Verify DNS still working
- Test analytics tracking
- Monitor error logs

### Testing Checkpoint (Final)
- [ ] All industry pages load correctly
- [ ] Navigation works across all pages
- [ ] ROI calculators function properly
- [ ] Mobile responsive on all pages
- [ ] Page load times < 3 seconds
- [ ] No console errors
- [ ] SEO meta tags present
- [ ] Analytics tracking works

### Deliverables
- ✅ Production deployment successful
- ✅ All pages tested and working
- ✅ Documentation complete
- ✅ Performance optimized
- ✅ SEO configured

---

## 🔄 Rollback Plan

If something goes wrong:

### Option 1: Revert to Backup Branch
```bash
git checkout main
git reset --hard backup/pre-migration-aged-care
git push --force github main
```

### Option 2: Feature Flag
Keep old code path available:
```typescript
const USE_NEW_ARCHITECTURE = process.env.VITE_USE_NEW_ARCH === 'true';

if (USE_NEW_ARCHITECTURE) {
  // New multi-industry routing
} else {
  // Old single-page aged care
}
```

---

## 📊 Success Metrics

### Technical Metrics
- [ ] All existing functionality preserved
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 90
- [ ] Zero console errors in production
- [ ] Mobile responsive score 100%

### Business Metrics
- [ ] Aged care page maintains current conversion rate
- [ ] New industry pages achieve >10% engagement
- [ ] Bounce rate remains stable or improves
- [ ] Time on site increases with multiple pages

---

## 🛠️ Required Tools & Resources

### Development
- VSCode or preferred IDE
- Node.js 18+ / npm
- Git
- Local testing environment

### Testing
- Chrome DevTools
- Lighthouse
- Mobile device for testing
- Cross-browser testing (BrowserStack optional)

### Deployment
- GitHub access (ivan-ai-san account)
- Vercel access (culturecrunch team)
- DNS access (GoDaddy)

---

## ⏱️ Timeline Summary

| Phase | Duration | Cumulative |
|-------|----------|------------|
| Phase 0: Preparation | 1 day | 1 day |
| Phase 1: Content Extraction | 2-3 days | 3-4 days |
| Phase 2: Template Components | 3-4 days | 6-8 days |
| Phase 3: Routing & Structure | 1-2 days | 7-10 days |
| Phase 4: Generic Landing | 2-3 days | 9-13 days |
| Phase 5: New Industries | 2-4 days | 11-17 days |
| Phase 6: Company Pages | 2-3 days | 13-20 days |
| Phase 7: Polish & Launch | 2-3 days | 15-23 days |

**Total Estimated Time**: 3-4 weeks (working full-time)

---

## 🎯 Quick Start

Ready to begin? Here's what to do first:

```bash
# 1. Create backup
git checkout -b backup/pre-migration-aged-care
git push github backup/pre-migration-aged-care

# 2. Create feature branch
git checkout -b feature/multi-industry-architecture

# 3. Create content directory structure
mkdir -p client/src/content/industries
mkdir -p client/src/content/companies
mkdir -p client/src/components/templates

# 4. Start with Phase 1, Task 1.1 (Create Content Types)
# Create client/src/content/types.ts
```

---

## 📝 Notes & Considerations

### Future Enhancements
- CMS integration for non-technical content updates
- A/B testing framework for different messaging
- Analytics dashboard to track industry performance
- Lead capture forms specific to each industry
- Industry-specific case studies/testimonials

### Potential Challenges
- ROI Calculator may need significant industry customization
- Maintaining design consistency across industries
- SEO impact during transition (301 redirects needed)
- Content creation for new industries takes time

### Best Practices
- Commit frequently with descriptive messages
- Test after each phase before proceeding
- Keep aged care page working throughout migration
- Document decisions and rationale
- Get stakeholder feedback at phase milestones

---

**Migration Plan Version**: 1.0
**Created**: 2025-01-04
**Last Updated**: 2025-01-04
**Owner**: CultureCrunch Team
