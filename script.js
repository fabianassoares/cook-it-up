/* JS para carrosel de imagens */

const imgs = document.getElementById("img-carrosel")
const img = document.querySelectorAll("#img-carrosel img")

let i = 0;

function carrosel () {
    i ++;

if (i >= img.length-2){
    i = 0;
}

imgs.style.transform = `translateX(${-i * 500}px)`;
}

setInterval (carrosel, 3000);

/* JS para validação do formulário */

const form  = document.getElementById("formulario");
const nome  = document.getElementById("user-name");
const email = document.getElementById("user-email");
const msg   = document.getElementById("msg-user");
const span  = document.querySelectorAll(".span-required");
const emailRegex = /\S+@\S+\.\S+/;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    nameValidate();
    emailValidate();

});

function nameValidate (){
    if (nome.value.length < 3){
        nome.style.border = '2px solid #FF0000';
        span[0].style.display = 'block'
    } else {
        nome.style.border = ''
        span[0].style.display = 'none'
     }
    }

function emailValidate (){
    if (!emailRegex.test(email.value)){
        //console.log('Email inválido!')
        email.style.border = '2px solid #FF0000';
        span[1].style.display = 'block'
    } else {
        //console.log('Email válido')
        email.style.border = ''
        span[1].style.display = 'none'
     }
    }

/* JS para cards de ler mais */

let more = document.querySelectorAll('#read-button');
for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', function () {
        more[i].parentNode.classList.toggle('active')
    })
}

/* JS para efeito de digitação */

var paragrafo = document.querySelector('.par-dig');
var texto = paragrafo.innerHTML
var index = 0

const escrever = () =>{
    paragrafo.innerHTML = paragrafo.innerHTML.replace('|', "")
    
    if (texto.length > index){
        if (index == 0){
            paragrafo.innerHTML = texto.charAt(index)
        } else {
            paragrafo.innerHTML += texto.charAt(index)
        }
        paragrafo.innerHTML += '|'

        index++
        setTimeout(escrever, 50)
    }
}

escrever()

