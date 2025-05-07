/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite', // Slow spin effect
        'float': 'float 5s ease-in-out infinite', // Floating effect
        'pulse-slow': 'pulse 3s ease-in-out infinite', // Slow pulse effect
        'scroll-once': 'scrollOnce 20s linear infinite',
        fadeIn: 'fadeIn 2s ease-in-out',
        bounceSmall: 'bounceSmall 2s infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }, // Creates a floating effect
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceSmall: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        scrollOnce: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}