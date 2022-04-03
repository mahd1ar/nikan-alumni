const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        tm: {
          black: '#232E3B',
          gray: '#626F7F',
          yellow: { DEFAULT: '#f7ca18', dark: '#67540a' },
        },
      },
      fontFamily: {
        naskh: ['Noto Naskh Arabic', ...defaultTheme.fontFamily.sans],
        vazir: ['Vazir', ...defaultTheme.fontFamily.sans],
        samim: ['Samim', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
