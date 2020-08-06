const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const plugins = [
  ["@babel/plugin-proposal-class-properties", { "loose": true }]
];

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
    
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: ['@babel/preset-env',
          {
          'plugins': ['@babel/plugin-proposal-class-properties']}]
        }
        
      },
      {
        test: /\.css$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|ttf)$/,
        use: 'file-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin()
  ]
  
};