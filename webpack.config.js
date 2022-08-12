const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]', // keep img original name
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, //folder to be excluded
        use: 'babel-loader', //loader which we are going to use
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i, // test alle disse
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-starter',
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: './public/fav_32.png',
    }),
    new CopyPlugin({ patterns: [{ from: './public/manifest.json', to: '.' }] }),
    new CopyPlugin({ patterns: [{ from: './public/fav_152.png', to: '.' }] }),
    // new BundleAnalyzerPlugin(), // Enable to view visual bundle analyzer
  ],
};
