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
  console.log('🖨️ PDF Generation started...');
  
  try {
    // Find and hide the ROI calculator section (id="roi")
    const roiSection = document.querySelector('section#roi') as HTMLElement;
    console.log('ROI Section found:', !!roiSection);
    
    // Find and hide navigation buttons that link to ROI calculator
    const navButtons = document.querySelectorAll('button[data-testid="nav-link-roi"], button[data-testid="mobile-nav-link-roi"]');
    console.log('Navigation buttons found:', navButtons.length);
    
    // Hide ROI section if found
    if (roiSection) {
      roiSection.style.display = 'none';
      console.log('✅ ROI section hidden');
    } else {
      console.warn('⚠️ ROI section not found - it may already be hidden or have a different ID');
    }
    
    // Hide navigation buttons
    navButtons.forEach(button => {
      const element = button as HTMLElement;
      element.style.display = 'none';
    });
    
    if (navButtons.length > 0) {
      console.log('✅ Navigation buttons hidden');
    }
    
    console.log('🖨️ Opening print dialog...');
    
    // Trigger print dialog
    window.print();
    
    console.log('✅ Print dialog triggered');
    
    // Restore visibility after print dialog closes
    setTimeout(() => {
      if (roiSection) {
        roiSection.style.display = '';
      }
      navButtons.forEach(button => {
        const element = button as HTMLElement;
        element.style.display = '';
      });
      console.log('✅ Visibility restored');
    }, 1000);
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    throw error;
  }
}
