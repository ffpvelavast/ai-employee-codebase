const fs = require('fs');

const html = fs.readFileSync('src/gohighlevel/homepage-sections/section-1-hero.html', 'utf8');

// Use regex to find all columns and the text inside them (stripped of HTML tags)
const colRegex = /<div\s+id="(col-[^"]+)"[^>]*>([\s\S]*?)<\/div><!--\]--><!--\]--><\/div>/g;
let match;
while ((match = colRegex.exec(html)) !== null) {
    const colId = match[1];
    let content = match[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (content.length > 50) {
        content = content.substring(0, 50) + '...';
    }
    console.log(`${colId}: ${content}`);
}

// Fallback: Just split by 'id="col-' and get the first few words of text
const parts = html.split('id="col-');
for (let i = 1; i < parts.length; i++) {
    const id = parts[i].substring(0, parts[i].indexOf('"'));
    let text = parts[i].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 80);
    console.log(`Col ID: #col-${id} | Text: ${text}`);
}
