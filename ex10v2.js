function Show() {
    const checkbox = document.getElementById("check");
    const field = document.getElementById("field");
    if (checkbox.checked == true) {
        field.disabled = false;
    } else {
    field.disabled = true;
    }
}
function termsandconditions() {
    const checkbox = document.getElementById("check2");
    const button = document.getElementById("button");
    if (checkbox.checked == true) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}