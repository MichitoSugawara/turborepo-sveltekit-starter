const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },

  daisyui: {
    themes: ["forest"],
  },

  plugins: [require("daisyui")]
};

module.exports = config;
