const { Assertion } = require('@cuties/assert')
const { IsFunction } = require('@cuties/is')
const { CallbackWithResult } = require('./../index')

new Assertion(
  new IsFunction(
    new CallbackWithResult((result) => {}, 'result')
  )
).call()
