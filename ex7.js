document.getElementById("pic").addEventListener("mouseover", mouseOver);
document.getElementById("pic").addEventListener("mouseout", mouseOut);
document.getElementById("pic").addEventListener("click", onClick);
document.getElementById("pic").addEventListener("contextmenu", rightclick);

function mouseOver() {
    window.alert("You entered the image");
}

function mouseOut() {
    window.alert("You exited the image");
}

function onClick() {
    window.alert("You clicked the image");
}

function rightclick() {
    window.alert("You right-clicked the image");
}