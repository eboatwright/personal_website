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
      	  "0%, 80%": { transform: "rotate(0deg)" },
      	  "84%": { transform: "rotate(8deg)" },
      	  "88%": { transform: "rotate(-12deg)" },
      	  "92%": { transform: "rotate(10deg)" },
      	  "96%": { transform: "rotate(-6deg)" },
      	  "100 %": { transform: "rotate(0deg)" },
      	}
      },
      animation: {
      	"shake": "shake 5s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}
