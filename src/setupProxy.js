/*
 * @Author: Li Cai
 * @LastEditors: Li Cai
 * @Connect: 1981824361@qq.com
 * @Date: 2020-09-04 14:52:57
 * @LastEditTime: 2020-10-09 13:51:43
 * @Description:  配置代理
 * @FilePath: /my-app/src/setupProxy.js
 */
// https://blog.csdn.net/balics/article/details/104479641
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api/lc', { target: 'http://120.55.81.129:20080' }));
};
