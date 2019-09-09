/*
 * @Discription: 
 * @Company: mixislink
 * @Author: Donie
 * @Date: 2019-09-06 11:19:37
 * @LastEditors: mixislink-Donie
 * @LastEditTime: 2019-09-06 14:51:42
 */
const path = require('path');

//一些默认的设置
const devServerPort = 9999
const webTitle = 'My Typescript Admin'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: devServerPort,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  pwa: {
    // name: name,
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   swSrc: path.resolve(__dirname, 'src/pwa/service-worker.js')
    // }
  },
  // 这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项。例如：
  pluginOptions:{
    // 可配置全局变量 换肤啥的好用   scss less 
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        //这个是加上自己的路径，
        //注意：试过不能使用别名路径
        // path.resolve(__dirname, "./src/assets/variable.less")
      ]
    }
  },
  chainWebpack(config) {
    // 在webpack的名称字段中提供应用程序的标题，以便
    // 可以在index.html中访问它以注入正确的标题。

    // Vue CLI 内部的 webpack 配置是通过 webpack-chain 维护的   详情见中文文档 https://segmentfault.com/a/1190000017547171?utm_source=tag-newest
    // 配置Map中 已存在的键的值
    config.set('name',webTitle)

    // 设置目录别名
    config.resolve.alias
    .set("@",resolve('src'))
    .set("components",resolve('src/components'))
    .set("views",resolve('src/views'))
    .set("assets",resolve('src/assets'))


    // 条件执行一个函数去继续配置
    config
    .when(process.env.NODE_ENV === 'development',
      config => config.devtool('cheap-source-map')
    )
    
    config
    .when(process.env.NODE_ENV !== 'development',
      config => {
        config
          .optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial' // only package third parties that are initially dependent
              },
              elementUI: {
                name: 'chunk-elementUI', // split elementUI into a single package
                priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
              },
              commons: {
                name: 'chunk-commons',
                test: path.resolve(__dirname, 'src/components'),
                minChunks: 3, //  minimum common number
                priority: 5,
                reuseExistingChunk: true
              }
            }
          })
        config.optimization.runtimeChunk('single')
      }
    )
  },
  // 这里做单独引入的一些插件
  configureWebpack:(config)=>{
  
    
  }
}