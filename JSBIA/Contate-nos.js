/*Perguntas Frequentes*/

/*Buttons para o Texto Aparecer*/
const buttons = document.querySelectorAll('button'); /*querySelectorAll:Retorna os elemento do documento que corresponde a uma classe de CSS, como um
objeto dentro de uma lista de objetos (array).Pode ser utilizado tanto para tangS como classes CSS.*/

buttons.forEach( button =>{  /*forEach:Facilita a iteração de estruturas (arrys, objetos e outros tipos que são interáveis).*/ 
    button.addEventListener('click',()=>{ /*addEventListener:Funções a serem chamadas quando um evento específico aconte(nesse caso quando o usuário clicar
no botão.)*/
        const faq = button.nextElementSibling; /*nextElementSibling:Retorna o elemento anterior do elemnto especificado.*/

        faq.classList.toggle('show'); /*toggle:Revelar e esconde o conteúdo.*/

    })
} )

