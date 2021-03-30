# webpack-20

## 配置 eslint

推荐使用 github 上的一些开源好的规则仓库，比如：[standard](https://github.com/standard/standard)

<br />

## 配置

/src/search/index.js

```shell
npm install standard --save-dev

```

<br />

package.json

```shell
 "scripts": {
   ...
    "eslint": "standard && node src/*/*.js",
    "flx": "standard --fix",
  },

```

<br />
