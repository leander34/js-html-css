// Função construtora
// Também retorna objeto
// Só que por meio de instâncias

function Pessoa(nome, sobrenome, nota) {
    // Atributos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    // Vou deixar o atributo nota privado pq não que ninguém tenha acesso
    // this.nota = nota


    // Métodos públicos
    this.aprovado = function() {
        return nota > 6
    }

    this.falarMeuNome = () => {
        return `Meu nome é: ${this.nome} e eu ${processo(nota)}`
    }

    // Método privado
    // Como esse método não sabe o contexto que ele pertence, ele não consegue acessar a 'nota', assim eu precisei passa-la como parâmetro
    processo = function(nota) {
        return nota > 6 ? 'estou dentro da universidade' : 'não passei no vestibular'
    }


}

const joaozinho = new Pessoa('Joaozinho', 'Fizt', 9)
const Gilberto = new Pessoa('Gil', 'Tyniu', 4)

console.log(joaozinho.aprovado())
console.log(Gilberto.aprovado())


console.log(Gilberto.falarMeuNome())
console.log(joaozinho.falarMeuNome())

