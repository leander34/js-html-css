// Função factort
// Ela fabrica alguma coisa
//  No caso objetos


function pessoa(nome, sobrenome, salario) {
    return {
        nome,
        sobrenome,
        salario,
        getSalario() {
            return salario // nesse caso não precisa passar o this, ele vai sempre se referenciar ao objeto que foi criado
        }
    }
}

const joaozinho = pessoa('joaozinho', 'da Silva', 9000)
const ricardao = pessoa('ricardao', 'Ameida', 2000)
console.log(joaozinho)
console.log(ricardao)


console.log(joaozinho.sobrenome)
console.log(ricardao.sobrenome)


console.log(joaozinho.getSalario())
console.log(ricardao.getSalario())

