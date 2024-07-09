import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "presentation-section-background":
          "url('/images/presentation-section-bg.jpg')",
      },
      fontSize: {
        "14xl": [
          "14rem",
          {
            lineHeight: "1",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
