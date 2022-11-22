/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "backgroundimg-1": "url('../img/303888.jpg')",
        "backgroundimg-2": "url('../img/303891.jpg')",
      },
    },
    colors: {
      "custom-color-name": "#d9fffe",
    },
  },
  plugins: [],
};
