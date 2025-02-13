const webpack = require('webpack');

module.exports = {
  // ...existing configuration...
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]
};
