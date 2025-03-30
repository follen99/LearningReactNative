/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#2A3A5D",
          300: "#1F2D4A",
          600: "#17213A",
          900: "#14213D"
        },

        secondary: "#000000",

        accent: {
          100: "#FFE5B4",
          300: "#FFCC80",
          600: "#FFB74D",
          900: "#FCA311"
        },

        background: "#E5E5E5",

      }
    },
  },
  plugins: [],
}