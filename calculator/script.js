class Calculator {
    constructor() {
        this.displayValue = '0';
        this.firstOperand = null;
        this.waitingForSecondOperand = false;
        this.operator = null;
    }

    updateDisplay() {
        document.querySelector('.display').textContent = this.displayValue;
    }

    inputDigit(digit) {
        if (this.waitingForSecondOperand) {
            this.displayValue = digit;
            this.waitingForSecondOperand = false;
        } else {
            this.displayValue = this.displayValue === '0' ? digit : this.displayValue + digit;
        }
    }

    inputDecimal() {
        if (this.waitingForSecondOperand) {
            this.displayValue = '0.';
            this.waitingForSecondOperand = false;
            return;
        }

        if (!this.displayValue.includes('.')) {
            this.displayValue += '.';
        }
    }

    handleOperator(nextOperator) {
        const inputValue = parseFloat(this.displayValue);

        if (this.operator && this.waitingForSecondOperand) {
            this.operator = nextOperator;
            return;
        }

        if (this.firstOperand === null && !isNaN(inputValue)) {
            this.firstOperand = inputValue;
        } else if (this.operator) {
            const result = this.calculate(this.firstOperand, inputValue, this.operator);
            this.displayValue = `${parseFloat(result.toFixed(7))}`;
            this.firstOperand = result;
        }

        this.waitingForSecondOperand = true;
        this.operator = nextOperator;
    }

    calculate(firstOperand, secondOperand, operator) {
        switch (operator) {
            case '+': return firstOperand + secondOperand;
            case '-': return firstOperand - secondOperand;
            case '×': return firstOperand * secondOperand;
            case '÷': return firstOperand / secondOperand;
            default: return secondOperand;
        }
    }

    clear() {
        this.displayValue = '0';
        this.firstOperand = null;
        this.waitingForSecondOperand = false;
        this.operator = null;
    }

    toggleSign() {
        this.displayValue = (parseFloat(this.displayValue) * -1).toString();
    }

    handlePercentage() {
        this.displayValue = (parseFloat(this.displayValue) / 100).toString();
    }
}

const calculator = new Calculator();

document.querySelector('.buttons').addEventListener('click', (event) => {
    if (!event.target.matches('button')) return;

    if (event.target.classList.contains('operator')) {
        calculator.handleOperator(event.target.textContent);
        calculator.updateDisplay();
        return;
    }

    if (event.target.classList.contains('function')) {
        if (event.target.textContent === 'AC') {
            calculator.clear();
        } else if (event.target.textContent === '+/-') {
            calculator.toggleSign();
        } else if (event.target.textContent === '%') {
            calculator.handlePercentage();
        }
        calculator.updateDisplay();
        return;
    }

    if (event.target.textContent === '.') {
        calculator.inputDecimal();
        calculator.updateDisplay();
        return;
    }

    calculator.inputDigit(event.target.textContent);
    calculator.updateDisplay();
});