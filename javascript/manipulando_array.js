//manipulando arrays

//Criar um array com constructor

const myArray = new Array('a', 'b', 'c')
console.log(myArray)
console.log(myArray.join(""))

// contando elementos de um array
const vet = ['a', 'b', 'c']
console.log(vet.length)

// Transformar uma cadeia de caracteres em elementos de um array

let word = 'manipulação'

console.log(Array.from(word)) // transforma uma cadeia de caracteres em um array
console.log(Array.from(word).join(""))

//------------------------------------
let = tech = ['html', 'css', 'js']

//Adicionar um item no fim
tech.push('nodejs')
//Adicionar um item no começo
tech.unshift('sql')
//Remover um item do final
tech.pop()
//Remover um item do começo
tech.shift()
//pegar somente alguns elementos do array
//console.log(tech.slice(1,3)) //fatiar - não altera o array - a partir do 1 até o 3 (o 3 não entra)
//remover 1 ou mais items em qualquer posição do array
//tech.splice(1, 1)

//encontrar a posição de uma elemento no array
let index = tech.indexOf('css')

console.log(index)
tech.splice(index, 1)
console.log(tech)