const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

var extractPlugin = new ExtractTextPlugin({
	filename: 'css/styles.css' 
});

module.exports = {
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	entry: {
		guide: './src/guide.js',
		quiz:  './src/quiz.js'
	},
	output: {
		path: `${__dirname}/dist/`,
		filename: '[name].bundle.js'
	},
	watch: true,
	mode: 'development',
	devtool: 'source-map',
	plugins: [
		extractPlugin
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['env', {
							targets: {
								browsers: ['> 1%']
							}
						}]]
					}
				}
			},
			{
				test: /\.css$/,
				use: extractPlugin.extract({
					use: [ 'css-loader']  
				})
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: [
						'css-loader',
						'sass-loader'
					]  
				})
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: '../images/'
						}
					}
				]
			}
		]
	},
};
