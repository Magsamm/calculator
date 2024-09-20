const array = [];
let result = 0;
let clicks = 0;
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
        if (input.value == 0 || isNaN(input.value)) {
            input.value = "";
        } else {
            array.push(Number(input.value));
            input.value = "";
        }
    });
}

//add button.id to buttonId to use inside operate()
//use click instead of mousedown here bc it doesn't add the value properly otherwise.
const buttons = document.querySelectorAll(".operator");
let buttonId = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonId = button.id;
    });
});
//if clicks > 1, prioritize the next buttonId?
//maybe refactor to use switch block?
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

//if operator is pressed a second time (BEFORE equals), run operate() on the first pair, move that value to the start of the array, then run operate on the next number, with the result from the previous operation as the first array[0] in the calculations
//in a loop
//if next operator is pressed, run evaluate on the first pair,
//display results after pressing equals, as long as array.length > 0
for (let element of document.querySelectorAll("#equals")) {
    element.addEventListener("mousedown", () => {
        if (array.length >= 2) {
            operate(array[0], array[1]);
            //store result of calculation in global var
            //add to start of array?
            //empty array first?
            //push the first 2 numbers out of the array?
            //array.push(Number(array.unshift(Number(result))));
            console.log(array);
        }
        //else if (array.length > 2) {}
    });
}

//clear display button
document.querySelector("#clear").addEventListener("mousedown", () => {
    //reset array and empty input.value
    input.value = "";
    array.length = 0;
});

function add() {
    return array[0] + array[1];
}

function subtract() {
    return array[0] - array[1];
}

function multiply() {
    return array[0] * array[1];
}

function divide() {
    let divisionVariable = 0;
    divisionVariable = array[0] / array[1];
    if (isNaN(divisionVariable)) {
        return "Cannot divide by 0.";
    } else {
        return divisionVariable;
    }
}
