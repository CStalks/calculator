let input = '';
let operand = '';
let exprArr = [];
let result = 0;

const buttons = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.op');

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
            console.log("checking length: ");
            result = operate(+exprArr[0], exprArr[1], +exprArr[2]);
            display.textContent = result;
            exprArr = [result];
            console.log("My result", result);
            console.log(exprArr);
        }
    });
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(operand){
            exprArr.push(operand);
            operand = '';
        }
        input += button.textContent;
        display.textContent = input;
        console.log(input);
    });
});
  

//work on the AC button by toggling it(check if toggling will work)

//work on the +/- (it makes a number negative)

//work on the %(google how it works)

//check the equal symbol

//check how to make the decimal work
 
   