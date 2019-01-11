
describe('calculator.js', function () {
  // <1.Refactoring and put a name for organising Testcases>
  describe('calculator Test Cases', function () {
    // ADD
    // <2. Refact 2>
    describe('Add()',function(){
        it('Should Add Numbers To Total', function () {
        const calc = new Calculator()
                calc.add(5)
                expect(calc.total).toBe(5)
                calc.add(22)
                calc.add(3)
                expect(calc.total).toBe(30)
            })
    }) // </w>
        //Subtract
        it('Should Subtract Numbers From Total', function () {
      const calc = new Calculator()
            calc.total = 30
            calc.subtract(5)
            expect(calc.total).toBe(25)
            calc.subtract(5)
            calc.subtract(18)
            expect(calc.total).toBe(2)
        })

        //Divide
        it('Should Divide Numbers To Total', function () {
      const calc = new Calculator()
            calc.total = 30
            calc.divide(5)
            expect(calc.total).toBe(6)
        })

        //Multiply
        it('Should Multiply Numbers To Total', function () {
      const calc = new Calculator()
            calc.total = 30
            calc.multiply(5)
            expect(calc.total).toBe(150)
        })

        //  other
        xit('Should be updated to do complicated math calculations', function () {

    })

    // <3.>
    describe('Extra and Edge Cases()',function(){
        it('Should Handle Division By Zero', () => {
        const cal = new Calculator()
        expect(function () { cal.divide(0) }).toThrow()
        expect(function () { cal.divide(0) }).toThrowError(Error)
        expect(function () { cal.divide(0) }).toThrowError(Error, 'Cannot Divide by Zero')
        })

        it('Returns Positive and Negative Total', function () {
        const calc = new Calculator()
        calc.total = 0
        calc.add(2)
        expect(calc.total).toBe(2)
        calc.subtract(-12)
                expect(calc.total).toMatch(/-?\d+/)
        expect(typeof (calc.total)).toMatch('number')
        })
        it('Total cannot be undefined or null', function () {
        const calc = new Calculator()
        calc.total = 0
        calc.add(2)
        expect(calc.total).toEqual(jasmine.anything())
        })
        it('Should be instance of calculator', function () {
        jasmine.addMatchers(customMatcher)
        const calc = new Calculator()
        expect(calc).toBeCalculator()
        })
    })//</3>
 })
// </1 end test case title>
})
