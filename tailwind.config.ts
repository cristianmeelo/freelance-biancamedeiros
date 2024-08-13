import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kandira: ["Kandira", "sans-serif"],
      },
      colors: {
        base_light: "#EBDED7",
        base_orange: "#CE9257",
        base_red: "#B87D66",
        base_green: "#889672",
      },
    },
  },
  plugins: [],
};

export default config;
