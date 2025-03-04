import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin'
import 'webpack-dev-server';

interface envTypes {
	mode: 'production' | 'development'
	port: number
}

export default (env:envTypes) => {
	const isDev = env.mode == 'development';
	const isProd = env.mode == 'production';

	const config: webpack.Configuration = {
		mode: env.mode ?? "development",
		entry: './src/index.tsx',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: '[name].[contenthash].js',
			clean: true
		},
		plugins: [
			new HTMLWebpackPlugin({template: './public/index.html'}),
			new webpack.ProgressPlugin()
		],
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: "ts-loader",
					exclude: /node_modules/,
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js']
		},
		devtool: isDev && 'inline-source-map',
		devServer:  isDev ? {
			// static: {
			// 	directory: path.join(__dirname, 'public'),
			// },
			open: true,
			// compress: true,
			port: env.port ?? '5000',
		} : undefined,
	}
	return config
};