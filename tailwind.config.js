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
        'salon-purple': '#667eea',
        'salon-pink': '#764ba2',
      },
      fontFamily: {
        'japanese': ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}