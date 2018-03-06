const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

	entry:{
		app: './src/Controller.js',
		print: './src/fetch.js'
	},
	devtool: 'inline-source-map',
	plugins: [
		new CleanWebpackPlugin(['dist','build']),
		new HtmlWebpackPlugin({
			title: 'Output Management',
			template: 'src/index.html'
		})
	],
	output: {
		filename: 'bundle.js',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname,'dist')
	},

	module: {
		rules: [
		      {
	      test: /\.css$/,
	      use: [
	        'style-loader',
	        'css-loader'
	      ]
	    },
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	}




	// module: {
	//     rules: [
	    //   {
	    //   test: /\.css$/,
	    //   use: [
	    //     'style-loader',
	    //     'css-loader'
	    //   ]
	    // },
	//     {
	//       test: /\.(png|svg|jpg|gif)$/,
	//       use: [
	//         'file-loader'
	//       ]
	//     },
	//     {
	//       test: /\.(woff|woff2|eot|ttf|otf)$/,
	//       use: [
	//         'file-loader'
	//       ]
	//     }
	//   ]
	// }
};