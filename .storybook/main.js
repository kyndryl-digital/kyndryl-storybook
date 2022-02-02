const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/web-components",
  core: {
    builder: "webpack5"
  },
  features: {
    babelModeV7: true,
  },
  webpackFinal: async (config, { configType }) => {
    // Processes scss files and loads then into variables for import into web components.
    config.module.rules.push({
      test: /\.s(c|a)ss$/,
      include: [
        path.resolve(__dirname, "../src/components")
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
    });
    return config;
  }
}
