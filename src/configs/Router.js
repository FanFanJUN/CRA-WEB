/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-01-11 17:00:11
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-01-11 17:22:22
 * @Description  : TODO
 * @FilePath     : /CRA-WEB/src/configs/Router.js
 */
import React, { Component } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Spin } from 'antd';
import Route from './PrivateRoute';
import Demo1 from '../components/ReactHooksTest/Demo1';

const Loading = ({ error, pastDelay }) => {
  if (error) {
    return <div>Error! {error}</div>;
  }
  if (pastDelay) {
    return <Spin spinning />;
  }
  return null;
};
const loadable = (pathLoader) => Loadable({
  loader: pathLoader,
  loading: Loading,
});

const Test = loadable(() => import('../components/test'));
const ButtonTest = loadable(() => import('../components/buttontest'));

/**
 * @description 路由配置页
 * @author LC@1981824361
 * @date 2020-09-03
 * @export
 * @class Routers
 * @extends {Component}
 */
export default class Routers extends Component {
  render() {
    return (
      <Router basename="/CRA-web">
        <Switch>
          <Route path='/' exact component={Test} />
          <Route path='/testbutton' exact component={ButtonTest} />
          <Route path='/demo' exact component={Demo1} />
        </Switch>
      </Router>
    );
  }
}
