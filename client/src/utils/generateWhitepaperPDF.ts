import jsPDF from 'jspdf';

export async function generateWhitepaperPDF() {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (2 * margin);
  
  let yPos = margin;

  // Colors
  const purple = [139, 92, 246];
  const darkPurple = [88, 28, 135];
  const gray = [107, 114, 128];

  // Helper to add new page if needed
  const checkPageBreak = (neededHeight: number) => {
    if (yPos + neededHeight > pageHeight - margin) {
      pdf.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };

  // Cover Page
  pdf.setFillColor(245, 243, 255);
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');

  // Logo area
  pdf.setFillColor(purple[0], purple[1], purple[2]);
  pdf.roundedRect(margin, 30, 20, 20, 3, 3, 'F');
  pdf.setFontSize(12);
  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.text('CC', margin + 10, 43, { align: 'center' });

  // Title
  pdf.setTextColor(17, 24, 39);
  pdf.setFontSize(32);
  pdf.setFont('helvetica', 'bold');
  pdf.text('CultureCrunch', pageWidth / 2, 80, { align: 'center' });

  pdf.setFontSize(24);
  pdf.text('Proactive Psychosocial Safety', pageWidth / 2, 95, { align: 'center' });

  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(gray[0], gray[1], gray[2]);
  pdf.text('A New Framework for Australian Aged Care', pageWidth / 2, 110, { align: 'center' });

  pdf.setFontSize(12);
  pdf.text('Transforming Compliance into a Thriving Workforce with AI', pageWidth / 2, 120, { align: 'center' });

  // Key stats
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(purple[0], purple[1], purple[2]);
  pdf.text('27%', pageWidth / 2 - 60, 150, { align: 'center' });
  pdf.text('43,000', pageWidth / 2, 150, { align: 'center' });
  pdf.text('$40K', pageWidth / 2 + 60, 150, { align: 'center' });

  pdf.setFontSize(9);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(gray[0], gray[1], gray[2]);
  pdf.text('Annual Turnover', pageWidth / 2 - 60, 157, { align: 'center' });
  pdf.text('Vacancies', pageWidth / 2, 157, { align: 'center' });
  pdf.text('Cost Per Exit', pageWidth / 2 + 60, 157, { align: 'center' });

  // Footer
  pdf.setFontSize(10);
  pdf.text('© 2025 CultureCrunch', pageWidth / 2, pageHeight - 20, { align: 'center' });
  pdf.text('www.culturecrunch.com', pageWidth / 2, pageHeight - 15, { align: 'center' });

  // Page 2: Executive Summary
  pdf.addPage();
  yPos = margin;

  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(darkPurple[0], darkPurple[1], darkPurple[2]);
  pdf.text('Executive Summary', margin, yPos);
  yPos += 15;

  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(60, 60, 60);
  
  const summary = [
    'CultureCrunch is an AI-powered platform designed to transform workplace psychosocial',
    'compliance into actionable leadership insights for Australian aged care providers.',
    '',
    'Our solution addresses the perfect storm facing aged care:',
    '• New psychosocial safety mandates (Standards 7 & 2, effective Nov 1, 2025)',
    '• Critical workforce crisis (27% turnover, 43,000 vacancies)',
    '• Rising mental health claims ($58.6K median, 34 weeks off)',
    '',
    'CultureCrunch leverages AI to detect psychosocial hazards before they escalate,',
    'providing leaders with weekly actionable briefs that drive retention and compliance.',
  ];

  summary.forEach(line => {
    checkPageBreak(7);
    pdf.text(line, margin, yPos);
    yPos += 7;
  });

  // Page 3: The Problem
  checkPageBreak(30);
  yPos += 10;

  pdf.setFontSize(18);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(darkPurple[0], darkPurple[1], darkPurple[2]);
  pdf.text('The Problem: A Perfect Storm', margin, yPos);
  yPos += 12;

  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(60, 60, 60);

  const problem = [
    'Australian aged care providers face unprecedented challenges:',
    '',
    'Regulatory Pressure:',
    '• Standards 7 & 2 require "satisfied and psychologically safe workplace"',
    '• 17 specific WHS psychosocial hazards to identify, assess, and control',
    '• Personal liability for directors/executives up to $1.5M per breach',
    '',
    'Workforce Crisis:',
    '• 84,900 staff exits in 12 months (27% turnover rate)',
    '• Mental health claims: $58.6K median payout, 34 weeks off (4× other injuries)',
    '• Only 49% of workers report manageable workloads',
    '',
    'Traditional approaches fail because:',
    '• Annual surveys are too infrequent to prevent issues',
    '• Frontline managers lack time and tools for proactive intervention',
    '• Compliance becomes a tick-box exercise rather than cultural change',
  ];

  problem.forEach(line => {
    checkPageBreak(7);
    pdf.text(line, margin, yPos);
    yPos += 7;
  });

  // Page 4: The Solution
  pdf.addPage();
  yPos = margin;

  pdf.setFontSize(18);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(darkPurple[0], darkPurple[1], darkPurple[2]);
  pdf.text('The CultureCrunch Solution', margin, yPos);
  yPos += 12;

  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(60, 60, 60);

  const solution = [
    'CultureCrunch transforms psychosocial compliance into proactive workforce retention',
    'through three core components:',
    '',
    '1. Weekly Pulse Surveys (3 questions, <2 minutes)',
    '   • Privacy-minimal design (team-level aggregation only)',
    '   • Designed for aged care operational reality',
    '   • High completion rates through simplicity',
    '',
    '2. AI-Powered Monday Briefs',
    '   • Automated analysis of pulse responses',
    '   • Specific team check-in conversation guides',
    '   • Prioritized action items for each leader',
    '',
    '3. Simple Leader Dashboard',
    '   • Track trends over time',
    '   • Document compliance evidence',
    '   • Measure ROI and outcomes',
    '',
    'The system creates a sustainable weekly rhythm:',
    '→ Pulse survey (Friday) → AI brief (Monday) → Team check-in → Micro-actions',
    '→ Evidence builds automatically for compliance audits',
  ];

  solution.forEach(line => {
    checkPageBreak(7);
    pdf.text(line, margin, yPos);
    yPos += 7;
  });

  // Page 5: ROI
  pdf.addPage();
  yPos = margin;

  pdf.setFontSize(18);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(darkPurple[0], darkPurple[1], darkPurple[2]);
  pdf.text('Return on Investment', margin, yPos);
  yPos += 12;

  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(60, 60, 60);

  const roi = [
    'For a typical 150-employee aged care facility:',
    '',
    'Annual Costs (Status Quo):',
    '• Mental health claims: $234,400 (4 claims × $58.6K)',
    '• Staff replacement: $2,205,000 (45 departures × 70% salary)',
    '• Productivity loss: $1,134,000 (disengagement impact)',
    '• Absenteeism: $525,000 ($3,500 per employee)',
    '  Total: $4,098,400',
    '',
    'Expected Annual Savings (with CultureCrunch):',
    '• 40% reduction in mental health claims: $93,760',
    '• 25% reduction in turnover: $551,250',
    '• 30% productivity improvement: $340,200',
    '• 20% reduction in absenteeism: $105,000',
    '  Total Savings: $1,090,210',
    '',
    'Investment: $25,000/year (founding partner rate)',
    'Net ROI: $1,065,210',
    'ROI Multiple: 43.6x',
  ];

  roi.forEach(line => {
    checkPageBreak(7);
    pdf.text(line, margin, yPos);
    yPos += 7;
  });

  // Page 6: Next Steps
  pdf.addPage();
  yPos = margin;

  pdf.setFontSize(18);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(darkPurple[0], darkPurple[1], darkPurple[2]);
  pdf.text('Founding Partner Program', margin, yPos);
  yPos += 12;

  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(60, 60, 60);

  const nextSteps = [
    'We\'re seeking 3-5 founding partners for our pilot program.',
    '',
    'What you get:',
    '• 6-week rapid deployment',
    '• Founding partner pricing: $25,000/year (flat rate, any size)',
    '• Direct input into product roadmap',
    '• Priority support and customization',
    '• Co-marketing opportunities',
    '',
    'Ideal partners:',
    '• 100-200 staff residential aged care facilities',
    '• Leadership committed to culture-first approach',
    '• Ready to pilot new solutions (Nov 2025 - Feb 2026)',
    '',
    'Timeline:',
    'Week 1-2: Setup and leader onboarding',
    'Week 3: First pulse survey and AI brief',
    'Week 4-6: Refinement and optimization',
    '',
    'Ready to transform compliance into culture?',
    'Contact: hello@culturecrunch.com',
    'Visit: www.culturecrunch.com',
  ];

  nextSteps.forEach(line => {
    checkPageBreak(7);
    pdf.text(line, margin, yPos);
    yPos += 7;
  });

  // Save the PDF
  pdf.save('CultureCrunch-Whitepaper.pdf');
}
