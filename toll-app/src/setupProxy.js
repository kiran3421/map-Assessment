const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/v1', 
    createProxyMiddleware({
      target: 'https://api.tollguru.com',
      changeOrigin: true,
      pathRewrite: {
        '^/v1': '', // Remove the /v1 prefix when forwarding the request
      },
    })
  );
};
