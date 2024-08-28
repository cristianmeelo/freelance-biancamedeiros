import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base_white: "#ffffff",
        base_light: "#e7dbd2",
        base_orange: "#CE9257",
        base_red: "#af6a2f",
        base_green: "#aba784",
      },
    },
  },
  plugins: [],
};

export default config;
