# webpack-19

## Tree Shaking

摇树优化，把项目中不用的代码不进行打包<br /> webpack 的`production`环境是默认是支持的。<br /> 要求：必须是 ES6 的语法

<br />

### Tree Shaking 原理

利用 ES6 模块的特点，对模块的进行静态分析，对一些项目没有用到的代码直接删除掉。

<br />

### 相关资源

[Tree Shaking](https://webpack.docschina.org/guides/tree-shaking/) <br />
