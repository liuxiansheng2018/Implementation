const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/styles/test.less")]
    }
  },
  lintOnSave: true,
  devServer: {
    overlay: {
      warnings: true,
      error: true
    }
  }
};