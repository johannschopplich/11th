const isString = string => (typeof string === 'string') || (string instanceof String)

module.exports = {
  truncate: (string, length = 140, suffix = '…') => {
    if (!isString) return false
    if (string.length <= length) return string

    const truncated = string.substring(0, length - suffix.length)
    if (string.charAt(length - suffix.length) === ' ') {
      return truncated + suffix
    }

    return truncated.substr(0, truncated.lastIndexOf(' ')) + suffix
  }
}
