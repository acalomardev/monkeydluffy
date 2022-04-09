const readmoreLinks = document.getElementsByClassName("readmore");
const closereadmoreLinks = document.getElementsByClassName("close");
for(let i = 0; i < closereadmoreLinks.length; i++)closereadmoreLinks[i].onclick = function(e) {
    e.preventDefault();
    let showedElements = e.target.parentNode.parentNode.getElementsByClassName("hided");
    for(let j = 0; j < showedElements.length; j++)if (showedElements[j].classList.contains("showed")) showedElements[j].classList.remove("showed");
    e.target.parentNode.parentNode.getElementsByClassName("readmore")[0].style.display = "inline";
};
for(let i1 = 0; i1 < readmoreLinks.length; i1++)readmoreLinks[i1].onclick = function(e) {
    e.preventDefault();
    const hidedElements = e.target.parentNode.parentNode.getElementsByClassName("hided");
    for(let j = 0; j < hidedElements.length; j++)if (!hidedElements[j].classList.contains("showed")) hidedElements[j].classList.add("showed");
    e.target.style.display = "none";
};

//# sourceMappingURL=subject-details.6ad2eeaf.js.map
