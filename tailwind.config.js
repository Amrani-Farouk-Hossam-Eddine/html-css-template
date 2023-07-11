/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins"],
      },
      container: {
        center: true,
        padding: "2rem",
      }
    },
  },
  plugins: [],
};

