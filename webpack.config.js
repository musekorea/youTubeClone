const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: {
    filename: path.resolve(__dirname, 'assets', 'js', 'main.js'),
  },
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer({ browserlist: 'defaults' })],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
