const path = require("path");

module.exports = {
  stories: ["../src/components/**/__stories__/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css|\.s(c|a)ss$/,
      include: [path.resolve(__dirname, "../src/components")],
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
    });

    config.module.rules.push({
      test: /\.css|\.s(c|a)ss$/i,
      exclude: [path.resolve(__dirname, "../src/components")],
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    return config;
  },
};
