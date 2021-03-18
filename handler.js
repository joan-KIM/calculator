function actionHandler(action, value){
    switch(action){
        case NUMBER:
            numberHandler(value);
            break;
        case ALL_CLEAR:
            allClear();
            break;
        case DELETE:
            backSpace();
            break;
        case SIGN:
            sign();
            break;
        case DECIMAL:
            decimal();
            break;
        default: calculate(action);
    }
}
