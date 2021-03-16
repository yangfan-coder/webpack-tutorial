# webpack-08

## 解析文件 url-loader和file-loader对比

执行以下的命令、生成的文件在dist文件夹中 自己手动创建index.html 进行引入search.js
```shell
npm run build  
```
————
### loaders和的Plugins使用
————
#### 日常使用的loader

```shell
babel-loader   // 转换ES6、ES7新特性的语法
css-lodder    // 支持.css文件的加载和解析
less-lodder    // 支持.less文件转成css
ts-lodder    // 将TS转成js
file-lodder    // 将图片、字体等打包
file-lodder    // 将图片、字体等打包
raw-lodder    // 将文件已字符串的形式导入
thead-lodder    // 多进程打包JS和css
```

### Plugins的使用
————
#### 日常使用的Plugins

```shell
CommonsChunkPlugin   // 将chunks相同的模块代码提取成公共的js
CleanWebpackPlugin    // 清理构建目录
ExtractTextWebpackPlugin    // 将css从bunlde文件里提取到一个独立的css文件
CopyWebpackPlugin    // 将文件或者文件夹拷贝到构建的输出目录
HtmlWebpackPlugin    // 创建html文件去承载输出到bundle
UglifyjsWebpackPligin    // 压缩JS
ZipWebpackPlugin    // 将打包出的资源生成一个zip的包
```

————
## loader和 Plugins的区别？

loader不能做的事情Plugin都能干

## url-loader 和file-loader的区别？

首先url-loader底层调取也是file-loader，小于limit字节的文件会被转为DataURl，文件大小大于limit，url-loader会调用file-loader进行处理，参数也会直接传给file-loader，这也是前端优化的构建的重要一环


