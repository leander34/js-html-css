const milisegundosHoje = Date.now() // pegar a data de hoje em milisegundos
const date = new Date() // criando uma date de hoje com esses milisegundos
const maisDias = date.getDate() + 20 // somanda o dia de hoje com mais vinte dias
const essaDataDaquiAlgunsDias = date.setDate(maisDias) // a partir da data de hoje, me vê que a data que vai dar daqui 20 dias e me devolve ela em mls
console.log(essaDataDaquiAlgunsDias)
console.log(milisegundosHoje)
console.log(date.getTime())
console.log(new Date(essaDataDaquiAlgunsDias))


// outras coisas 
// quantos mls tem um dia
const diaInMls = 24 * 60 * 60 * 1000

const quantosDiaSePassaram = essaDataDaquiAlgunsDias - milisegundosHoje
const dias = quantosDiaSePassaram / diaInMls
console.log(dias)


// no esquema de posts
// created_at : ms em que foi criado
// 