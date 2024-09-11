let firstNumber = 0;
let secondNumber = 0;
let userInput = "";
const container = document.querySelector(".container");
const input = document.querySelector("input");

//query buttons, and the input field and add eventListeners
//add the value of the button pressed to the input, so it acts as a display

//convert strings to Number()
//need to add input value to the first variable. and when the user presses =
// add second number to second variable

//when pressing clear, set input to "";

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("mousedown", btnAction);
});
function btnAction(event) {
    const btn = event.target;
    input.value = "";
    userInput += btn.textContent;
    input.value += userInput;
}

//clear button
const btn = document.querySelector("#clear");
btn.addEventListener("click", () => {
    input.value = "";
});

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numOne / numTwo;
}
