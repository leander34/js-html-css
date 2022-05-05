function SISnotas(nota) {
  if( nota <= 100 && nota >= 90) {
    return "A"
  } else if(nota < 90 && nota >= 80) {
    return "B"
  } else if (nota < 80 && nota >= 70) {
    return "C"
  } else if (nota < 70 && nota >= 60) {
    return "D"
  } else if (nota < 60 && nota >= 0) {
    return "F"
  } else {
    return "Nota Inválida"
  }
}

console.log(SISnotas(100))
console.log(SISnotas(90))
console.log(SISnotas(85))
console.log(SISnotas(75))
console.log(SISnotas(65))
console.log(SISnotas(55))
console.log(SISnotas(25))
console.log(SISnotas(256))
console.log(SISnotas(-25))
