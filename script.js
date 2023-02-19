function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');

    } else {
        menuMobile.classList.add('open');
    }
}

// matricula 

const formulario = document.getElementById('form');
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const email = document.getElementById('email');

form.addEventListener('submit', evento => {
    evento.preventDefault();

    validateInputs();
});

const mensagemErro = (elemento, mensagem) => {
    const inputControle = elemento.parentElement;
    const errorDisplay = inputControle.querySelector('.error');

    errorDisplay.innerText = mensagem;
    inputControle.classList.add('.error');
    inputControle.classList.remove('.sucesso');
}

const mensagemSucesso = element => {
    const inputControle = element.parentElement;
    const errorDisplay = inputControle.querySelector('.error');

    errorDisplay.innerText = '';
    inputControle.classList.add('.error');
    inputControle.classList.remove('.sucesso');
}

const validaEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nomeValue = nome.value.trim();
    const telefoneValue = telefone.value.trim();
    const emailValue = email.value.trim();

    
    if (nomeValue === '') {
        mensagemErro(nome, 'Este campo é obrigatório');
    } else {
        mensagemSucesso(nome);
    }

    if (telefoneValue === '') {
        mensagemErro(telefone, 'Este campo é obrigatório');
    } else if (!/^\d{10,11}$/.test(telefoneValue)) {
        mensagemErro(telefone, 'O número de telefone deve ter entre 10 e 11 dígitos');
    } else {
        mensagemSucesso(telefone);
    }


    if (emailValue === '') {
        mensagemErro(email, 'Este campo é obrigatório');
    } else if (!validaEmail(emailValue)) {
        mensagemErro(email, 'Este E-mail não é válido');
    } else {
        mensagemSucesso(email);
    }

}

