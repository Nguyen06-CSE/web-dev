const display = document.getElementById('display');
const keys = document.querySelector('.calculator-keys');

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

// Bảng quy đổi tên action sang ký hiệu hiển thị trên màn hình
const operatorSymbols = {
    divide: '/',
    multiply: 'x',
    add: '+',
    subtract: '-',
    exponentiation: '^',
    modulo: '%',
};

function updateDisplay() {
    let displayString = String(calculator.displayValue);

    if (displayString.includes('Infinity')) {
        display.textContent = 'Lỗi: Vô cực';
        return;
    }
    if (displayString === 'NaN') {
        display.textContent = 'Lỗi: Không phải số';
        return;
    }

    // Nếu chưa chọn phép toán: chỉ hiện số đang nhập
    if (!calculator.operator || calculator.firstOperand === null) {
        display.textContent = displayString.length > 18
            ? parseFloat(displayString).toPrecision(15)
            : displayString;
        return;
    }

    const symbol = operatorSymbols[calculator.operator];

    // Nếu đang chờ nhập số thứ 2: hiện "số_1 + "
    if (calculator.waitingForSecondOperand) {
        display.textContent = `${calculator.firstOperand} ${symbol}`;
    } else {
        // Nếu đang nhập số thứ 2: hiện "số_1 + số_2"
        display.textContent = `${calculator.firstOperand} ${symbol} ${displayString}`;
    }
}

function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }

    updateDisplay();
}

function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0.';
        calculator.waitingForSecondOperand = false;
        updateDisplay();
        return;
    }

    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }

    updateDisplay();
}

const performCalculation = {
    divide: (firstOperand, secondOperand) => firstOperand / secondOperand,
    multiply: (firstOperand, secondOperand) => firstOperand * secondOperand,
    add: (firstOperand, secondOperand) => firstOperand + secondOperand,
    subtract: (firstOperand, secondOperand) => firstOperand - secondOperand,
    exponentiation: (firstOperand, secondOperand) => firstOperand ** secondOperand,
    modulo: (firstOperand, secondOperand) => firstOperand % secondOperand,
};

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (!Number.isFinite(inputValue) && inputValue !== 0) {
        calculator.displayValue = 'Lỗi phép toán';
        updateDisplay();
        return;
    }

    // Nếu người dùng bấm đổi phép toán liên tiếp (ví dụ bấm + rồi đổi sang -)
    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        updateDisplay();
        return;
    }

    if (firstOperand === null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation[operator](firstOperand, inputValue);
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    updateDisplay();
}

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    updateDisplay();
}

keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) return;

    const action = target.dataset.action;
    const value = target.dataset.value;

    if (value !== undefined) {
        inputDigit(value);
        return;
    }

    if (action === 'decimal') {
        inputDecimal('.');
        return;
    }

    if (action === 'clear') {
        resetCalculator();
        return;
    }

    if (action === 'calculate') {
        if (calculator.operator && !calculator.waitingForSecondOperand) {
            const secondOperand = parseFloat(calculator.displayValue);
            const result = performCalculation[calculator.operator](calculator.firstOperand, secondOperand);
            
            calculator.displayValue = String(result);
            calculator.firstOperand = null;
            calculator.operator = null;
            calculator.waitingForSecondOperand = false;
            updateDisplay();
        }
        return;
    }

    if (action) {
        handleOperator(action);
    }
});

updateDisplay();