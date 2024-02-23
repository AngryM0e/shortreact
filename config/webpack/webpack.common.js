const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const loadersWebpack = require("./loaders.webpack");

module.exports = {
	entry: path.resolve(__dirname, "..", "..", "src", "index.tsx"),
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "..", "..",  "public", "index.html"),
		}),
		new CopyPlugin({
			patterns: [
				{
					from: 'public',
					to: '',
					globOptions: {
						ignore: ['**/index.html'],
					},
				},
			],
		}),
	],
	module: {
		rules: loadersWebpack()
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, "..", "..", 'build'),
		clean: true,
		publicPath: '/',
	},
};
