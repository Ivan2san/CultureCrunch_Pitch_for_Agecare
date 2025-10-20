import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF() {
  console.log('🚀 Starting PDF generation...');
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-web-security'
    ]
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport for consistent rendering
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2
    });

    console.log('📱 Navigating to website...');
    
    // Navigate to the local site
    // Update this URL if your site runs on a different port
    const url = 'http://localhost:5000';
    
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    console.log('⏳ Waiting for content to load...');
    
    // Wait for main content to be visible
    await page.waitForSelector('section#vision', { timeout: 10000 });
    
    // Give extra time for animations and lazy-loaded content
    await page.waitForTimeout(3000);

    console.log('🎨 Hiding ROI calculator section...');
    
    // Hide the ROI calculator section
    await page.evaluate(() => {
      const roiSection = document.querySelector('section#roi-calculator');
      if (roiSection) {
        roiSection.style.display = 'none';
      }
      
      // Also hide navigation links to the calculator
      const navLinks = document.querySelectorAll('a[href="#roi-calculator"]');
      navLinks.forEach(link => {
        const parent = link.parentElement;
        if (parent) {
          parent.style.display = 'none';
        }
      });
    });

    console.log('📄 Generating PDF...');
    
    // Define output path
    const outputPath = join(__dirname, '..', 'CultureCrunch-Pitch.pdf');
    
    // Generate PDF with proper settings
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm'
      },
      preferCSSPageSize: false,
      displayHeaderFooter: false
    });

    console.log(`✅ PDF generated successfully: ${outputPath}`);
    console.log('📦 File saved to: CultureCrunch-Pitch.pdf');
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    throw error;
  } finally {
    await browser.close();
    console.log('🔒 Browser closed');
  }
}

// Run the function
generatePDF().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
