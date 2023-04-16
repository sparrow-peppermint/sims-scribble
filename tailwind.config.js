/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./client/**/*.{html,ts,tsx,js}'],
  theme: {
    fontFamily: {
      header: ['Cloudstorm', 'sans-serif'],
    },
    container: {
      center: true,
    },
    colors: {
      teal: '#008080',
    },
    extend: {
      backgroundImage: {
        paint: "url('/images/paint.jpg')",
      },
    },
  },
  plugins: [],
}
