/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0d59f2",
        "accent-orange": "#ff5a1f",
        "background-light": "#f5f6f8",
        "background-dark": "#05070a", // Used in Hero/Home
        "auth-dark": "#101622",       // Used in your Login/Sign-up
        "card-dark": "#12151c",       // Used in Event Details
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"]
      },
      borderRadius: {
        // We use the most specific values here
        "DEFAULT": "1rem", // 16px
        "lg": "24px",      // Required for the Event page
        "xl": "32px",      // Required for larger containers
        "full": "9999px"
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ],
}