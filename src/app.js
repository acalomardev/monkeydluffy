const screen = window.screen;
const body = document.getElementsByClassName("body")[0];
const container = document.getElementsByClassName("container")[0];
const resumen = document.getElementsByClassName("resumen")[0];
const aside = document.createElement("aside");
aside.className = "sidebar";
aside.innerHTML = '<nav class="nav"><ul><li><a href="#resumen">Resumen</a></li><li><a href="#category">Secciones</a></li></ul></nav>';

window.onload = function() {
    checkSidebarExistence();
}
window.onpageshow = function() {
    checkSidebarExistence();
}
window.onresize = function() {
    checkSidebarExistence();
}

function checkSidebarExistence() {
    if (screen.width > 768) {
                if (container.nextElementSibling.className != "sidebar") {
                    container.parentNode.insertBefore(aside, container.nextSibling);
                }
            
        //resumen.getElementsByTagName("img")[0].src = './img/images.jpg';
    } else {
        if (container.nextElementSibling.classList.contains("sidebar")) {

            body.removeChild(container.nextElementSibling);
        }
    }
}