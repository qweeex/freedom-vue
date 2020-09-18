module.exports = {
    chainWebpack: config => {
        config.module
            .rule('static')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }))
    }
}