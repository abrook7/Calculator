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
  if (b == 0) return "ERROR"; //return error if divide by 0
  return a / b;
}

//Uses one of the calculation functions based on the input operator
function operate(operator, a, b) {
  if (operator == "" && b == "") {
    return a;
  } else {
    //change a & b to numbers so operations don't concatenate
    a = Number(a);
    b = Number(b);

    //call the right method based on the input operator
    if (operator == "+") {
      return add(a, b);
    } else if (operator == "-") {
      return subtract(a, b);
    } else if (operator == "*") {
      return multiply(a, b);
    } else if (operator == "/") {
      return divide(a, b);
    }
  }
}

//query the display and all buttons
const calcDisplay = document.querySelector(".display");
const numbers = document.querySelectorAll(".number"); //queries all numbers (I treat . as a number)
const operations = document.querySelectorAll(".operation"); //queries all math operations (+,-,*,/)
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const changeSign = document.querySelector(".change-sign");
const percent = document.querySelector(".percent");

calcDisplay.textContent = 0; //initial display number
let afterOperator = 0; //boolean tracking if an operator has been pressed
let afterEquals = 0; //boolean tracking if the equals sign has been pressed
let afterDecimal = 0; //boolean tracking if the decimal has been pressed
let equation = ["", "", ""]; //initialize equation array

//This Loops through each index of the numbers query
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    //clears first number
    if (afterEquals && !afterOperator) {
      equation[1] = "";
      afterEquals = 0;
    }
    //stops multiple presses of '.' per number
    if (number.textContent == ".") {
      if (afterDecimal) {
        return;
      } else afterDecimal = 1;
    }
    //saves and displays number depending on if it comes before or after an operator
    if (!afterOperator) {
      equation[1] += number.textContent;
      calcDisplay.textContent = equation[1];
    } else {
      equation[2] += number.textContent;
      calcDisplay.textContent = equation[2];
    }
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    if (afterOperator) {
      calcDisplay.textContent = operate(equation[0], equation[1], equation[2]);
      equation = [operation.textContent, calcDisplay.textContent, ""];
      afterDecimal = 0; //resets decimal
    } else {
      afterOperator = 1; //tracks operator usage
      afterDecimal = 0; //resets decimal
      equation[0] = operation.textContent;
    }
  });
});

clear.addEventListener("click", () => {
  equation = ["", "", ""];
  calcDisplay.textContent = 0;
  afterOperator = 0;
  afterEquals = 0;
  afterDecimal = 0;
});

equals.addEventListener("click", () => {
  calcDisplay.textContent = operate(equation[0], equation[1], equation[2]);
  equation = ["", calcDisplay.textContent, ""];
  afterOperator = 0;
  afterEquals = 1;
  afterDecimal = 0;
});

changeSign.addEventListener("click", () => {
  if (afterOperator) {
    equation[2] *= -1;
    calcDisplay.textContent = equation[2];
  } else {
    equation[1] *= -1;
    calcDisplay.textContent = equation[1];
  }
});

percent.addEventListener("click", () => {
  if (afterOperator) {
    equation[2] *= 0.01;
    calcDisplay.textContent = equation[2];
  } else {
    equation[1] *= 0.01;
    calcDisplay.textContent = equation[1];
  }
});
