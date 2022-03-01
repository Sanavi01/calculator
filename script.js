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
const btnEqual = document.querySelector(".buttonEqual")

/*
function add(a, b) {
    let resultAdd = Number(a) + Number(b)
    a = resultAdd
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
*/
function display() {
    btnNine.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 9 
        result.textContent = eval(accumulator.textContent)
    })
    btnEight.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 8 
        result.textContent = eval(accumulator.textContent)
    })
    btnSeven.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 7 
        result.textContent = eval(accumulator.textContent)
    })
    btnSix.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 6 
        result.textContent = eval(accumulator.textContent)
    })
    btnFive.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 5 
        result.textContent = eval(accumulator.textContent)
    })
    btnFour.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 4 
        result.textContent = eval(accumulator.textContent)
    })
    btnThree.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 3 
        result.textContent = eval(accumulator.textContent)
    })
    btnTwo.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 2 
        result.textContent = eval(accumulator.textContent)
    })
    btnOne.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 1 
        result.textContent = eval(accumulator.textContent)
    })
    btnZero.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 0
        result.textContent = eval(accumulator.textContent) 
    })
    btnPoint.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + "."
    })
    btnAdd.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + "+"
    })
    btnSubtract.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + "-"
    })
    btnMultiply.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + "*"
    })
    btnDivide.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + "/"
    })
    btnCe.addEventListener('click', () => {
        accumulator.textContent = ""
        result.textContent = eval(accumulator.textContent)

    })
    btnEqual.addEventListener('click', () => {
        result.textContent = eval(accumulator.textContent)
        accumulator.textContent = result.textContent
    })

}

display();