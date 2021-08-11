const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/components.js',
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
        test: /\.(png|jpg|gif)$/i,
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
};
