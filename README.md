# webpack-base
webpack基础配置


1、入口entry,出口output
2、htmlWebpackPlugin
  a、指定输入模板
  b、指定注入的位置
  c、指定输出的标题，输出位置
  d、指定的chunks，排除chunks
3、多入口，多输出时，对应的文件输出到对应的目标文件
4、loaders（js,css,html,image）
  a、babel-loader  
    预处理器，转换es6
  b、style-loader,css-loader,postcss-loader,less-loader
    css-loader:使得webpack可以处理.css文件
    style-loader: 新建一个style标签将css-loader处理完的文件插入到页面中
    postcss-loader:  后处理器（处理之后，使用之前的一个处理器，例如：autoprefixer:  postcss的插件）
    'style-loader!css-loader!postcss-loader':loader可以串联，从右向左执行，先postcss-loader,css-loader,styles-loader
    importLoaders=1: .css文件import时添加前缀
  c、html-loader
    html以字符串的形式插入模板
  d、file-loader,url-loader,image-webpack-loader
    file-loader: 导入图片（推荐url-loader）
    url-loader: 可以指定limit限制的图片可以打包到文件中，不符合条件的作为图片资源去请求
    image-webpack-loader: 压缩图片


    注：参照1.0版本
