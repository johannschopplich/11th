const { minify } = require('html-minifier')

module.exports = function (value, outputPath) {
  if (!outputPath.endsWith('.html')) return value

  return minify(value, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: false
  })
}
