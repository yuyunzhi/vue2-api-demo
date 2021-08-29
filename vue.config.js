const publicPath = process.env.NODE_ENV !== 'development' ? '././' : ''

module.exports = {
  publicPath,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_DOMAIN,
        changeOrigin: true
      }
    }
  }
}
