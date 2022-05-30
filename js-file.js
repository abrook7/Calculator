//Add two number inputs
function add(a, b) {
  console.log(a + b);
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
  a = Number(a);
  b = Number(b);
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

//query the display and buttons
const calcDisplay = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");

calcDisplay.textContent = 0; //initial display number
let afterOperator = 0;
let equation = ["", "", ""];

numbers.forEach((number) => {
  number.addEventListener("click", () => {
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
      equation[0] = operation.textContent;
    } else {
      afterOperator = 1;
      equation[0] = operation.textContent;
    }
  });
});

clear.addEventListener("click", () => {
  equation = ["", "", ""];
  calcDisplay.textContent = 0;
});

equals.addEventListener("click", () => {
  calcDisplay.textContent = operate(equation[0], equation[1], equation[2]);
});

// numbers.forEach((number) => {
//   number.addEventListener("click", () => {
//     if (calcDisplay.textContent == 0) {
//       calcDisplay.textContent = "";
//     }
//     const currentNumber = calcDisplay.textContent;
//     const nextNumber = number.textContent;
//     calcDisplay.textContent = calcDisplay.textContent + nextNumber;
//   });
// });

// operations.forEach((operation)=>{
//     operation.addEventListener("click",()=>{

//     })
// })
