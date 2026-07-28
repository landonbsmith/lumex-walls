// Merge into tailwind.config.js -> theme.extend
colors: {
  lumex: {
    cyan: '#00E5FF', blue: '#0066FF', purple: '#9B00FF',
    magenta: '#FF00BB', orange: '#FF7A00',
    black: '#05060F', panel: '#0B0E1C', border: '#1E2438', muted: '#8FA0BC',
  },
},
fontFamily: { display: ['"Exo 2"', 'system-ui', 'sans-serif'] },
backgroundImage: {
  'lumex-primary': 'linear-gradient(135deg,#00E5FF 0%,#0066FF 40%,#9B00FF 100%)',
  'lumex-energy':  'linear-gradient(120deg,#FF7A00 0%,#FF00BB 45%,#9B00FF 100%)',
},
boxShadow: { 'lumex-glow': '0 0 24px rgba(0,229,255,.45)' },
