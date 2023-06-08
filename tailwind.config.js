/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      borderRadius: {
        px: '1px',
      },
      fontFamily: {
        default: 'var(--font-roboto), sans-serif',
      },
    },
  },
};
