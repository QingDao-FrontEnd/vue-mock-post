解决vue-dev环境中无法使用POST请求静态mock数据的问题。

在config.js中配置static路径和mock文件夹名称，默认为'static'和'mock'

###使用方法

在vue工程的 build/dev-server.js 文件中增加下面的语句即可使用：
```
var mockPost = require('vue-mock-post')
app.use(mockPost);
```