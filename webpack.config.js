// Data
const title = 'Isomorphic'
const meta = require('./source/data/meta.json')

// Modules
const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const nodeExternals = require('webpack-node-externals')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Export
module.exports = ({ base }) => {
  // Environment
  const mode = process.env.NODE_ENV || 'development'
  const isProduction = mode === 'production'
  const isClient = base === 'client'

  // Configuration
  return new SpeedMeasurePlugin({ disabled: isProduction }).wrap({
    mode,
    entry: isClient
      ? {
        main: path.join(__dirname, './source/client.js'),
        vendor: ['react', 'react-dom']
      }
      : { server: path.join(__dirname, './source/server.js') },
    output: {
      publicPath: '/',
      path: path.resolve(__dirname),
      filename: isClient ? 'public/scripts/[name].js' : 'server.bundle.js'
    },
    resolve: {
      alias: { '~': path.join(__dirname, './source') },
      extensions: ['.js', '.jsx', '.less', '.gql']
    },
    target: isClient ? 'web' : 'node',
    externals: isClient ? {} : [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules(?!\/webpack-dev-server)/,
          use: ['babel-loader']
        },
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          use: 'raw-loader'
        },
        {
          test: /\.(css|less)?$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { hmr: !isProduction }
            },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: { plugins: [autoprefixer] }
            },
            { loader: 'less-loader' }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|woff|svg)$/,
          use: 'url-loader'
        }
      ]
    },
    optimization: {
      nodeEnv: mode,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parallel: true,
            warnings: false,
            extractComments: true,
            output: { comments: false }
          }
        })
      ]
    },
    performance: { hints: false },
    plugins: [
      new MiniCssExtractPlugin({ filename: 'public/styles/main.css' }),
      ...(
        isClient
          ? [
            new HtmlWebpackPlugin({
              template: 'source/template.html',
              filename: 'public/index.html',
              base: '/',
              title,
              meta,
              inject: 'body',
              xhtml: true,
              minify: {
                html5: true,
                useShortDoctype: true,
                removeComments: true,
                keepClosingSlash: true,
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true
              }
            }),
            new webpack.optimize.AggressiveMergingPlugin(),
            new CompressionPlugin({
              filename: '[path].gz',
              algorithm: 'gzip',
              test: /\.js$|\.css$/
            })
          ]
          : []
      )
    ],
    devtool: !isProduction && 'eval-source-map',
    devServer: {
      host: '0.0.0.0',
      port: process.env.PORT || 8000,
      publicPath: '/',
      contentBase: './public',
      historyApiFallback: true,
      hot: true,
      progress: true,
      open: true
    }
  })
}
