document.getElementById("pic").addEventListener("mouseover", mouseOver);
document.getElementById("pic").addEventListener("mouseout", mouseOut);
document.getElementById("pic").addEventListener("click", onClick);
document.getElementById("pic").addEventListener("contextmenu", rightclick);

function mouseOver() {
    alert("You entered the image");
}

function mouseOut() {
    alert("You exited the image");
}

function onClick() {
    alert("You clicked the image");
}

function rightclick() {
    alert("You right-clicked the image");
}