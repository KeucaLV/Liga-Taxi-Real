const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api', // Your backend API endpoints prefix
        createProxyMiddleware({
            target: 'http://localhost:5000', // Your backend server URL
            changeOrigin: true,
        })
    );
};