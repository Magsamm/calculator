let userInput = "";
let firstNumber = "";
let secondNumber = "";
let result = 0;
const array = [];
let arrayOfNumbers = [];

//empty arr to store the two numbers
//try adding numbers to the arr instead of two variables

//set arr max length to 2
const container = document.querySelector(".container");
//populate display
const input = document.querySelector("input");
for (const element of document.querySelectorAll(".number")) {
    element.addEventListener("mousedown", () => {
        input.value += element.textContent;
    });
}

//query .operator class
//adds value of input and pushes it to an array when an operator is pressed
for (let element of document.querySelectorAll(".operator")) {
    element.addEventListener("mousedown", () => {
        //push input.value to array
        //clear input value to make it ready for the next number
        array.push(Number(input.value));
        input.value = "";
        console.log(array);
    });
}
//call function with numOne,NumTwo as args
//try calling function with values from array as args to see if it works
function operate(numOne, numTwo) {
    //take two numbers and call one of the functions on them
}

//clear display button
document.querySelector("#clear").addEventListener("mousedown", () => {
    //reset array and empty input.value
    input.value = "";
    array.length = 0;
});

//if equals button pressed, call appropriate function on number with operate
document.querySelector("#equals").addEventListener("mousedown", () => {});

function add() {
    let numOne = array[0];
    let numTwo = array[1];
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
