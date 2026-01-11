function appendNumber(number) {
    document.getElementById('display').value += number;
}
function appendOperator(operator) {
    document.getElementById('display').value += operator;
}
function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    }
    catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function handleInput(input) {
    switch (input) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            appendNumber(input);
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            appendOperator(input);
            break;
        case 'Enter':
            calculate();
            break;
        case 'Backspace':
            clearDisplay();
            break;
        default:
            break;
    }
}
document.addEventListener('keydown', (event) => {
    handleInput(event.key);
});