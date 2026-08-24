import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg_dark: "url('/public/bg_dark.svg')",
        bg_light: "url('/public/bg_light.svg)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      primary: {
        "50": "#f5f3ff",
        "100": "#eee9fe",
        "200": "#ded6fe",
        "300": "#c6b4fe",
        "400": "#a98afb",
        "500": "#8750f7",
        "600": "#8038ef",
        "700": "#7126db",
        "800": "#5f20b7",
        "900": "#4f1c96",
        "950": "#300f66",
      },
      secondary: {
        "50": "#f6f4fe",
        "100": "#eeebfc",
        "200": "#dfd9fb",
        "300": "#c6bbf7",
        "400": "#aa93f2",
        "500": "#8f68ea",
        "600": "#7f48df",
        "700": "#6f36cb",
        "800": "#5d2cab",
        "900": "#4d268c",
        "950": "#2a1454",
      },
      usual: {
        "50": "#FCFCFD",
        "100": "#EEF0F1",
        "200": "#C1C8CD",
        "300": "#A8B1B9",
        "400": "#8F9BA5",
        "500": "#768390",
        "600": "#616D77",
        "700": "#4C565E",
        "800": "#3A4147",
        "900": "#25292E",
        "950": "#1A1D20",
      },
      positive: {
        "50": "#ECFDF1",
        "100": "#DEFCE7",
        "200": "#B9F9CB",
        "300": "#98F6B2",
        "400": "#72F397",
        "500": "#4FF07D",
        "600": "#14EB51",
        "700": "#0FB33E",
        "800": "#0A7528",
        "900": "#053D15",
        "950": "#021C0A",
      },
      negative: {
        "50": "#FAEDEC",
        "100": "#F7DFDF",
        "200": "#EFBCBA",
        "300": "#E99C9A",
        "400": "#E37976",
        "500": "#DE5C56",
        "600": "#D83428",
        "700": "#A3261D",
        "800": "#6B1712",
        "900": "#370A08",
        "950": "#190303",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
