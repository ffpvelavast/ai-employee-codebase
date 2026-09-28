const { renderToString } = require('react-dom/server');
const React = require('react');
const lucide = require('lucide-react');

const icons = [
  'PhoneMissed', 'Moon', 'MessageSquare', 'CalendarClock', 
  'Clock', 'UserCheck', 'CalendarCheck', 'ShieldCheck'
];

const result = {};

for (const name of icons) {
  const Icon = lucide[name];
  if (Icon) {
    const svg = renderToString(React.createElement(Icon, { size: 24 }));
    result[name] = svg;
  }
}

console.log(JSON.stringify(result, null, 2));
