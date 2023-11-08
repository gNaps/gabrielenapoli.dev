/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        "black": "#161513",
        "white": "#F0F2F5",
        "grey": "rgba(240, 242, 245, 0.50)",
      },
    },
  },
  plugins: [],
}

