function Calculator () {
  this.total = 0
}

Calculator.prototype.add = function (number) {
  var result = this.total += number
  return result
}
Calculator.prototype.subtract = function (number) {
  var result = this.total -= number
  return result
}
Calculator.prototype.multiply = function (number) {
  var result = this.total *= number
  return result
}
Calculator.prototype.divide = function (number) {
  if (number === 0) {
    throw new Error('Cannot Divide by Zero')
  }

  var result = this.total /= number
  return result
}

// define version property
Object.defineProperty(Calculator.prototype, 'version', {
  get: function () {
    const link = 'https://raw.githubusercontent.com/BehrangBina/JsUnitTesting/master/FirstSpec/SimpleCaclulator/version.json'
    return fetch(link)
      .then(function (result) {
        if (!result.ok) {
          debugger
          return Promise.reject(result)
        }
        return result.json()
      })
      .then(function (json) {
        //debugger
        return json.Version
      })
    // return '0.1'
  },
  enumerable: true,
  configurable: true
})
