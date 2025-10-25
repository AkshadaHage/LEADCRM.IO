/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        sriracha: ['"Sriracha"', 'cursive'],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Moves exactly half width for seamless loop
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite", // You can adjust speed here
      },
    },
  },
  plugins: [],
};
