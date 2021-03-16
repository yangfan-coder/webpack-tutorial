# webpack-09

## webpack文件监听

```shell
1、启动webpack 命令时，带上 --watch 参数
2、在配置webpack.config.js 中设置 watch:true
```

执行以下的命令、生成的文件在dist文件夹中 自己手动创建index.html 进行引入search.js
```shell
npm run build  
```

### 需要注意：
  watch虽然能动态的监听文件的变化、但是浏览器的更新需要手动刷新才能生效



