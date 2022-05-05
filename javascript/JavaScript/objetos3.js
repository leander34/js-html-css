const avo = {
    sobrenome: 'minud'
}

const pai = {
    __proto__: avo,
    cabelo: 'preto'
}

const filho = {
    __proto__: pai,
    nome: 'leander'
}

console.log(filho.sobrenome)
console.log(Object.keys(filho))
Object.keys()