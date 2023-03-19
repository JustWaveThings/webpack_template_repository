const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	mode: 'development',
	target: 'web',
	entry: {
		index: './src/index.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		allowedHosts: ['.preview.csb.app', 'localhost'],
		// .preview.csb.app is the domain for CodeSandbox.io
		static: './dist',
		client: {
			progress: true,
			reconnect: true,
			overlay: {
				warnings: false,
				errors: false,
			},
		},
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'What shows up in the browser tab',
			template: './src/index.html',
			//favicon: path.resolve(__dirname, '../icons/favicon.ico'),
		}),
		new ESLintPlugin(),
		new StylelintPlugin({
			fix: false,
			failOnError: false,
			failOnWarning: false
		}),
	],
	optimization: {
		runtimeChunk: 'single',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						]
					}
				}
			},
		],
	},
};
