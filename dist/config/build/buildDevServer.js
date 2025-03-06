function buildDevServer(options) {
    var _a;
    var isDev = options.mode == 'development';
    var isProd = options.mode == 'production';
    return ({
        // 	directory: path.join(__dirname, 'public'),
        // },
        open: true,
        // compress: true,
        port: (_a = options.port) !== null && _a !== void 0 ? _a : '5000',
        historyApiFallback: true
    });
}
export default buildDevServer;
