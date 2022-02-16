module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },

      colors: {
        "smooth-black": "#22272e",
        "smooth-grey": "#cecece",
        "light-grey": "#adbac7",
        "light-green": "#38b000",
        "smooth-white": "#f8f9fa",
        "warning-red": "#dc2f02",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
