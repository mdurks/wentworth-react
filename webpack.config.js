var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist/"),
    filename: "main.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    // compress: true,

    // use webpacks built in hot module replacement
    hot: true,

    historyApiFallback: true,
  },
  // devtool: "cheap-eval-source-map",
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
};
