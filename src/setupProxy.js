const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api/lc', { target: 'http://120.55.81.129:20080' }));
};
