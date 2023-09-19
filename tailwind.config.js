/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ssm': '290px',
    },
    extend: {
      fontFamily: {
        'bookey': ['Itim', 'Mitr', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        'primary-one': '#fff',
        'primary-two': '#000',

        'page-background': '#F1F1F1',
        'bookey-red': {
          100: '#EED8B9',
          200: '#EED3AE',
          300: '#EBC289',
          400: '#E65D5C',
          500: '#F07660',
          600: '#D14127',
          700: '#D74F36',
          800: '#DC533B',
          900: '#802F21',
        },
        'bookey-gray': {
          100: '#DADADA',
          200: '#929292',
          300: '#838383',
          400: '#7A7878D4',
          500: '#544E4E',
          550: '#4A4A4A',
          600: '#41403F',
          650: '#404040',
          700: '#1E1D1D',
          750: '#1E1E1E',
        },
        'bookey-other': {
          'aqua': '#268EAE',
          'blue': '#4882F0',
        },
        'correct': '#02F29E',
        'light-correct': 'rgba(2, 242, 158, 0.2)',
        'incorrect': '#F24D27',
        'light-incorrect': 'rgba(242, 76, 39, 0.2)',
        'warning': '#F2B827',

        'secondary': '#B8B2B2',
        'light-gray': '#E0E0E0',
        'light-white': '#F6F6F6',

        'sky-color': '#0FC5F2',
        'blue-color': '#1B56F2',
      },
      spacing: {
        'bookey-1': '4px',
        'bookey-1-2': '8px',
        'bookey-2': '12px',
        'bookey-3': '16px',
        'bookey-4': '24px',
        'bookey-5': '32px',
        'bookey-6': '48px',
      },
      backgroundImage: {
        'bg-header': "url('/src/assets/bg-header.svg')",
      }
    },
  },
  plugins: [],
});