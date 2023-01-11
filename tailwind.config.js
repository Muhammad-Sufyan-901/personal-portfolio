/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}", "./wrapper/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6a59d1",
        altPrimary: "#9153f4",
        secondary: "#0e2431",
        altSecondary: "#132347",
        light: "#9d9d9d",
        altLight: "#c5cadf",
      },
      backgroundColor: {
        glassmorph: "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        primaryGradient: "linear-gradient(45deg, transparent, #6a59d1, transparent)",
        altPrimaryGradient: "linear-gradient(45deg, transparent, #9153f4 , transparent)",
      },
      maxWidth: {
        sectionWidth: "1200px",
      },
      padding: {
        sectionPadding: "7.5rem 0 1rem",
      },
      boxShadow: {
        cardShadow: "0px 0px 20px rgb(0 0 0 / 10%)",
      },
      animation: {
        fromTopAnimation: "fromTop 1.2s ease",
        toTopAnimation: "toTop 1.2s ease",
      },
      keyframes: {
        fromTop: {
          from: {
            transform: "translateY(-100px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        toTop: {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-100px)",
          },
        },
      },
    },
  },
  plugins: [],
};
