import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      keyframes: {
        lootboxGrow: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        lootboxFlash: {
          "0%, 100%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "rgba(255, 255, 255, 0.8)" },
        },
        lootboxExplode: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(3)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        lootboxGrow: "lootboxGrow 1s ease-in-out infinite",
        lootboxFlash: "lootboxFlash 0.5s ease-in-out infinite",
        lootboxExplode: "lootboxExplode 1s ease-out forwards",
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
