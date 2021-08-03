import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import registerServiceWorker from "./registerServiceWorker";
import App from './App';
import { MainStore } from './configs/MainStore';
/* ConfigProvider 使用 React 的 context 特性，只需在应用外围包裹一次即可全局生效  https://3x.ant.design/components/config-provider-cn/ */
// <Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store https://cn.redux.js.org/docs/react-redux/api.html
// 原理是React组件的context属性
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={MainStore}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
