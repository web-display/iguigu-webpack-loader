const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          './loaders/style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "./loaders/file-loader",
        type: "javascript/auto", // 通过禁用webpack默认处理file资源，解决图片重复打包问题
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules代码不编译\loader: './loaders/banner-loader',
        loader: './loaders/babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  mode: "none",
};
