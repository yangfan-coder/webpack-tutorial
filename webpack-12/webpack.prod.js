'use strict';

const path = require('path');
const MiniCssExtractplugin = require('mini-css-extract-plugin'); // 提取css单独一个文件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      },
      {
        test: /.css$/, // 配置css的后缀名
        use: [MiniCssExtractplugin.loader, 'css-loader'], //tips:执行的顺序是右到左的
      },
      {
        test: /.less$/, // 配置less的后缀名
        use: [MiniCssExtractplugin.loader, 'css-loader', 'less-loader'], //tips:执行的顺序是右到左的
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
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
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /.css$/g, // 匹配的正则的名称后缀、跟loader配置一致
      cssProcessor: require('cssnano'), // 用于最小化的css处理器，默认是cssnano
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/search.html'),
      filename: 'search.html',
      chunks: ['search'],
      /**
       * inject : true || 'head' || 'body' || false
       * body : 所有javascript资源将被放置在body元素的底部。
       * head : 把脚本放置在head元素中.
       * true : script标签位于html文件的 body 底部 [默认]
       * false: 不插入生成的 js 文件，只是单纯的生成一个 html 文件
       *  */
      inject: true,
      minify: {
        collapseWhitespace: true, // 清理html中的空格、换行符。 默认值：false
        minifyCSS: true, // 压缩html内的样式。默认值：false
        minifyJS: true, // 压缩html内的js。 默认值：false
        removeComments: false, // 清理html中的注释。 默认值：false
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html',
      chunks: ['index'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false,
      },
    }),
  ],
};
