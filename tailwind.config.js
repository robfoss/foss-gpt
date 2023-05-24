/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        janes_black: '#171717',
        janes_black_light: '#1f1f1f',
        janes_gray: '#A2AAAD',
        janes_gray_light: '#f9f9f9',
        janes_red: '#C40233',
        janes_green: '#385E3C',
        janes_white: '#eeeeee',
      },
      fontFamily: {
        content: ['var(--font-inter)'],
        title: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
};
