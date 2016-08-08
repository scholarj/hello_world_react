module.exports = {
  entry: './src/app/index.jsx',
  output: {
    path: './static',
    filename: '_bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 3333,
    inline: true,
    progress: true
  },
  watchOptions: {
    poll: true
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: [ /src\/app/ ],
      query: { presets: ['react'] }
    }]
  }
};
