/**
 * Copyright Kyndryl, Inc. 2022
 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',

  entry: [
    'core-js/stable',
    './src/components/components.ts',
    './src/styles/_global.build.scss',
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'components.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js' ,'.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kyndryl Web Components',
      template: 'src/public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new ESLintPlugin({
      context: path.resolve(__dirname, 'src'),
      extensions: ['.ts', '.tsx', '.js', 'jsx'],
      exclude: 'node_modules',
    }),
    new StylelintPlugin({
      context: path.resolve(__dirname, 'src'),
      exclude: 'node_modules',
    }),
    new webpack.BannerPlugin({
      banner: 'Copyright Kyndryl, Inc. 2022',
    }),
  ],

  module: {
    rules: [

      // Process and export the global stylesheet.
      {
        test: /\.s(c|a)ss$/i,
        exclude: path.resolve(__dirname, 'src/components'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: () => {
                return process.env.PUBLIC_URL || '';
              },
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },

      // Processes scss files and loads then into variables for import into web components.
      {
        test: /\.s(c|a)ss$/,
        include: path.resolve(__dirname, 'src/components'),
        use: [
          {
            loader: 'lit-scss-loader',
            options: {
              minify: true,
            },
          },
          'extract-loader',
          'css-loader',
          'sass-loader',
        ],
      },

      // Process typescript files using Babel to make
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      // Transform referenced assets into base64
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10485760, // 10MB
            },
          },
        ],
      },

    ]
  },

  performance: {
    maxAssetSize: 10485760,
  },

  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
        extractComments: false,
      }),
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'src/public'),
    },
    open: true,
    liveReload: true,
    compress: true,
    port: 9000,
  },

};
