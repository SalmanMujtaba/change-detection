module.exports = {
    prefix: '',
      content: [
        './src/**/app/**/*.{html,ts}', 
      ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};