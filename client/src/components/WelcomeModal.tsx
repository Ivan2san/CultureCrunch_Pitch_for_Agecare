import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("culturecrunch-visited");
    if (!hasVisited) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("culturecrunch-visited", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl" data-testid="welcome-modal">
        <DialogHeader>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <DialogTitle className="text-3xl">Welcome to CultureCrunch!</DialogTitle>
          </div>
        </DialogHeader>
        
        <DialogDescription className="text-base space-y-4 text-foreground">
          <p className="text-lg font-medium text-purple-600">
            We're excited you're here today.
          </p>
          
          <p>
            You're looking at something special: a <strong>well-researched idea</strong> being validated by a team of specialists in psychosocial safety, emotional intelligence, and aged care leadership.
          </p>
          
          <p>
            This isn't just another compliance tool—it's a vision for transforming how aged care leaders turn regulatory requirements into genuine workforce retention and cultural health.
          </p>
          
          <p>
            <strong>Feel free to explore in your own order</strong>, or follow the menu flow from Vision through to the ROI Calculator. Each section builds on the last, but you're welcome to jump around.
          </p>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mt-4">
            <p className="text-sm font-medium text-purple-800">
              <strong>We'd genuinely welcome your feedback</strong> on how we can improve this pitch, the concept, or anything else that comes to mind. You'll find feedback buttons throughout the site—we read every submission.
            </p>
          </div>
        </DialogDescription>

        <div className="flex justify-center mt-6">
          <Button 
            onClick={handleClose}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            data-testid="button-start-exploring"
          >
            Let's Explore
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
