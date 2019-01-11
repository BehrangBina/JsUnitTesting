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
