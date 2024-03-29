/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-01-11 17:00:11
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-10-22 17:52:39
 * @Description  : 路由配置
 * @FilePath     : /CRA-WEB/src/configs/Router.js
 */
import React, { Component, PureComponent } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Spin } from 'antd';
import Route from './PrivateRoute';
import Demo1 from '../components/ReactHooksTest/Demo1';
import Parent from '../components/ReactHooksTest/ReactMemo/Parent';
import Test1 from '../components/TestComps/test1';
import App from '../components/ReactHooksTest/ReactCallback';
import ParentComponent from '../components/ReactHooksTest/ReactMemoTwo';
import ParentComponentFroMemo from '../components/ReactHooksTest/ReactUseMemo';
import TestJsx from '../components/ReactUp/TestJsx';

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

const Test = loadable(() => import('../components/TestDemo'));
const ButtonTest = loadable(() => import('../components/buttontest'));
const   MultiCascaderCom= loadable(()=> import('../components/common/MultiCascaderCom'));
/**
 * @description 路由配置页
 * @author LC@1981824361
 * @date 2020-09-03
 * @export
 * @class Routers
 * @extends {Component}
 */
export default class Routers extends PureComponent {
  render() {
    return (
      <Router basename="/CRA-web">
        <Switch>
          <Route path='/' exact component={MultiCascaderCom} />
          <Route path='/testbutton' exact component={ButtonTest} />
          <Route path='/demo' exact component={Demo1} />
          <Route path='/com' exact component={MultiCascaderCom} />
          <Route path='/reactMemo' exact component={Parent} />
          <Route path='/Virtable' exact component={Test1} />
          <Route path='/Test' exact component={Test} />
          <Route path='/usecallback' exact component={App} />
          <Route path='/testReactMemo' exact component={ParentComponent} />
          <Route path='/testUseMemo' exact component={ParentComponentFroMemo} />
          {/* 进阶测试 */}
          <Route path='/testJsx' exact component={TestJsx} />
        </Switch>
      </Router>
    );
  }
}
