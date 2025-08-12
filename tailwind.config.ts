import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './app/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui'],
        display: ['"Big Shoulders"', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
