const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          presets: ['latest']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1!postcss-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader?!postcss-loader!less-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(jpeg|png|jpg|gif|svg)$/,
        loaders: [
          'url-loader?limit=20000&name=assets/[name]-[hash:5].[ext]',
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body',
      title: 'webpack demo'
    })
  ]
}