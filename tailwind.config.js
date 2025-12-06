/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Ajustes que amplían toda la escala sin romper proporciones
        base: "1.125rem",   // 18px → sube desde 16px
        lg: "1.25rem",      // 20px
        xl: "1.5rem",       // 24px
        "2xl": "1.75rem",   // 28px
        "3xl": "2rem",      // 32px
        "4xl": "2.5rem",    // 40px
        "5xl": "3rem",      // 48px
      },
    },
  },
  plugins: [],
}

