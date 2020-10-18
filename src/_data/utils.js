const fg = require('fast-glob')
const config = require(`${process.cwd()}/config.js`)

module.exports = {
  assetPath: pattern => {
    if (pattern.startsWith('/')) {
      pattern.slice(1)
    }

    if (process.env.NODE_ENV === 'development' && pattern.includes('main*')) {
      pattern = pattern.replace('main*', 'main')
      return `/${config.dir.assets}/${pattern}`
    }

    const result = fg.sync(`${process.cwd()}/${config.dir.dist}/${config.dir.assets}/${pattern}`)
    if (result.length > 0) {
      return result[0].split(config.dir.dist)[1]
    }
  }
}
