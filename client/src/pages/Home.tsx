import Navigation from "@/components/Navigation";
import VisionSection from "@/components/VisionSection";
import ProblemSection from "@/components/ProblemSection";
import WhyNowSection from "@/components/WhyNowSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ROICalculator from "@/components/ROICalculator";
import PositioningSection from "@/components/PositioningSection";
import RoadmapSection from "@/components/RoadmapSection";
import TheAskSection from "@/components/TheAskSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <VisionSection />
      <ProblemSection />
      <WhyNowSection />
      <SolutionSection />
      <HowItWorksSection />
      <ROICalculator />
      <PositioningSection />
      <RoadmapSection />
      <TheAskSection />
    </div>
  );
}
