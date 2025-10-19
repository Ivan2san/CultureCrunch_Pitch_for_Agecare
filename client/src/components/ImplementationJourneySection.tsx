import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomerJourneyFlow from "@/components/CustomerJourneyFlow";
import SprintTimeline from "@/components/SprintTimeline";
import DeliverablesSection from "@/components/DeliverablesSection";

export default function ImplementationJourneySection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-16">
      <div className="text-center mb-6">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
          Your 6-Week Implementation Journey
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          From partner onboarding to measurable culture change—with expert coaching every step of the way
        </p>
        
        <Button
          variant="outline"
          size="default"
          onClick={() => setIsExpanded(!isExpanded)}
          data-testid="button-toggle-implementation"
        >
          {isExpanded ? (
            <>
              Hide Implementation Details <ChevronUp className="ml-2 w-4 h-4" />
            </>
          ) : (
            <>
              Show Implementation Details <ChevronDown className="ml-2 w-4 h-4" />
            </>
          )}
        </Button>
      </div>

      {isExpanded && (
        <div className="space-y-12 animate-fade-in-up">
          {/* Customer Journey Flow */}
          <div>
            <CustomerJourneyFlow />
          </div>

          {/* 6-Week Sprint Timeline */}
          <div>
            <SprintTimeline />
          </div>

          {/* What You Get - Deliverables */}
          <div>
            <DeliverablesSection />
          </div>
        </div>
      )}
    </div>
  );
}
