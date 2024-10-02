import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      // padding: {
      //   DEFAULT: "1rem",
      //   sm: "2rem",
      //   lg: "4rem",
      //   xl: "5rem",
      //   "2xl": "6rem",
      // },
    },

    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1374px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#9B7029",

        fontColor: "#3A3A3A",
        danger: "#D84141",
        success: "#3B7F34",

        Gray1: "#F4F4F4",
        Gray2: "#F0F0F0",
        Gray3: "#D3D3D3",
        Gray4: "#CCCCCC",
        Gray5: "#A7A7A7",
        Gray6: "#d9d9d9",
        Yellow1:"#fbf5ec",
        darkBGPrimary: "#121212",
        darkBGSecondary: "#2f2f2f",

        greenish: "#9B7029",
        lightGreen: "#D59B3F",
        visit: "#387",
        postCreation: "#2A94F44D",
        canceled: "#C23032",
        declined: "#D80606",
        mix: "#7F4A344D",
        OnHold: "#995757",
      },
      fontSize: {
        xs: "0.625rem",
        sm: "0.75rem",
        base: "0.875rem",
        lg: "1rem",

        xl: "1.125rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "1.875rem",
        "5xl": "2.25rem",
      },
      boxShadow: {
        card: "0px 1px 20px 0px rgba(163, 171, 185, 0.24)",
        subCard: "0px 1px 20px 0px #A3ABB93D",
        topExcludedShadow: "0px 4px 4px 0px #38414A1A",
        shadow3: "0px 1px 9px 0px #38414A1A;",
        socialMediaCard: "0px 4px 4px 0px rgba(163, 171, 185, 0.25)",
        darkShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        darkShadow2: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
      },
      animation: {
        dash: "dash 3s linear alternate infinite",
      },
      scale: {
        "-100": "-1",
      },
      keyframes: {
        dash: {
          from: { strokeDashoffset: "822" },
          to: { strokeDashoffset: "822" },
        },
      },
      gridTemplateColumns: {
        footer: "repeat(auto-fill, minmax(250px, 1fr))",
        autoFit: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
