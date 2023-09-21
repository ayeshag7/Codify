/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "bgGreen": "#66D2D6",
        "bgSkin": "#FFFACD",
        "popUpPink": "#FF4C60",
        "subtleGrey": "#353A44",
        "boldGrey": "#333333",
        "logoPurple": "#9505E3",
        "footerGrey": "#F1F5F9"
      },
      width: {
        'lgW': '764px',
        'lgIW': '280px',
        'smIW': '224px',
        'smIWblogPage': '272px'
      },
      height: {
        'smH': '556px',
        'lgH': '424px',
        'smIH': '176px',
        'lgIH': '364px'
      },
      screens: {
        'ml': '1040px'
      }
    },
  },
  plugins: [],
}
