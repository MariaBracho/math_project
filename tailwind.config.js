module.exports = {
  content: [
  './src/**/*.{html,js,css}',
  './public/**/*.{html,js,css}',
],

  theme: {
    extend: {
      colors: {
      'bg_blue': '#1B1C25',
      'white':'#ffffff',
      'green_text':'#206A5D',
      'boxOne':'#A2D5AB',
      'boxTwo':'#39AEA9',
      'boxThree':'#557B83',
      'boxFour':'#E5EFC1',
       'white_text':'#EBECF1',
      'grey':'#C4C4C4'
    }, 
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif']
    },},
  },
  plugins: [
      require('@tailwindcss/forms')({
        strategy: 'class', // only generate classes
      }),
  ],
}
