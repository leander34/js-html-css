/*
throw = lançaamento
catch = capturar
try = tentar

tente executar um codigo, se tiver um lançamento de erro o catch captura
*/

//throw
function SayMyName(name = '') {
  if(name == '') {
    throw 'Nome é obrigatório' // lançamento do erro
  }
  // se tiver algum erro lançado, o código não continua
  console.log(`Bem-vindo de volta ${name}`)
}

//try...catch

try { // tente excutar isso ( se tiver algum erro, o catch irá capturar e mostrar na tela)
  SayMyName('Gatão')
} catch(e) { // catch captura o erro
  console.log(e)
}

console.log('Depois do try...catch')
