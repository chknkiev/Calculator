const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.button-container');
const display = document.querySelector('.display');


const operate = (n1, operator, n2) => {
    let result = '';
    let firstNum = parseFloat(n1);
    let secondNum = parseFloat(n2);
    if(operator === 'add') {
        result = firstNum + secondNum;
    } else if(operator === 'subtract') {
        result = firstNum - secondNum;
    } else if(operator === 'multiply') {
        result = firstNum * secondNum;
    } else if(operator === 'divide') {
        result = firstNum / secondNum;
    }
    result = Math.round(result * 10000) / 10000;
    return result;
}


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
        

        if(!action) {
            if(displayedNum === '0' ||
            previousKeyType === 'operator' ||
            previousKeyType === 'operate') {
                display.textContent = keyContent;
                calculator.dataset.previousKeyType = 'number';
            } else {
                display.textContent = displayedNum + keyContent;
            }
        };


        if(action === 'decimal') {
            if(!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if(previousKeyType === 'operator') {
                display.textContent = '0.'
            }
        calculator.dataset.previousKeyType = 'decimal';
        }


        if(action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            if(firstValue &&
                operator &&
                previousKeyType !== 'operator') {
                const operateValue = operate(firstValue, operator, secondValue);
                display.textContent = operateValue;
                calculator.dataset.firstValue = operateValue;
            } else {
                calculator.dataset.firstValue = displayedNum;
            }
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;
            key.style.backgroundColor='coral'
        }
        

        if(action === 'equals') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            calculator.dataset.previousKeyType = 'operate';
            
            if(calculator.dataset.operator === 'divide' &&
            displayedNum === '0') {
                alert('Not going to happen!');
            }
            
            if(firstValue) {
                display.textContent = operate(firstValue, operator, secondValue);
            }
            
            const opBackground = document.getElementsByClassName('operator');
            for (let i = 0; i < opBackground.length; i++) {
                opBackground[i].style.backgroundColor = 'lightsalmon';
            }
        }


        if(action === 'clear') {
                display.textContent = 0;
                calculator.dataset.previousKeyType = 'clear';
        }


        if(action === 'all-clear') {
            calculator.dataset.firstValue = '';
            calculator.dataset.modValue = '';
            calculator.dataset.operator = '';
            calculator.dataset.previousKeyType = '';
            display.textContent = 0;
        }
    

        if(action === 'bg') {
            let letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            display.style.backgroundColor = color;
        }


        if(action === 'font') {
            let letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            display.style.color = color;
        }
    } 
});