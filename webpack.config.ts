import path from 'path';
import 'webpack-dev-server';
import { buildWebpack } from './config/buildWebpack';
import { WebpackConfiguration } from 'webpack-dev-server';
import { buildMode, buildPlatform } from 'config/types';

interface envTypes {
	mode?: buildMode
	port?: number,
	platform?: buildPlatform,
	analyzer?: boolean
}

export default (env:envTypes) => {
	const config: WebpackConfiguration = buildWebpack({
		port: env.port || 5000,
		mode: env.mode || 'development',
		platform: env.platform || 'desktop',
		paths: {
			entry: path.resolve(__dirname, 'src', 'index.tsx'),
			output: path.resolve(__dirname, 'dist'),
			html: path.resolve(__dirname, 'public', 'index.html'),
			src: path.resolve(__dirname, 'src'),
			public: path.resolve(__dirname, 'public')
		},
		analyzer: env.analyzer
	})
	return config
};