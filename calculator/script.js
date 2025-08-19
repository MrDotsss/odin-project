const resultText = document.querySelector('#result');
const expressionText = document.querySelector('#expression');

const operatorButtons = document.querySelectorAll('.op');
const numberButtons = document.querySelectorAll(".num");

const dotButton = document.querySelector("#dot")
    .addEventListener('click', addDecimal);
const delButton = document.querySelector("#del")
    .addEventListener('click', delNumber);
const clearButton = document.querySelector("#clear")
    .addEventListener('click', clearResult);
const equalButton = document.querySelector("#equal")
    .addEventListener('click', evaluate);

let num1 = '';
let operator = '';
let num2 = '';
let result = '0';

numberButtons.forEach(element => {
    element.addEventListener('click', setNumber)
});

operatorButtons.forEach(element => {
    element.addEventListener('click', setOperator)
});

function addDecimal(event) {
    if (!operator && !num1.includes('.')) {
        if (num1.length > 0) num1 += '.';
        else num1 = '0.';

    } else if (operator && !num2.includes('.')) {
        if (num2.length > 0) num2 += '.';
        else num2 = '0.';
    }
    updateUI();
}

function delNumber(event) {
    if (num1 && !operator) {
        num1 = num1.slice(0, -1)
    } else if (operator) {
        num2 = num2.slice(0, -1)
    }
    updateUI();
}

function setNumber(event) {
    if (!operator) num1 += event.target.textContent;
    else num2 += event.target.textContent;

    updateUI();
}

function setOperator(event) {
    if (num1 && operator && num2) {
        evaluate();
        num1 = result;
        operator = event.target.textContent;
    } else if (num1 && !operator) {
        operator = event.target.textContent;
    }
    else if (result && !isNaN(Number(result))) {
        num1 = result;
        operator = event.target.textContent;
    }
    updateUI();
}

function clearResult(event) {
    num1 = '';
    operator = '';
    num2 = '';
    result = '0';

    expressionText.textContent = '';
    resultText.textContent = '0';
}

function evaluate() {
    if (!num1 || !operator || !num1) return;

    switch (operator) {
        case '+':
            result = sum()
            break;
        case '-':
            result = difference()
            break;
        case '÷':
            result = quotient()
            break;
        case 'x':
            result = product()
            break;
    }

    num1 = '';
    operator = '';
    num2 = '';
    result = result.toFixed(2);
    updateUI();
}

function sum() {
    return Number(num1) + Number(num2);
}

function difference() {
    return Number(num1) - Number(num2);
}

function product() {
    return Number(num1) * Number(num2);
}

function quotient() {
    if (Number(num2) === 0) return 'undefined';
    else return Number(num1) / Number(num2);
}

function updateUI() {
    expressionText.textContent = `${num1} ${operator} ${num2}`;
    resultText.textContent = result;
}