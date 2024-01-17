let input = '';
let operand = '';
let exprArr = [];
let result = 0;
let negativeSymbol  = '';
let prevTmpVal = '';
let tmpOperand = '';

const buttons = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.op');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.result');
const percent = document.querySelector('.percent');
const negativeSign = document.querySelector('.negative-sign');
const decimal = document.querySelector('.decimal');

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
        operand = operator.textContent;
        tmpOperand = operand;

        if(input){
            exprArr.push(+input);
            prevTmpVal = input;
            input = '';
        }

        if(exprArr.length === 3){
            result = operate(+exprArr[0], exprArr[1], +exprArr[2]);
            display.textContent = result;
            exprArr = [result];
        }
    });
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(operand){ 
            exprArr.push(operand);
            operand = '';
        }

        //add operand to exprArr only if theres already a number entered
        if(input.length < 9){
            if(input === '0') input = '';

            input += button.textContent;
            display.textContent = input;
        }
    });
});
  
//clears display and reset everything when clicked
clear.addEventListener('click', () => {
    clear.textContent = 'AC';
    display.textContent = result = 0;
    input = operand = '';
    exprArr = [];
    quotient = 0;
    prevTmpVal = '';
    tmpOperand = '';
});

negativeSign.addEventListener('click', () => {
    //fix the default display 0 bug
    if(input == 0){

    }
    if(input < 0){
        input = input.slice(1);
        display.textContent = input;
    } else {
        let strLen = input.length + 1;
        input = input.padStart(strLen, '-');
        display.textContent = input;
    }
});

percent.addEventListener('click', () => {
    input = input / 100;
    if(input.length <= 10){
        display.textContent = input;
    } else {
        display.textContent = +input.toExponential(8);
    }
    

});
 
equal.addEventListener('click', () => {
    //executes using prev value and operator when the equal button is being 
    //clicked any number of times 
    if(exprArr.length === 1){
        if(operand){
            //updates the tmp values only if we change to a new operand 
            tmpOperand = operand;
            prevTmpVal = exprArr[0];
            operand = '';
        }
        if(tmpOperand && prevTmpVal){
            exprArr.push(tmpOperand);
            exprArr.push(+prevTmpVal);  

            result = operate(+exprArr[0], exprArr[1], +exprArr[2]);
            display.textContent = result;
            exprArr = [result];
        }
    }

    //add operand to exprArr only if there is some number in the exprArr
    if(operand){  
        exprArr.push(operand);
        operand = '';
    }

    //when there is a number inside the input store it in array and make it empty
    if(input){
        exprArr.push(+input);
        prevTmpVal = input;
        input = '';
    }

    if(typeof exprArr[0] === 'string' && typeof exprArr[1] === 'number'){
        if(exprArr[0] === '+'){
            display.textContent = prevTmpVal;
            exprArr[1] = exprArr[0];
            exprArr[0] = +prevTmpVal;
            return;
        } else if(exprArr[0] === '-'){
            exprArr[2] = +(exprArr[0] + exprArr[1]);
            exprArr[1] = exprArr[0];
            exprArr[0] = 0;
        }
    }
   
    if(exprArr.length == 2){
        result = operate(+exprArr[0], exprArr[1], +prevTmpVal);
        display.textContent = result;
        exprArr = [result];
    }

    //execute when user input two numbers and one operator
    if(exprArr.length == 3){
        result = operate(+exprArr[0], exprArr[1], +prevTmpVal);
        display.textContent = result;
        exprArr = [result];
    }
});

decimal.addEventListener('click', () => {
    if(!input.includes('.')){
        if(input === '') input += 0;
        input += decimal.textContent;
        display.textContent = input;
    }
});