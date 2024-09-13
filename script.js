let firstNumber = 0;
let secondNumber = 0;
let userInput = "";
//empty arr to store the two numbers
//try adding numbers to the arr instead of two variables
const arr = [];

const container = document.querySelector(".container");

//populate display
const input = document.querySelector("input");
for (const element of document.querySelectorAll(".number")) {
    element.addEventListener("mousedown", () => {
        input.value += element.textContent;
        firstNumber = input.value;
        console.log(firstNumber);

        //add input to global var
        //add userInput to firstNumber
        //https://www.w3schools.com/jsref/jsref_push.asp#:~:text=The%20push()%20method%20adds,method%20returns%20the%20new%20length.
        //push variables to array

        //split string userInput, then add them to var one and two?
    });
}

// if (
//     document.querySelector(".operator", "#plus").addEventListener("mousedown", () => {
//         //clear input, add second number to secondNumber
//     })
// );

//make it work for plus, then see if you cant make it work for all
const operators = document.querySelector(".operator");
for (const element of document.querySelectorAll("#plus")) {
    element.addEventListener("mousedown", () => {
        //slice out the +?
        input.value += element.textContent;
        secondNumber = input.value;
    });
}

//clear display button
document.querySelector("#clear").addEventListener("mousedown", () => {
    input.value = "";
});

//ADD backspace button in addition to clear all?
//check out array methods? maybe need to use slice, splice etc
//go back to objects lesson?

//use an arr to store the two numbers, and map?
//if operator pressed, clear input and wait for second number
//add userInput to secondNumber
//add class and ID to operators

//store first number
//when operator button pressed, clear input
//wait for second number
//press equals
//call one of the functions?

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
