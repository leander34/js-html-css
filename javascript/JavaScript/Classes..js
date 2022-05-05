class gastos {
    constructor(produto, valor, dia, mes) {
        this.produto = produto
        this.valor = valor
        this.dia = dia
        this.mes = mes
    }
}


class Pessoa {
    // variável privada em classes
    // preciso declará-la primeiro
    #max_despesas
    constructor(nome, sobrenome, salario, max_despesas) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.salario = salario
        // posse setar o valor depois
        this.#max_despesas = max_despesas
        this.gastos = []
    }

    getSalary() {
        return this.salario
    }

    sobrando() {
        return this.salario - this.#max_despesas
    }

    verificaGastos(gastos) {
        let total = 0
        gastos.forEach(gasto => {
            total += gasto.valor
        })

        if(total > this.#max_despesas) {
            let passou = total - this.#max_despesas
            throw new Error(`Você gastará mais de pode, retire ${passou} reais`)
        }
    }

    adicionarGasto(...gastos) {
        try {
            this.verificaGastos(gastos);
            this.gastos.push(...gastos);
        } catch (error) {
            console.log(error.message)
        }
    }

    mostrarTotalGasto() {
        let valor = 0
        this.gastos.forEach(gasto => {
            valor += gasto.valor
        })

        return valor
    }

    estouNoVermelho() {
        return this.mostrarTotalGasto() > this.#max_despesas ? 'Você já gastou mais do que devia' : `Você ainda pode gastar ${this.#max_despesas - this.mostrarTotalGasto()}`
    }
}

const mouseGamer = new gastos('mouse', 150, 24, 3)
const tecladoGamer = new gastos('teclado', 250, 24, 3)
const monitor = new gastos('monitor', 1599, 30, 4)
const carro = new gastos('BMW', 50000, 30, 4)


const leander = new Pessoa('leander', 'Silveira', 50000, 35000)
leander.adicionarGasto(mouseGamer, tecladoGamer, monitor, carro)


console.log(leander.mostrarTotalGasto())
console.log(leander.estouNoVermelho())

// console.log(leander.gastos)
// console.log(leander.getSalary())
// console.log(leander.sobrando())