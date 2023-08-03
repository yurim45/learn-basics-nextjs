/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
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
      keyframes: (props) => {
        const { theme } = props
        return {
          buttonHover: {
            '0%': {
              backgroundColor: theme('colors.tp.blue300'),
              boxShadow: theme('boxShadow.none'),
            },
            '100%': {
              backgroundColor: theme('colors.tp.blue400'),
              boxShadow: theme('boxShadow.lg'),
            },
          },
        }
      },
      fontFamily: {
        black_han: [
          'Black Han Sans',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        appleSDGothicNeo: ['AppleSDGothicNeo', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
