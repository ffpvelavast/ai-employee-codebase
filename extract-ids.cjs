const fs = require('fs');

const html = fs.readFileSync('src/gohighlevel/homepage-sections/section-1-hero.html', 'utf8');

// Regex to extract all elements with IDs and text content
const regex = /<([^>]+)\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/\1>/g;
let match;
const elements = [];

// A simpler way: we just want to find where texts like "Phone", "WhatsApp", "Intelligence Layer" are and get their closest enclosing IDs.
const targetTexts = [
  "AI Employees for phone, WhatsApp & web",
  "Your Business Doesn't Work 9 to 5.",
  "Neither Should Your Customer Experience.",
  "Meet Your First AI Employee",
  "What AI Employees Can Do for You?",
  "Phone",
  "WhatsApp",
  "Website",
  "Routed to",
  "INTELLIGENCE LAYER",
  "Your AI Employee",
  "Answered",
  "Qualified",
  "Booked",
  "Escalated"
];

for (const text of targetTexts) {
    const textIndex = html.indexOf(text);
    if (textIndex !== -1) {
        // Find the closest preceding id="something"
        const beforeText = html.substring(0, textIndex);
        const idMatches = [...beforeText.matchAll(/id="([^"]+)"/g)];
        if (idMatches.length > 0) {
            const lastId = idMatches[idMatches.length - 1][1];
            elements.push({ text, id: lastId });
        }
    } else {
        // Try uppercase or lowercase
        const upperTextIndex = html.toUpperCase().indexOf(text.toUpperCase());
        if (upperTextIndex !== -1) {
            const beforeText = html.substring(0, upperTextIndex);
            const idMatches = [...beforeText.matchAll(/id="([^"]+)"/g)];
            if (idMatches.length > 0) {
                const lastId = idMatches[idMatches.length - 1][1];
                elements.push({ text, id: lastId });
            }
        }
    }
}

console.log(JSON.stringify(elements, null, 2));
