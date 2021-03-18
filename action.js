function allClear(){
    setScreen(0);
    setStatus(INTEGER);
    setCalculateOperator(NONE);
}

function backSpace(){
    const result = getScreen();

    if(result.length === 1 || (result.startsWith("-") && result.length === 2)){
        setScreen(0);
        return;
    }

    if(result.slice(-1) === "."){
        setStatus(INTEGER);
    }
    
    setScreen(result.slice(0, -1));
}

function sign(){
    const result = getScreen();

    if(!Number(result)) return;
    
    if(result.startsWith("-")){
        setScreen(result.slice(1));
        return;
    }

    setScreen(`-${result}`);
}

function decimal(){
    if(status === DECIMAL){
        return;
    }

    setStatus(DECIMAL);
    
    if(previousBtn === OPERATOR){
        setScreen('0.');
        previousBtn = NUMBER;
        return;
    }

    setScreen(`${getScreen()}.`);
}

function calculate(action){
    previousBtn = OPERATOR;
    setStatus(INTEGER);
    
    if(calculateOperator === NONE){
        firstOperand = Number(getScreen());
        setCalculateOperator(action);
        return;
    }else{
        secondOperand = Number(getScreen());
    }

    result = operator[calculateOperator](firstOperand, secondOperand);

    setScreen(result);

    firstOperand = result;
    setCalculateOperator(action);
}

function numberHandler(value){
    const result = getScreen();

    if(result.length === 11){
        return; 
    }

    if(previousBtn === OPERATOR || result === '0'){
        setScreen(value);
        previousBtn = NUMBER;
        return;
    }

    setScreen(result + value);
}

