import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#FFFFFF",
        surface: {
          DEFAULT: "#111827",
          border: "rgba(255, 255, 255, 0.08)",
        },
        card: {
          DEFAULT: "#1F2937",
          foreground: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#DC2626",
          hover: "#EF4444",
          foreground: "#FFFFFF",
        },
        gold: {
          DEFAULT: "#F59E0B",
          hover: "#D97706",
          light: "#FBBF24",
          foreground: "#030712",
        },
        textPrimary: "#FFFFFF",
        textSecondary: "#9CA3AF",
        borderCustom: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      boxShadow: {
        "glow-red": "0 0 25px -5px rgba(220, 38, 38, 0.4)",
        "glow-red-lg": "0 0 50px -10px rgba(220, 38, 38, 0.5)",
        "glow-gold": "0 0 25px -5px rgba(245, 158, 11, 0.4)",
        "glow-gold-lg": "0 0 50px -10px rgba(245, 158, 11, 0.5)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
