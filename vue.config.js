const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_PROXY,
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/assets/styles/_variable.scss";
          @import "~element-ui/packages/theme-chalk/src/common/var";
        `
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('api', resolve('./src/api')).set('utils', resolve('./src/utils'))
  }
}
