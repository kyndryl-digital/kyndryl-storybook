const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",

  entry: [
    "./src/components/components.ts",
  ],

  output: {
    path: path.resolve(__dirname, "test"),
    filename: 'kyndryl-web-components.js',
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  plugins: [
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [

      // Processes scss files and loads then into variables for import into web components.
      {
        test: /\.s(c|a)ss$/,
        include: [
          path.resolve(__dirname, "src/components")
        ],
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
        ],
      },

      // Process typescript files using Babel to make
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        },
      },

      // Transform referenced assets into base64
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10485760, // 10MB
            },
          },
        ],
      },

    ]
  },
};
