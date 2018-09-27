const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif|)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  }
}