此工程使用[Create React App](https://github.com/facebook/create-react-app)创建
# CRA-WEB
### [create react app 脚手架构建](https://www.html.cn/create-react-app/docs/getting-started/)
### [用React - react-app-rewired重写](https://blog.csdn.net/sinat_33184880/article/details/104291527)
- 更换 package.json 中的 script 命令
```
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-scripts eject"
}
```
- 在 package.json 同级目录下新建 config-overrides.js 文件

```
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackAlias,
} = require("customize-cra")
const path = require("path")
 
module.exports = override(
  // 添加装饰器
  addDecoratorsLegacy(), 
 
  disableEsLint(),
  
  // 设置路径别名
  addWebpackAlias({ 
    '@': path.resolve(__dirname, 'src'),
  }),
);
```
### [整合antd 按需导入](https://3x.ant.design/docs/react/use-with-create-react-app-cn)

# CRA-WEB
