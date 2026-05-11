import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        formula: ['"PP Formula"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
