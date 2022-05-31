const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.button-container');
const display = document.querySelector('.display');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
        
        if(!action) {
            if(displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
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
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }

        const calculate = (n1, operator, n2) => {
            let result = '';
            if(operator === 'add') {
                result = parseFloat(n1) + parseFloat(n2);
            } else if(operator === 'subtract') {
                result = parseFloat(n1) - parseFloat(n2);
            } else if(operator === 'multiply') {
                result = parseFloat(n1) * parseFloat(n2);
            } else if(operator === 'divide') {
                result = parseFloat(n1) / parseFloat(n2);
            }
            return result
        }

        if(action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            calculator.dataset.previousKeyType = 'calculate';

            display.textContent = calculate(firstValue, operator, secondValue);
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



