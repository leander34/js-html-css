const gestao = {
  receitas: [3000, 4000, 2000],
  despesas: [2347, 1200, 800, 600]
}

function SGF(ges) {
  let TotalReceita = 0
  let TotalDespesas = 0

  for(let i in ges.receitas) {
    TotalReceita += ges.receitas[i]
  }
  for(let i in ges.despesas) {
    TotalDespesas += ges.despesas[i]
  }
  if(TotalReceita == TotalDespesas) {
    console.log("Vocês estão no zero")
  } else if(TotalReceita > TotalDespesas) {
    console.log("Saldo positivo")
    console.log(`Saldo = ${TotalReceita - TotalDespesas}`)
  } else if(TotalReceita < TotalDespesas) {
    console.log("Saldo negativo")
    console.log(`Saldo = ${TotalReceita - TotalDespesas}`)
  }
}

SGF(gestao)