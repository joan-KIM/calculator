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

    if(previousBtn === OPERATOR){
        $screen.innerHTML = "0.";
        status = DECIMAL;
        previousBtn = NUMBER;
        return;
    }

    const result = $screen.innerHTML;

    $screen.innerHTML = result + ".";
    status = DECIMAL;
}

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

function numberHandler(value){
    const result = $screen.innerHTML;

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
}

