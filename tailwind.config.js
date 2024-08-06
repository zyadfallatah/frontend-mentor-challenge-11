/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*{.ts,.tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "blue-color": "hsl(212, 100, 50)",
        "blueish-gray-color": "hsl(217, 35, 45)",
        "gray-color": "hsl(217, 20, 51)",
        "white-color": "hsl(227, 100, 98)",
        "white-alt-color": "hsl(0, 0, 100)",
        "black-color": "hsl(220, 40, 13)",
        "black-alt-color": "hsl(222, 41, 20)",
      },
    },
  },
  plugins: [],
};
