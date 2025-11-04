import Navigation from "@/components/Navigation";
import WelcomeNotice from "@/components/WelcomeNotice";
import VisionSection from "@/components/VisionSection";
import ProblemSection from "@/components/ProblemSection";
import WhyNowSection from "@/components/WhyNowSection";
import SolutionSection from "@/components/SolutionSection";
import ProductFlowSection from "@/components/ProductFlowSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AccountableConversations from "@/components/AccountableConversations";
import ROICalculator from "@/components/ROICalculator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <WelcomeNotice />
      <VisionSection />
      <ProblemSection />
      <WhyNowSection />
      <SolutionSection />
      <ProductFlowSection />
      <HowItWorksSection />
      <section id="accountable-conversations" className="min-h-screen bg-corporate-gradient px-4 md:px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AccountableConversations />
        </div>
      </section>
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
