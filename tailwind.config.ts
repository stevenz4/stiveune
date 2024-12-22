import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "/src/**/*.{js,ts,jsx,tsx,mdx}",
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
