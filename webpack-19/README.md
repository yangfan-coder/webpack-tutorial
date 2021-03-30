# webpack-19

## 代码分割

对于大的 web 应用来讲，将所有的代码放在一个文件中显然是不够有效的，特别是当你的代码块是在某些特殊的时候才能被用到，webpack 有有个功能就是讲你的代码库分割成 chunks,当代码运行的时候才进行加载。

<br />

## 配置

/src/search/index.js

```shell
npm i @babel/plugin-syntax-dynamic-import -save-dev

npm run build
```

<br />

.babelrc

```shell
"plugins":["@babel/plugin-syntax-dynamic-import"]
```

<br />

## 场景

- 抽离想用的代码到一个共享快
- 脚本懒加载、使得初始下载的代码更小

### 相关资源

<!-- [Tree Shaking](https://webpack.docschina.org/guides/tree-shaking/) <br /> -->
