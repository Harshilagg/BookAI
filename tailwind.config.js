/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // darkMode: 'class', // This should be set to 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        accent: 'var(--accent-color)',
        code: 'var(--code-background)',
        section: 'var(--section-background)',
        border: 'var(--border-color)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

