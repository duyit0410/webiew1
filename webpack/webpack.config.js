const prod = process.env.NODE_ENV === "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { createWebpackAliases } = require("./webpack.helpers");

module.exports = {
  mode: prod ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    // path: path.resolve(__dirname, "dist"),
    path: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
          alias: {
            ...createWebpackAliases([
              "constants",
              "components",
              "hooks",
              "router",
              "layouts",
              "assets",
              "styles",
              "pages",
              "containers",
              "api",
              "util",
              "redux"
            ]),
          },
        },
        use: {
          loader: "swc-loader",
        },
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: { outputStyle: "expanded" },
            },
          },
        ],
      },
      {
        test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  devtool: prod ? undefined : "source-map",

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
