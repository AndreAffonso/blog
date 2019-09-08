const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]

const getMonth = number => {
  console.log("number aqui = ", number)
  return months[number - 1]
}

const formatDate = date => {
  const values = date.split("-")

  console.log("values = ", values)

  const day = values[2]
  const month = getMonth(Number(values[1]))
  const year = values[0]

  return `${day} de ${month} de ${year}`
}

export default formatDate
