/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      fontFamily : {
        body:['Jost']
      },colors: {
        indigo: {
          950: '#4346E7',
          1000: '#8E8FE0',
        },neutral : {
          950 : '#121212',
          1000 : '#D9D9D9'
        }
      }
    },
  },
  plugins: [],
}
