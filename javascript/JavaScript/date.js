console.log(new Date()) // devolve a data de hoje
console.log(new Date().getDate()) // devolve o dia do mes
console.log(new Date().getDay()) // devolve o dia da semana em numero
console.log(new Date().getHours()) // devolve a hora atual
console.log(new Date().getMinutes()) // devolve os minutos atual
console.log(new Date().getSeconds()) // devolve os segundos atuais
console.log(new Date().getMilliseconds())
console.log(new Date().getTime()) // devolve os milisegundo de 1970 ate hj
console.log(new Date(1648243049893))

const d = new Date() // isso
// new Date().getTime(); // é igual a isso
const maisDias = d.getDay() + 20
d.setDate(maisDias)


