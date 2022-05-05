const maisAleatorios = [1020, 22, 67, 9862, 9, 6, 219]
let novoArray = maisAleatorios.splice(2, 4) // a partir de (primeiro parâmentro) que quero x (segundo parâmetro) -se não passar nada é todos-
// e os que foram 'excluidos' (depende do ponto de vista) ele deixa no array original, ou resto ele tira e coloca no novo
console.log(novoArray)
console.log(maisAleatorios)


novoArray = maisAleatorios.slice(2, 6) // começa pegando na posicao 2 e vai a até a posição 6
console.log(novoArray)
console.log(maisAleatorios)
