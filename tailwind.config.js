/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
        colors: {
          'purple': '#aa0f52',
          'title': '#292931',
        },
        backgroundColor: {
          'body': '#e6e3e3',
          'card' : '#f5f4f4',
          'calendar' : '#eaeafa',
          'dark-card': '#262226',
          'dark-calendar': '#3f3f46',
        },
      },
  },
  plugins: [],
  darkMode: "class",
};

