let nome = 'leander, silveira, santos'
const novoNome = nome.replace(',', ' ')
// console.log(novoNome)

nome = 'leander'
let array = []
for(let letras of nome) {
    array.push(letras)
}

console.log(array)
console.log(array.join('').toString().charAt('3'))
// charAt retorna o caractere na posição passada
console.log('leander'.toUpperCase())

console.log(nome.split(''))


