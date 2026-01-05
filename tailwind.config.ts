import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5b21b6",    // Deep Purple
        secondary: "#4338ca",  // Indigo
        accent: "#0f766e",     // Teal
        light: "#ede9fe"       // Light Purple
      }
    }
  },
  plugins: []
};

export default config;
