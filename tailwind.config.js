/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    screens: {
      phone: '320px',
      'phone-m': '375px',
      tablet: '768px',
      'tablet-vertical': '1024px',
      laptop: '1280px',
    },
    colors: {
      light: {
        '01': '#aeaeb2',

        '04': '#f2f2f7',
      },
      dark: {
        '01': '#020203',

        '04': '#8e8e93',
      },
      transparent: 'transparent',
      white: '#fff',
      black: ' #000',
      'default-text': '#020203',
    },
    fontWeight: {
      regular: 400,
      'semi-bold': 600,
      bold: 700,
      'extra-bold': 800,
    },
  },
  plugins: [],
};
