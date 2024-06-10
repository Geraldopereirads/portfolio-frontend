import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D6CD2A",
        header: "#1B1B1B",
        textWhite: "#DAD7CE",
        textD: "#1B1B1B",
      },
      screens: {
        "minOne": "400px",
        "p": "500px",
        "pp": "600px",
      },
      maxWidth: {
        "51": "51%",
        "32": "32%",
        "38": "38%",
        "36": "36rem",
        "25": "25%",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
