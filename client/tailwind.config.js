/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": "#f7ebf1",
        "primary-100": "#f4e1ea",
        "primary-200": "#e7c1d3",
        "primary-300": "#b33771",
        "primary-400": "#a13266",
        primary: "#8f2c5a",
        "primary-600": "#862955",
        "primary-700": "#6b2144",
        "primary-800": "#511933",
        "primary-900": "#3f1328",

        error: "#F04438",
        "error-hover": "#d83d32",


        warning: "#F79009",
        success: "#12B76A",
      },
      fontFamily: {
        // primary: ["Noto Sans", "sans-serif"],
        // secondary: ["Alkatra", "cursive"],
      },
      minHeight: {
        'screen-minus-56': 'calc(100vh - 56px)',
      },
    },
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xll: "1440px",
      "3xl": "1920px",
    },
  },
  plugins: [],
}

