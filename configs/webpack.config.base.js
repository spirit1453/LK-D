
import path from 'path'
import webpack from 'webpack'
import { dependencies } from '../package.json'

const debug = require('debug')('debug')

const externals = Object.keys(dependencies || {})
debug({externals})
export default {
  externals,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: process.env.NODE_ENV === 'development',
            minimize: process.env.NODE_ENV === 'production',
            modules: true,
            localIdentName: '[name]__[local]-[hash:base64:5]'
          }
        }, {
          loader: 'less-loader'
        }]
      }
    ]
  },

  output: {
    path: path.join(__dirname, '..', 'app'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),

    new webpack.NamedModulesPlugin()
  ]
}
