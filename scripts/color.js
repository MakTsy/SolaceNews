function redBorder(element){
    element.style.borderColor = "#d92759";
}

function blackBorder(element){
    element.style.borderColor = getComputedStyle(document.body).getPropertyValue("--solace-black");
}