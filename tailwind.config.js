module.exports = {
  content: [
  './src/**/*.{html,js,css}',
  './public/**/*.{html,js,css}',
],

  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 14px 6px rgba(27,64,75,1)',
      },
      colors: {
      'bg_blue': '#001011',
      'white':'#FFFFFC',
      'green_text':'#6CCFF6',
      'boxOne':'#367084',
      'boxTwo':'#98CE00',
      'boxThree':'#FFFFFC',
       'grey_text':'#001011',
      'grey':'#3B4449',
    }, 
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    },},
  },
  plugins: [
      require('@tailwindcss/forms')({
        strategy: 'class', // only generate classes
      }),
  ],
}
