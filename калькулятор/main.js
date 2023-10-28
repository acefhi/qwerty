const num1input = document.getElementById(`num1`)
const num2input = document.getElementById(`num2`)
const addButton = document.getElementById(`add`)
const subtractButton = document.getElementById(`subtract`)
const multiplyButton = document.getElementById(`multiply`)
const divideButton = document.getElementById(`divide`)
const resultH1 = document.getElementById(`result`)

function add(){
    const num1 = parseFloat(num1input.value)
    const num2 = parseFloat(num2input.value)
    const sum = num1 + num2
    resultH1.textContent = `Результат: ${sum}`
}

function substract(){
    const num1 = parseFloat(num1input.value)
    const num2 = parseFloat(num2input.value)
    const d = num1 - num2
    resultH1.textContent = `Результат: ${d}`
}

function multiply(){
    const num1 = parseFloat(num1input.value)
    const num2 = parseFloat(num2input.value)
    const product = num1 * num2
    resultH1.textContent = `Результат: ${product}`
}

function divide(){
    const num1 = parseFloat(num1input.value)
    const num2 = parseFloat(num2input.value)
    if (num2 == 0) {
        resultH1.textContent = `Деление на ноль невозможно`
    } else{
        const q = num1 / num2
        resultH1.textContent = `Результат: ${q}`
    }
}

addButton.addEventListener('click', add)
subtractButton.addEventListener('click', substract)
multiplyButton.addEventListener('click', multiply)
divideButton.addEventListener('click', divide)