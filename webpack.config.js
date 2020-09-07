const path = require('path');
const webpack = require('webpack');

//Esto no se añade al comienzo
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const dotenv = require('dotenv');
dotenv.config();

const isDev = (process.env.ENV === 'development');
const entry = ['./src/frontend/index.js'];

if (isDev) entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true')


module.exports = {
  mode: isDev ? 'development' : 'production',
  entry,
  output: {
    path: isDev ? '/' : path.resolve(__dirname, 'src/server/public'),
    filename: isDev ? 'assets/app.js' : 'assets/app-[hash].js',
    "publicPath": '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      //Esto no se añade al comienzo
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      //Añadimos esto para que aceptar imagenes npm install file-loader --save-dev
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            'loader': 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: { //Para permitirme mover en rutas
    historyApiFallback: true,
  },
  plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() : () => { },
    new MiniCssExtractPlugin({
      filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css',
    }),
    isDev ? () => { } :
      new CompressionPlugin({
        test: /\.js$|\.css$/,
        filename: '[path].gz',
      }),
    isDev ? () => { } : new ManifestPlugin(),
  ],
};
