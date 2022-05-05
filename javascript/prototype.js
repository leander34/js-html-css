/*
Prototype

*prototype-based language
*prototype chain
*__proto__

todos os tipos de dados são embrulhados por objetos

*/




const leander = 'leander'
console.log(leander.__proto__)
const t = ['l', 'e', 'a']
console.log(t.__proto__)

const p1 = {
  nome: 'leander',
  cabelo: 'preto'
}
const p2 = {
  __proto__: p1,
  nome:'joao',
  cabelo:'amarelo'
}
console.log(p1.nome)
console.log(p1.cabelo)
console.log(p2.nome)
console.log(p2.cabelo)
console.log(p2)


