# webpack-11
## 文件指纹：<文件后缀>


执行以下的命令、生成的文件在dist文件夹中 自己手动创建index.html 进行引入search.js
```shell
npm run build  
```

## 文件指纹分类：

1、Hash：整个项目构建、只要文件发生变化，整个项目hash都更改<br />
2、Chunkhash：根据不用的entry生成不用的Chunkhash <br />
3、ContentHash：根据文件内容定义hash，文件内容不变，ContentHash不变<br />

## 文件指纹好处：
  1、文件的版本管理<br />
  2、使用缓存 加速浏览器访问<br />