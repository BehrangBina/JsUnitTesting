# README

## Installation

>npm install --save-dev jasmine

### To initialize a project for Jasmine

>node node_modules/jasmine/bin/jasmine init

### Set jasmine as your test script in your package.json

>"scripts": { "test": "jasmine" }

### First Test

* add index.html

* add jasmine js

* add css (test without the css to see)

>
    <link rel="stylesheet" href="../node_modules/jasmine-core/lib/jasmine-core/jasmine.css"><script type="text/javascript" src="../node_modules/jasmine-core/lib/jasmine-core/jasmine.js"></script>
    <script type="text/javascript" src="../node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js"></script>
    <script type="text/javascript" src="../node_modules/jasmine-core/lib/jasmine-core/boot.js"></script>

## Console

* Right Click > inspect

For the Testing calculator, in the console:

> var calc = new Calculator();
> calc.add(300);

## Color designer

[Color Recommendation](http://paletton.com/#uid=13s0u0karjQ4CtD7FodcpeHiScn)

## Running and Testing

* Need to have html file
* Test suit in a js file [name].spec.js
* We can use describe which the first string is the title is suite name
* Each test case is defined under suite
* Test cases start with 'it'
* The frist string after the 'it' keyword is the name of the test case in the suite

## Disabling a Test Case

For Disabling a testcase temporary for instane modifying a function or TDD development we can use xit
> xit('Should be updated to do complicated math calculations', function () {....});

## Disabling Suite

using xdescribe

## Matchers [Matchers](https://jasmine.github.io/api/3.3/matchers.html)

* Functions that compares expected to actual
* If comparing two object using == will be efalse (like array,date) because compares by reference
* Use toEqual for object > Expect(calc1).toEqual(calc2)
* === called strict comparioson compares value and type
* Negative matcher use not:   expect('exp').not.toBe('nextExp');

### Some Useful matchers

* toBeDefined()
* toBeUndefined()
* toBeNull()
* toContain(value) i.e. string and array
* toBeNaN()
* toMatch(expected regular expression

### Create Custom Matcher

* Create a cutom matcher in a javascript file
* Add a js to the test file script after jasmine definition
* Register the the custom matcher in the test case i.e. jasmine.addMatchers(customMatcher)
* 3rd party matcher can be searched and added the same way (search for jasmine matcher)

## Organising Specs

1. Use Describe to create suites
2. Create spec file same that matches the js file
    * Calculator.js > Calculator.spec.js
3. Create the folder structure
4. We can use describe to orgnize method name's tests

### Suite Management

1. beforeEach()
    * Executed before each spec (it) in the suite (describe) in which its called
2. beforeAll()
    * Executed __once__ before all the specs (it) in the suite (describe) in which its called
3. teardown()
    * Clears steps for your specs
    * It Executes after spects are run
4. afterEach()
    * Executed __after all__ the specs (it) in the suite in which it is called
5. afterAll()
    * Executed __once__ after all the specs (it) in the suite (describe) it is called

## SPYS (Removing Dependencies) AKA Test Doubes

In cases like calculator there are methods such as Add, Subtract, Multiply, Divide and updateResult
So, thy are dependency. The best test case for spys (test double)

### Test Doubles

An Object that can stand in place of a real object in a test. Similar to Stunt Double who stands in place of an actor
Methods can contain of

* Test Doubles in Jasmine called Spy
* Spy Can stub any function and tracks call to it and all arguments
* Spy Exist only in describe or it is defined and removed after each spec

#### Spy Matchers

* toHaveBeenCalled()
* toHaveBeenCalledWith()
* toHaveBeenCalledTimes()

### Testing The actual function

We usually don't test the actual function. However if we need to do so we can use
> .and.callTrough

### Testing a function with different implementation

A spy, when configured to fake a return value
In case required to test the function with different implementation we use __callFake()__

The same thing can be done by returnValue
> const spy = spyOn(Calculator.prototype, 'multiply').and.returnValue('It Works')

* .and.returnValues >  Value changes depending on the number of calls
  * i.e. add method: it calls once but does not matter what returns, but when we call it second time with add method