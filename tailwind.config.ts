import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          '0%': { opacity: "0%" },
          '100%': { opacity: "100%" },
        },
      },
      animation: {
        gradient: "gradient 6s ease-in infinite",
        'fade-in': 'fadeIn 1s ease-out forwards 0.25s',
        'fade-in-delay-1': 'fadeIn 2s ease-out forwards 0.75s',
        'fade-in-delay-2': 'fadeIn 2s ease-out forwards 1.25s',
        'fade-in-delay-3': 'fadeIn 1s ease-out forwards 2s',

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main1: "#202139",
        main2: "#C8C7FB",
        main3: "#272A46",
        secondary1: "#313357",
        secondary2: "#BEBDDA",
        white: "#EDF7F2",
        yellow: "#FDCA40",
        success: "#91E75D",
        fail: "#E75D5D",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
export default config;
