module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        '50p': 'border-radius: 50%',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/assets/images/med03.jpg')",
       }),
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
    },
    fontFamily: {
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'] 
    },
  },
  plugins: [],
}
