const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js", // Главный JS-файл
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Итоговый JS-файл
    clean: true, // Очистка dist перед сборкой
  },
  mode: "development", // 'production' для финальной сборки
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"], // Подключение HTML
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i, // Работает с изображениями
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]", // Просто копирует файлы в /dist/images/
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Подключение шрифтов
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()], // Минификация JS
  },
};
