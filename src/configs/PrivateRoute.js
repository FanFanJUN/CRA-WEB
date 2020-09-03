
// import React, {Component} from 'react';
// import {Route} from 'react-router-dom'
// import httpUtils from "../commons/utils/FeatchUtils";
// import {isLocalhost, cache, cacheSession} from "../commons/utils/CommonUtils";
// import { defaultAppCode, host, basicUrl, loginUrl } from './DefaultConfig';
// import queryString from "query-string";
// import {Spin} from 'antd';


// class PrivateRoute extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             hasToken: true
//         }
//     }

//     componentWillMount() {
//         let urlParams = queryString.parse(this.props.location.search)
//         if (urlParams && urlParams._s) {
//             cache.clear('Authorization');
//             cache.clear('Right');
//             cache.clear('_s');
//             cache.clear('authHeader');
//             let url = isLocalhost ? '' : host
//             httpUtils.get(url + basicUrl + "/checkToken?_s=" + urlParams._s + '&AppCode=' + defaultAppCode.toString()).then(res => {
//                 if (res&&res.success) {
//                     cacheSession.set('Authorization', res.data[0]);
//                     cache.set('Right', res.data[1]);
//                     cache.set('_s', urlParams._s);
//                     this.setState({hasToken: res.success});
//                 } else {
//                     //  window.location.replace(host+loginUrl+"/index");
//                 }
//             })
//         } else {
//             if (cacheSession.get('Authorization')) {
//                 this.setState({hasToken: true});
//             } else {
//                 //   window.location.replace(host+loginUrl+"/login");
//             }
//         }
//     }

//     render() {
//         const {component: Component, ...rest} = this.props
//         return (
//             <Route
//                 {...rest}
//                 render={props =>
//                     this.state.hasToken ?
//                         <Component {...props} /> :
//                         <Spin tip="加载中..." style={{marginTop: "50px"}}>加载中...</Spin>
//                 }
//             />
//         )

//     }
// }

// export default PrivateRoute
