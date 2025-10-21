import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function exportPitchDeckToPDF() {
  try {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 15;
    
    // Add cover page
    pdf.setFontSize(32);
    pdf.setFont('helvetica', 'bold');
    pdf.text('CultureCrunch', pageWidth / 2, 60, { align: 'center' });
    
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'normal');
    pdf.text('CultureCrunch', pageWidth / 2, 80, { align: 'center' });
    
    pdf.setFontSize(14);
    pdf.text('Psychosocial Safety Platform', pageWidth / 2, 100, { align: 'center' });
    pdf.text('Pitch Deck', pageWidth / 2, 115, { align: 'center' });
    
    pdf.setFontSize(10);
    pdf.text(new Date().toLocaleDateString(), pageWidth / 2, pageHeight - 20, { align: 'center' });
    
    // Section IDs to capture
    const sectionIds = [
      'vision',
      'problem',
      'why-now',
      'solution',
      'how-it-works',
      'roi',
      'positioning',
      'roadmap',
      'ask'
    ];
    
    for (const sectionId of sectionIds) {
      const section = document.getElementById(sectionId);
      if (!section) continue;
      
      pdf.addPage();
      
      // Capture section as canvas
      const canvas = await html2canvas(section, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1200,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pageWidth - (margin * 2);
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // If image is taller than page, split it
      if (imgHeight > pageHeight - (margin * 2)) {
        const totalPages = Math.ceil(imgHeight / (pageHeight - (margin * 2)));
        
        for (let i = 0; i < totalPages; i++) {
          if (i > 0) {
            pdf.addPage();
          }
          
          const srcY = i * (pageHeight - (margin * 2)) * (canvas.width / imgWidth);
          const srcHeight = Math.min(
            (pageHeight - (margin * 2)) * (canvas.width / imgWidth),
            canvas.height - srcY
          );
          
          const sectionCanvas = document.createElement('canvas');
          sectionCanvas.width = canvas.width;
          sectionCanvas.height = srcHeight;
          
          const ctx = sectionCanvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(
              canvas,
              0,
              srcY,
              canvas.width,
              srcHeight,
              0,
              0,
              canvas.width,
              srcHeight
            );
            
            const sectionImgData = sectionCanvas.toDataURL('image/png');
            const sectionImgHeight = (srcHeight * imgWidth) / canvas.width;
            pdf.addImage(sectionImgData, 'PNG', margin, margin, imgWidth, sectionImgHeight);
          }
        }
      } else {
        pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);
      }
    }
    
    // Save the PDF
    pdf.save('CultureCrunch-Pitch-Deck.pdf');
    
    return { success: true };
  } catch (error) {
    console.error('PDF export error:', error);
    return { success: false, error };
  }
}
