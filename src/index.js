import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
import registerServiceWorker from "./registerServiceWorker";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { MainStore } from './configs/MainStore';

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
