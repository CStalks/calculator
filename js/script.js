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

function display(){
    const buttons = document.querySelectorAll('button');
    const display = document.querySelector('.display');

    let input = '';
    let operator = ''
    const exprArr = [];
    let result = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {

        
            if(button.textContent === '*' || button.textContent === '-' ||
               button.textContent === '+' || button.textContent === '/'){

                operator += button.textContent; 

                if(input && operator){

                    exprArr.push(input);
                    exprArr.push(operator);
                    console.log("operator begin read: ", operator);
                    console.log("array length ", exprArr.length);

                    input = '';
                    operator = '';
                }
                    console.log(exprArr);
            } else {
                input += button.textContent;
                display.textContent = input;
                console.log("input: ", input);
            }

            if(exprArr.length === 3){
                console.log("I have 3 elements");
            }
            
        });
    }); 
   
}

function main(){
    display();
}
main();