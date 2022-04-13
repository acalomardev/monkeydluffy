window.onload = function() {
    loadContent();
}
window.onpageshow = function() {
    loadContent();
}
window.onresize = function() {
    loadContent();
}

const body = document.getElementsByTagName("body")[0];
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const monkey = document.createElement("h1");
monkey.innerText = "Monkey D. Luffy";
const carousel = document.createElement("div");
function loadContent(){
    if (window.width < 426){ //MOBILE
        const resumen = document.createElement("main");
        resumen.classList.add("resumen-luffy");
        const resumencontent = document.createElement("p");
        pasado.innerText = "Monkey D. Luffy , más conocido como Luffy «Sombrero de Paja» , es el protagonista principal de la serie de manga y anime One Piece. Garp, hermano adoptivo del conocido pirata Ace «Puño de Fuego» ―antiguo comandante de la segunda división"+
        "de los Piratas de Barbablanca―, así como del oficial general del Ejército Revolucionario, Sabo. Su objetivo en la vida es convertirse en el próximo Rey de los Piratas, encontrar el legendario tesoro conocido como el «One Piece», que"+
        "perteneció al anterior Rey de los Piratas Gol D. Roger, y conquistar el Nuevo Mundo liderando una tripulación formada por grandes piratas. Como fundador y capitán de los Piratas de Sombrero de Paja, es el primer miembro que compone"+
        "la tripulación, así como uno de sus tres principales combatientes.";
        const habilidades = document.createElement("div");
        habilidades.classList.add("habilidades-luffy");
        const pasado = document.createElement("div");
        pasado.classList.add("pasado-luffy");
    }else if (window.width < 769){ //TABLET

    }else{ //LAPTOP

    }
}


function openTab(tabName){
    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}