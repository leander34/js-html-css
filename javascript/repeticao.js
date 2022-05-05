const nome = 'leander'
const nomes = ['Ana', 'Joao', 'Rafaela', 'Catrina']

for(let char of nome) { // se for string pega cada caracter
  console.log(char)
}

for(let nome of nomes) { // se for array pega cada elemento presente no array
  console.log(nome)
}

const person = {
  name: 'huender',
  age: 45,
  weight: 90
}
for(let property in person) {
  console.log(property)
  console.log(person[property])
}


const array = [1, 2, 4, 6]
let total = 0
for(let i in array) {
  console.log(i)
  total += array[i]
}
console.log(total)
console.log(array.length)