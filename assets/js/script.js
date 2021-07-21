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
let nomeOk = false
let emailOk = false
let mensagemOk = false



function validaNome() {

    let txt = document.querySelector('#txtNome')

    if (nome.value.length < 3) {

        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
        nomeOk = true
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
        emailOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector('#txtMensagem')

    if (mensagem.value.length < 140) {

        txtMensagem.innerHTML = 'Sua receita está muito curta, verifique se está tudo correto'
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'

    } else {
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }

}

function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert('Receita enviada com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar.')
    }
}