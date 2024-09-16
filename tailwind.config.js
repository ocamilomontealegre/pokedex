/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bug: "#79984F",
        dark: "#56443D",
        dragon: "#3F4080",
        electric: "#AB953E",
        fairy: "#A96CA4",
        fighting: "#B05633",
        fire: "#B64039",
        flying: "#728288",
        ghost: "#43406F",
        grass: "#769669",
        ground: "#7D4C3F",
        ice: "#61A1AC",
        poison: "#6D3DA3",
        psychic: "#D14C45",
        rock: "#968053",
        steel: "#7A7A7A",
        water: "#4668A3",
      },
    },
  },
  plugins: [],
};
