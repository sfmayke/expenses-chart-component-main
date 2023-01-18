/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'DM-Sans': "'DM Sans', sans-serif",
      },
      colors: {
        'primary-soft-red': '#F3A596',
        'primary-cyan': '#76B5BC',
        'dark-brown': '#382314',
        'medium-brown': '#93867B',
        cream: '#F8E9DD',
        orange: '#EC765D',
        'pale-orange': '#FFFAF5',
      },
    },
  },
  plugins: [],
};
