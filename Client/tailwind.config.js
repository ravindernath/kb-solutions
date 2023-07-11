module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1750px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: "#0db4c4",
        secondary: "#0097a4",
        blue: "#2a68ff",
        black: "#222222",
        grayy: "#666666",
        lightgray: "#DDDDDD",
        green: "#28C165",
        red: "#F4574D",
        grayInc: "#f1f4f8",
        cardShadow: "#f7f8f9",
        textColor: "#252b36"
      }
    },
  },
  plugins: [],
}