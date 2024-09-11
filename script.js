let firstNumber = 0;
let secondNumber = 0;
let userInput = "";
const container = document.querySelector(".container");

//query buttons, and the input field and add eventListeners
//add the value of the button pressed to the input, so it acts as a display

//attach eventListeners to buttons. query input field and add button value to input
// add second number to second variable
const input = document.querySelector("input");
const queryButtons = document.querySelectorAll(".number");
for (const element of queryButtons) {
    element.addEventListener("mousedown", () => {
        userInput = element.textContent;
        input.value += userInput;
    });
}

//clear display button
const clearDisplay = document.querySelector("#clear");
clearDisplay.addEventListener("mousedown", () => {
    input.value = "";
});
input.value = "";

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
