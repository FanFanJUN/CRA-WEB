
import React, {Component} from 'react';
import {Route} from 'react-router-dom'
// import httpUtils from "../commons/utils/FeatchUtils";
// import {isLocalhost, cache, cacheSession} from "../commons/utils/CommonUtils";
// import { defaultAppCode, host, basicUrl, loginUrl } from './DefaultConfig';
// import queryString from "query-string";
import {Spin} from 'antd';


class PrivateRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasToken: true
        }
    }

    componentWillMount() {
    }

    render() {
        const {component: Component, ...rest} = this.props
        return (
          <Route
            {...rest}
            render={props =>
                    this.state.hasToken ?
                      <Component {...props} /> :
                      <Spin tip="加载中..." style={{marginTop: "50px"}}>加载中...</Spin>
                }
          />
        )

    }
}

export default PrivateRoute;
