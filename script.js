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
