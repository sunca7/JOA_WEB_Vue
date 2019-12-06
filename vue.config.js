module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      scss: {
        prependData: `@import "@/assets/styles/Variables.scss";`
      }
    }
  }
}
