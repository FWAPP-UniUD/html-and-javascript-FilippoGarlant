const placeholder = document.getElementById("placeholder");
function seek() {
    const nuovo_paragrafo = document.createElement('p');
    const nuovo_testo = document.createTextNode("Lorem ipsum ...");
    nuovo_paragrafo.appendChild(nuovo_testo)
    if (placeholder){
         placeholder.appendChild(nuovo_paragrafo);
        }
    placeholder.style.visibility = "visible";
}
document.querySelectorAll("button")[0].addEventListener('click', seek);

function hide() {
    if (placeholder.style.visibility === 'visible') {
        placeholder.style.visibility = "hidden";
    } 
}
document.querySelectorAll("button")[1].addEventListener('click', hide);
