const numberContainer = document.querySelector('.numberContainer');
const clearContainer = document.querySelector('.clearContainer');
const operatorContainer = document.querySelector('.operatorContainer');
const displayText = document.querySelector('.displayText');

let currentNumber = "";
let previousNumber = "";
let clickedNumber = "";
let operator = "";

numberContainer.addEventListener('click', function(e) {
    
    if (/^\d+$/.test(e.target.textContent)) {
    clickedNumber = e.target.textContent * 1;
    console.log(clickedNumber);
    if (currentNumber > 999999999) {clickedNumber =""}; 
    currentNumber = currentNumber + clickedNumber;
    displayText.textContent = currentNumber;}
});


clearContainer.addEventListener('click', function(e){
    if (e.target.textContent == 'clear'){
    reset()};
})



function reset(){
currentNumber = "";
previousNumber = "";
clickedNumber = "";
operator = "";
displayText.textContent = currentNumber;
}