module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        green: '#819368',
        gray: {
          50: '#707079',
          100: '#505057',
          200: '#2D2D31',
          300: '#222227',
          400: '#0E0E17',
        },
      },
      screens: {
        'sm-320': '320px',
        'sm-480': '480px',
      },
    },
  },
  plugins: [],
};
