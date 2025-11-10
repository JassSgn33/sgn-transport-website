import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { sgn: { primary: "#0F172A", accent: "#0EA5E9", gold: "#F59E0B" } },
      boxShadow: { soft: "0 10px 25px -10px rgba(0,0,0,0.25)" },
      borderRadius: { "2xl": "1.25rem" }
    }
  },
  plugins: []
};
export default config;
