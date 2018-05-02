function write() {
    const num_value = document.getElementById("n_paragraphs").value;
    const radio_value = document.querySelector('input[name=tot_lenght]:checked').value;
    const drop_down = document.getElementById("decoration");
    const drop_down_value = drop_down.options[drop_down.selectedIndex].value;
    const url =  "http://loripsum.net/api/${num_value}/${radio_value}/${drop_down_value}"

    fetch(url).then(function(response) {
        if (!response.ok) {
            const res = response.json();
            throw Error(res.result);
        }
        return response.json();
    }).then(function(data) {
        const placeholder = document.getElementById("placeholder");
        const content = document.createTextNode("p");
        content.textContent = data[0];/*<-*/
        placeholder.appendChild(content);
    }).catch(function(error) {
        const contenitore = document.getElementById("placeholder");
        const content = document.createElement("p");
        content.textContent = error;
        placeholder.appendChild(content);
    });
}
document.getElementById("send").addEventListener('click', write);

document.getElementById("clear").addEventListener('click', clear);
function clear(){
    const placeholder = document.getElementById("placeholder");
    placeholder.removeChild(placeholder.childNodes[0]);          
}