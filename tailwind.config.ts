import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,mdx}',
    './src/app/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

