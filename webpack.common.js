const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: ["core-js/stable", "./src/components.js"],
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Kyndryl Web Components",
      template: "src/public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "kyndryl-web-components.css",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "kyndryl-web-components.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10485760, // 10MB
            },
          },
        ],
      },
      {
        test: /\.css|\.s(c|a)ss$/i,
        exclude: [path.resolve(__dirname, "src/components")],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, resourceQuery) => {
                if (process.env.NODE_ENV === "development") {
                  return "http://localhost:8080/";
                }
                return process.env.PUBLIC_URL;
              },
            },
          },
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.css|\.s(c|a)ss$/,
        include: [path.resolve(__dirname, "src/components")],
        use: [
          {
            loader: "lit-scss-loader",
            options: {
              minify: true,
            },
          },
          "extract-loader",
          "css-loader",
          "sass-loader",
          "postcss-loader",
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
