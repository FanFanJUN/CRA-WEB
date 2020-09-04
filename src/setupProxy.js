// https://blog.csdn.net/balics/article/details/104479641
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api/lc', { target: 'http://120.55.81.129:20080' }));
};
