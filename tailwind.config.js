module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'bebas': ['Bebas Neue',],
      'roboto': ['Roboto'],
    },
    container: {
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1024px',
        'xl': '1170px',
        '2xl': '1170px',
      },
      padding: {
        DEFAULT: '1rem',
      },
    },
    color: {
      'green-first': '#A4BC46',
      'green-second': '#85A019',
    },
    extend: {},
  },
  plugins: [],
}
