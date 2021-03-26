'use strict';

const glob = require('glob');
const path = require('path');
const MiniCssExtractplugin = require('mini-css-extract-plugin'); // 提取css单独一个文件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// ! 设置多页面打包

const setMAP = () => {
  const entry = {};
  const HtmlWebpackPlugins = [];

  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'));

  Object.keys(entryFiles).map((item) => {
    const entryFile = entryFiles[item];

    // 获取文件夹的名称
    const match = entryFile.match(/src\/(.*)\/index\.js/);
    const pageName = match && match[1];

    entry[pageName] = entryFile;
    HtmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
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
    );
  });

  return {
    entry,
    HtmlWebpackPlugins,
  };
};

const { entry, HtmlWebpackPlugins } = setMAP();

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js', // chunkhash 8位的长度
  },
  mode: 'none',
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
        use: [
          MiniCssExtractplugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  browsers: [
                    //浏览器列表
                    'ie>=8',
                    'Firefox>=20',
                    'Safari>=5',
                    'Android>=4',
                    'Ios>=6',
                    'last 4 version',
                  ],
                }),
              ],
            },
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
              remPrecision: 8,
            },
          },
        ], //tips:执行的顺序是右到左的
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
      assetNameRegExp: /.css$/g,
      cssProcessor: require('cssnano'),
    }),

    new CleanWebpackPlugin(),
  ].concat(HtmlWebpackPlugins),
  devtool: 'inline-source-map', // !   配置不同的source-map
};
