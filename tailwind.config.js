/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: colors.zinc,
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
        "gradient-radial-top":
          "radial-gradient(100% 60% at 100% 0%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        disco: {
          "0%": { transform: "translateY(-50%) rotate(0deg)" },
          "100%": { transform: "translateY(-50%) rotate(360deg)" },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        endless: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-245px)" },
        },
      },
      animation: {
        endless: "endless 20s linear infinite",

        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        disco: "disco 1.5s linear infinite",
        "spin-forward": "spin 2s linear infinite",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@kamona/tailwindcss-perspective"),
    require("tailwindcss-animate"),
  ],
};
