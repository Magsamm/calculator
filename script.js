let userInput = "";
let firstNumber = "";
let secondNumber = "";
//empty arr to store the two numbers
//try adding numbers to the arr instead of two variables
let arr = [];

const container = document.querySelector(".container");
//populate display
const input = document.querySelector("input");
for (const element of document.querySelectorAll(".number")) {
    element.addEventListener("mousedown", () => {
        input.value += element.textContent;
    });
}

//when you click the operator button, add first whole number to firstNumber, wipe input
//then wait for second input?
//be input?
const operators = document.querySelector(".operator");
for (const element of document.querySelectorAll(".operator")) {
    element.addEventListener("mousedown", () => {});
}

//clear display button
document.querySelector("#clear").addEventListener("mousedown", () => {
    input.value = "";
    arr = [];
});

//if equals button pressed, call appropriate function on number with operate
document.querySelector("#equals").addEventListener("mousedown", () => {});
function operate(numOne, numTwo) {}

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
