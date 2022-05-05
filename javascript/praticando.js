const pessoa = {
  nome: 'leander',
  age: 19,
  weight: 73,
  isSub: true
}

let vetor = []
vetor[0] = pessoa

const pessoa2 = {
  nome: 'joao',
  age: 12,
  weight: 36,
  isSub: false
}
vetor[1] = pessoa2
console.log(vetor[0].age)
console.log(pessoa.nome, pessoa2.nome)
console.log(`meu nome é ${pessoa.nome} e eu tenho ${vetor[0].age} anos.`)

let teste = ['leander', 'Ana', { nome: 'bia'}, function(nome) { return nome}, (a, b) => a + b, {
  somar: function(x, y) { return x + y }
}]
console.log(teste[3]('leander'))
console.log(teste[3])
console.log(teste[4](3, 2))
console.log(teste[5].somar(2, 7))

// so teste loko
