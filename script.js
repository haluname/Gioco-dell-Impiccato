var parole = [
    "sommozzatore",
    "massaggiatrice",
    "marca",
    "prigione",
    "tubo",
    "commento",
    "automatico",
    "furto",
    "piedistallo",
    "farina",
    "carpa",
    "srotolare",
    "indirizzo",
    "plastica",
    "smalto",
    "sud",
    "randagi",
    "artisti",
    "fragile",
    "argilla"
]

var img = [
    "img/Fig1.png",
    "img/Fig2.png",
    "img/Fig3.png",
    "img/Fig4.png",
    "img/Fig5.png"
]

let divImg = document.querySelector(".imgImpiccato")
let rnd = Math.floor(Math.random() * 20);
let text = document.querySelector(".indovinaParola")
let btn = document.querySelector(".inviaParola");
let caselleParola = document.querySelector(".caselleParola");
let parolaNascosta = parole[rnd];
console.log(parolaNascosta)
divImg.style.backgroundImage = `url("${img[0]}")`


btn.addEventListener("click", function(){
    if(text.value.toLowerCase() == parolaNascosta){
        console.log("indovinato")
    }
    else(console.log("no"))
})



