const fs = require('fs');
const path = require('path');

const sections = [
  'section-1-hero.html',
  'section-2-video.html',
  'section-3-speed.html',
  'section-4-reality.html',
  'section-5-employees.html'
];

sections.forEach(file => {
  const filePath = path.join('src/gohighlevel/homepage-sections', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove the <style>...</style> block
    content = content.replace(/<style>[\s\S]*?<\/style>\n\n/g, '');
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned ${file}`);
  }
});
