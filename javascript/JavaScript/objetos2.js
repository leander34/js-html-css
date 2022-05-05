const pessoa = {
    nome: 'Zeze',
    sobrenome: 'riks',
    idade: 45,
    salario: 4500
}

const obj = Object.freeze({
    sobrenome: 'riks',
    idade: 45,
})

// console.log(obj.idade)



Object.freeze(pessoa)


pessoa.nome = 'leander'
// console.log(pessoa)


const pessoa2 = Object.defineProperty({}, 'nome', {
    value: 'leander',
    writable: false,
    enumerable: false
})

pessoa2.nome = 'Ana'
console.log(pessoa2)