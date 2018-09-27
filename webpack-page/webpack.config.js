const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  entry: {
    main: './src/script/main.js',
    a: './src/script/a.js',
    b: './src/script/b.js',
    c: './src/script/c.js',
  },
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: 'js/[name]-[chunkhash].js',
    publicPath: 'http://cdn.com/'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: false,
      title: 'webpack is good',
      // chunks: ['main'],
      excludeChunks: ['a','b','c']
      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true
      // }
    }),
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'a.html',
      inject: false,
      title: 'a.html',
      // chunks: ['a']
      excludeChunks: ['b','c']
    }),
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'b.html',
      inject: false,
      title: 'b.html',
      // chunks: ['b']
      excludeChunks: ['a','c']
    }),
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'c.html',
      inject: false,
      title: 'c.html',
      // chunks: ['c']
      excludeChunks: ['a','b']
    })
  ]
}