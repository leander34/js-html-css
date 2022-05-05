function writeYourName(name, moeda, symbol = 'R$') {
    return `Bem-vindo ${name} ${this.lastName}, você tem ${ShowBalance(this.balance, symbol)} ${moeda}`
}

function ShowBalance(balance, symbol = 'R$') {
    return `${symbol} ${balance.toFixed(2)}`
}

const pessoa = {
    lastName: 'Silveira',
    balance: 50000
}

const functionWriteYourNameBinded = writeYourName.bind(pessoa) // Ligando a função a um contexto, no caso ao objeto pessoa
console.log(functionWriteYourNameBinded('Gilzao', 'cocos'))

// o call e apply também a liga a função a algum cotexto
// assim se torna possível utilizar o this dentro da função
console.log(writeYourName.call(pessoa, 'Leander', 'reais')) // similar ao bind só que usa-se na execução
console.log(writeYourName.call(pessoa, 'Leander', 'dólares', '$'))
console.log(writeYourName.apply(pessoa, ['Jailtens', 'euros', 'EU']))