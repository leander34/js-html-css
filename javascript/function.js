// function expression
//function anonymous

// parameters - parâmetros
const sum = function(number1, number2) {
  console.log(number1 + number2)
}

sum(2, 5) // arguments - argumentos

// function hoisting
sayMyName()

function sayMyName() {
  console.log('leander')
}

const arrow = (a, b) => a + b
console.log(arrow(2, 5))