const path =require("path")

module.exports = {
  mode: "production",
  entry: "./javascript/index.js",
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "index.js",
  },
  module: {
    rules: [{ test: /\.js$/, loader: "babel-loader" }],
  },
};
