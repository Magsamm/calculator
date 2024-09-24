const array = [];
let result = 0;
let saveOperands = "";
let finalResult = 0;
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
            saveOperands.length >= 2
        ) {
            input.value = "";
        } else {
            array.push(Number(input.value));
            input.value = "";
        }
    });
}
//get button.id
//add textContent to saveOperands to keep track of operators
//don't accept more inputs if saveOperands >= 2
const buttons = document.querySelectorAll(".operator");
let buttonId = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonId = button.id;
        if (button.id === "clear" || saveOperands.length >= 2 || button.id === "equals") {
            saveOperands = "";
        } else {
            saveOperands += button.textContent;
        }
    });
});
//if saveOperands > 2, and saveOperands[1] === "+"?
//console.log((finalResult += add()));
//splice finalResult into the array at position[0]
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

for (let element of document.querySelectorAll("#equals")) {
    element.addEventListener("mousedown", () => {
        if (array.length > 0) {
            operate(array[0], array[1]);
            console.log(saveOperands);
        }
    });
}

//clear display button
document.querySelector("#clear").addEventListener("mousedown", () => {
    //reset array and empty input.value
    input.value = "";
    saveOperands = "";
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
        return (input.value = "Can't divide by 0!");
    }
    return result.toFixed(2);
}
