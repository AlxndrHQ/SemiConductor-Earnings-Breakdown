/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Obsidian-leaning: serif display, monospace data, clean sans for body
        display: ['"Iowan Old Style"', '"Apple Garamond"', 'Georgia', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        // Light mode (paper)
        paper: {
          bg: '#fafaf7',
          surface: '#ffffff',
          border: '#e8e6df',
          muted: '#6b6960',
          text: '#1f1d18',
          accent: '#8a5a2b', // muted ochre for links
        },
        // Dark mode (obsidian)
        ink: {
          bg: '#0e0e10',
          surface: '#161618',
          border: '#26262b',
          muted: '#7a7a82',
          text: '#e8e6df',
          accent: '#c9a875', // warm gold for links
        },
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
