/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("image/check.png")'
      }
    }
  },
  plugins: []
}
