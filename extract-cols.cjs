const fs = require('fs');

const html = fs.readFileSync('src/gohighlevel/homepage-sections/section-1-hero.html', 'utf8');

const targetTexts = [
  "AI Employees for phone, WhatsApp &amp; web",
  "Phone",
  "WhatsApp",
  "Website",
  "Routed to",
  "INTELLIGENCE LAYER",
  "Answered"
];

for (const text of targetTexts) {
    const textIndex = html.indexOf(text);
    if (textIndex !== -1) {
        // Find the closest preceding column
        const beforeText = html.substring(0, textIndex);
        const colMatches = [...beforeText.matchAll(/id="(col-[^"]+)"/g)];
        const rowMatches = [...beforeText.matchAll(/id="(row-[^"]+)"/g)];
        
        console.log(`\nText: ${text}`);
        if (colMatches.length > 0) {
            console.log(`Closest Col ID: #${colMatches[colMatches.length - 1][1]}`);
        }
        if (rowMatches.length > 0) {
            console.log(`Closest Row ID: #${rowMatches[rowMatches.length - 1][1]}`);
        }
    }
}
