// duas formas de imprimir data
const h1 = document.querySelector('.container h1')
const data = new Date()
h1.innerHTML = data.toString()

//seleciona o dia pelo index no array
function diaSemana(dia) {
  const diasSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']
  return diasSemana[dia]
}
//seleciona o mes pelo index do array
function nomeMes(mes) {
  const meses = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'abr',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez'
  ]
  return meses[mes]
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `${num}0`
}

//formata e printa a data
function criaData(data) {
  const diaSemana = data.getDay()
  const nomeDia = diaSemana()
  const nomeMes = nomeMes()

  return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(
    data.getHours()
  )}) :${zeroAEsquerda(data.getMinutes())}`
}

// const opcoes = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric'
// }

// opcoes.timeZone = 'UTC'
// opcoes.timeZoneName = 'short'
h1.innerHTML = data.toLocaleDateString('pt-BR', criaData())

console.log(data.toLocaleDateString('pt-BR', criaData()))
