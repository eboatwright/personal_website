/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
      	"bookman": ["Bookman", "serif"],
      },
      keyframes: {
      	shake: {
      	  "0%": { transform: "rotate(0deg)" },
      	  "5%": { transform: "rotate(-8deg)" },
      	  "10%": { transform: "rotate(12deg)" },
      	  "15%": { transform: "rotate(-10deg)" },
      	  "20%": { transform: "rotate(6deg)" },
      	  "25%": { transform: "rotate(0deg)" },
      	  "100%": { transform: "rotate(0deg)" },
      	}
      },
      animation: {
      	"shake": "shake 4s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}
