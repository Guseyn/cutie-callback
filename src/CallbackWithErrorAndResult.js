const { AsyncObject } = require('@cuties/cutie')

class CallbackWithErrorAndResult extends AsyncObject {
  constructor (callback, error, result) {
    super(callback, error, result)
  }

  syncCall () {
    return (callback, error, result) => {
      callback(error, result)
      return callback
    }
  }
}

module.exports = CallbackWithErrorAndResult
