import { useState } from "react";
import { DollarSign, Calculator, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useParallax } from "@/hooks/useParallax";
import SectionFeedbackButton from "@/components/SectionFeedbackButton";
import type { ROICalculatorConfig } from "@/content/types";

interface ROICalculatorTemplateProps {
  config: ROICalculatorConfig;
}

/**
 * ROICalculatorTemplate Component
 *
 * Displays an interactive ROI calculator with industry-specific inputs and calculations.
 * Accepts a ROICalculatorConfig object to customize metrics and formulas.
 */
export default function ROICalculatorTemplate({ config }: ROICalculatorTemplateProps) {
  // Initialize state from config defaults
  const initialInputs = config.inputs.reduce((acc, input) => {
    acc[input.id] = input.defaultValue;
    return acc;
  }, {} as Record<string, number>);

  const [inputs, setInputs] = useState(initialInputs);
  const headerParallax = useParallax({ speed: -0.1 });

  // Update input value
  const updateInput = (id: string, value: number) => {
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  // Calculate all metrics
  const calculations = config.calculations.reduce((acc, calc) => {
    acc[calc.id] = calc.formula(inputs);
    return acc;
  }, {} as Record<string, number>);

  // Calculate impact areas
  const impactResults = config.impactAreas.map((area) => ({
    ...area,
    baseline: area.baselineFormula(inputs),
    improved: area.improvedFormula(inputs),
    savings: area.baselineFormula(inputs) - area.improvedFormula(inputs),
  }));

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Format number
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-AU").format(Math.round(value));
  };

  return (
    <section
      id="roi"
      className="min-h-screen bg-corporate-gradient px-4 md:px-6 py-20 md:py-32 relative overflow-hidden"
    >
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-20 right-10 w-[750px] h-[750px] bg-gradient-radial from-purple-400/35 via-pink-400/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-[800px] h-[800px] bg-gradient-radial from-indigo-400/32 via-purple-400/18 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[650px] bg-gradient-radial from-pink-400/28 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerParallax.ref} style={headerParallax.style} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground" style={{ letterSpacing: "-0.01em" }}>
              {config.headline}
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {config.description}
          </p>
          {config.industryContext && (
            <p className="text-sm text-muted-foreground/70 mt-2">
              {config.industryContext}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="p-8 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border-border/50">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Your Facility Details
            </h3>
            <div className="space-y-6">
              {config.inputs.map((input) => (
                <div key={input.id}>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor={input.id} className="text-sm font-medium text-foreground">
                      {input.label}
                    </Label>
                    <span className="text-sm font-semibold text-primary">
                      {input.prefix}
                      {inputs[input.id].toLocaleString()}
                      {input.suffix}
                    </span>
                  </div>
                  {input.description && (
                    <p className="text-xs text-muted-foreground mb-2">
                      {input.description}
                    </p>
                  )}
                  <input
                    type="range"
                    id={input.id}
                    min={input.min}
                    max={input.max}
                    step={input.step}
                    value={inputs[input.id]}
                    onChange={(e) => updateInput(input.id, Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>
                      {input.prefix}
                      {input.min.toLocaleString()}
                      {input.suffix}
                    </span>
                    <span>
                      {input.prefix}
                      {input.max.toLocaleString()}
                      {input.suffix}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Total Savings Card */}
            {calculations.projectedSavings !== undefined && (
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-md border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    Projected Annual Savings
                  </h3>
                </div>
                <div className="text-5xl font-bold text-primary mb-2">
                  {formatCurrency(calculations.projectedSavings)}
                </div>
                <p className="text-sm text-muted-foreground">
                  Expected savings with CultureCrunch in year one
                </p>
              </Card>
            )}

            {/* Current Costs */}
            {calculations.totalCurrentCost !== undefined && (
              <Card className="p-6 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border-border/50">
                <h4 className="font-semibold text-foreground mb-4">Current Annual Costs</h4>
                <div className="space-y-3">
                  {config.calculations
                    .filter((calc) => calc.id.includes("current") && calc.id !== "totalCurrentCost")
                    .map((calc) => (
                      <div key={calc.id} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{calc.label}</span>
                        <span className="font-semibold text-foreground">
                          {calc.format === "currency" ? formatCurrency(calculations[calc.id]) : formatNumber(calculations[calc.id])}
                        </span>
                      </div>
                    ))}
                  <div className="pt-3 border-t border-border flex justify-between items-center">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="text-xl font-bold text-foreground">
                      {formatCurrency(calculations.totalCurrentCost)}
                    </span>
                  </div>
                </div>
              </Card>
            )}

            {/* Impact Areas */}
            {impactResults.length > 0 && (
              <Card className="p-6 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border-border/50">
                <h4 className="font-semibold text-foreground mb-4">Impact Breakdown</h4>
                <div className="space-y-4">
                  {impactResults.map((impact, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{impact.title}</div>
                          <div className="text-xs text-muted-foreground">{impact.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-primary">
                            {impact.improvementPercentage}% improvement
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {formatCurrency(impact.savings)} saved
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${impact.improvementPercentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Assumptions */}
        {config.assumptions && config.assumptions.length > 0 && (
          <Card className="mt-8 p-6 bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border-border/30">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Assumptions</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {config.assumptions.map((assumption, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-1 h-1 mt-1.5 rounded-full bg-muted-foreground" />
                      <span>{assumption}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        )}

        {/* Sources */}
        {config.sources && config.sources.length > 0 && (
          <div className="mt-6 text-center">
            <details className="inline-block text-left">
              <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
                View Data Sources
              </summary>
              <div className="mt-4 p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 text-left">
                <ul className="space-y-2">
                  {config.sources.map((source, index) => (
                    <li key={index} className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">{source.title}</span>
                      {source.description && (
                        <span className="block mt-1">{source.description}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
        )}

        <div className="mt-12">
          <SectionFeedbackButton />
        </div>
      </div>
    </section>
  );
}
