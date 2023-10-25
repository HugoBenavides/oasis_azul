/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'MyFont': ['Poppins', 'Roboto', 'serif']
    },
    extend: {
      backgroundImage: {
        'formulario': "url('assets/fondo_piscina.jpg')",
      }
    },
  },
  plugins: [],
}

