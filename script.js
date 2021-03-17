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
    }

})


/*
const $acBtn = document.querySelector(".all-clear");

$acBtn.addEventListener(CLICK, function(event){
    $screen.innerHTML = 0;
    status = INTEGER;
    calculateOperator = NONE;
})

const $deleteBtn = document.querySelector(".delete");

$deleteBtn.addEventListener(CLICK, function(event){
    const result = $screen.innerHTML;

    if(Number(result) < 10 && Number(result) > -10 && Number.isInteger(Number(result))){
        $screen.innerHTML = 0;
        return;
    }

    if(result.slice(-1) === "."){
        status = INTEGER;
    }
    
    $screen.innerHTML = result.slice(0, -1);
})

const $signBtn = document.querySelector(".sign");

$signBtn.addEventListener(CLICK, function(event){
    const result = Number($screen.innerHTML);

    $screen.innerHTML = -result;
})

const $decimalBtn = document.querySelector(".decimal");

$decimalBtn.addEventListener(CLICK, function(event){
    if(status === DECIMAL){
        return;
    }

    const result = $screen.innerHTML;

    $screen.innerHTML = result + ".";
    status = DECIMAL;
})

const $addBtn = document.querySelector(".add");
const $subtractBtn = document.querySelector(".subtract");
const $multiplyBtn = document.querySelector(".multiply");
const $divisionBtn = document.querySelector(".division");
const $equalsBtn = document.querySelector(".equals");

const ADDITION = "addition";
const SUBTRACT = "subtract";
const MULTIPLY = "multiply";
const DIVISION = "division";
const NONE = "none";

let calculateOperator = NONE;

$addBtn.addEventListener(CLICK, function(event){
    calculate();
    calculateOperator = ADDITION;
})

$subtractBtn.addEventListener(CLICK, function(event){
    calculate();
    calculateOperator = SUBTRACT;
})

$multiplyBtn.addEventListener(CLICK, function(event){
    calculate();
    calculateOperator = MULTIPLY;
})

$divisionBtn.addEventListener(CLICK, function(event){
    calculate();
    calculateOperator = DIVISION;
})

$equalsBtn.addEventListener(CLICK, function(event){
    calculate();
    calculateOperator = NONE;
})

*/
