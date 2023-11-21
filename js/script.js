let input = '';
let operand = '';
let exprArr = [];
let result = 0;

const buttons = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.op');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.result');

function add(num1,num2){
    return num1 + num2;
}

function substract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function operate(num1, operator, num2){
    switch(operator){
        case '+': return add(num1,num2);       
        case '-': return substract(num1,num2); 
        case '*': return multiply(num1,num2);  
        case '/': return divide(num1,num2);   
    }
}

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if(input){
            exprArr.push(input);
            input = '';
        }
        operand = operator.textContent;

        if(exprArr.length === 3){
            result = operate(+exprArr[0], exprArr[1], +exprArr[2]);
            display.textContent = result;
            exprArr = [result];
        }
    });
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        clear.textContent = 'C';
        if(operand){
            exprArr.push(operand);
            operand = '';
        }
        input += button.textContent;
        display.textContent = input;
    });
});
  

//clears display and reset everything when clicked
clear.addEventListener('click', () => {
    clear.textContent = 'AC';
    display.textContent = result = 0;
    input = operand = '';
    exprArr = [];
});

//work on the +/- (it makes a number negative)

//work on the %(google how it works)

//check the equal symbol
//equal.addEventListener('click', () => {
// display.textContent = result;
//});

//check how to make the decimal work
 
   