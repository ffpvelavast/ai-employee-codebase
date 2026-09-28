const fs = require('fs');

const path = 'src/gohighlevel/compiled-tailwind.css';
let css = fs.readFileSync(path, 'utf8');

// 1. Fix the --spacing variable which Tailwind v4 relies on for all margins and paddings
css = css.replace(/var\(--spacing\)/g, '0.25rem');

// Write the fixed CSS back
fs.writeFileSync('src/gohighlevel/compiled-tailwind-fixed.css', css);
console.log('Fixed CSS generated as compiled-tailwind-fixed.css');
