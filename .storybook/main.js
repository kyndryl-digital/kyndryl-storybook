/**
 * Copyright Kyndryl, Inc. 2022
 */
 
const webpack = require('webpack');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  stories: [
    '../src/**/*.stories.@(ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    require.resolve('storybook-addon-grid/preset'),
  ],
  framework: '@storybook/web-components',
  core: {
    builder: 'webpack5'
  },
  features: {
    babelModeV7: true,
  },
  webpackFinal: async (config, { configType }) => {
    config.plugins.push(
      new ESLintPlugin({
        context: path.resolve(__dirname, '../src'),
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
        exclude: 'node_modules',
      }),
      new StylelintPlugin({
        context: path.resolve(__dirname, '../src'),
        exclude: 'node_modules',
      }),
      new webpack.BannerPlugin({
        banner: 'Copyright Kyndryl, Inc. 2022',
      }),
    )
    // Processes scss files and loads then into variables for import into web components.
    config.module.rules.push({
      test: /\.s(c|a)ss$/,
      include: [
        path.resolve(__dirname, '../src/components'),
        path.resolve(__dirname, '../src/patterns'),
      ],
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
    });
    return config;
  }
}
