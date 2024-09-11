let firstNumber = 0;
let secondNumber = 0;
let userInput = "";
const container = document.querySelector(".container");

//query buttons, and the input field and add eventListeners
//add the value of the button pressed to the input, so it acts as a display

//attach eventListeners to buttons. query input field and add button value to input
// add second number to second variable

//key event for = - + etc? check docs

const input = document.querySelector("input");
for (const element of document.querySelectorAll(".number")) {
    element.addEventListener("mousedown", () => {
        input.value += element.textContent;
        userInput = input.value;
    });
}

//clear display button
const clearDisplay = document.querySelector("#clear");
clearDisplay.addEventListener("mousedown", () => {
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
