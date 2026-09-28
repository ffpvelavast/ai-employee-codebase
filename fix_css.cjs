const fs = require('fs');
const path = 'src/gohighlevel/homepage-sections/compiled.css';

let css = fs.readFileSync(path, 'utf8');

// Remove @layer wrappers but keep their contents
// Tailwind 4 outputs:
// @layer properties { ... }
// @layer theme { ... }
// @layer base { ... }
// @layer components;
// @layer utilities { ... }

// A simple way to flatten this is to use a regex or just string replacement if we are careful.
// Actually, it's safer to just replace:
// '@layer properties{' -> '' (and remove the matching closing brace)
// But regex for balanced braces is hard. 

// Better: PostCSS script!
// We can use postcss to flatten it, or since we know the exact structure of tailwind v4 output, we can do it manually.

// Since we have a full node environment, let's just replace var(--spacing) with 0.25rem globally 
// to instantly fix all spacing issues regardless of @layer support.
css = css.replace(/var\(--spacing\)/g, '0.25rem');

// Also, let's make sure the :root variables are applied to * and html and body as a fallback.
const rootRegex = /:root,:host\{([^}]+)\}/;
const match = css.match(rootRegex);
if (match) {
  const vars = match[1];
  css += `\n/* Fallback for GHL stripping :root */\nhtml, body, *, section, div { ${vars} }`;
}

fs.writeFileSync('src/gohighlevel/homepage-sections/compiled-fixed.css', css);
console.log('Fixed CSS generated');
