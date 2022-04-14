const screen = window.screen;
window.onload = function() {
    loadContent();
};
window.onpageshow = function() {
//loadContent();
};
window.onresize = function() {
    loadContent();
};
const body = document.getElementsByTagName("body")[0];
const header = document.getElementsByClassName("header")[0];
const footer = document.getElementsByClassName("footer")[0];
const monkey = document.createElement("h1");
monkey.innerText = "Monkey D. Luffy";
const carousel = document.getElementById("luffycarousel");
$('.carousel').carousel({
    interval: 5000
});
function loadContent() {
    const resumen = document.createElement("main");
    resumen.classList.add("resumen-luffy");
    const resumentitle = document.createElement("h2");
    resumentitle.innerText = "Resumen contenido: ";
    const resumencontent = document.createElement("p");
    resumencontent.innerHTML = "Monkey D. Luffy , m\xe1s conocido como Luffy \xabSombrero de Paja\xbb , es el protagonista principal de la serie de manga y anime One Piece. Luffy es el hermano adoptivo del conocido pirata <a href='subject-details.html#ace'>Ace</a> \xabPu\xf1o de Fuego\xbb \u2015antiguo comandante de la segunda divisi\xf3n de los Piratas de Barbablanca\u2015, as\xed como del oficial general del Ej\xe9rcito Revolucionario, <a href='subject-details.html#sabo'>Sabo</a>. Su objetivo en la vida es convertirse en el pr\xf3ximo Rey de los Piratas, encontrar el legendario tesoro conocido como el \xabOne Piece\xbb, que perteneci\xf3 al anterior Rey de los Piratas <a href='subject-details.html#gold'>Gol D. Roger</a>, y conquistar el Nuevo Mundo liderando una tripulaci\xf3n formada por grandes piratas. Como fundador y capit\xe1n de los Piratas de Sombrero de Paja, es el primer miembro que compone la tripulaci\xf3n, as\xed como uno de sus tres principales combatientes.\n\n";
    resumen.appendChild(resumentitle);
    resumen.appendChild(resumencontent);
    const habilidades = document.createElement("div");
    const habilidadestitle = document.createElement("h2");
    habilidadestitle.innerText = "Habilidades";
    const habilidadescontent = document.createElement("div");
    const capfisicastitle = document.createElement("h3");
    capfisicastitle.innerText = "Capacidades físicas";
    habilidadescontent.appendChild(capfisicastitle);
    const capfisicas = document.createElement("p");
    capfisicas.innerText = "Al ser el capitan de los Piratas de Sombrero de Paja, Luffy tiene una gran fuerza física, siendo capaz de destrozar piedras e incluso acero con sus propias manos. Además es también el mejor luchador de su tripulación pirata. Monkey D. Luffy a lo largo de toda la serie ha demostrado una gran fuerza física, así como resistencia, agilidad y velocidad.\nLuffy, además, tiene una personalizad muy fuerte y un carácter persistente, firme y fuerte. Durante muchos combates Luffy ha sido capaz de anticipar los movimientos de muchos de sus adversarios demostrando así las grances capacidades de combate que éste posee. Otra cualidad que posee Luffy, que es considerado una broma a lo largo de toda la serie es su inmenso apetito y la capacidad de regenerar dientes rotos tomando un vaso de leche.\nEl estilo de combate de Luffy se define por combate cuerpo a cuerpo, utilizando sus propias manos y pies para pelear. Sus grandes capacidades para el combate le permiten pelear siguiendo sus instintos que en la gran mayoría son correctos.";
    habilidadescontent.appendChild(capfisicas);
    const gomugomutitle = document.createElement("h3");
    gomugomutitle.innerHTML = "<a href='subject-details.html#gomugomu'>Gomu Gomu no mi</a>";
    const gomugomu = document.createElement("p");
    gomugomu.innerHTML = "Al ingerir la fruta del diablo <a href='subject-details.html#gomugomu'>Gomu Gomu</a>, Luffy se convirtió en un hombre de goma. Esta capacidad le permite estirar todas sus extremidades como si fuese de goma.\nTras años de entrenamiento, Luffy es capaz de complementar las capacidades que le otorga la Fruta Gomu Gomu con sus inmensas capacidades físicas. Su estilo de lucha, cuerpo a cuerpo depende en gran medida de las capacidades que le ha otorgado la fruta del diablo que consumió. Gracias a ser un hombre de goma puede utilizar la elasticidad de sus extremidades para ganas una increíble velocidad y así poder propiciar golpes devastadores. La capacidad de ser de goma le permite ser inmune a muchos ataques de sus potenciales enemigos, él es inmune a las balas, a los golpes y a la electricidad. A pesar de ello Luffy es susceptible a ataques realizados mediante objetos afilados como espadas o cuchillos, también lo es a quemaduras, envenenamientos, la deshidratación y el frío.";
    habilidadescontent.appendChild(gomugomutitle);
    habilidadescontent.appendChild(gomugomu);
    habilidades.appendChild(habilidadestitle);
    habilidades.appendChild(habilidadescontent);
    habilidades.classList.add("habilidades-luffy");
    const pasado = document.createElement("div");
    pasado.classList.add("pasado-luffy");
    const pasadotitle = document.createElement("h2");
    pasadotitle.innerText = "Pasado";
    const pasadocontent = document.createElement("div");
    pasadocontent.innerHTML = "<p>Luffy nació en Villa Foosha, donde a la corta edad de 6 años se encontró con una banda pirata liderada por un pirata llamado Akagami no Shanks (Shanks el Pelirrojo). Al poco de conocerlos, Luffy entabló una gran amistad con la banda pirata lo que le llevó a querer convertirse en un pirata cuando creciese. Después de un año, Luffy comió sin saberlo la fruta <a href='subject-details.html#gomugomu'>Gomu Gomu</a> que era un tesoro de los Piratas del Pelirrojo.</p><p>Un tiempo después, el abuelo de Luffy lo llevó a las montañas dónde se escondían unos bandidos porque estaba enfadado con Luffy cuando se enteró de su decisión de convertirse en pirata. En las montañas conoció a <a href='subject-details.html#ace'>Portgas D. Ace</a>, quien al principio no quería entablar amistad con Luffy e intentaba deshacerse de él para que no lo siguiera. Luffy, persiguió a Ace quien se reunió con <a href='subject-details.html#sabo'>Sabo</a> y escuchó como estaban ahorrando dinero para en un futuro comprar un barco y lanzarse a la mar para convertirse en piratas, cuando escuchó eso, Luffy, apareció y les dijo que él también quería convertirse en un pirata. Ace y Sabo decidieron atar a Luffy a un árbol y planearon sobre matarlo para mantener su secreto a salvo, en ese momento escucharon como el capitán de una banda pirata estaba en busca de un dinero robado así que decidieron desatar a Luffy y esconderse. Luffy se alejó de Ace y Sabo y gritó el nombre de Ace, el capitán de la banda pirata al reconocer el nombre de Ace decidió capturar a Luffy e interrogarlo. A pesar de la tortura por la que pasço Luffy, este no dijo nada sobre la ubicación de Ace y sobre el tesoro; Ace y Sabo siguiero el rastro del capitán y de Luffy y lo rescataron. Desde ese entonces Luffy se unió a Ace y Sabo.</p><p>Un tiempo más tarde, durante una pelea con una banda pirata contratada por el padre de Sabo, el capitán disparó al barco en el que estaba huyendo Sabo causando una explosión. Este suceso causo un gran daño emocional a Luffy y a Ace dado que pensaron que Sabo había muerto, años más tarde se descubre que Sabo salió con vida. Tras este incidente tanto Luffy como Ace deciden entrenar para ser más fuertes y que una situación como esta no vuelva a repetirse. Ace, a los 17 años (Luffy tenía 14), decidió lanzarse a la mar para convertirse en pirata. Luffy entrenó durante 3 años más y siguió los pasos de Ace lanzándose a la mar para convertirse en pirata.</p>";
    pasado.appendChild(pasadotitle);
    pasado.appendChild(pasadocontent);
    if (screen.width < 426) {
        if (document.getElementById("presentacion-luffy-l")) body.removeChild(document.getElementById("presentacion-luffy-l"));
        if (!document.getElementsByClassName("resumen-luffy")[0]) {
            const presentacionluffy = document.createElement("div");
            presentacionluffy.id = "presentacion-luffy-m";
            presentacionluffy.appendChild(resumen);
            presentacionluffy.appendChild(habilidades);
            presentacionluffy.appendChild(pasado);
            body.insertBefore(presentacionluffy, carousel);
        }
    } else if (!document.getElementsByClassName("bar")[0]) {
        if (document.getElementById("presentacion-luffy-m")) body.removeChild(document.getElementById("presentacion-luffy-m"));
        const presentacionluffy = document.createElement("div");
        presentacionluffy.id = "presentacion-luffy-l";
        const bar = document.createElement("div");
        bar.classList.add("bar");
        const resumentbutton = document.createElement("button");
        resumentbutton.type = "button";
        resumentbutton.classList.add("bar-button");
        resumentbutton.classList.add("bar-button-selected");
        resumentbutton.id = "resumen-luffy";
        resumentbutton.innerText = "Resumen";
        resumentbutton.setAttribute("onclick", "openTab('" + resumentbutton.id + "'" + ")");
        bar.appendChild(resumentbutton);
        const habilidadesbutton = document.createElement("button");
        habilidadesbutton.type = "button";
        habilidadesbutton.classList.add("bar-button");
        habilidadesbutton.id = "habilidades-luffy";
        habilidadesbutton.innerText = "Habilidades";
        habilidadesbutton.setAttribute("onclick", "openTab('" + habilidadesbutton.id + "'" + ")");
        bar.appendChild(habilidadesbutton);
        const pasadobutton = document.createElement("button");
        pasadobutton.type = "button";
        pasadobutton.classList.add("bar-button");
        pasadobutton.id = "pasado-luffy";
        pasadobutton.innerText = "Pasado";
        pasadobutton.setAttribute("onclick", "openTab('" + pasadobutton.id + "'" + ")");
        bar.appendChild(pasadobutton);
        presentacionluffy.appendChild(bar);
        resumen.classList.add("tab");
        resumen.id = "resumen-luffy-tab";
        habilidades.classList.add("tab");
        habilidades.style.display = "none";
        habilidades.id = "habilidades-luffy-tab";
        pasado.classList.add("tab");
        pasado.id = "pasado-luffy-tab";
        pasado.style.display = "none";
        presentacionluffy.appendChild(resumen);
        presentacionluffy.appendChild(habilidades);
        presentacionluffy.appendChild(pasado);
        body.insertBefore(presentacionluffy, carousel);
    }
}
function openTab(tabName) {
    const tabs = document.getElementsByClassName("tab");
    for(let i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
        if (tabs[i].id === tabName + "-tab") tabs[i].style.display = "block";
    }
    document.getElementsByClassName("bar-button-selected")[0].classList.remove("bar-button-selected");
    document.getElementById(tabName).classList.add("bar-button-selected");
}

//# sourceMappingURL=presentation.989cb559.js.map
