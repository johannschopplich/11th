const path = require('path');
const config = require('./config.js')

module.exports = function (eleventyConfig) {
  // Transforms
  if (process.env.NODE_ENV === 'production') {
    const htmlMinTransform = require(path.join(__dirname, config.dir.src, '_11ty/transforms/html-min.js'))
    eleventyConfig.addTransform('htmlmin', htmlMinTransform)
  }

  // Eleventy configuration
  eleventyConfig
    .addPassthroughCopy(path.join(config.dir.src, '**/*.{jpg,jpeg,png,pdf}'))
    .addPassthroughCopy(path.join(config.dir.assets, 'img'))

  eleventyConfig.addWatchTarget(path.join(config.dir.assets, 'js'))
  eleventyConfig.addWatchTarget(path.join(config.dir.assets, 'sass'))

  eleventyConfig.setDataDeepMerge(true)
  eleventyConfig.setQuietMode(true)

  return {
    dir: {
      input: config.dir.src,
      output: config.dir.dist,
      includes: '_includes',
      layouts: '_layouts'
    }
  }
}
