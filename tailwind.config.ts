import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        50: "#f5f3ff",
        100: "#eee9fe",
        200: "#ded6fe",
        300: "#c6b4fe",
        400: "#a98afb",
        500: "#8750f7",
        600: "#8038ef",
        700: "#7126db",
        800: "#5f20b7",
        900: "#4f1c96",
        950: "#300f66",
    },
      secondary: {
          50: "#f6f4fe",
          100: "#eeebfc",
          200: "#dfd9fb",
          300: "#c6bbf7",
          400: "#aa93f2",
          500: "#8f68ea",
          600: "#7f48df",
          700: "#6f36cb",
          800: "#5d2cab",
          900: "#4d268c",
          950: "#2a1454",
      },
      usual: {
        50: "#FCFCFD",
        100: "#EEF0F1",
        200: "#C1C8CD",
        300: "#A8B1B9",
        400: "#8F9BA5",
        500: "#768390",
        600: "#616D77",
        700: "#4C565E",
        800: "#3A4147",
        900: "#25292E",
        950: "#1A1D20",
      },
      positive: {
        50: "#ECFDF1",
        100: "#DEFCE7",
        200: "#B9F9CB",
        300: "#98F6B2",
        400: "#72F397",
        500: "#4FF07D",
        600: "#14EB51",
        700: "#0FB33E",
        800: "#0A7528",
        900: "#053D15",
        950: "#021C0A",
      },
      negative: {
        50: "#FAEDEC",
        100: "#F7DFDF",
        200: "#EFBCBA",
        300: "#E99C9A",
        400: "#E37976",
        500: "#DE5C56",
        600: "#D83428",
        700: "#A3261D",
        800: "#6B1712",
        900: "#370A08",
        950: "#190303",
      },
    }
  },
  plugins: [],
};
export default config;
