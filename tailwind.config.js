/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        Green:
          "0px 8px 24px 0px rgba(73, 180, 134, 0.24), 2px 3px 16px 0px rgba(255, 255, 255, 0.24) inset, -2px -3px 24px 0px rgba(0, 0, 0, 0.12) inset",
        Green3D:
          "2px 3px 8px 0px rgba(255, 255, 255, 0.32) inset, -2px -3px 8px 0px rgba(0, 0, 0, 0.12) inset",
      },
      keyframes: {
        wiggle: {
          "0% , 100%": { top: "0" },
          "50%": { top: "-30px" },
        },
      },
      animation: {
        wiggle: "wiggle 5s linear infinite",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
  plugins: [],
};
