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
    let operator = '';
    let result = 0;
    let exprArr = []

    buttons.forEach(button => {
        button.addEventListener('click', () => {
               
            //check how to not show the operators in the display
            input += button.textContent;
            display.textContent = input;
            //clears the display when AC button is clicked
            if(button.textContent === 'AC'){
                //check how to change the AC button to C when 
                //AC is clicked
                display.textContent = 0;
                input = operator = '';
                exprArr = [];
            }

            if(button.textContent === '+' ||
               button.textContent === '*' ||
               button.textContent === '/' ||
               button.textContent === '-' ||
               button.textContent === '='){

                if(button.textContent === '='){
                    display.textContent = result
                }

                operator = input.split('').pop();
                input = input.slice(0, -1);
                exprArr.push(+input);
                input = '';
            }

            if(button.textContent === '='){
                console.log("input here: ", result);
            }

            result += operate(exprArr[0], exprArr[1], exprArr[2]);


            //shows the result 
            if(button.textContent === '='){
                display.textContent = result;

            }
        });
    });
        


    //let user enter first number, an operator, and second number
    //evaluate this result and store in a result variable if the user enter another operator
    //repeat 1 and 2 and if user enters equal symbol append the calculations to result to  show the final result
    
}

function main(){
    display();
}

main();