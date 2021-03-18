let status = INTEGER;

let previousBtn = NUMBER;

let calculateOperator = NONE;

let firstOperand = 0;
let secondOperand = 0;
let result = 0;

function setStatus (state) {
  status = state;
}

function setCalculateOperator (operator) {
  if (operator === EQUALS) {
    calculateOperator = NONE;
  } else {
    calculateOperator = operator;
  }
}
