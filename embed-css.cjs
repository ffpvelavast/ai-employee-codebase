const fs = require('fs');
const path = require('path');

const css = fs.readFileSync('src/gohighlevel/homepage-sections/compiled-inline.css', 'utf8');
const styleBlock = `<style>\n${css}\n</style>\n\n`;

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
    
    // Remove existing <style> block if it exists so we don't duplicate
    content = content.replace(/<style>[\s\S]*?<\/style>\n\n/g, '');
    
    content = styleBlock + content;
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
