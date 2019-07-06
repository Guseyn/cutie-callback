const { AsyncObject } = require('@cuties/cutie')

class CallbackWithResult extends AsyncObject {
  constructor (callback, result) {
    super(callback, result)
  }

  syncCall () {
    return (callback, result) => {
      callback(result)
      return callback
    }
  }
}

module.exports = CallbackWithResult
