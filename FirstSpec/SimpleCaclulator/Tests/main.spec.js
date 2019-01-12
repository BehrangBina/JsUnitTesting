describe('main.js', function () {
  describe('Calculate', function () {
    // 1 - First dependancy is updateResult line 10
    it('Validate Expression When First Number Is Called', () => {
      spyOn(window, 'updateResult').and.stub()
      calculate('a+3')
      expect(window.updateResult).toHaveBeenCalled() //
    })
    it('Validate Expression When The Second Number Is Called', () => {
      spyOn(window, 'updateResult').and.stub()
      calculate('3+b')
      expect(window.updateResult).toHaveBeenCalled() //
    })
    it('Validate Expression When Operation Is Invalid', () => {
      spyOn(window, 'updateResult').and.stub()
      calculate('a#3')
      expect(window.updateResult).toHaveBeenCalled() //
      expect(window.updateResult).toHaveBeenCalledWith('Operation Is not Accpted')
      expect(window.updateResult).toHaveBeenCalledTimes(1)
    })
    it('Calls Add', () => {
      const spy = spyOn(Calculator.prototype, 'add')
      calculate('3+9')
      expect(spy).toHaveBeenCalledTimes(2)
      expect(spy).toHaveBeenCalledWith(3)
      expect(spy).toHaveBeenCalledWith(9)
    })
    it('Calls Multiply', () => {
      const spy = spyOn(Calculator.prototype, 'multiply')
      calculate('4*2')
      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).not.toHaveBeenCalledWith(4) // main.js line 14 the function called only by the second number
      expect(spy).toHaveBeenCalledWith(2)
    })
    it('Calls Subtract', () => {
      const spy = spyOn(Calculator.prototype, 'subtract')
      calculate('14-12')
      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith(12)
      expect(spy).not.toHaveBeenCalledWith(14)
    })
    it('Calls Divided', () => {
      const spy = spyOn(Calculator.prototype, 'divide')
      calculate('14/7')
      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith(7)
      expect(spy).not.toHaveBeenCalledWith(14)
    })
  })

  describe('updateResult()', () => {
    let element
    beforeAll(() => {
      const element = document.createElement('div')
      element.setAttribute('id', 'result')
      document.body.appendChild(element)
    })
    afterAll(function () {
      const element = document.getElementById('result')
      document.body.removeChild(element)
    })
    it('Should Add Element to DOM Result', () => {
      element = document.getElementById('result')
      updateResult('5')
      expect(element.innerText).toBe('5')
    })
  })

  describe('Other Jasmine Test Cases - Example', () => {
    it('updateResult (example of actual method call via callThrough)', () => {
      spyOn(window, 'updateResult')
      const spy = spyOn(Calculator.prototype, 'multiply').and.callThrough()
      calculate('5*12')
      expect(spy).toHaveBeenCalled()
      expect(window.updateResult).toHaveBeenCalledWith(60)
    })
    it('updateResult (example of with different implementation with call fake)', () => {
    // just an example -A spy, when configured to fake a return value
      spyOn(window, 'updateResult')
      const spy = spyOn(Calculator.prototype, 'multiply').and.callFake(function (number) {
        return 'It Works'
      })
      calculate('5*12')
      expect(spy).toHaveBeenCalled()
      expect(window.updateResult).toHaveBeenCalledWith('It Works')
    })
  })
})
