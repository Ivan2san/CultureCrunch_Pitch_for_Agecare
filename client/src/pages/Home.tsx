import Navigation from "@/components/Navigation";
import VisionSection from "@/components/VisionSection";
import ProblemSection from "@/components/ProblemSection";
import WhyNowSection from "@/components/WhyNowSection";
import SolutionSection from "@/components/SolutionSection";
import ProductFlowSection from "@/components/ProductFlowSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ResponsiveShowcase from "@/components/ResponsiveShowcase";
import ROICalculator from "@/components/ROICalculator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <VisionSection />
      <ProblemSection />
      <WhyNowSection />
      <SolutionSection />
      <ProductFlowSection />
      <HowItWorksSection />
      <ResponsiveShowcase />
      <ROICalculator />
      {/* Temporarily hidden sections - focusing on Vision to ROI Calculator narrative */}
      {/* <PositioningSection /> */}
      {/* <RoadmapSection /> */}
      {/* <TeamSection /> */}
      {/* <AdvisorsSection /> */}
      {/* <TheAskSection /> */}
    </div>
  );
}
