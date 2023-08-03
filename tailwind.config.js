/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  mode: 'jit', // calc 사용
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        common: {
          white: '#ffffff',
          black: '#000000',
          gray: '#D3D3D3',
          blue: '#3178C6',
          deepGray: '#7C8986',
          lightGray: '#EEF1F1',
          green: '#00C092',
          yellow: '#F9C51D',
        },
        compo: {
          primary: '#fbb0a3',
          'primary-press': '#0AA882',
          secondary: '#F7F9F8',
          line: '#e5e5e5',
          dim: '#d5d5d5',
          lightgray: '#F5F5F5',
          red: '#F85151',
          blue: '#0085FF',
          green: '#00C092',
          lilac: '#DFDFF2',
          bg: {
            yellow: '#fcfae8',
            black: '#222222',
          },
        },
        text: {
          333: '#333333',
          555: '#555555',
          777: '#777777',
          999: '#999999',
          disabled: '#d5d5d5',
          green: '#00B98D',
          red: '#F85151',
          blue: '#0085FF',
          yellow: '#f7b409',
          dim: '#d5d5d5',
        },
      },
      animation: {
        trackingInExpand:
          'trackingInExpand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) 1s both',
        blinkEffect: 'blinkEffect 2s infinite ease-in-out',
        vibrateLeft: 'vibrateLeft 2s linear infinite normal both',
        vibrateRight: 'vibrateRight 2s linear infinite normal both',
        vibrateBottom: 'vibrateBottom 2s linear infinite normal both',
        vibrateLeftBottom: 'vibrateLeftBottom 2s linear infinite normal both',
      },
      keyframes: {
        trackingInExpand: {
          '0%': { letterSpacing: `-0.5em`, opacity: 0 },
          '40%': { opacity: 0.6 },
          '100%': { opacity: 1 },
        },
        blinkEffect: {
          '50%': { opacity: 0 },
        },
        vibrateLeft: {
          '0%': { transform: `translate(0)` },
          '20%': { transform: `translate(-2px, 2px)` },
          '40%': { transform: `translate(-2px, -2px)` },
          '60%': { transform: `translate(2px, 2px)` },
          '80%': { transform: `translate(2px, -2px)` },
          '100%': { transform: `translate(0)` },
        },
        vibrateRight: {
          '0%': { transform: `translate(0)` },
          '20%': { transform: `translate(2px, -2px)` },
          '40%': { transform: `translate(2px, 2px)` },
          '60%': { transform: `translate(-2px, -2px)` },
          '80%': { transform: `translate(-2px, 2px)` },
          '100%': { transform: `translate(0)` },
        },
        vibrateBottom: {
          '0%': { transform: `translate(0)` },
          '20%': { transform: `translate(2px, 2px)` },
          '40%': { transform: `translate(-2px, 2px)` },
          '60%': { transform: `translate(-2px, -2px)` },
          '80%': { transform: `translate(2px, -2px)` },
          '100%': { transform: `translate(0)` },
        },
        vibrateLeftBottom: {
          '0%': { transform: `translate(0)` },
          '20%': { transform: `translate(2px, -2px)` },
          '40%': { transform: `translate(2px, 2px)` },
          '60%': { transform: `translate(-2px, -2px)` },
          '80%': { transform: `translate(-2px, 2px)` },
          '100%': { transform: `translate(0)` },
        },
      },
      fontFamily: {
        blackHan: ['Black Han Sans', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        appleSDGothicNeo: ['AppleSDGothicNeo', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
