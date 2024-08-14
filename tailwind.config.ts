import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "var(--font-barlow)",
        heading: "var(--font-fraunces)",
      },
      colors: {
        primary: {
          300: "hsl(7, 99%, 70%)", // Soft red
          350: "hsla(168, 44%, 70%)", // Soft cyan
          500: "hsl(51, 100%, 49%)", // Yellow
          600: "hsl(168, 34%, 41%)", // Dark moderate cyan
          700: "hsl(198, 62%, 26%)", // Dark blue
          750: "hsl(168, 45%, 32%)", // Dark cyan
          800: "hsl(167, 40%, 24%)", // Dark desaturated cyan
        },
        secondary: {
          100: "hsl(0, 0%, 100%)", // White
          200: "hsl(212, 27%, 19%)", // Very dark desaturated blue
          300: "hsl(210, 4%, 67%)", // Grayish blue
          400: "hsl(232, 10%, 55%)", // Dark grayish blue
          600: "hsl(213, 9%, 39%)", // Very dark grayish blue
        },
      },
    },
  },
  plugins: [],
};
export default config;
