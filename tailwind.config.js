/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackgroundColor: "#F2F3F4",
        columnBackgroundColor: "#4481eb",
      },
    },
  },
  plugins: [],
};
