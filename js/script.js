let input = '0';
let operand = '';
let exprArr = [];
let result = 0;
let negativeSymbol  = '';
let preVal = '';
let prevOp = '';

const buttons = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.op');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.result');
const percent = document.querySelector('.percent');
const negativeSign = document.querySelector('.negative-sign');

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
        prevOp = operand;

        if(input){
            exprArr.push(+input);
            preVal = input;
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
    preVal = '';
    prevOp = '';
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
    display.textContent = input;
});
 
equal.addEventListener('click', () => {

    if(typeof exprArr[0] === 'string'){
        if(preVal){
            console.log(exprArr);
            exprArr[1] = exprArr[0];
            exprArr[0] = +preVal;
            console.log(exprArr)
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
        preVal = input;
        input = '';
    }

    //executes using prev value and operator when the equal button is being 
    //clicked any number of times 
    if(exprArr.length == 1){
        if(prevOp && preVal){
            exprArr.push(prevOp);
            exprArr.push(+preVal);  

            result = operate(+exprArr[0], exprArr[1], +exprArr[2]);
            display.textContent = result;
            exprArr = [result];
        }
    }
   
    if(exprArr.length == 2){
        result = operate(+exprArr[0], exprArr[1], +preVal);
        display.textContent = result;
        exprArr = [result];
    }

   //execute when user input two numbers and one operator
    if(exprArr.length == 3){
        result = operate(+exprArr[0], exprArr[1], +preVal);
        display.textContent = result;
        exprArr = [result];
    }
});