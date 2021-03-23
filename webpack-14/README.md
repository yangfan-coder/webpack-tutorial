# webpack-14

## 自动补充 css 前缀插件 autoprefixer

autoprefixer 是后置处理器，基于 postcss

```shell
npm i postcss-loader  autoprefixer -D
```

执行以下的命令、生成的文件在 dist 文件夹中 自己手动创建 index.html 进行引入 search.js

```shell
npm run build
```

## 提示：

安装不同的版本的 webpack 和 postcss-loader 、autoprefixer 版本是不一致的，有的时候出错了也许多数是你的依赖包的版本不对哦

详情：[postcss-loader#4](https://v4.webpack.docschina.org/loaders/postcss-loader/)
