// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,html}", // Watch all HTML and JS files in your project
    "!./node_modules/**/*", // Ignore node_modules folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Afacad Flux", "sans-serif"],
      },
    },
  },
  plugins: [],
};
