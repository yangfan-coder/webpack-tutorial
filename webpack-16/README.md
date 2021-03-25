# webpack-16

## 多页面打包通用方案

原理：创建不同的文件夹的名称,为输出的页面名称，然后通过 glob.sync 获取当前的文件的目录数组，循环当前的数组 进行多个 HtmlWebpackPlugin 的模板输出

核心代码实现： [setMAP](./webpack.prod.js) <br />

结构：<br />

```shell
.
├── index
│   ├── helloWorld.js
│   ├── index.html
│   └── index.js
└── search
    ├── fonts
    ├── images
    ├── index.html
    ├── index.js
    ├── meta.html
    ├── search.css
    └── search01.less

```

<br />

## 安装的依赖

```shell

npm i glob -D

```

<br />

### 相关资源

[glob](https://github.com/isaacs/node-glob#readme)

<br />
