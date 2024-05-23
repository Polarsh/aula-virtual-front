/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-primary': '#6366f1',
        'my-secondary': '#818cf8',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
