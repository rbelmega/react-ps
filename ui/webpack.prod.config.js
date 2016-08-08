path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin    = require('copy-webpack-plugin');

module.exports = {
	devtool: 'eval',
	entry: './ui/main.js',
	output: {
		path: "./public",
		filename: 'index.js',
		publicPath: '/static/',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel",
				query: {
					presets: ["es2015", "react"],
					plugins: ["transform-object-rest-spread"]
				}
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new CopyWebpackPlugin([{from: './ui/style.css', to: './style.css'}])
	],
};