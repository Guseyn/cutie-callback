const { Assertion } = require('@cuties/assert')
const { IsFunction } = require('@cuties/is')
const { CallbackWithErrorAndResult } = require('./../index')

new Assertion(
  new IsFunction(
    new CallbackWithErrorAndResult((err, result) => {
      if (err) throw err
    }, null, 'result')
  )
).call()
