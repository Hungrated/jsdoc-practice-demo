/**
 * Time module.
 * @module src/time
 * @see module:src/time
 */

function getDate (time) {
  let curTime = null

  if (!time) {
    curTime = new Date()
  } else if (typeof time === 'object') {
    curTime = new Date(time)
  } else {
    return 'time: argument format error'
  }

  let convert = (digit) => {
    if (digit < 10) return '0' + digit
    else return digit.toString()
  }

  let year = curTime.getFullYear()
  let month = convert(curTime.getMonth() + 1)
  let day = convert(curTime.getDate())
  let hour = convert(curTime.getHours())
  let minute = convert(curTime.getMinutes())
  let second = convert(curTime.getSeconds())

  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' +
    second
}

module.exports = {

  /**
   * Get current time string.
   * @function getDate
   * @returns {String} timeString
   */
  now () {
    return getDate()
  },

  /**
   * Get a time string.
   * @function getDate
   * @param {Object} time - a Date object.
   * @returns {String} timeString
   */
  getTimeString (time) {
    return getDate(time)
  },
}
