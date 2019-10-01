const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entries = {};
entries['tyk-ui'] = path.resolve(__dirname, 'src/index.js');
entries.index = path.resolve(__dirname, 'src/index.js');

module.exports = {
  mode: 'production',
  entry: entries,
  output: {
    path: path.resolve(__dirname, './lib/'),
    filename: '[name].js',
    library: 'TykUI',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: [/images/],
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
      {
        enforce: 'pre',
        test: /.js?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              debug: true,
              engine: 'postcss',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new OptimizeCSSAssetsPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'src/**/*.scss',
        to: 'sass/',
        transformPath(targetPath) {
          return targetPath.replace('src/', '');
        },
      },
    ], {
      debug: true,
    }),
  ],
  devtool: 'source-map',
  externals: {
    react: 'react',
    'react-dom': 'reactDOM',
    moment: 'moment',
    immutable: 'immutable',
  },
  stats: 'verbose',
};
