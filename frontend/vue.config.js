const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'my-build-directory' // ここで出力先ディレクトリを指定
})
