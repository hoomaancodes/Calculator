let firstNumber = '';
let operator = '';
let secondNumber = '';

function appendNumber(num) {
    if (operator === '') {
        firstNumber += num;
        updateDisplay(firstNumber);
    } else {
        secondNumber += num;
        updateDisplay(secondNumber);
    }
}

function setOperator(op) {
    if (firstNumber !== '' && operator === '' && secondNumber === '') {
        operator = op;
        updateDisplay(firstNumber + ' ' + operator);
    }
}

function clearDisplay() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    updateDisplay('');
}

function calculateResult() {
    if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        let result;

        switch (operator) {
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                result = divide(num1, num2);
                break;
        }

        updateDisplay(result);

        firstNumber = result.toString();
        operator = '';
        secondNumber = '';
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        updateDisplay('Error: Cannot divide by zero');
        return undefined;
    }
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}
