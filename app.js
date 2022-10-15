console.log("Welcome to the Calculator Project console!")

var num1
var num2

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

var operator = add

function operate(operator, num1, num2) {
  return operator
}

var displayValue = document.querySelector("#display p")

var storedValue = document.querySelector("#storedValue p")

const buttonClear = document.getElementById("clear")
buttonClear.addEventListener("click", () => {
  displayValue.textContent = ""
  storedValue.textContent = ""
})

const button0 = document.getElementById("button0")
button0.addEventListener("click", () => {
  displayValue.textContent = displayValue.textContent + "0"
})

const button1 = document.getElementById("button1")
button1.addEventListener("click", () => {
  displayValue.textContent = displayValue.textContent + "1"
})

const button2 = document.getElementById("button2")
button2.addEventListener("click", () => {
  displayValue.textContent = displayValue.textContent + "2"
})

const button3 = document.getElementById("button3")
button3.addEventListener("click", () => {
  displayValue.textContent = displayValue.textContent + "3"
})

const button4 = document.getElementById("button4")
button4.addEventListener("click", () => {
  displayValue.textContent = displayValue.textContent + "4"
})

const button5 = document.getElementById("button5")
button5.addEventListener("click", () => {
  displayValue.textContent = displayValue.textContent + "5"
})

const button6 = document.getElementById("button6")
button6.addEventListener("click", () => {
  displayValue.textContent = displayValue.textContent + "6"
})

const button7 = document.getElementById("button7")
button7.addEventListener("click", () => {
  displayValue.textContent = displayValue.textContent + "7"
})

const button8 = document.getElementById("button8")
button8.addEventListener("click", () => {
  displayValue.textContent = displayValue.textContent + "8"
})

const button9 = document.getElementById("button9")
button9.addEventListener("click", () => {
  displayValue.textContent = displayValue.textContent + "9"
})

const buttonPeriod = document.getElementById("buttonPeriod")
buttonPeriod.addEventListener("click", () => {
  displayValue.textContent = displayValue.textContent + "."
})

const buttonPlus = document.getElementById("buttonPlus")
buttonPlus.addEventListener("click", () => {
  storedValue.textContent = displayValue.textContent + " +"
  num1 = storedValue.textContent
  displayValue.textContent = ""
  operator = add
})

const buttonMinus = document.getElementById("buttonMinus")
buttonMinus.addEventListener("click", () => {
  storedValue.textContent = displayValue.textContent + " -"
  num1 = storedValue.textContent
  displayValue.textContent = ""
  operator = subtract
})

const buttonMultiply = document.getElementById("buttonMultiply")
buttonMultiply.addEventListener("click", () => {
  storedValue.textContent = displayValue.textContent + " *"
  num1 = storedValue.textContent
  displayValue.textContent = ""
  operator = multiply
})

const buttonDivide = document.getElementById("buttonDivide")
buttonDivide.addEventListener("click", () => {
  storedValue.textContent = displayValue.textContent + " /"
  num1 = storedValue.textContent
  displayValue.textContent = ""
  operator = divide
})

const buttonEqual = document.getElementById("buttonEqual")
buttonEqual.addEventListener("click", () => {
  storedValue.textContent = storedValue.textContent + " " + displayValue.textContent
  displayValue.textContent = finalCalculation()
})

function finalCalculation() {
  let userInput = storedValue.textContent
  let result = Function("return " + userInput)()
  console.log(result)
  return result
}