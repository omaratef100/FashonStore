/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['Inter', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'mono': ['Menlo', 'monospace'],
      'almarai': ['Almarai', 'sans-serif'], 
     },
    colors: {
      'primary': '#BE1FBC',
      'secondary': '#828383',
      'title': '#777878',
      'neutral': '#ffffff',
      'icons':'#fb2d2d',
      'background': '#BE1FBC0D',
      'text': '#828383',
      'text-black': '#000000',

      


      
    },
    extend: {},
  },
}

