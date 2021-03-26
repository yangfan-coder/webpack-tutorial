# webpack-18

## 提取页面的公共资源

在使用 react、vue 的时候 我们可以把当前的引入库进行分离，直接采用 CND 的模式，这样打包的速度和性能都会有很大的提升。

 <br />

### html-webpack-externals-plugin

需要手动在页面中引入公共资源的 CDN 地址，具体的配置如下：

```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
</body>
```

```javascript
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
new HtmlWebpackExternalsPlugin({
    // 提取公共资源
    externals: [
      {
        module: 'react',
        entry: 'https://unpkg.com/react@16/umd/react.production.min.js',
        global: 'React',
      },
      {
        module: 'react-dom',
        entry: 'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
        global: 'ReactDOM',
      },
    ],
  }),

```

<br />

### webpack4 内置的 SplitChunksPlugin

也可以使用 webpack4 内置的 SplitChunksPlugin 进行分离 ,

```javascript
// weboack.config

// 在html打包的时候 手动引入vendors模块即可
...
plugins:[
new HtmlWebpackPlugin({
  template: path.join(__dirname, `src/${pageName}/index.html`),
  filename: `${pageName}.html`,
  chunks: ['vendors', pageName],
  inject: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    preserveLineBreaks: false,
    minifyCSS: true,
    minifyJS: true,
    removeComments: false,
  },
})
],
optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /(react|react-dom)/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

```

但是 SplitChunksPlugin 强大在于可以在项目中分离公共的方法引入的次数，在项目根目录中创建一个 common/index.js ；在 index 和 search 模块中分别引入当前的 splitChunks 会根据配置是否打包当前的文件

```javascript
// weboack.config

// 在html打包的时候 手动引入vendors模块即可
...
plugins:[
new HtmlWebpackPlugin({
  template: path.join(__dirname, `src/${pageName}/index.html`),
  filename: `${pageName}.html`,
  chunks: ['commons', pageName],
  inject: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    preserveLineBreaks: false,
    minifyCSS: true,
    minifyJS: true,
    removeComments: false,
  },
})
],
optimization: {
    splitChunks: {
      minSize: 0, // 引入的模块的大小，设置为0 有引入就会打包成模块
      cacheGroups: {
        commons: {
          minChunks: 3, // 最少引入的次数
          name: 'commons', // 打包的模块
          chunks: 'all',
        },
      },
    },
  },

```

## 安装的依赖

```shell

npm i html-webpack-externals-plugin

```

<br />

### 相关资源

[html-webpack-externals-plugin](https://www.npmjs.com/package/html-webpack-externals-plugin) <br />[SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)

<br />
