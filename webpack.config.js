const path = require("path");

module.exports = {
  entry: "./src/index.js", // your entry file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    fallback: {
      fs: false, // Add a fallback for fs module since it can't be used in the browser
    },
  },
};
