import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './Modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'white-shade': 'linear-gradient(180deg, hsla(0, 0%, 100%, .25), #fff 90%)',
      },
      spacing: {
        '6.5': '26px',
        'screen-xl': '1200px',
        '15': '52px',
        '30': '120px',
        '72': '72px',
        '17': '75px',
        '500px': '500px',
        '112px': '112px',
        '446': '446px',
        '198': '198px',
        '38%': '38%',
        '19': '76px',
        '23.75': '95px',
        '73': '73px',
        '25': '100px',
        '50': '200px',
        '292px': '292px',
      },
      colors: {
        'at-light-200': 'rgb(246, 246, 246)',
        'at-primary': 'rgb(0, 115, 207)',
        'at-primary-700': 'rgb(4, 100, 176)',
        'at-light-500': 'rgb(234, 234, 234)',
        'at-light-700': 'rgb(230, 230, 230)',
        'at-dark-mine': 'rgb(51, 51, 51)',
        'at-primary-50': 'rgb(232, 244, 253)',
        'at-dark-700': 'rgb(102, 102, 102)',
        'at-dark-900': 'rgb(51, 51, 51)',
        'red-at-500': 'rgb(219, 68, 68)',
        'at-grey': 'rgb(188, 188, 188)',
        'at-black-shadow': 'rgba(0, 0, 0, 0.45)',
      },
      fontFamily: {
        DmSans: ['DM Sans', 'sans-serif'],
        Golos: ['Golos Text', 'sans-serif'],
      },
      screens: {
        xl: '1200px',
      },
      fontSize: {
        'at-7xl': [
          '74px',
          {
            lineHeight: '82px',
          },
        ],
        'at-5xl': [
          '44px',
          {
            lineHeight: '52px',
          },
        ],
      },
      boxShadow: {
        'at-4':
          'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(51, 51, 51, 0.08) 0px 1px 4px 0px',
        'at-16':
          'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 16px 0px',
      },
    },
  },
  plugins: [],
};
export default config;
