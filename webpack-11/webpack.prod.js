'use strict';

const path = require('path');
const MiniCssExtractplugin = require('mini-css-extract-plugin'); // 提取css单独一个文件

module.exports = {
  entry: {
    // 入口文件可以用对象的形式来写
    index: './src/index.js',
    search: './src/search.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js', // chunkhash 8位的长度
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.css$/, // 配置css的后缀名
        exclude: /node_modules/,
        use: [MiniCssExtractplugin.loader, 'css-loader'], //tips:执行的顺序是右到左的
      },
      {
        test: /.less$/, // 配置less的后缀名
        exclude: /node_modules/,
        use: [MiniCssExtractplugin.loader, 'css-loader', 'less-loader'], //tips:执行的顺序是右到左的
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractplugin({
      filename: '[name]_[contenthash:8].css',
    }),
  ],
};
