const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  /*app.use(createProxyMiddleware("/api/v1/*", {
        target: 'http://localhost:3010',
        headers: {
            'Connection': 'keep-alive'
        }
    }))*/

  app.use(
    '/login',
    createProxyMiddleware({
      target: 'http://localhost:3010',
      changeOrigin: true,
    })
  );

  app.use(
    '/logout',
    createProxyMiddleware({
      target: 'http://localhost:3010',
      changeOrigin: true,
    })
  );

  app.use(
    '/api/v1/hamrofootball/adminorders',
    createProxyMiddleware({
      target: 'http://localhost:3010',
      changeOrigin: true,
    })
  );

  app.use(
    '/api/v1/hamrofootball/myorders',
    createProxyMiddleware({
      target: 'http://localhost:3010',
      changeOrigin: true,
    })
  );

  app.use(
    '/api/v1/hamrofootball/stripe',
    createProxyMiddleware({
      target: 'http://localhost:3010',
      changeOrigin: true,
    })
  );

  app.use(
    '/api/v1/*',
    createProxyMiddleware({
      target: 'http://localhost:3010',
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware('/auth/google/*', {
      target: 'http://localhost:3010',
      headers: {
        Connection: 'keep-alive',
      },
    })
  );
};
