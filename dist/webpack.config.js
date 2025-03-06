import path from 'path';
import 'webpack-dev-server';
import { buildWebpack } from './config/build/buildWebpack';
export default (function (env) {
    var config = buildWebpack({
        port: env.port || 5000,
        mode: env.mode || 'development',
        platform: env.platform || 'desktop',
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src')
        },
        analyzer: env.analyzer
    });
    return config;
});
