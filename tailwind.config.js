/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        matInset: '0px 0px 20px 0px rgba(0,0,0,0.3) inset',
        // LBTR
        BotMatInset:
          'inset 7px 0 9px -7px rgba(0,0,0,0.1), inset 0 -7px 9px -7px rgba(0,0,0,0.1), inset 0 7px 9px -7px rgba(0,0,0,0.4), inset -7px 0 9px -7px rgba(0,0,0,0.4) ',
      },
    },
    colors: {
      primaryBlack: '#333333',
      primaryGray: '#757575',
      secGray: '#8e8e8e',
      lightGray: '#d1d1d1',
      placeholderColor: '#BBBBBB',
      orangeColor: '#F7941D',
      pinkColor: '#FF369F',
      blackRgba: 'rgba(0, 0, 0, 0.30)',
    },
    fontFamily: {
      heebo: ['Heebo', 'sans-serif'],
    },
    fontSize: {
      sm11: [
        '0.688rem',
        {
          lineHeight: '0.813rem',
          fontWeight: '400',
        },
      ],
      sm12: [
        '0.75rem',
        {
          lineHeight: '1.125rem',
          fontWeight: '400',
        },
      ],
      sm14: [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '400',
        },
      ],
      sm18: [
        '1.125rem',
        {
          lineHeight: '1.375rem',
          fontWeight: '500',
        },
      ],
      heading: [
        '2.375rem',
        {
          lineHeight: '2.563rem',
          fontWeight: '500',
        },
      ],
    },
    boxShadow: {
      dropShadow: '0px 10px 20px -10px rgba(0, 0, 0, 0.2)',
      dropShadowButton: '0px 4px 18px rgba(0, 0, 0, 0.2)',
      regCardShadow: '0px 0px 18px rgba(0, 0, 0, 0.2)',
      newDroShadow: `-5px 0px 10px -5px rgba(0, 0, 0, 0.2),5px 0px 10px -5px rgba(0, 0, 0, 0.2)`,
      // newBotDroShadow: `-5px 5px 10px -5px rgba(0, 0, 0, 0.2),5px 5px 10px -5px rgba(0, 0, 0, 0.2)`,
      newBotDroShadow: `-5px 0px 10px -5px rgba(0, 0, 0, 0.2),5px 0px 10px -5px rgba(0, 0, 0, 0.2)`,
    
    },
    width: {
      regCards: '43.125rem',
      loginCard: '30rem',
      w330: '20.625rem',
      w1168: '73rem',
      w1440: '90rem',
      w1409: '88.063rem',
      w459: '28.688rem',
      w930: '58.125rem',
      w690: '43.125rem',
      w456: '28.5rem',
      w245: '15.313rem',
      w350: '21.875rem',
      w1170: '73.125rem',
      w450: '28.125rem',
    },
    height: {
      regCard: '29.375rem',
      loginCard: '25.438rem',
    },
  },
  variants: {
    display: ['group-hover'],
  },
  plugins: [],
};
