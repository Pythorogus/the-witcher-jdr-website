const path = require('path');
const webpack = require("webpack");
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin');
const vars = require('./webpack.vars');

module.exports = {
  mode: 'production',
  entry: {
    app: [
      './src/js/app.js',
      './src/sass/style.scss',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        options: {
          presets: [ 
            [
              "env",
              {
                "modules": false,
              }
            ]
          ],
          plugins: [
            'transform-es2015-shorthand-properties',
            'transform-object-assign',
          ],
        },
        exclude: /node_modules/
      },
      {
        test: /.(png|jpg|gif|woff(2)?|eot|otf|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/files/[hash].[ext]',
              publicPath: '..'
            }
          }
        ],
      },
      {
        test : /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: "sass-loader",
          },
        ]
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    new PurgecssPlugin({
      paths: glob.sync(`${vars.PATHS.dist}/**/*.html`, { nodir: true }),
      whitelist: vars.whiteList,
      whitelistPatterns: vars.whiteListPatterns,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
    })
  ]
};