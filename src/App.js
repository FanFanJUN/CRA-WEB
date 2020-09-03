import 'babel-polyfill';
import React from 'react';
import { connect } from 'react-redux';
import { Spin, Button } from 'antd';
import Router from './configs/Router';

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
