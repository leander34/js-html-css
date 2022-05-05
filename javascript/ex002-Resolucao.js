const familia = {
  receitas: [3000, 4000, 2000],
  despesas: [2347, 1200, 800, 600]
}

function soma(array) {
  let total = 0
  for(let valor of array) {
    total += valor
  }

  return total
}

function CalculaBalanco() {
  let TotalReceita = soma(familia.receitas)
  let TotalDespesas = soma(familia.despesas)

  let BalancoTotal = TotalReceita - TotalDespesas
  let EstaOK = BalancoTotal >= 0

  let MensagemBalanco = "Negativo"
  if(EstaOK) {
    MensagemBalanco = "Positivo"
  }

  console.log(`Seu balanço está ${MensagemBalanco}: ${BalancoTotal.toFixed(2)}`)
}

CalculaBalanco()