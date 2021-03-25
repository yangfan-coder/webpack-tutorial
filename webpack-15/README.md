# webpack-15

## css px 自动转换成 rem

```shell

npm i px2rem-loader raw-loader@0.5.1 -D
npm i lib-flexible -S

```

执行以下的命令、生成的文件在 dist 文件夹中 自己手动创建 index.html 进行引入 search.js

```shell
npm run build
```

<br />

### 资源内联

- 页面框架的初始脚本
- 上报相关的打点
- css 内联避免页面的闪动
- 减少 http 的网络请求，url-loader 原理一致

<br />

### 相关资源

[px2rem-loader](https://www.npmjs.com/package/px2rem-loader)

[lib-flexible](https://www.npmjs.com/package/lib-flexible)

<br />

### 其他

关于 vw\vh 的适配方案也可以参考搭建的轮子：

[vue-cli H5 适配 多页配置](https://github.com/yangfan-coder/amazing-vue-MultiplePages)

[react-react-app 适配方案](https://github.com/yangfan-coder/react-app-h5)
