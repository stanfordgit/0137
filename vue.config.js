module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/utils/variables.scss";'
      }
    }
  },
  transpileDependencies: true,
};
