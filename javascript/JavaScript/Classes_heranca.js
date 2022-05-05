class Fabricante {
    constructor(marca) {
        this.marca = marca
    }

    about() {
        // console.log(this.getEspecs())
        return `O ${this.nome} é brabo na terra`
    }
}


class Carro extends Fabricante {
    constructor(marca, nome, modelo, ano, cor) {
        super(marca)
        this.cor = cor
        this.ano = ano
        this.modelo = modelo
        this.nome = nome
    }

    getEspecs() {
        return `Esse carro é uma ${this.marca} ${this.nome} modelo ${this.modelo} do ano de ${this.ano} na cor ${this.cor}`
    }
}

const uno = new Carro('fiat' , 'uno', 'flex 1.0', 2004, 'cinza')
console.log(uno.marca)
console.log(uno.getEspecs())
console.log(uno.about())