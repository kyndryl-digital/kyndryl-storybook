const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: ['core-js/stable', './src/components.js'],
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kyndryl Web Components',
      template: 'src/public/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'kyndryl-web-components.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10485760, // 10MB
            },
          },
        ],
      },
    ],
  },
  performance: {
    maxAssetSize: 10485760,
  },
  optimization: {
    minimizer: [
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
};
