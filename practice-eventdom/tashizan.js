document.addEventListener('DOMContentLoaded', () => {
    let calcButton = document.getElementById('calc');
    let leftInput = document.getElementById('left');
    let rightInput = document.getElementById('right');
    let answerSpan = document.getElementById('answer');
    calcButton.addEventListener('click', () => {
        let num1 = parseFloat(leftInput.value);
        let num2 = parseFloat(rightInput.value);
        let result = num1 + num2;
    });
});