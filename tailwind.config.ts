import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-bg": "#171717",
        black: "#3A3A3A",
        dark: "#2D3039",
        active: "#3385ff",
        "white-bg": "#fefff5",
      },
      screens: {
        sm: "393px",
        md: "810px",
        lg: "1280px",
        xl: "1920px",
        "2xl": "3840px",
      },
      fontWeight: {
        "extra-bold": "800",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
