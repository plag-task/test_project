module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Make sure this matches your file structure
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],

      },
      colors: {
        customGray: 'rgba(93, 93, 93, 1)', // Custom gray color
        Custombrown: 'rgba(200, 184, 152, 1)', // Custom brown color
      },
    },
  },
  plugins: [],
};
