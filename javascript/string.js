console.log('leander')
console.log("leander")
console.log(`leander`)
const a = 9
console.log(`leander ${a}`)

console.log('leander' + 9)
const b = {}
console.log(b === null)

const p = {
  nome: 'leander',
  x: 8,
  y: 7,
  soma(a) {
    return this.x + this.y + a
  },  
  outra: function(a) {
    console.log(this.x + this.y + a)
  }
}

console.log(p.soma(1))
p.outra(5)

//hoisting
// joga a variavel var - que é de escopo global - para cima do código

console.log(t) // hoisting ele sabe que a variavel foi declarada dps, mas nao pega o valor dela apenas fala que esta indefinida
var t = 1