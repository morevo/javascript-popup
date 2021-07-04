const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    
  entry: "/src/app.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      /* Loading SCSS (second test) */

      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']}
      
    ],
  },

  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
