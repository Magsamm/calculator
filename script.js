let firstNumber = 0;
let secondNumber = 0;
let userInput = "";

const container = document.querySelector(".container");

//query buttons, and the input field and add eventListeners
//add the value of the button pressed to the input, so it acts as a display

//attach eventListeners to buttons. query input field and add button value to input
// add second number to second variable

//key event for = - + etc? check docs
// when equals is pressed. store first number in firstNumber, call clear display, make ready for //secondNumber

//once equals has been clicked, remove eventListeners as per //eloquentjavascript?
//https://eloquentjavascript.net/15_event.html#c-nMrNUG0bzK

//populate display
const input = document.querySelector("input");
for (const element of document.querySelectorAll(".number")) {
    element.addEventListener("mousedown", () => {
        input.value += element.textContent;
        //add input to global var
        userInput = input.value;
        //add userInput to firstNumber
        firstNumber = userInput;
        console.log(firstNumber);
        //empty userInput afterwards
        userInput = "";
    });
}
//clear display button
const clearDisplay = document.querySelector("#clear");
clearDisplay.addEventListener("mousedown", () => {
    input.value = "";
});

//ADD backspace button in addition to clear all?

//when user presses +-*/, call add/subtract/divide/multiply
// store the first number, prepare for the 2nd number
//display results
// make the function call the appropriate function on the numbers
//attach event listeners to this one? one for each button, that calls the appropriate function?
//check out array methods? maybe need to use slice, splice etc
//go back to objects lesson?

//use an arr to store the two numbers, and map?

function operate(numOne, numTwo) {
    //if operator button pressed/aka +- etc, store first number in var
    //wait for user to enter second number, then call a function on them
    //empty arr to store the two numbers
    const arr = [];
    if (document.querySelector("#plus")) {
    }
}

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
