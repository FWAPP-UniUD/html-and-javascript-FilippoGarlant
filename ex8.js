const pic = document.getElementById("pic")
pic.addEventListener("mouseover", mouseOver);
pic.addEventListener("mouseout", mouseOut);
pic.addEventListener("click", onClick);
pic.addEventListener("contextmenu", rightclick);

function mouseOver() {
    pic.src = "./Subfolder/128_7.png";
}

function mouseOut() {
    pic.src = "./Subfolder/128_15.png";
}

function onClick() {
    pic.src = "./Subfolder/128_34.png";
}

function rightclick() {
    pic.src = "./Subfolder/128_36.png";
}