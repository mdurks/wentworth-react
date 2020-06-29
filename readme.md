## .babelrc

```javascript
{
  "presets": [
    [
      "@babel/preset-env",
      {
        // tell babel to ignore modules and let webpack apply its intelligence to them
        "modules": false,

        // transpiles JS for browsers with usage of 0.2% and up
        "targets": {
          "browsers": ">0.2%, not dead, not op_mini all"
        }
      }
    ],

    // common JS 'plugins' associated with React (transpile to jsx for example)
    "@babel/preset-react"
  ]
}
```

## .webpack.config.js

```javascript
// this is for node, so use vanilla JS since node doesn't understand es6 modules
var path = require("path");

module.exports = {
  // run webpack from this root directory
  context: __dirname,

  // entry point to the project
  entry: "./src/index.js",

  // location of output folder and bundle name
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },

  // when looking for required files, use the following extensions first before failing
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

  module: {
    // special tools webpack uses when handling files which return their output back to webpack to build the bundle
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

  // location of folder to serve
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },

  // inline source maps in develop, not in production, to view the pre transpiled code
  devtool: "cheap-eval-source-map",

  // better logging config
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
};
```

https://webpack.js.org/guides/hot-module-replacement/
