/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_primary: "#4582FF",
        button_action: "#FFC145",
        bg_light: "#F1F1F1",
        bg_grey: "#86888A",
        text_blue: "#3973D4",
        "button-inactive": "#F7F0F7",
        "button-hover": "#280E3B",
        neutral: "#FFFFFF",
        warning: "#BDD0F133",
      },
      fontFamily: {
        nunito: ['var(--font-nunito)'],
        karla: ['var(--font-karla)'],
      },
      screens: {
        sm: { min: "360px", max: "799px" },
        md: { min: "800px", max: "1023px" },
        lg: { min: "1024px" },
      },
    },
  },
  plugins: [],
};
