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
  // Find and hide the ROI calculator section
  const roiSection = document.querySelector('section#roi-calculator') as HTMLElement;
  const roiNavLinks = document.querySelectorAll('a[href="#roi-calculator"]');
  
  if (roiSection) {
    roiSection.style.display = 'none';
  }
  
  // Hide navigation links to calculator
  roiNavLinks.forEach(link => {
    const parent = link.parentElement as HTMLElement;
    if (parent) {
      parent.style.display = 'none';
    }
  });
  
  // Trigger print dialog
  window.print();
  
  // Restore visibility after print dialog closes
  setTimeout(() => {
    if (roiSection) {
      roiSection.style.display = '';
    }
    roiNavLinks.forEach(link => {
      const parent = link.parentElement as HTMLElement;
      if (parent) {
        parent.style.display = '';
      }
    });
  }, 1000);
}
