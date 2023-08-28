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

for(let i=0; i<parolaNascosta.length; i++){
    caselleParola.innerHTML+= "<span>" + " _ " + "</span>"
}


btn.addEventListener("click", function(){

    if(text.value.toLowerCase() == parolaNascosta){
        console.log("indovinato")
        caselleParola.innerHTML = ""
        for (let i = 0; i < parolaNascosta.length; i++){
            caselleParola.innerHTML+= "<span>" + parolaNascosta[i] + "</span>"
        }
        setTimeout(function(){
            alert("hai vinto!")
            location.reload(); //refresh della pagina cosi cambia la parola
        },500)
    }
    else{
        let lettera = text.value.toLowerCase();
        let display = ""
        
        for (let i = 0; i < parolaNascosta.length; i++) {
            if (lettera === parolaNascosta[i]) {
                display += "<span>" + parolaNascosta[i] + "</span>";
            } else {
                console.log(caselleParola.children[i].outerHTML)
                display += caselleParola.children[i].outerHTML; //prende il figlio di caselle in posizione i e restituisce ciò che c'era nell html di span di quel figlio
            }
        }
        
        caselleParola.innerHTML = display;
    }

    
})



