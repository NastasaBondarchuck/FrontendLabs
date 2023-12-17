function ChangeColorSeven(e){
    if (e.target.style.backgroundColor === "transparent") e.target.style.backgroundColor = "lightSalmon";
    else e.target.style.backgroundColor = "transparent";
}
document.getElementById("seven_element").onclick = ChangeColorSeven;

function ChangeColorEight(e){
    if (e.target.style.backgroundColor === "transparent") {
        e.target.style.backgroundColor = "darkGreen";
        e.target.style.color = "lemonChiffon";
    }
    else {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "black";
    }
}
document.querySelector("#eight_element").onclick = ChangeColorEight;
