/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-orange': '#dc7930', // Custom orange
        'c-blue': '#427bb4',    // Custom blue
        'c-green': '#34906B',   // Custom green
        'c-gray': '#2A2D33',    // Custom gray
        'c-sky-blue': '#eef5fd', // Custom sky-blue
        'white': '#ffffff' 
        
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'], // Custom font
      }
    },
  },
  plugins: [],
}
