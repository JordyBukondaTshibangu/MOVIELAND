/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1990px",
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to right bottom, rgba(0,0,0,9), rgba(0,0,0,9), rgba(0,0,0,0.8), rgba(0,0,0,0.7), rgba(0,0,0,0.6))',
    },
    colors: {
      primary: "#FD7401",
      secondary: "#FF8755",
      success: "#0BA02C",
      bgSuccess: "#00B83E",
      danger: "#dc3545",
      rating : '#ffd300',
      info: "#738AFF",
      fontColor: "#BABABF",
      lightFontColor: "#555",
      light: "#F4F2EE",
      dark: "#242535",
      darkHeader: "#181A2A",
      darkMirage: "#1b1c28",
      black: "#000",
      white: "#FFF",
      beige: "#F5F5DC",
      lightGray: "#F1F3F6",
      grayFirst: "#B4B4B8",
      graySecond: "#B9C0BD",
      grayThird: "#E3E1D9",
      grayFour: "#F2EFE5",
      arsenic: "#3B444B",
      coral: "#54626F",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
    },
  },
  plugins: [],
}

