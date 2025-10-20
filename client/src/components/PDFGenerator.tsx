import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { generatePitchPDF } from "@/utils/generatePDF";

export function PDFGenerator() {
  return (
    <Button
      onClick={generatePitchPDF}
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
