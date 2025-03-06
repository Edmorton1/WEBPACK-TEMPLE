import webpack, { DefinePlugin } from "webpack";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
function buildPlugins(options) {
    var isDev = options.mode == 'development';
    var isProd = options.mode == 'production';
    return ([
        new HTMLWebpackPlugin({ template: options.paths.html }),
        isDev && new webpack.ProgressPlugin(),
        isProd && new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        options.analyzer && new BundleAnalyzerPlugin(),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform)
        }),
        new ForkTsCheckerWebpackPlugin()
    ]);
}
export default buildPlugins;
