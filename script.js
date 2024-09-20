let firstNumber = "";
let secondNumber = "";
let result = [];
const array = [];

//empty arr to store the two numbers
//try adding numbers to the arr instead of two variables
const container = document.querySelector(".container");
//populate display
const input = document.querySelector("input");
for (const element of document.querySelectorAll(".number")) {
    element.addEventListener("mousedown", () => {
        input.value += element.textContent;
    });
}

//when operator button is pressed, add number to array
//need to make sure i cant press an operator button before entering a number
for (let element of document.querySelectorAll(".operator")) {
    element.addEventListener("mousedown", () => {
        //when operator button is pressed, call function and add numbers to array instead?
        if (input.value == 0 || input.value === "NaN") {
            input.value = "";
        } else {
            array.push(Number(input.value));
            console.log(array);
            input.value = "";
        }
    });
}

//add button.id to buttonId to use inside operate()
const buttons = document.querySelectorAll(".operator");
let buttonId = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonId = button.id;
    });
});

//maybe refactor to use switch block?
function operate() {
    if (buttonId === "plus") {
        input.value = add();
    } else if (buttonId === "minus") {
        input.value = subtract();
    } else if (buttonId === "multiply") {
        input.value = multiply();
    } else {
        input.value = divide();
    }
}

//display results after pressing equals, as long as array.length > 0
for (let element of document.querySelectorAll("#equals")) {
    element.addEventListener("mousedown", () => {
        if (array.length > 0) {
            operate();
        }
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
