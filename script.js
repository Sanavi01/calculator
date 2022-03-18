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
const btnDe = document.querySelector(".buttonDelete")

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

let a = ""
let b  = ""
let c= ""
function display() {
    btnNine.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 9 
        a = a + "9" 
    })
    btnEight.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 8 
        a = a + "8" 
    })
    btnSeven.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 7 
        a = a + "7" 
    })
    btnSix.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 6 
        a = a + "6" 
    })
    btnFive.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 5 
        a = a + "5" 
    })
    btnFour.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 4 
        a = a + "4" 
    })
    btnThree.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 3 
        a = a + "3" 
    })
    btnTwo.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 2 
        a = a + "2" 
    })
    btnOne.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 1 
        a = a + "1"
    })
    btnZero.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + 0
        a = a + "0" 
    })
    btnPoint.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + "."
        a = a + "." 
    })
    btnAdd.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + "+"
        if( a == 0){
            a = "+"
            b = b + a
            a = 0    
        } else {
            a = parseInt(a)
            a = a + "+" 
            b = b + a
            a = 0  
        }
    })
    btnSubtract.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + "-"
        if( a == 0){
            a = "-"
            b = b + a
            a = 0    
        } else {
            a = parseInt(a)
            a = a + "-" 
            b = b + a
            a = 0  
        }
    })
    btnMultiply.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + "*"
        if( a == 0){
            a = "*"
            b = b + a
            a = 0    
        } else {
            a = parseInt(a)
            a = a + "*" 
            b = b + a
            a = 0  
        }
    })
    btnDivide.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent + "/"
        if( a == 0){
            a = "/"
            b = b + a
            a = 0    
        } else {
            a = parseInt(a)
            a = a + "/" 
            b = b + a
            a = 0  
        }
    })
    btnCe.addEventListener('click', () => {
        accumulator.textContent = ""
        a = ""
        b = ""
        c = ""
        result.textContent = ""
    })
    btnEqual.addEventListener('click', () => {
        if (a == 0) {
            b = b 
        } else {
            a = parseInt(a)
            b = b + a
            c = eval(b)
            a = 0
            result.textContent = c
        }
        
    })
    btnDe.addEventListener('click', () => {
        accumulator.textContent = accumulator.textContent.slice(0, -1)
        if(a.length > 0){
            aDe = a.slice(0 ,-1)
            a = aDe
        } else {
            bDe = b.slice(0, -1)
            b = bDe
        }
    })

}

display();