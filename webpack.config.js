const path = require('path')
const webpackMerge = require('webpack-merge')

// webpack plugins
const DefinePlugin = require('webpack/lib/DefinePlugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')

module.exports = (env) => {
  console.log(env.FOLDER)
  return {
    bail: true,
    devtool: 'source-map',
    entry: {
      [env.FILE]: './js/' + env.FOLDER + '/' + env.FILE + '.js'
    },
    output: {
      path: path.resolve(__dirname, 'js/' + env.FOLDER + '/compiled_' + env.FILE),
      filename: '[name]-[hash].min.js',
      sourceMapFilename: '[name]-[hash].map',
      chunkFilename: '[id]-[chunkhash].js'
    },
    resolve: {
      extensions: ['.js'],
      modules: ['node_modules']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin([ 'compiled_' + env.FILE], {
        root: path.resolve(__dirname, 'js/' + env.FOLDER + '/'),
        exclude: '.gitignore'
      }),
      new DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new UglifyJsPlugin()
    ]
  }
}
