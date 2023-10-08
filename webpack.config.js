const {
  sentryWebpackPlugin
} = require("@sentry/webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  devtool: "source-map",

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  plugins: [sentryWebpackPlugin({
    authToken: process.env.SENTRY_AUTH_TOKEN,
    org: "querco",
    project: "extraction-chrome"
  })]
};