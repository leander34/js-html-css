const numerosAleatorios = [-5, 4, 64, 98, 32, 2, 1, 189, 68, 58 , 900]
const maisAleatorios = [1020, 22, 67, 9862, 9, 6, 219]
// console.log([].concat(numerosAleatorios, maisAleatorios))
console.log(numerosAleatorios.concat(maisAleatorios))



const encontrar = numerosAleatorios.findIndex(num => num === 1)
console.log(encontrar)



let total = 0

for(let num of numerosAleatorios) {
    total += num
}
// console.log(total)

total = 0
numerosAleatorios.forEach(num => total += num)
// console.log(total)


total = numerosAleatorios.reduce((total, numeroAtual) => total + numeroAtual, 0)
// console.log(total)

const arrayDeObj = [
    {
        nome: 'leander',
        sobrenome: 'silveira',
        idade: 19
    },
    {
        nome: 'Ana',
        sobrenome: 'Carmago',
        idade: 18
    },
    {
        nome: 'Rikz',
        sobrenome: 'Alberto',
        idade: 34
    },
    {
        nome: 'Lito',
        sobrenome: 'Yula',
        idade: 67
    },
    {
        nome: 'mauriacia',
        sobrenome: 'opaleio',
        idade: 15
    },
    {
        nome: 'tulia',
        sobrenome: 'micigan',
        idade: 29
    },
]

// -------------------
// const quero = arrayDeObj.filter(pessoa => pessoa.idade === 19)
// const quero = arrayDeObj.findIndex(pessoa => pessoa.idade === 15)
// console.log(quero)

// somar todas as idades
const somarIdade = (array) => array.map(pessoa => pessoa.idade).reduce((valor, p1) => valor += p1, 0)
console.log(somarIdade(arrayDeObj))
// -------------------



// -------------------
const maisNova = arrayDeObj.reduce((p1, p2) => {
    return p1.idade > p2.idade ? p2 : p1
})

console.log(maisNova)
// -------------------




