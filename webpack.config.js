// var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: './src/main.js',
  output: {
    path: './assets/',
    publicPath: '/assets/',
    filename: 'main.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.sass$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 51200,
          name: 'images/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015','stage-2'],
          plugins:['transform-runtime']
        }
      }
    ]
  },
  babel: {
    presets: ['es2015', 'stage-2'],
    plugins:['transform-runtime']
  },
  devServer: {
      historyApiFallback: true,
      hot: false,
      inline: true,
      grogress: true
  }
  //devtool: '#eval-source-map'
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.optimize.OccurenceOrderPlugin()
//   ])
// }
