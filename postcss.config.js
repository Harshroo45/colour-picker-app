module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
      autoprefixer: {
        grid: true
      }
    }),
    require('postcss-custom-properties'),
    require('postcss-media-minmax')
  ]
};
