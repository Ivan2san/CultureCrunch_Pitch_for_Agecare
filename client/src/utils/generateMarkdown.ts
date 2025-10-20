/**
 * Markdown Generation Utility
 * 
 * Extracts content from the CultureCrunch pitch sections and generates
 * a Markdown file (excluding the ROI calculator).
 */

export function generateMarkdownFile() {
  console.log('📝 Starting Markdown generation...');
  
  const sections = [
    { id: 'vision', title: 'Vision' },
    { id: 'problem', title: 'Problem' },
    { id: 'why-now', title: 'Why Now' },
    { id: 'solution', title: 'Solution' },
    { id: 'how-it-works', title: 'How It Works' },
    { id: 'accountable-conversations', title: 'Accountable Conversations' }
  ];
  
  let markdown = '# CultureCrunch Pitch Deck\n\n';
  markdown += `*Generated: ${new Date().toLocaleString()}*\n\n`;
  markdown += '---\n\n';
  
  sections.forEach(({ id, title }) => {
    const section = document.getElementById(id);
    if (!section) {
      console.warn(`⚠️ Section not found: ${id}`);
      return;
    }
    
    markdown += `## ${title}\n\n`;
    
    // Extract headings
    const headings = section.querySelectorAll('h2, h3, h4, h5');
    const paragraphs = section.querySelectorAll('p');
    const listItems = section.querySelectorAll('li');
    
    // Get all text content in a structured way
    const allText: string[] = [];
    
    section.querySelectorAll('h2, h3, h4, h5, p, li').forEach(el => {
      const text = el.textContent?.trim();
      if (text && text.length > 0) {
        const tagName = el.tagName.toLowerCase();
        
        if (tagName === 'h2') {
          allText.push(`\n### ${text}\n`);
        } else if (tagName === 'h3') {
          allText.push(`\n#### ${text}\n`);
        } else if (tagName === 'h4') {
          allText.push(`\n##### ${text}\n`);
        } else if (tagName === 'h5') {
          allText.push(`\n###### ${text}\n`);
        } else if (tagName === 'li') {
          allText.push(`- ${text}`);
        } else {
          allText.push(`${text}\n`);
        }
      }
    });
    
    markdown += allText.join('\n');
    markdown += '\n\n---\n\n';
  });
  
  // Generate filename with timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const filename = `CultureCrunch-Pitch-${timestamp}.md`;
  
  // Create blob and download
  const blob = new Blob([markdown], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  
  // Cleanup
  URL.revokeObjectURL(url);
  
  console.log(`✅ Markdown file generated: ${filename}`);
  
  return filename;
}
