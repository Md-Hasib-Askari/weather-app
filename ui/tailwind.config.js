/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans'],
      },
      fontWeight: {
        normal: 400,
        bold: 600,
      },
      fontSize: {
        base: '15px'
      },
      colors: {
        primary: "hsl(205 100% 50%)",
        'primary-foreground': "hsl(0,0%,89%)",
      }
    },
  },
  plugins: [],
}

