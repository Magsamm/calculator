let array = [];
let result = 0;
let finalResult = 0;
let operatorClick = false;
const container = document.querySelector(".container");
//populate display
const input = document.querySelector("input");
for (const element of document.querySelectorAll(".number")) {
    element.addEventListener("mousedown", () => {
        input.value += element.textContent;
    });
}

//need to disable operators until a number button has been clicked again after the first one
//check if an operator has been clicked
//get button.id
const buttons = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
let buttonId = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (!(array.length < 1 || button.id === "clear" || button.id === "equals")) {
            buttonId = button.id;
        }
    });
});

for (let element of document.querySelectorAll(".operator")) {
    element.addEventListener("mousedown", () => {
        array.push(Number(input.value));
        operate();
        input.value = "";
    });
}
for (let element of document.querySelectorAll("#equals")) {
    element.addEventListener("mousedown", () => {
        if (array.length > 1) {
            //array.splice(2, 2, finalResult);
            input.value = Number(array[array.length - 1]);
            console.log(array);
        }
    });
}

//clear display button

document.querySelector("#clear").addEventListener("click", () => {
    //reset array and empty input.value, saveOperator.
    // we use the .forEach method to iterate through each button

    input.value = "";
    array.length = 0;
});

function operate(numOne, numTwo) {
    if (buttonId === "plus") {
        input.value = add(numOne, numTwo);
    } else if (buttonId === "minus") {
        input.value = subtract(numOne, numTwo);
    } else if (buttonId === "multiply") {
        input.value = multiply(numOne, numTwo);
    } else {
        input.value = divide(numOne, numTwo);
    }
}

//perform calculations with chosen operator.
function add() {
    let result = array[0] + array[1];
    array.push(result);
    return result;
}

function subtract() {
    let result = array[0] - array[1];
    array.push(result);
    return result;
}

function multiply() {
    let result = array[0] * array[1];
    array.push(result);
    return result;
}
//handles 0 division, and rounds number to max 2 decimal places.
function divide() {
    let result = array[0] / array[1];
    if (result === Infinity || isNaN(result) === true) {
        return (input.value = "Can't divide by 0!");
    }
    array.push(result);
    return Number(result).toFixed(2);
}
