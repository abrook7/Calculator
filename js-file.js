//Add two number inputs
function add(a, b) {
  return a + b;
}

//Subtract two number inputs
function subtract(a, b) {
  return a - b;
}

//Multiply two number inputs
function multiply(a, b) {
  return a * b;
}

//Divide two number inputs
function divide(a, b) {
  return a / b;
}

//Uses one of the calculation functions based on the input operator
function operate(operator, a, b) {
  if (operator == "+") {
    add(a, b);
  } else if (operator == "-") {
    subtract(a, b);
  } else if (operator == "*") {
    multiply(a, b);
  } else if (operator == "/") {
    divide(a, b);
  }
}

const calcDisplay = document.querySelector(".display");
const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
