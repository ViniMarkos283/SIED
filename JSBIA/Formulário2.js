const form  = document.getElementById('form'); //essa variavel ela pega o formulario pela ID
const campos = document.querySelectorAll('.required'); //Pega todos os elementos que tem a classe required
const spans = document.querySelectorAll('.span-required'); //Pega todos os elementos que tem a classe span-required
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; // Este é um validador de email (verifica se tem os simbolos necessários)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    cnpjValidate();
    telValidate();
    cepValidate();

});

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){ // função que valida o nome
    if(campos[0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function emailValidate(){ // função que valida o email
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function cnpjValidate(){ // função que valida o nome
    if(campos[3].value.length < 8)
    {
        setError(3);
    }
    else
    {
        removeError(3);
    }
}
function telValidate(){ // função que valida o nome
    if(campos[4].value.length < 9)
    {
        setError(4);
    }
    else
    {
        removeError(4);
    }
}
function cepValidate(){ // função que valida o nome
    if(campos[4].value.length < 7)
    {
        setError(4);
    }
    else
    {
        removeError(4);
    }
}






