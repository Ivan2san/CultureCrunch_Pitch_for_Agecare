import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { exportPitchDeckToPDF } from "@/lib/pdfExport";
import { useToast } from "@/hooks/use-toast";

const sections = [
  { id: "vision", label: "Vision" },
  { id: "problem", label: "Problem" },
  { id: "why-now", label: "Why Now" },
  { id: "solution", label: "Solution" },
  { id: "how-it-works", label: "How It Works" },
  { id: "roi", label: "ROI Calculator" },
  { id: "positioning", label: "Positioning" },
  { id: "roadmap", label: "Roadmap" },
  { id: "ask", label: "The Ask" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("vision");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const { toast } = useToast();

  const handleExportPDF = async () => {
    setIsExporting(true);
    toast({
      title: "Generating PDF...",
      description: "Please wait while we create your pitch deck PDF.",
    });

    const result = await exportPitchDeckToPDF();

    if (result.success) {
      toast({
        title: "PDF Downloaded!",
        description: "Your pitch deck has been saved successfully.",
      });
    } else {
      toast({
        title: "Export Failed",
        description: "There was an error generating the PDF. Please try again.",
        variant: "destructive",
      });
    }

    setIsExporting(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  const navigateSection = (direction: "prev" | "next") => {
    const currentIndex = sections.findIndex((s) => s.id === activeSection);
    const newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;
    
    if (newIndex >= 0 && newIndex < sections.length) {
      scrollToSection(sections[newIndex].id);
    }
  };

  const progressPercentage = ((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length) * 100;

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50" data-testid="nav-main">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <span className="font-bold text-xl text-gray-900">CultureCrunch</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      activeSection === section.id
                        ? "bg-primary text-primary-foreground"
                        : "text-gray-600 hover:text-gray-900 hover-elevate"
                    }`}
                    data-testid={`nav-link-${section.id}`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>

              <Button
                onClick={handleExportPDF}
                disabled={isExporting}
                variant="outline"
                size="sm"
                data-testid="button-export-pdf"
              >
                <Download className="w-4 h-4 mr-2" />
                {isExporting ? "Exporting..." : "Export PDF"}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden pt-20" data-testid="mobile-menu">
          <div className="p-6 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                data-testid={`mobile-nav-link-${section.id}`}
              >
                {section.label}
              </button>
            ))}
            
            <Button
              onClick={() => {
                handleExportPDF();
                setMobileMenuOpen(false);
              }}
              disabled={isExporting}
              variant="outline"
              className="w-full mt-4"
              data-testid="button-export-pdf-mobile"
            >
              <Download className="w-4 h-4 mr-2" />
              {isExporting ? "Exporting..." : "Export PDF"}
            </Button>
          </div>
        </div>
      )}

      {/* Navigation Arrows (Bottom Right) */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-2 z-40" data-testid="nav-arrows">
        <Button
          variant="default"
          size="icon"
          onClick={() => navigateSection("prev")}
          disabled={sections.findIndex((s) => s.id === activeSection) === 0}
          className="shadow-lg"
          data-testid="button-nav-prev"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
        <Button
          variant="default"
          size="icon"
          onClick={() => navigateSection("next")}
          disabled={sections.findIndex((s) => s.id === activeSection) === sections.length - 1}
          className="shadow-lg"
          data-testid="button-nav-next"
        >
          <ChevronDown className="w-5 h-5" />
        </Button>
      </div>
    </>
  );
}
