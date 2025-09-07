const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        robotomono: ["Roboto Mono", "monospace"],
      },
    },
  },
};

export default config;
