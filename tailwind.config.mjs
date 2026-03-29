/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A017',
          light: '#F0C040',
          dark: '#A67C00',
        },
        brand: {
          red: '#EF0000',
          blue: '#337AB7',
          dark: '#0A0A0A',
          surface: '#1A1A1A',
          card: '#242424',
        },
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        'display': ['60px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
};
