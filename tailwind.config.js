/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    screens: {
      phone: "320px",
      "phone-m": "375px",
      tablet: "768px",
      "tablet-vertical": "1024px",
      laptop: "1280px",
    },
    colors: {
      light: {
        "01": "#aeaeb2",

        "04": "#f2f2f7",
      },
      dark: {
        "01": "#020203",

        "04": "#8e8e93",
      },
      blue: {
        "01": "#bae1ff",
      },
      orange: {
        "01": "cc5500",
        "02": "#E97451",
      },
      transparent: "transparent",
      white: "#fff",
      black: " #000",
      "default-text": "#020203",
      brand: "#CC5500",
    },
    fontWeight: {
      regular: 400,
      "semi-bold": 600,
      bold: 700,
      "extra-bold": 800,
    },
    extend: {
      spacing: {
        "t-container": "690px",
        "t-v-container": "900px",
        "l-container": "1040px",
      },

      boxShadow: {
        "left-shadow-black-button":
          "-0.2rem 0.2rem #CC5500, -0.3rem 0.3rem rgb(0, 0, 0)",
      },
    },
  },
  plugins: [],
};
