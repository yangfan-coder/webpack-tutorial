'use strict'

const glob = require('glob')
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// ! 设置多页面打包

const setMAP = () => {
  const entry = {}
  const HtmlWebpackPlugins = []

  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'))

  Object.keys(entryFiles).map((item) => {
    const entryFile = entryFiles[item]

    // 获取文件夹的名称
    const match = entryFile.match(/src\/(.*)\/index\.js/)
    const pageName = match && match[1]

    entry[pageName] = entryFile
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
          removeComments: false
        }
      })
    )
  })

  return {
    entry,
    HtmlWebpackPlugins
  }
}

const { entry, HtmlWebpackPlugins } = setMAP()
module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js' // 多个入口的情况下 不知道对应的名称、可以用占位符来指定[name]
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/, // 配置css的后缀名
        use: ['style-loader', 'css-loader'] // tips:执行的顺序是右到左的
      },
      {
        test: /.less$/, // 配置less的后缀名
        use: ['style-loader', 'css-loader', 'less-loader'] // tips:执行的顺序是右到左的
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 102400 // 100k
            }
          }
        ]
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new CleanWebpackPlugin()].concat(HtmlWebpackPlugins),
  devServer: {
    contentBase: './dist',
    hot: true
  },
  // devtool: 'source-map', // !   配置不同的source-map
  devtool: 'cheap-source-map	' // !   配置不同的source-map
}
