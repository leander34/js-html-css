function Say(nome) {
  console.log('antes')
  nome('opa')
  console.log('depois')
}

const teste = (a) => {
  console.log('chamei a função ' + a)
}

Say(teste)

Say(
  () => {console.log('outra vez')}
)