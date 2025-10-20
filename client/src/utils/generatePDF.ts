/**
 * PDF Generation Utility
 * 
 * This provides a function to generate a PDF of the CultureCrunch pitch
 * excluding the ROI calculator section.
 * 
 * Usage:
 * 1. Import this function in your app
 * 2. Call generatePitchPDF() when a button is clicked
 * 3. The browser's print dialog will open with the calculator hidden
 */

export function generatePitchPDF() {
  // Find and hide the ROI calculator section (id="roi")
  const roiSection = document.querySelector('section#roi') as HTMLElement;
  
  // Find and hide navigation buttons that link to ROI calculator
  const navButtons = document.querySelectorAll('button[data-testid="nav-link-roi"], button[data-testid="mobile-nav-link-roi"]');
  
  if (roiSection) {
    roiSection.style.display = 'none';
  }
  
  // Hide navigation buttons
  navButtons.forEach(button => {
    const element = button as HTMLElement;
    element.style.display = 'none';
  });
  
  // Trigger print dialog
  window.print();
  
  // Restore visibility after print dialog closes
  setTimeout(() => {
    if (roiSection) {
      roiSection.style.display = '';
    }
    navButtons.forEach(button => {
      const element = button as HTMLElement;
      element.style.display = '';
    });
  }, 1000);
}
