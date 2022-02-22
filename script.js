const displayBox = document.querySelector(".display")
const accumulator = document.querySelector(".accumulator")
const result = document.querySelector(".result")
const btnNine = document.querySelector(".buttonNine")
const btnEight = document.querySelector(".buttonEight")
const btnSeven = document.querySelector(".buttonSeven")
const btnSix = document.querySelector(".buttonSix")
const btnFive = document.querySelector(".buttonFive")
const btnFour = document.querySelector(".buttonFour")
const btnThree = document.querySelector(".buttonThree")
const btnTwo = document.querySelector(".buttonTwo")
const btnOne = document.querySelector(".buttonOne")
const btnZero = document.querySelector(".buttonZero")
const btnPoint = document.querySelector(".buttonPoint")
const btnAdd = document.querySelector(".buttonAdd")
const btnSubtract = document.querySelector(".buttonSubtract")
const btnMultiply = document.querySelector(".buttonMultiply")
const btnDivide = document.querySelector(".buttonDivide")
const btnCe = document.querySelector(".buttonClean")


function add(a, b) {
    let resultAdd = Number(a) + Number(b)
    console.log(resultAdd)
}

function subtract(a, b) {
    let resultSub = Number(a) - Number(b)
    console.log(resultSub)
}

function divide(a, b) {
    let resultDivide = Number(a) / Number(b)
    console.log(resultDivide)
}

function multiply(a, b) {
    let resultMultiply = Number(a) * Number(b)
    console.log(resultMultiply)
}

function operate(a, b, operator) {
    a = prompt("Escribe un numero")
    operator =prompt("Que operacion quieres hacer?") 
    b = prompt("Escribe otro numero")
  
    if (operator == "+") {
        add(a,b)
    } else if (operator == "-") {
        subtract(a,b)
    } else if (operator == "/") {
        divide(a,b)
    } else if (operator == "*"){
        multiply(a,b)
    } else {
        alert("No elegiste un operador!")
        operate(a,b)
    }

}

whatoperate = 0

function display() {
    btnNine.addEventListener('click', () => {
        accumulator.append(9)
    })
    btnEight.addEventListener('click', () => {
        accumulator.append(8)
    })
    btnSeven.addEventListener('click', () => {
        accumulator.append(7)
    })
    btnSix.addEventListener('click', () => {
        accumulator.append(6)
    })
    btnFive.addEventListener('click', () => {
        accumulator.append(5)
    })
    btnFour.addEventListener('click', () => {
        accumulator.append(4)
    })
    btnThree.addEventListener('click', () => {
        accumulator.append(3)
    })
    btnTwo.addEventListener('click', () => {
        accumulator.append(2)
    })
    btnOne.addEventListener('click', () => {
        accumulator.append(1)
    })
    btnZero.addEventListener('click', () => {
        accumulator.append(0)
    })
    btnPoint.addEventListener('click', () => {
        accumulator.append(".")
    })
    btnAdd.addEventListener('click', () => {
        accumulator.append("+")
    })
    btnSubtract.addEventListener('click', () => {
        accumulator.append("-")
    })
    btnMultiply.addEventListener('click', () => {
        accumulator.append("*")
    })
    btnDivide.addEventListener('click', () => {
        accumulator.append("/")
    })
    btnCe.addEventListener('click', () => {
        accumulator.textContent = ""
    })
}
display();