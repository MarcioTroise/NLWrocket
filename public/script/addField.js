// Procurar o botao  ....    Quando clicar no botao...
document.querySelector("#add-time").addEventListener('click', cloneField)

// Executar uma ação
function cloneField () {
    // Duplicar os campos ....   elementos HTML (duplicando toda div, TRUE)
    const fieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // Limpar os campos...
    const fields = fieldContainer.querySelectorAll('input')
    // limpando os valores
    fields.forEach(function(field) {
        //pegando o field do momento
        field.value = ""
    })
    // Colocar na pagina..
    document.querySelector('#schedule-items').appendChild(fieldContainer)
}
