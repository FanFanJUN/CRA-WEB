/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-01-11 17:00:11
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-03-27 10:39:13
 * @Description  : 多个reduxer 通过  combineReducers方法
 * @FilePath     : /CRA-WEB/src/configs/CombinReducers.js
 */

import {combineReducers} from "redux";
import SharedReducer from './SharedReducer'
// import PurchaseReducer from '../components/PurchaseOrder/Redux/reducer'
export const CombineReducer = combineReducers({
    SharedReducer,
});
