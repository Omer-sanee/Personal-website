/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',      // deep blue
        secondary: '#10b981',    // green
        accent: '#f59e0b',       // amber
        background: '#f3f4f6',   // light gray
        darkbg: '#111827',       // dark background
      },
    },
  },
  plugins: [],
}
