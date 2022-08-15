// Node.js的核心模块，专门用来处理文件路径
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入口
  // 相对路径和绝对路径都行
  entry: "./src/main.js",
  // 输出
  output: {

  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules代码不编译
        use: ['./loaders/clean-log-loader']
      },
    ],
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    })
  ],
  // 开发服务器
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    // open: true, // 是否自动打开浏览器
  },
  // 模式
  mode: "development", // 开发模式
};
