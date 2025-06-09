import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "main":"rgb(var(--dark-navy) / <alpha-value> )",
        "boardColor": "rgb(var(--semi-dark-navy) / <alpha-value> )",
        "boardColorHover": "rgb(var(--navy-hover) / <alpha-value> )",
        "textColor":"rgb(var(--silver) / <alpha-value> )",
        "textHoverColor":"rgb(var(--silver-hover) / <alpha-value> )",
        "borderColor": "rgb(var(--navy) / <alpha-value> )", 
        "btn-yellow":"rgb(var(--light-yellow) / <alpha-value> )", 
        "btn-border-yellow":"rgb(var(--yellow-border) / <alpha-value> )", 
        "btn-border-blue": "rgb(var(--blue-border) / <alpha-value> )", 
        "btn-blue":"rgb(var(--light-blue) / <alpha-value> )", 
        "btn-yellow-hover":"rgb(var(--light-yellow-hover) / <alpha-value> )", 
        "btn-blue-hover":"rgb(var(--light-blue-hover) / <alpha-value> )", 
        "overlay":"rgb(var(--Overlay) / <alpha-value>)",
        "silver-border-color":"rgb(var(--silver-border-color) / <alpha-value>)",
      
      }
    },
  },
  plugins: [],
};
export default config;
