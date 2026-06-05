/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tejo-orange': '#F58220',
        'trust-blue': '#1E88E5',
        'tejo-bg': '#F8FAFC',
        'tejo-accent': '#10B981',
        'tejo-text': '#111827',
      },
      borderRadius: {
        '2xl': '20px',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glow': '0 0 20px rgba(245, 130, 32, 0.5)',
      }
    },
  },
  plugins: [],
};