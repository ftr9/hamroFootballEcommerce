const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(createProxyMiddleware("/api/v1/*", {
        target: 'http://localhost:3010',
        secure: false,
        headers: {
            'Connection': 'keep-alive'
        }
    }))

    app.use(createProxyMiddleware("/auth/google/*", {
        target: 'http://localhost:3010',
        secure: false,
        headers: {
            'Connection': 'keep-alive'
        }
    }))
}