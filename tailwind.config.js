/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mustard: {
          DEFAULT: '#C1A577',
          light: '#E8D9C0',
          dark: '#9A7F55',
        },
        lavender: {
          DEFAULT: '#C5C3D0',
          light: '#ECEAF3',
          dark: '#9D9BAD',
        },
        pink: {
          DEFAULT: '#BAA7AA',
          light: '#E8DCDE',
          dark: '#8E7478',
        },
        cream: '#FAF7F2',
        parchment: '#F2EDE4',
        ink: '#3A3530',
        inkMuted: '#7A6E68',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
