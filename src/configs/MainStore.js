
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { CombineReducer } from './CombinReducers'
/* 创建整个应用的中间件 */
const middleware = [ thunk ];
export const MainStore = createStore(
    CombineReducer,
    applyMiddleware(...middleware),
);
