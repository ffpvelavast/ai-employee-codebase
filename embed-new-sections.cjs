const fs = require('fs');

const heroPath = 'src/gohighlevel/homepage-sections/section-1-hero.html';
const heroHtml = fs.readFileSync(heroPath, 'utf8');

// Extract the style block
const styleMatch = heroHtml.match(/<style>[\s\S]*?<\/style>/);
if (!styleMatch) {
  console.log('Could not find style block in section-1-hero.html');
  process.exit(1);
}

const finalStyleBlock = styleMatch[0] + '\n';

const sections = [
  'section-7-calculator.html',
  'section-8-chat-tabs.html',
  'section-9-reviews.html'
];

sections.forEach(file => {
  const htmlPath = `src/gohighlevel/homepage-sections/${file}`;
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Remove existing styles to avoid duplicates
    html = html.replace(/<style>[\s\S]*?<\/style>/g, '');
    
    // Add breakout hack
    if (!html.includes('ghl-breakout')) {
        html = html.replace(/<section([^>]*)class="/, '<section$1class="ghl-breakout ');
    }
    
    fs.writeFileSync(htmlPath, finalStyleBlock + html);
    console.log(`Successfully embedded extracted styles to ${file}`);
  }
});
