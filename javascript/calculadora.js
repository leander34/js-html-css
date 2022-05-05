const calculadora = (num1, operador, num2) => {
  let resultado
  switch (operador){
    case '+':
      resultado = num1 + num2
      break
    case '-':
      resultado = num1 - num2
      break
    case '*':
      resultado =  num1 * num2
      break;
    case '/':
      resultado = num1 / num2
      break
    case '%':
      resultado = num1 % num2
      break
    default:
      resultado = 'Operador indefinido'
      break
  }
  return resultado
}

const soma = calculadora(1, '+', 5)
console.log(soma)
console.log(calculadora(2, '*', 7))

