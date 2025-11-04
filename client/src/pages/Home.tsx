import { Link } from "wouter";
import { ArrowRight, Sparkles, Clock, Shield, Lock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { useParallax } from "@/hooks/useParallax";
import { genericLandingConfig } from "@/content/generic.config";

/**
 * Home Component
 *
 * Generic landing page that showcases CultureCrunch across all industries.
 * Directs users to industry-specific pages.
 */
export default function Home() {
  const heroParallax = useParallax({ speed: -0.2 });
  const industriesParallax = useParallax({ speed: 0.1 });

  const config = genericLandingConfig;

  // Icon mapping for value propositions
  const iconMap: Record<string, any> = {
    '🔒': Lock,
    '✅': Shield,
    '⏱️': Clock,
    '📊': TrendingUp,
  };

  return (
    <div className="min-h-screen bg-corporate-gradient">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-20 md:py-32 overflow-hidden">
        {/* Decorative gradient backgrounds */}
        <div className="absolute top-20 right-10 w-[800px] h-[800px] bg-gradient-radial from-indigo-400/35 via-blue-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[700px] h-[700px] bg-gradient-radial from-purple-400/30 via-pink-400/18 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-indigo-400/25 via-transparent to-transparent rounded-full blur-3xl" />

        <div ref={heroParallax.ref} style={heroParallax.style} className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              Data-Driven Psychosocial Safety Platform
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-[1.1]"
            style={{ letterSpacing: '-0.01em' }}
          >
            {config.hero.headline}
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto mb-12"
            style={{ letterSpacing: '-0.005em' }}
          >
            {config.hero.subheadline}
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {config.hero.features.map((feature, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border/50"
              >
                <p className="text-sm font-medium text-foreground">{feature}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 rounded-full"
          >
            <a href={config.hero.ctaLink}>
              {config.hero.ctaText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="relative px-4 md:px-6 py-20 md:py-32 overflow-hidden">
        <div className="absolute top-10 left-10 w-[750px] h-[750px] bg-gradient-radial from-purple-400/35 via-pink-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[700px] h-[700px] bg-gradient-radial from-indigo-400/30 via-blue-400/18 to-transparent rounded-full blur-3xl" />

        <div ref={industriesParallax.ref} style={industriesParallax.style} className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ letterSpacing: '-0.01em' }}
            >
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored solutions for your specific industry challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.industries.map((industry) => (
              <Card
                key={industry.slug}
                className="group relative overflow-hidden bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
              >
                {industry.comingSoon && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-xs font-semibold text-primary">Coming Soon</span>
                  </div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div className="text-6xl mb-6">{industry.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {industry.displayName}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {industry.shortDescription}
                  </p>

                  {/* CTA */}
                  {!industry.comingSoon ? (
                    <Button
                      asChild
                      variant="default"
                      className="w-full group-hover:bg-primary/90 transition-colors"
                    >
                      <Link href={`/${industry.slug}`}>
                        Explore {industry.displayName}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      disabled
                      variant="outline"
                      className="w-full cursor-not-allowed"
                    >
                      Coming Soon
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="relative px-4 md:px-6 py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ letterSpacing: '-0.01em' }}
            >
              Why CultureCrunch?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.valuePropositions.map((vp, index) => {
              const Icon = iconMap[vp.icon || ''] || Shield;

              return (
                <Card
                  key={index}
                  className="p-8 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="mb-6 text-primary">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {vp.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {vp.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Overview */}
      <section className="relative px-4 md:px-6 py-20 md:py-32 overflow-hidden">
        <div className="absolute top-10 right-10 w-[750px] h-[750px] bg-gradient-radial from-indigo-400/35 via-blue-400/20 to-transparent rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ letterSpacing: '-0.01em' }}
            >
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A simple, proven process that takes just 15 minutes per week
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.howItWorksOverview.map((step) => (
              <div
                key={step.step}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-border/50"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 md:px-6 py-20 md:py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-md border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Workplace Culture?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose your industry to see how CultureCrunch can help
            </p>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 rounded-full"
            >
              <a href="#industries">
                Explore Industries
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
