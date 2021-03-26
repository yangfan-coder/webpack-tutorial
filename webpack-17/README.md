# webpack-17

## 使用 source map

通过配置 webpack.config 的 devtool 来实现，方便在开发环境进行调试 <br />

通过设置 `devtool: 'source-map'` 可以很清楚的定位真实代码的所在位置，<br />

通过设置 `devtool: 'cheap-source-map'` 只能定位到当前报错的行数，没有其他具体的信息，

<br />

### 相关资源

[sourceMap](https://webpack.docschina.org/configuration/devtool/)

<br />
