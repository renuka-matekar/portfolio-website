// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        md: '768px', // Define or override md breakpoint
        mdlg : '585px', // Define or override
      },
      height: {
        '17': '70px',
        '20': '5rem', // Ensuring h-20 exists (default in Tailwind)\
        '97': '400px',
        '98': '470px', // Ensuring h-96 exists (default in Tailwind)
      },
      width: {
        '97': '390px', // Ensuring h-96 exists (default in Tailwind)
      },
      padding: {
        '46': '184px', // Ensuring p-20 exists (default in Tailwind)
      },
      zIndex: {
        '99': '99',
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(180deg, #000, #1a1a2e)",
        // "gradient-text": "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
      },
      maxWidth: {
        '8xl': '85rem', // Adjust value as needed (1rem = 16px)
      },
      blur: {
        '2xl': '8px', // Custom blur effect
        '3xl': '12px', // Custom blur effect
      },
      opacity: {
        30: '0.3', // Custom opacity level
      },
      boxShadow: {
        '3xl': '0 30px 60px -15px rgba(0, 0, 0, 0.3)', // Wider & deeper
        '4xl': '0 40px 80px -20px rgba(0, 0, 0, 0.35)', // Even bigger shadow
        '5xl': '0 50px 100px -25px #9333ea', // Super soft & large shado
      },
      colors: {
        'custom-blue': '#2563eb',
        'custom-purple': '#9333ea',
        "border-white/10": "rgba(255, 255, 255, 0.1)", // Custom border color
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "gradient-start": "#3b82f6", // Blue
        "gradient-middle": "#8b5cf6", // Purple
        "gradient-end": "#ec4899", // Pink

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
      fontFamily: {
        outfit: ["Outfit", ...fontFamily.sans],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        'pulse-fast': 'pulse 1.2s cubic-bezier(.4,0,.6,1) infinite', // Faster shimmer
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
}