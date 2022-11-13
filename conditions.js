const averageResult = (number1, number2) => {
  const average = (number1 + number2) / 2

  if (average > 7) return "Aprovado"


  if (average >= 6 && average <= 7) {
    return "Recuperação"
  }

  return "Reprovado"
}

console.log(averageResult(7, 9))

module.exports = {
  averageResult
}