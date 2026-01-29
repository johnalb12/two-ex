/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-seahawks': '#002244',
        'green-seahawks': '#69BE28',
        'grey-seahawks': '#A5ACAF',
        'fog-sf': '#D3D3D3',
        'golden-gate': '#C0362C',
        'coors-silver': '#C0C0C0',
        'coors-blue': '#004B87',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'bebas': ['Bebas Neue', 'cursive'],
      },
      animation: {
        'fog-drift': 'fogDrift 20s ease-in-out infinite',
      },
      keyframes: {
        fogDrift: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
        },
      },
    },
  },
  plugins: [],
}
