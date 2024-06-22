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
        kandira: ['Kandira', 'sans-serif'],
      },
      colors: {
        base_light: "#EBDED7",
      }
    },
  },
  plugins: [],
};

export default config;
