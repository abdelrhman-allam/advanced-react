const path = require("path");

module.exports = {
  entry: ["./lib/components/index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /server.js/, /config.js/],
        use: "babel-loader",
      },
    ],
  },
  target: "node",
};
