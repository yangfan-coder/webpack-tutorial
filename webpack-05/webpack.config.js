'use strict';

const path = require('path');

module.exports = {
  entry: {
    // 入口文件可以用对象的形式来写
    index: './src/index.js',
    search: './src/search.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js', // 多个入口的情况下 不知道对应的名称、可以用占位符来指定[name]
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /.css$/, // 配置css的后缀名
        use: ['style-loader', 'css-loader'], //tips:执行的顺序是右到左的
      },
      {
        test: /.less$/, // 配置less的后缀名
        use: ['style-loader', 'css-loader', 'less-loader'], //tips:执行的顺序是右到左的
      },
    ],
  },
};
