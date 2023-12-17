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

function AddPicture(){
    let picture = document.getElementById("pictures").lastElementChild.cloneNode(true);
    document.getElementById("pictures").appendChild(picture);
}
function IncreasePicture(){
    let picture = document.getElementById("pictures").lastElementChild;
    let width = parseInt(picture.lastElementChild.width) + 50;
    if (width < 1000) picture.lastElementChild.style.width = width  + "px";
}
function DecreasePicture(){
    let picture = document.getElementById("pictures").lastElementChild;
    let width = parseInt(picture.lastElementChild.width) - 50;
    if (width > 100) picture.lastElementChild.style.width = width  + "px";
}
function DeletePicture(){
    if (document.getElementById("pictures").children.length > 1)
    {
        let picture = document.getElementById("pictures").lastElementChild;
        document.getElementById("pictures").removeChild(picture);
    }
}

document.getElementById("add").onclick = AddPicture;
document.getElementById("increase").onclick = IncreasePicture;
document.getElementById("decrease").onclick = DecreasePicture;
document.getElementById("delete").onclick = DeletePicture;

