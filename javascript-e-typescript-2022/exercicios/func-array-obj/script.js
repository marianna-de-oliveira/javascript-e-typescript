function meuEscopo() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')

  const pessoas = []

  // form.onsubmit = function (e){
  //   e.preventDefault()
  // }

  function eventoForm(e) {
    e.preventDefault()
    const nome = form.querySelector('#nome')
    const sobrenome = form.querySelector('#sobrenome')
    const peso = form.querySelector('#peso')
    const altura = form.querySelector('#altura')

    // adicionou as informações das pessoas no array vazio que foi criado
    // prestar atenção quando usar metodos de array ou objetos ou qualquer coisa na verdade, pois as informações tem que estar entre parenteses, não entre chaves!!!!!!!!!!!!!!!!!!
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    })

    console.log(pessoas)

    //imprime a lista de pessoas no documento html quando o formulario for enviado
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`
  }

  form.addEventListener('submit', eventoForm)
}

meuEscopo()
