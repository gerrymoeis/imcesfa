/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-elevated': 'rgb(15, 22, 35)',
        'background-muted': 'rgb(8, 12, 20)',
      },
    },
  },
  plugins: [],
}

