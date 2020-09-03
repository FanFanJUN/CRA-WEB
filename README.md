此工程使用[Create React App](https://github.com/facebook/create-react-app)创建
# CRA-WEB 预览
![image](https://github.com/FanFanJUN/CRA-WEB/blob/master/cra.png)
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
### [create-react-app中使用redux，react-redux](https://blog.csdn.net/qq_22936647/article/details/104211036)
### [在create-react-app官方脚手架中引入redux数据管理工具](https://blog.csdn.net/q553866469/article/details/90301325)
### [babel-polyfill的引用和使用](https://www.cnblogs.com/princesong/p/6728250.html)
### 引入路由 并使用 react-loadable 按需加载

```
yarn add  react-router-dom --save 

import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Spin } from 'antd';
// import Route from './PrivateRoute';

const Loading = ({ error, pastDelay }) => {
  if (error) {
    return <div>Error! {error}</div>;
  }
  if (pastDelay) {
    return <Spin spinning/>;
  }
  return null;
};
const loadable = (pathLoader) => Loadable({
  loader: pathLoader,
  loading: Loading,
});

const Test = loadable(() => import('../components/test'));

export default class Routers extends Component {
  render() {
    return (
      <Router basename="/CRA-web">
        <Switch>
          <Route path='/' exact component={Test}/>
        </Switch>
      </Router>
    );
  }
}

```
