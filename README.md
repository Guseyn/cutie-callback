# cutie-callback

[![NPM Version](https://img.shields.io/npm/v/@cuties/callback.svg)](https://npmjs.org/package/@cuties/callback)
[![Build Status](https://travis-ci.org/Guseyn/cutie-callback.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-callback)
[![codecov](https://codecov.io/gh/Guseyn/cutie-callback/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-callback)

[Cutie](https://github.com/Guseyn/cutie) extension for work with a </b>callback</b> as an async object. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).


## Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-callback/tree/master/test).

## Install

`npm install @cuties/callback`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

```js
const {
  // Needed async objects here from the table below
} = require('@cuties/callback')
```

| Async Object | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `CallbackWithErrorAndResult` | `callback(error, result)` | `callback, error, result` | `callback` |
| `CallbackWithResult` | `callback(result)` | `callback, result` | `callback` |
