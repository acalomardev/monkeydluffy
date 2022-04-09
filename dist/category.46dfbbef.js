const readmoreLinks = document.getElementsByClassName("readmore");
const closereadmoreLinks = document.getElementsByClassName("close");
for(let i = 0; i < closereadmoreLinks.length; i++)closereadmoreLinks[i].onclick = function(e) {
    e.preventDefault();
    let showedElements = e.target.parentNode.parentNode.getElementsByClassName("hided");
    if (showedElements[j].classList.contains("showed")) showedElements[j].classList.remove("showed");
};
for(let i1 = 0; i1 < readmoreLinks.length; i1++)readmoreLinks[i1].onclick = function(e) {
    e.preventDefault();
    const hidedElements = e.target.parentNode.parentNode.getElementsByClassName("hided");
    for(let j = 0; j < hidedElements.length;)if (!hidedElements[j].classList.contains("showed")) hidedElements[j].classList.add("showed");
};

//# sourceMappingURL=category.46dfbbef.js.map
