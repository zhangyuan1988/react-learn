const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/ajax',// 以某个路径开头的路径
        createProxyMiddleware({
            target: 'https://i.maoyan.com',// 代理的目标路径
            changeOrigin: true,
            
        })
    );

    // 可以配置多个
    // app.use(
    //     '/ajax2',// 以某个路径开头的路径
    //     createProxyMiddleware({
    //         target: 'https://i.maoyan.com2',// 代理的目标路径
    //         changeOrigin: true
    //     })
    // );
};