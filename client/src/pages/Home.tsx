import Navigation from "@/components/Navigation";
import VisionSection from "@/components/VisionSection";
import ProblemSection from "@/components/ProblemSection";
import WhyNowSection from "@/components/WhyNowSection";
import SolutionSection from "@/components/SolutionSection";
import ProductFlowSection from "@/components/ProductFlowSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ResponsiveShowcase from "@/components/ResponsiveShowcase";
import ROICalculator from "@/components/ROICalculator";
import PositioningSection from "@/components/PositioningSection";
import RoadmapSection from "@/components/RoadmapSection";
import TeamSection from "@/components/TeamSection";
import AdvisorsSection from "@/components/AdvisorsSection";
import TheAskSection from "@/components/TheAskSection";

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
      <PositioningSection />
      <RoadmapSection />
      <TeamSection />
      <AdvisorsSection />
      <TheAskSection />
    </div>
  );
}
