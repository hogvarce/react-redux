module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
      loaders: [
        {test: /\.js$/, loader: 'babel'},
        {test: /\.html$/, loader: 'raw'},
        {test: /\.css$/, loader: 'style!css'},
        {test: /\.scss$/, loader: 'style!css!sass'}
      ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
