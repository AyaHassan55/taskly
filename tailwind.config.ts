

import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D47A1",
          container: "#1557C9",
        },

        surface: {
          highest: "#D7E2FF",
          low: "#F1F3FF",
        },

        background: "#F8F9FF",

        slate: {
          900: "#04183C",
          700: "#4F5F7B",
          300: "#C3C8D6",
        },

        success: "#7EE7B3",
        error: "#D41717",
        warning: "#F6B400",
      },

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },

      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "16px",
        xl: "20px",
      },

      boxShadow: {
        card:
          "0 4px 12px rgba(4,24,60,0.06)",

        elevated:
          "0 8px 24px rgba(4,24,60,0.12)",
      },

      maxWidth: {
        content: "1280px",
      },
    },
  },

  plugins: [],
} satisfies Config;