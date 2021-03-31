# webpack-20

## 服务器渲染 SSR

SSR 的本质就是在[webpack 进行打包](./webpack.ssr.js)的时候,`libraryTarget：umd`，打包完成的`/dist/search-server.js`,在[node](./server/index.js)端进行读取，然后利用`react-dom/server`的`renderToString`进行转成虚拟 DOM 数，在通过读取`/dist/search.html`使用插槽的方式进行整个模板的替换。

<br />

package.json

```shell
 "scripts": {
   ...
    "server": "node server/index.js",
    "build:ssr": "webpack --config webpack.ssr.js"
  },

```
