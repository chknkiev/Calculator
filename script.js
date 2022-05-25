function add(a, b) {  //Addition function
    return a + b;
}

function subtract(a, b) {  //Subtraction function
    return a - b;
}

function multiply(a, b) {  //Multiplication function
    return a * b;
}

function divide(a, b) {  //Division function
    return a / b;
}

function operate(chosenOp, a, b) {  //Operator function
    if(chosenOp === "+") {
        return add(a, b);
    } else if(chosenOp === "-") {
        return subtract(a, b);
    } else if(chosenOp === "*") {
        return multiply(a, b);
    } else if(chosenOp === "/") {
        return divide(a, b);
    }
}