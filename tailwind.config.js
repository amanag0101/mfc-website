/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  scripts: {
    dev: "vite", // start dev server
    build: "vite build", // build for production
    serve: "vite preview", // locally preview production build
  },
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#240d09",
          200: "#0c0a10",
          300: "rgba(255, 255, 255, 0.3)",
        },
        goldenrod: "#ffbc59",
        black: "#000",
        orangered: "#ff6a00",
        white: "#fff",
        orange: "#f9a826",
        chocolate: "#ab4b05",
        saddlebrown: "#834004",
        gainsboro: "#e6e6e6",
      },
      fontFamily: {
        "montserrat": "Montserrat",
        "raleway": "Raleway",
        "abril-fatface": "'Abril Fatface'",
        "abhaya-libre-semibold": "'Abhaya Libre SemiBold'",
      },
      borderRadius: {
        "8xs-5": "4.5px",
        "7xl-8": "26.8px",
        "5xl-4": "24.4px",
        "2xl-6": "21.6px",
        "17xl": "36px",
        base: "16px",
        "7xl-7": "26.7px",
        "12xl-9": "31.9px",
        "20xl-9": "39.9px",
        "base-8": "15.8px",
        "xs-7": "11.7px",
        "12xl-2": "31.2px",
        "7xs-1": "5.1px",
      },
    },
    fontSize: {
      "29xl-4": "3.03rem",
      "lgi-5": "1.22rem",
      "smi-2": "0.76rem",
      smi: "0.81rem",
      "3xl-8": "1.43rem",
      "mid-3": "1.08rem",
      "xl-2": "1.26rem",
      "2xs-7": "0.67rem",
      "21xl": "2.5rem",
      "5xs-9": "0.49rem",
      "10xl-7": "1.86rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
