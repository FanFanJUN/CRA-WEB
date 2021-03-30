/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-01-11 17:00:11
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-03-27 10:50:22
 * @Description  : createStore
 * 调试配置  https://github.com/zalmoxisus/redux-devtools-extension 
 * @FilePath     : /CRA-WEB/src/configs/MainStore.js
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { CombineReducer } from './CombinReducers'
/* 创建整个应用的中间件 */
// redux-thunk主要的功能就是可以让我们dispatch一个函数，而不只是普通的 Object。

const middleware = [ thunk ];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const MainStore = createStore(CombineReducer, composeEnhancers(applyMiddleware(...middleware)));
