import type { Config } from "tailwindcss";

export default {
  darkMode: 'selector',
  daisyui: {
    themes: [
      "dark",
      "light"
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('daisyui')],
} satisfies Config;
