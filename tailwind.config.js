/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        democrat: "#3498db",
        republican: "#e74c3c",
        finance: "#f1c40f",
        lobby: "#9b59b6",
        defense: "#95a5a6",
        accent: "#38bdf8",
        bg: "#0f172a",
      },
    },
  },
  plugins: [],
};
