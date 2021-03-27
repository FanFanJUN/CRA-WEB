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
### 引入对less支持的配置
[TypeError: this.getOptions is not a function ->less-loader安装的版本过高](https://blog.csdn.net/qq_42430948/article/details/113552673)
```
const styleConfig= ()=>(config, env)=>{
    const oneOf_loc= config.module.rules.findIndex(n=>n.oneOf)
    config.module.rules[oneOf_loc].oneOf=[    //例如要增加处理less的配置
        {
            test: /\.less$/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                    },
                },
                {
                    loader: 'less-loader'
                }
            ],
        },
        ...config.module.rules[oneOf_loc].oneOf
    ]
 
    return config;
}
```
### 处理 loading 状态, 页面 showLoading 和 hideLoading
```
组件监听 loading
const App = ({ loadings }) => (
  <div style={{ background: '#f0f2f5' }}>
    <div style={{ margin: '0px 0px 0px', background: '#fff' }}>
      <Spin tip="加载中..." spinning={loadings} style={{ marginTop: '50px' }}>
        <Router />
        {/* <Button type="primary">测试</Button> */}
      </Spin>
    </div>
  </div>
);

const mapStateToProps = state => ({
  loadings: state.SharedReducer.loadings,
});

export default connect(mapStateToProps)(App);
```
```
页面处理
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    show: () => {
      dispatch(show());
    },
    hide: () => {
      dispatch(hide());
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Demo);


获取页面列表数据 loadign
getDataSource = (params)=> {
    this.props.show();
    request
      .post('/api/lc/SELECTLISTARTICLE', {
        data: {
          pageNum: 1,
          pageSize: 10,
          ...params,
        },
      })
      .then((response) => {
        const {data: {dataSource, pagination}} = response;
        this.setState(()=>({
          articles: dataSource,
          pagination,
        }))
        this.props.hide();
      })
      .catch((error) => {
        this.props.hide();
      });
  }
```
```
DvaJS 的处理 更好  页面监听 发送行为调用接口

function mapStateToProps(state) {
  return {
    tableData: state.table,
    tableLoading: state.loading.effects['table/getTableData'],
  };
}

export default connect(mapStateToProps)(Form.create()(DiyTable));
```

```
页面 部分代码  实例  获取页面数据

componentDidMount(){
        this.getDataSource('');
    };

    getDataSource = (queryParam) => {
        this.props.feachData(queryParam);
        this.setState({
            selectedRows: [],
        })
    };

.......
省略
.......

const mapStateToProps = (state) => {
    return {dataSource:state.BafReducer.dataSource,loading:state.BafReducer.loading,res:state.BafReducer.res};
};


const mapDispatchToProps = (dispatch) => {
    return {
     feachData: (queryParam) => {
         dispatch(fetchDataWa("/orderConfiguration/findByPage", queryParam))
     }
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfigurationView)

```
### 在redux源码中，是根据分发的action，对所有的reducer进行遍历的。[大佬知乎](https://zhuanlan.zhihu.com/p/54134134)
```
每次dispatch方法都会遍历所有reducer
必须保证每个reducer有一个默认state，如果没匹配到任何action，则必须直接返回默认state
不要在reducer里再调用dispatch，会爆的
```
### [redux-devtools-extension调试配置](https://github.com/zalmoxisus/redux-devtools-extension )