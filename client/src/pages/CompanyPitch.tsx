import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import WelcomeNotice from '@/components/WelcomeNotice';
import {
  VisionTemplate,
  ProblemTemplate,
  WhyNowTemplate,
  SolutionTemplate,
  HowItWorksTemplate,
  ROICalculatorTemplate,
} from '@/components/templates';
import type { CompanyConfig } from '@/content/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CompanyPitchProps {
  config: CompanyConfig;
}

/**
 * CompanyPitch Page Component
 *
 * Renders a customized pitch page for a specific company.
 * Extends the standard industry page with company-specific customizations.
 */
export default function CompanyPitch({ config }: CompanyPitchProps) {
  const { customizations } = config;

  // Update page title with company name
  useEffect(() => {
    document.title = `${customizations.companyName} - ${config.metaTitle}`;
  }, [customizations.companyName, config.metaTitle]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />
      <WelcomeNotice />

      {/* Company-Specific Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            {customizations.logoUrl && (
              <img
                src={customizations.logoUrl}
                alt={`${customizations.companyName} logo`}
                className="h-16 mx-auto mb-6"
              />
            )}
            <Badge variant="secondary" className="mb-4 text-sm">
              Confidential Pitch Presentation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {customizations.companyName}
            </h1>
            {customizations.presentationDate && (
              <p className="text-lg text-indigo-200">
                Prepared for presentation on {customizations.presentationDate}
              </p>
            )}
            {customizations.primaryContact && (
              <p className="text-indigo-300 mt-2">
                Primary Contact: {customizations.primaryContact}
              </p>
            )}
          </div>

          {/* Company-Specific Pain Points */}
          {customizations.specificPainPoints && customizations.specificPainPoints.length > 0 && (
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Your Specific Challenges
              </h2>
              <p className="text-indigo-200 mb-4">
                Based on our research and conversations, we understand you're facing:
              </p>
              <ul className="space-y-3">
                {customizations.specificPainPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-400 mr-3 text-xl">•</span>
                    <span className="text-white">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      </section>

      {/* Standard Industry Sections with Company Context */}
      <VisionTemplate config={config.vision} />
      <ProblemTemplate config={config.problem} />
      <WhyNowTemplate config={config.whyNow} />
      <SolutionTemplate config={config.solution} />
      <HowItWorksTemplate config={config.howItWorks} />
      <ROICalculatorTemplate config={config.roiCalculator} />

      {/* Optional Accountable Conversations Section */}
      {config.accountableConversations && (
        <section id="accountable-conversations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              {config.accountableConversations.headline}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              {config.accountableConversations.description}
            </p>
            {/* Add more accountable conversations content as needed */}
          </div>
        </section>
      )}

      {/* Optional Product Flow Section */}
      {config.productFlow && (
        <section id="product-flow" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              {config.productFlow.headline}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              {config.productFlow.description}
            </p>
            {/* Add more product flow content as needed */}
          </div>
        </section>
      )}

      {/* Company-Specific Notes Section (only visible in dev mode or with flag) */}
      {customizations.additionalNotes && import.meta.env.DEV && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-yellow-50 border-t-4 border-yellow-400">
          <div className="max-w-7xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Presenter Notes (Dev Mode Only)
            </Badge>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Additional Context for Presenter
            </h2>
            <div className="prose prose-lg max-w-none">
              <pre className="whitespace-pre-wrap text-sm bg-white p-6 rounded-lg border border-yellow-200 text-gray-800">
                {customizations.additionalNotes}
              </pre>
            </div>
          </div>
        </section>
      )}

      {/* Footer / Next Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform {customizations.companyName}'s Culture?</h2>
          <p className="text-xl text-indigo-200 mb-8">
            Let's discuss how CultureCrunch can help you reduce turnover, improve wellbeing, and build a thriving workplace culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Schedule Implementation Call
            </a>
            <a
              href="#roi-calculator"
              className="px-8 py-4 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-600 transition-colors border-2 border-indigo-500"
            >
              Review Your ROI Projection
            </a>
          </div>
          {customizations.primaryContact && (
            <p className="mt-8 text-indigo-300 text-sm">
              Questions? Reach out to your dedicated contact at CultureCrunch
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
