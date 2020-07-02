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
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|jpg|png)$/i,
        use: {
          loader: "responsive-loader",
          options: {
            // If you want to enable sharp support:
            adapter: require("responsive-loader/sharp"),
            publicPath: "/img",
            outputPath: "/img",
            sizes: [600, 1200, 2000],
            name: `[name]-[width]-[hash].[ext]`,
            quality: 85,
          },
        },
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
