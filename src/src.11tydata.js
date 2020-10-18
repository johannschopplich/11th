const fs = require('fs')
const config = require('../config.js')

module.exports = {
  lang: config.defaultLang || 'en',

  eleventyComputed: {
    layout: ({ page, layout }) => {
      if (layout) return layout

      // Check if part of a collection folder (root folder without a `_` prefix)
      const folderRegex = new RegExp(`^./${config.dir.src}/([^_][^/]+)/.*$`)
      const matches = page.inputPath.match(folderRegex)

      if (matches) {
        const folder = matches[1]
        if (fs.existsSync(`${config.dir.src}/_layouts/${folder}.njk`)) {
          return folder
        }
      }

      return 'default'
    },

    permalink: ({ page, permalink }) => {
      if (permalink) return permalink

      if (config.permalinkFolders) {
        return page.filePathStem.replace(/\/index$/, '') + '/index.html'
      } else {
        return `${page.filePathStem}.html`
      }
    }
  }
}
