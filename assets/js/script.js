/*Js é uma linguagem case sensitive

pegando os elementos:
por Tag: getElementByTagname()
por Id:getElementById()
por Nome: getElementsByname ()
por Classe : getElementsByClassName ()
por Seletor: querySelector ()


*/


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let telefone = document.querySelector('#telefone')
let mensagem = document.querySelector('#receita')


function validaNome() {

    let txt = document.querySelector('#txtNome')

    if (nome.value.length < 3) {

        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector('#txtMensagem')

    if (mensagem.value.length < 3) {

        txtMensagem.innerHTML = 'Sua receita está muito curta'
        txtMensagem.style.color = 'red'

    } else {
        txtMensagem.innerHTML = ''
        txtMensagem.style.color = 'green'
    }

}