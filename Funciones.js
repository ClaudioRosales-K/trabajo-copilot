document.addEventListener('DOMContentLoaded', (event) => {
    // Obtener los elementos del DOM
    const display = document.getElementById('result');
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const equalButton = document.querySelector('.equal');

    let currentInput = '';
    let currentOperator = '';
    let storedInput = '';

    // Función para manejar los números
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentInput += button.value;
            display.innerText = currentInput;
        });
    });

    // Función para manejar las operaciones
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentOperator) {
                calculate();
            }
            storedInput = currentInput;
            currentInput = '';
            currentOperator = button.value;
        });
    });

    // Función para manejar el botón de igual
    equalButton.addEventListener('click', () => {
        calculate();
        currentOperator = '';
    });

    // Función para realizar el cálculo
    function calculate() {
        switch (currentOperator) {
            case '+':
                currentInput = parseFloat(storedInput) + parseFloat(currentInput);
                break;
            case '-':
                currentInput = parseFloat(storedInput) - parseFloat(currentInput);
                break;
            case '*':
                currentInput = parseFloat(storedInput) * parseFloat(currentInput);
                break;
            case '/':
                currentInput = parseFloat(storedInput) / parseFloat(currentInput);
                break;
        }
        display.innerText = currentInput;
    }

        // Obtener el botón de limpiar del DOM
    const clearButton = document.getElementById('clear');

    // Función para manejar el botón de limpiar
    clearButton.addEventListener('click', () => {
        currentInput = '';
        storedInput = '';
        currentOperator = '';
        display.innerText = '';
    });
});