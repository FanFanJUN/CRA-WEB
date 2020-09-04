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
          <Route path='/' exact component={ButtonTest}/>
          {/* <Route path='/testbutton' exact component={ButtonTest}/> */}
        </Switch>
      </Router>
    );
  }
}
