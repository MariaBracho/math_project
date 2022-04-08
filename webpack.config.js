const path = require("path");
const Copyplugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject:true,
      template: "./public/index.html",
      filename:"index.html",
      title:"math"
    }),
    new MiniCssExtractPlugin({
      filename:'main.css'
    }),
    new Copyplugin({
      patterns: [{
          from: path.resolve(__dirname, "assets"),
          to: "assets"
      }]

  }),

  ],
  resolve:{
      extensions:[".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
};

module.exports = (env,arg) => {
const {mode}=arg
const isProduction=mode=="production"
  return config;
};
