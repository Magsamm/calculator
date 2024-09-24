const array = [];
let result = 0;
let operandCounter = 2;
let saveOperands = "";
const container = document.querySelector(".container");
//populate display
const input = document.querySelector("input");
for (const element of document.querySelectorAll(".number")) {
    element.addEventListener("mousedown", () => {
        input.value += element.textContent;
    });
}

//adds number from input.value to array as a Number for evaluation when pressing an operator button.
//resets input.value for next input.
for (let element of document.querySelectorAll(".operator")) {
    element.addEventListener("mousedown", () => {
        if (
            isNaN(input.value) === true ||
            input.value === 0 ||
            input.value === "" ||
            saveOperands.length > 2
        ) {
            input.value = "";
        } else {
            array.push(Number(input.value));

            input.value = "";
        }
    });
}
//get button.id
//increase or reset operandCounter
const buttons = document.querySelectorAll(".operator");
let buttonId = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonId = button.id;
        if (button.id === "clear" || saveOperands.length >= 2) {
            input.value = "";
        } else {
            saveOperands += button.textContent;
            console.log(saveOperands);
        }
    });
});
//if clicks > 1, prioritize the next buttonId?

function operate(numOne, numTwo) {
    if (buttonId === "plus") {
        input.value = add(numOne, numTwo);
    } else if (buttonId === "minus") {
        input.value = subtract(numOne, numTwo);
    } else if (buttonId === "multiply") {
        input.value = multiply(numOne, numTwo);
    } else if (buttonId === "divide") {
        input.value = divide(numOne, numTwo);
    }
}

//focus on making sure you can only do one "operation" at a time.
// so for example, you can only press
//of array === 2, operate with the current operator
//if user enters another operator
//use result in the next calculation, with the next operator
//dont allow a new operator until the current calculation is done?
// For example, when both operands are full, make it evaluate on next operator input, and then just bring the answer and operator over to next set

for (let element of document.querySelectorAll("#equals")) {
    element.addEventListener("mousedown", () => {
        if (array.length > 0) {
            let final = 0;
            operate(array[0], array[1]);
            console.log((final += add()));
        }
    });
}

//clear display button
document.querySelector("#clear").addEventListener("mousedown", () => {
    //reset array and empty input.value
    input.value = "";
    array.length = 0;
});
//math functions to perform calculations
function add() {
    let result = array[0] + array[1];
    return result;
}

function subtract() {
    let result = array[0] - array[1];
    return result;
}

function multiply() {
    let result = array[0] * array[1];
    return result;
}
//handles 0 division, and rounds number to max 2 decimal places.
function divide() {
    let result = array[0] / array[1];
    if (result === Infinity || isNaN(result) === true) {
        return (input.value = "cannot divide by 0");
    }
    return result.toFixed(2);
}
