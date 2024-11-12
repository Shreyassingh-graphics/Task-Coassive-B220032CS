
// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          gwen: ['"Gwen-Trial"', 'sans-serif'], // Replace 'FontName1' with your custom font name
          custom2: ['"FontName2"', 'serif'],      // Replace 'FontName2' with your second custom font name
        },
      },
    },
    plugins: [],
  }
  