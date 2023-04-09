const previousNumberText = document.querySelector('.previousNumberText');
const displayText = document.querySelector('.displayText');
const buttonContainer = document.querySelector('.buttonContainer');

let inputValue; //the current number the user is working on, this = undefined is used for inputvalue
let storedInput; //the storedinput number for use with new inputvalue
let chosenOperator; //the operator chosen by user
let equalsPressed = false;

buttonContainer.addEventListener('click', function(e){
    //number button handlers
    if (e.target.classList.contains('numberButton')) {
        if (inputValue === undefined) {
            inputValue = e.target.id * 1;
            displayText.textContent = inputValue;
     }
        else if (parseFloat(inputValue) > 0){
            inputValue = `${inputValue}${e.target.id}`;
            displayText.textContent = inputValue;
     }
        else if (parseFloat(inputValue) === 0) {
            inputValue = `${e.target.id}`;
            displayText.textContent = inputValue;
        }
    }
    //end number button handlers
 
    //operator button handlers
    if (e.target.classList.contains('operatorButton')) {
        if (equalsPressed === false){
        if ((inputValue !== undefined) && (storedInput === undefined)) {
            storedInput = inputValue *1;
            inputValue = undefined;
            chosenOperator = `${e.target.id}`;
            displayText.textContent = 0;
            previousNumberText.textContent = `${storedInput}     ${chosenOperator}`;
        }
        else if ((inputValue !== undefined) && (storedInput !== undefined)) {
            inputValue = operate(parseFloat(storedInput), chosenOperator, parseFloat(inputValue));
            chosenOperator = `${e.target.id}`;
            displayText.textContent = inputValue;
            storedInput = inputValue *1;
            inputValue = undefined;
            previousNumberText.textContent = `${storedInput}     ${chosenOperator}`;
        }}
        if (equalsPressed === true) {
            chosenOperator = `${e.target.id}`;
            displayText.textContent = inputValue;
            previousNumberText.textContent = `${storedInput}     ${chosenOperator}`;
            equalsPressed = false;
        }
    }
    //end operator button handlers

    //clear and back button handlers
    if (e.target.classList.contains('clearButton')) {
        if (e.target.id === "clear") {
            inputValue = undefined;
            storedInput = undefined;
            chosenOperator = undefined;
            displayText.textContent = 0;
            previousNumberText.textContent = 0;
        }
        else if (e.target.id === "back") {
            if (inputValue === undefined) {

            }
            else if (inputValue.length > 1) {
            inputValue = inputValue.substring(0,(inputValue.length -1));
            displayText.textContent = inputValue;
            }
            else if ((inputValue.length <= 1) && (inputValue !== undefined)) {
                inputValue = undefined;
                displayText.textContent = 0;
            }
        }
        
    }
    //end clear and back button handlers

    //equals button handler

    if (e.target.classList.contains('equalsButton')) {
        if ((inputValue !== undefined) && (storedInput === undefined)) {
                //nothing
        }
        else if ((inputValue !== undefined) && (storedInput !== undefined)) {
            inputValue = operate(parseFloat(storedInput), chosenOperator, parseFloat(inputValue));
            displayText.textContent = inputValue;
            storedInput = inputValue;
            inputValue = undefined;
            equalsPressed = true;
            previousNumberText.textContent = storedInput;
        }
    }

    //end equals button handler
    
    //chuck in a decimal handler

    if (e.target.classList.contains('decimalButton')) {
        if (inputValue === undefined) {
            inputValue = `${storedInput}${e.target.id}`
            displayText.textContent = inputValue;
            equalsPressed = true;
        }
        else if (inputValue.includes('.')) {
            //do nothing
        }
        
        else {
            inputValue = `${inputValue}${e.target.id}`
            displayText.textContent = inputValue;
            equalsPressed = true;
        }
    }
    //chuck out a decimal handler

});













//basic sum functions
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}

//operate function
function operate(num1, operator, num2){
    if (operator === "+") {
        return add(num1, num2);
    }
    else if (operator === "-") {
        return subtract(num1, num2)
    }
    else if (operator === "/") {
        return divide(num1, num2)
    }
    else if (operator === "*") {
        return multiply(num1, num2);
    }
    else;
}


