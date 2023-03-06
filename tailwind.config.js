/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist"],
      },
      colors: {
        primary: "#2BB8D6",
      },
    },
  },
  plugins: [],
};
