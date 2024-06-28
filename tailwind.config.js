/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      backgroundImage: {
        "gray-gradient": "linear-gradient(to right, #f5f5f5 , #FEFEFE)",
        "black-gradient": "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
        "red-gradient": "linear-gradient(to bottom right, #880808, #FA5F55)",
        "green-gradient": "linear-gradient(to right, #145B13, #1EB61A)",
        "green-secondary-gradient":
          "linear-gradient(to right,#1EB61A, #145B13 )",
        "multi-gradient":
          "linear-gradient(to right, #00E5BC,#32CC2E )",
        "blue-gradient": "linear-gradient(to bottom right, #012C5F, #044A9D)",
        "blue-normal-gradient":
          "linear-gradient(to bottom right, #044A9D,#012C5F)",
        "blue-secondary-gradient":
          "linear-gradient(to bottom right,#0461CD, #012C5F )",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: "#32CC2E",
        white: "#FFFFFF",
        black: "#000000",
        gray:{
          text: '#838383',
          background: '#fafafa',
          100:'#1E1E1E'

        },
        red:"red",
        aqua: {
          DEFAULT: '#4EC3CC',
          1000: '#385b7e'
        },
        transparent: "transparent",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        metropolis: ["Metropolis", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],

}