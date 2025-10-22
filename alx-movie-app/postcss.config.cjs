// postcss.config.cjs

module.exports = {
  plugins: {
    // Explicitly using the package suggested by the error message
    // This is the most direct way to satisfy the error message
    '@tailwindcss/postcss': {}, 
    autoprefixer: {},
  },
};