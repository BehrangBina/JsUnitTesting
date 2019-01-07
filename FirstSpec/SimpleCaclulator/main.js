function calculate(inputValue) {
    const expressions = /\+|\-|\/|\*/;
    // | (PIPE) means or and \ for excape charcter - js wraps in / so one at beginning and one at the end

    const numbers = inputValue.split(expressions);
    const numberA = parseInt(numbers[0]);
    const numberB = parseInt(numbers[1]);
    const operation = inputValue.match(expressions);
    const calc = new Calculator();
    calc.add(numberA);
    let result;
    switch (operation[0]) {
        case '+':
            result = calc.add(numberB);
            break;
        case '-':
            result = calc.subtract(numberB);
            break;
        case '*':
            result = calc.multiply(numberB);
            break;
        case '/':
            result = calc.divide(numberB);
            break;
    }
    updateResult( result);

}
function updateResult(result){
    const element = document.getElementById('result');
    if(element){
        element.innerText=result;
    }
}