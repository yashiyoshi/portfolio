import type { Config } from "tailwindcss";

const config: Config = {
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
      colors: {
        main1: '#202139',
        main2: '#C8C7FB',
        secondary1: '#313357',
        yellow: '#EDF7F6',
        success: '#91E75D',
        fail: '#E75D5D',

      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      }
    },
  },
  plugins: [],
};
export default config;
