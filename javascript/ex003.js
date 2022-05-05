//TransformeDegree('50F')

function TransformeDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  //fluxo de erro
  if(!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  //fluxo ideal, F -> C
  let UpdateDegree = Number(degree.toUpperCase().replace("F", ""))
  let formula = fahrenheit => (fahrenheit - 32) * 5/9
  let degreeSing = 'C'

  //Fluxo alternativo, C -> F
  if(celsiusExists) {
    UpdateDegree = Number(degree.toUpperCase().replace("C", ""))
    formula = celsius => celsius * 9/5 + 32
    degreeSing = 'F'
  }

  return formula(UpdateDegree) + degreeSing

}

try {
  console.log(TransformeDegree('10C'))
  console.log(TransformeDegree('50F'))
  console.log(TransformeDegree('50Z'))
} catch (error) {
  console.log(error.message)
}
