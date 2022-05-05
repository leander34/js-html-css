/*
    function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name, idade, salario) {
  this.name = name
  this.walk = function() {
    return this.name + ' esta andando'
  }
  this.idade = idade
  this.salario = salario
  this.dinheiro = function(m) {
    if(this.salario * m < 2000) { // m é o multiplo do salario
      return 'nao ganha muito'
    } else {
      return 'ganha bem até'
    }
  }
}

const leander = new Person('leander', 19, 10000)
const joaozinho = new Person('joaozinho', 19, 1000)

//console.log(leander.walk())
//console.log(joaozinho)
console.log(leander.dinheiro())
console.log(joaozinho.dinheiro(3))
