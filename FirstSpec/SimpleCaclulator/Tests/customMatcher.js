const customMatcher = {
  toBeCalculator: function () {
    return {
      compare: function (actual) {
        const result = {
          pass: actual instanceof Calculator,
          message: ''
        }

        if (result.pass) {
          result.message = 'Expected ' + actual + ' not to be instance of calculator'
        } else {
          result.message = 'Expected ' + actual + ' To be instance of calculator'
        }
        return result
      }
    }
  }
}
