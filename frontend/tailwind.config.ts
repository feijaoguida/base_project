import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {

        themewhite: '#ffffff',
        themeorange: '#F18836',
        themeorangeligth: '#F1D7B4',
        themegray: '#f5f5f5',
        themegray1: '#f7f7fd',       
        themebrand: '#f1f4fa',
        themetestimonial: '#f9fafc',
        themeblack: '#16161a',
        themecolor: '#d19f68',
        themebase: {
          400: '#7b5330',
          500: '#563A22',
          600: '#442e1b',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
