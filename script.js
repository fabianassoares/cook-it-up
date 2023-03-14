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

