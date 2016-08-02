const path = require('path')
module.exports = env => {
  return {
    entry: './app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    context: path.resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        { test: /\.json$/, loader: 'json' },
      ],
    },
  }
}
