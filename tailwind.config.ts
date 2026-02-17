import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        128: '32rem',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-pink': 'oklch(71.8% .202 349.761)',
        'primary-purple': '#C084FC',
        'primary-blue': 'oklch(70.7% .165 254.624)',
        'secondary-blue': 'oklch(54.6% .245 262.881)',
        'accent-yellow': 'oklch(85.2% .199 91.936)',
        'text-dark': 'oklch(27.4% .006 286.033)',
        'mint-green': 'oklch(90.5% .093 164.15)',
        'light-blue': 'oklch(90.1% .058 230.902)',
        'primary-lime': '#D9F154',
      },
      fontFamily: {
        'jakarta': ['var(--font-jakarta)', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      borderRadius: {
        'pill': '9999px',
      },
    },
  },
  plugins: [],
};
export default config;
