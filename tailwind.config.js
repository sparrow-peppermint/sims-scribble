/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./client/**/*.{html,ts,tsx,js}'],
  theme: {
    fontFamily: {
      header: ['Cloudstorm', 'sans-serif'],
      windows: ['FranklinGothic', 'sans-serif'],
      windowsCondensed: ['FGCondensed', 'sans-serif'],
      windowsItalic: ['FGItalic', 'sans-serif'],
    },
    container: {
      center: true,
    },
    colors: {
      teal: '#008080',
    },
    corePlugins: {
      preflight: false,
    },
    extend: {
      backgroundImage: {
        paint: "url('/images/paint.jpg')",
      },
    },
  },
  plugins: [],
  /*# sourceMappingURL=98.css.map */
}
