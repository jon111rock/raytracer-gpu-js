const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssEctractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/docs"),
    filename: "main.js",
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssEctractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssEctractPlugin.loader, "css-loader"],
      },
    ],
  },
  devServer: {
    open: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
