const fs = require('fs');

const cssPath = 'src/gohighlevel/homepage-sections/compiled-fixed.css';
let css = fs.readFileSync(cssPath, 'utf8');

const variables = {
  // Spacing & Math
  '--spacing': '0.25rem',
  
  // Colors (hex conversions)
  '--background': '#fcfcfc',
  '--foreground': '#2a2c33',
  '--surface': '#f5f6f8',
  '--surface-2': '#eff0f3',
  '--hairline': '#e0e2e6',
  '--card': '#ffffff',
  '--card-foreground': '#2a2c33',
  '--popover': '#ffffff',
  '--popover-foreground': '#2a2c33',
  '--navy': '#1f2536',
  '--navy-foreground': '#fafafb',
  '--navy-soft': '#353c4f',
  '--blue': '#3a75ff',
  '--blue-soft': '#e1ebff',
  '--amber': '#e88633',
  '--amber-soft': '#ffedd6',
  '--muted': '#f1f2f4',
  '--muted-foreground': '#787d8a',
  '--accent': '#e1ebff',
  '--accent-foreground': '#28314f',
  '--destructive': '#d63b3b',
  '--destructive-foreground': '#fafafb',
  '--border': '#e0e2e6',
  '--input': '#e0e2e6',
  '--ring': '#3a75ff',
  
  // Sidebar colors
  '--sidebar': '#f5f6f8',
  '--sidebar-border': '#e0e2e6',
  '--sidebar-ring': '#3a75ff',
  
  // Gradients
  '--gradient-blue': 'linear-gradient(135deg, #3a75ff, #2a55ff)',
  '--gradient-navy': 'linear-gradient(160deg, #1f2536, #121521)',
  
  // Shadows
  '--shadow-soft': '0 1px 2px rgba(31, 37, 54, 0.04), 0 12px 32px -18px rgba(31, 37, 54, 0.25)',
  '--shadow-lift': '0 2px 4px rgba(31, 37, 54, 0.05), 0 28px 60px -30px rgba(31, 37, 54, 0.35)',

  // Fonts
  '--font-display': '"Sora", ui-sans-serif, system-ui, sans-serif',
  '--font-sans': '"Manrope", ui-sans-serif, system-ui, sans-serif',
  '--font-mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',

  // Font Sizes
  '--text-xs': '0.75rem',
  '--text-sm': '0.875rem',
  '--text-base': '1rem',
  '--text-lg': '1.125rem',
  '--text-xl': '1.25rem',
  '--text-2xl': '1.5rem',
  '--text-5xl': '3rem',
  '--text-6xl': '3.75rem',
  '--text-7xl': '4.5rem',
  '--text-8xl': '6rem',
  
  // Line Heights
  '--text-xs--line-height': '1.333',
  '--text-sm--line-height': '1.428',
  '--text-base--line-height': '1.5',
  '--text-lg--line-height': '1.555',
  '--text-xl--line-height': '1.4',
  '--text-2xl--line-height': '1.333',
  '--text-5xl--line-height': '1',
  '--text-6xl--line-height': '1',
  '--text-7xl--line-height': '1',
  '--text-8xl--line-height': '1',
  '--leading-tight': '1.25',
  '--leading-snug': '1.375',
  '--leading-relaxed': '1.625',
  
  // Font Weights
  '--font-weight-light': '300',
  '--font-weight-normal': '400',
  '--font-weight-medium': '500',
  '--font-weight-semibold': '600',
  '--font-weight-bold': '700',
  
  // Tracking
  '--tracking-tight': '-0.025em',
  '--tracking-wide': '0.025em',
  '--tracking-widest': '0.1em',
  
  // Radius
  '--radius': '0.75rem',
  '--radius-sm': '0.5rem',
  '--radius-md': '0.625rem',
  '--radius-lg': '0.75rem',
  '--radius-xl': '1rem',
  '--radius-2xl': '1.25rem',
  '--radius-3xl': '1.5rem',
  '--radius-4xl': '1.75rem',

  // Misc
  '--aspect-video': '16 / 9',
  '--default-transition-duration': '0.15s',
  '--default-transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
  '--ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
  '--ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  
  // Animations
  '--animate-spin': 'spin 1s linear infinite',
  '--animate-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  
  // Defaults used everywhere
  '--tw-leading': '1.5',
  '--tw-border-style': 'solid'
};

// Iteratively replace all known variables
let maxIterations = 5; // Handle nested vars
while (maxIterations-- > 0) {
  let changed = false;
  for (const [key, value] of Object.entries(variables)) {
    const regex = new RegExp(`var\\(${key}(?:,[^)]+)?\\)`, 'g');
    const newCss = css.replace(regex, value);
    if (newCss !== css) {
      css = newCss;
      changed = true;
    }
  }
  if (!changed) break;
}

// Now handle basic calc(0.25rem * X) expressions where X can be decimal
css = css.replace(/calc\(\s*0\.25rem\s*\*\s*([\d.]+)\s*\)/g, (match, num) => {
  return (parseFloat(num) * 0.25) + 'rem';
});

// Remove any remaining unresolved vars in color-mix by just using the color
css = css.replace(/color-mix\(in oklab,\s*var\(--[^)]+\)\s*(\d+)%,\s*transparent\)/g, 'transparent'); // GHL strips color mix anyway, fallback is used instead

fs.writeFileSync('src/gohighlevel/homepage-sections/compiled-inline.css', css);
console.log('Successfully inlined variables into compiled-inline.css');
