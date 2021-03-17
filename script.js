const $numBtns = document.querySelectorAll(".number");
const $screen = document.querySelector(".screen-text");

const INTEGER = "integer";
const DECIMAL = "decimal";
const CLICK = "click";

let status = INTEGER;

const NUMBER = "number";
const OPERATOR = "operator";

let previousBtn = NUMBER;

for (const $numBtn of $numBtns){
    $numBtn.addEventListener(CLICK, function(event){

        const result = $screen.innerHTML;
        const value = Number(event.target.innerHTML);

        if(result.length === 11){
            return; 
        }

        if(previousBtn === OPERATOR){
            $screen.innerHTML = value;
            previousBtn = NUMBER;
            return;
        }

        if(status === DECIMAL){
            $screen.innerHTML = result + value;
            return;
        }   
       
        if(Number(result) < 0){
            $screen.innerHTML = Number(result) * 10 - value;
        }else{
            $screen.innerHTML = Number(result) * 10 + value;
        }
        
    })
}

const $buttons = document.querySelector(".button-container");

const ADDITION = "addition";
const SUBTRACT = "subtract";
const MULTIPLY = "multiply";
const DIVISION = "division";
const NONE = "none";

let calculateOperator = NONE;

function allClear(){
    $screen.innerHTML = 0;
    status = INTEGER;
    calculateOperator = NONE;
}

function backSpace(){
    const result = $screen.innerHTML;

    if(result.length === 1 || (result.startsWith("-") && result.length === 2)){
        $screen.innerHTML = 0;
        return;
    }

    if(result.slice(-1) === "."){
        status = INTEGER;
    }
    
    $screen.innerHTML = result.slice(0, -1);
}

function sign(){
    const result = Number($screen.innerHTML);
    $screen.innerHTML = -result;
}

function decimal(){
    if(status === DECIMAL){
        return;
    }

    const result = $screen.innerHTML;

    $screen.innerHTML = result + ".";
    status = DECIMAL;
}

let firstOperand = 0;
let secondOperand = 0;
let result = 0;

function calculate(){
    previousBtn = OPERATOR;
    status = INTEGER;

    if(calculateOperator === NONE){
        firstOperand = Number($screen.innerHTML);
        return;
    }else{
        secondOperand = Number($screen.innerHTML);
    }

    switch(calculateOperator){
        case ADDITION :
            result = firstOperand + secondOperand;
            $screen.innerHTML = result;
            break;
        case SUBTRACT : 
            result = firstOperand - secondOperand;
            $screen.innerHTML = result;
            break;
        case MULTIPLY : 
            result = firstOperand * secondOperand;
            $screen.innerHTML = result;
            break;
        case DIVISION :
            result = firstOperand / secondOperand;
            $screen.innerHTML = result;
            break;
    }

    firstOperand = result;
}

$buttons.addEventListener(CLICK, function(event){
    const $target = event.target;
    const action = $target.dataset.action;

    switch(action){
        case "all-clear":
            allClear();
            break;
        case "delete":
            backSpace();
            break;
        case "sign":
            sign();
            break;
        case "decimal":
            decimal();
            break;
        case "addition":
            calculate();
            calculateOperator = ADDITION;
            break;
        case "subtract":
            calculate();
            calculateOperator = SUBTRACT;
            break;
        case "division":
            calculate();
            calculateOperator = DIVISION;
            break;
        case "multiply":
            calculate();
            calculateOperator = MULTIPLY;
            break;
        case "equals":
            calculate();
            calculateOperator = NONE;
            break;
    }

})
