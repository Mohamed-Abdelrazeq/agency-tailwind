/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'service-1': "url('./assets/services/1.jpg')",
        'service-2': "url('./assets/services/2.jpg')",
        'service-3': "url('./assets/services/3.jpg')",
        'service-4': "url('./assets/services/4.jpg')",
        'service-5': "url('./assets/services/5.jpg')",
      }
    },
  },
  plugins: [],
}

