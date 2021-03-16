# webpack-10

## 热更新：webpack-dev-server


执行以下的命令、生成的文件在dist文件夹中 自己手动创建index.html 进行引入search.js
```shell
npm run build  
```

## 热更新原理
1、webpack complie :将JS编译成Bundle
2、HMR server: 将热更新文件输出给HMR Runtime
3、Bundle server : 提供文件在浏览器访问
4、HMR Runtime :会注入到浏览器更新文件的变化
5、bundle.js 构建输出文件


## 热更新好处

热更新一般是在开发中使用调试的，输入的文件放在内存、跟watch的区别就是 watch监听是放在电脑磁盘中的、所以从构建的速度上来看的话是有优势的

## 需要注意：

webpack-dev-server 需要手动的安装依赖