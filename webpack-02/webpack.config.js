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
};
