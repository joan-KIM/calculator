function actionHandler(action, value){
    switch(action){
        case "number":
            numberHandler(value);
            break;
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

}