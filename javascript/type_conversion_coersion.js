/*
   Type conversion (typecasting) vs Type coersion
   Nós alteramos vs o JS altera

   *Alteração de um tipo de dado para outro tipo
   string -> number
*/

console.log('9' + 5) // o javascript transforma, forçadamente, o 5 em string '5'
console.log(Number('9') + 5) // Nós alteramos o tipo de dado manualmente(explicitamente)

//Manipulando Strings e números

//Transformar String em Números e Números em strings
const string = "123"
console.log(Number(string))
const numero = 321
console.log(String(numero))

//Manipulando Strings e números

//Contar quantos caracteres tem uma palavra ou quantos digitos tem um número

let nome = 'leander'
console.log(nome.length)
let senha = '1223'
console.log(String(senha).length)

//Manipulando Strings e números

//Transformar um número quebrado com duas casas decimais e trocar ponto por vírgula

const number = 562.646652114
console.log(number.toFixed(2).replace(".", ","))

//Manipulando Strings e números

//Transforme letras minúsculas em maiúscula. Faça o contrário disso também

const palavra = 'pedra'
const palavra2 = 'SAPATO'
console.log(palavra.toUpperCase())
console.log(palavra2.toLocaleLowerCase())

//Manipulando Strings e números

//Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

const frase = 'Eu quero viver o amor!'
const MyArray = frase.split(" ") // como argumento passo onde quero separar - resultado é um array com cada parte ---- o outro parametro é a quantidade de elementos do array que vc quer fazer isso
const frase_ = MyArray.join("_") // com o que eu quero juntar os espaços(colocar no lugar de cada pedaço do array)
const array = ['oi', 'bb'] // teste
console.log(MyArray)
console.log(frase_)
console.log(frase.replace(" ", "_")) // erro -> somente o primeiro espaço foi trocado
console.log(MyArray.concat(array)) // junta 2 arrays - o resultado é um novo array
console.log('leander é lindo'.split(" ").join("_"))

//manipulando strings

//Verificar se o texto contém a palavra Amor

let phrase = "Eu quero viver!"
console.log(phrase.includes("Amor")) // verifica se um texto contém alguma palavra expecifica
phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))



console.log('leander' == 'leander') // comparação de strings
console.log(0 == false)