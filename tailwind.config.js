/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      animation: {
        text: "text 3s 1", // Animation for the text effect
        openclose: "openclose 8s ease-in-out infinite", // For the message animation
      },
      keyframes: {
        text: {
          "0%": { color: "white", marginBottom: "-40px" },
          "30%": { letterSpacing: "25px", marginBottom: "-40px" },
          "85%": {
            letterSpacing: "8px",
            marginBottom: "-40px",
            color: "white",
          },
        },
        openclose: {
          "0%": { top: "0.2rem", width: "0" },
          "5%": { top: "0.2rem", width: "0" },
          "15%": { top: "0.2rem", width: "600px" },
          "30%": { top: "0.2rem", width: "600px" },
          "33%": { top: "0.2rem", width: "0" },
          "35%": { top: "0.2rem", width: "0" },
          "38%": { top: "-3rem" },
          "48%": { top: "-3rem", width: "600px" },
          "62%": { top: "-3rem", width: "600px" },
          "66%": { top: "-3rem", width: "0", textIndent: "0" },
          "100%": { top: "0", width: "0", textIndent: "0" },
        },
      },
    },
  },
  darkMode: "media",
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   // darkMode: "class",
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   darkMode: "class",
// };
