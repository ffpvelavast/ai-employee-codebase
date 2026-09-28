const fs = require('fs');

const css = fs.readFileSync('src/gohighlevel/homepage-sections/compiled-inline.css', 'utf8');

// A regex to match CSS properties and values inside blocks.
// This is a bit tricky, but since Tailwind's output is highly regular, we can replace the end of declarations.
// We look for a colon, followed by anything that isn't a semicolon or curly brace, ending in a semicolon or curly brace.
let importantCss = css.replace(/([a-zA-Z0-9-]+)\s*:\s*([^;}!]+)(?=[;}])/g, (match, prop, val) => {
    // Avoid making CSS variables important if they are definitions
    if (prop.startsWith('--')) {
        return match;
    }
    return `${prop}: ${val.trim()} !important`;
});

fs.writeFileSync('src/gohighlevel/homepage-sections/compiled-important.css', importantCss);
console.log('Created compiled-important.css');
