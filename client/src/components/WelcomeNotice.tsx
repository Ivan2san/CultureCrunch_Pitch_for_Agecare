import { useState } from "react";
import { X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WelcomeNotice() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    localStorage.setItem("culturecrunch-visited", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="relative bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-200"
      data-testid="welcome-notice"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-start gap-4">
          <Info className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          
          <div className="flex-1 text-sm">
            <p className="text-foreground">
              <strong className="text-purple-700">You're viewing a concept in validation.</strong> This is a well-researched idea being developed by specialists in psychosocial safety, emotional intelligence, and aged care leadership. We welcome your feedback—look for feedback buttons throughout the site.
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleDismiss}
            className="flex-shrink-0 h-8 w-8 text-purple-600 hover:text-purple-700 hover:bg-purple-100"
            data-testid="button-dismiss-notice"
            aria-label="Dismiss notice"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
