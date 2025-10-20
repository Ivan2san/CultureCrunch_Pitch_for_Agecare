import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { generatePitchPDF } from "@/utils/generatePDF";
import { useToast } from "@/hooks/use-toast";

export function PDFGenerator() {
  const { toast } = useToast();
  
  const handleGeneratePDF = () => {
    try {
      toast({
        title: "Generating PDF...",
        description: "Opening print dialog (ROI calculator will be excluded)",
      });
      
      generatePitchPDF();
      
      setTimeout(() => {
        toast({
          title: "Print Dialog Opened",
          description: "Select 'Save as PDF' to download your pitch deck",
        });
      }, 500);
      
    } catch (error) {
      console.error('PDF generation error:', error);
      toast({
        title: "Error",
        description: "Failed to open print dialog. Check console for details.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <Button
      onClick={handleGeneratePDF}
      variant="outline"
      size="sm"
      className="gap-2"
      data-testid="button-generate-pdf"
    >
      <FileDown className="w-4 h-4" />
      Download Pitch PDF
    </Button>
  );
}
