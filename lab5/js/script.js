function Validation(){
    let form = document.getElementById("form");
    let hints = form.querySelectorAll(".hint");
    hints.forEach(hint => hint.remove());
    let info = [];
    document.getElementById("information").innerHTML = "";


    if (form.name.value === null || form.name.value.length < 5) {
        form.name.style.borderBlockColor = "red";
        let name_hint = document.createElement("div");
        name_hint.id = "name_hint";
        name_hint.className = "hint";
        name_hint.style.color = "red";
        name_hint.textContent = "Name should contains at least 5 symbols.";
        form.insertBefore(name_hint, form.name);
    }
    else if (!/^[A-Z][a-z]+\s[A-z](.)[A-Z](.)$/.test(form.name.value)){
        let name_hint = document.createElement("div");
        form.name.style.borderBlockColor = "red";
        name_hint.id = "name_hint";
        name_hint.className = "hint";
        name_hint.style.color = "red";
        name_hint.textContent = "Name should be in format [Surname N.P.]";
        form.insertBefore(name_hint, form.name);
    }
    else{
        form.name.style.borderBlockColor = "";
        info[0] = "Name: " + form.name.value;
    }
    if (form.birth.value === null || form.birth.value.length < 10){
        form.birth.style.borderBlockColor = "red";
        let birth_hint = document.createElement("div");
        birth_hint.id = "birth_hint";
        birth_hint.className = "hint";
        birth_hint.style.color = "red";
        birth_hint.textContent = "Birth date should contains at least 10 symbols.";
        form.insertBefore(birth_hint, form.birth);
    }
    else if (!/^\d{2}(.)\d{2}(.)\d{4}$/.test(form.birth.value)){
        let birth_hint = document.createElement("div");
        form.birth.style.borderBlockColor = "red";
        birth_hint.id = "birth_hint";
        birth_hint.className = "hint";
        birth_hint.style.color = "red";
        birth_hint.textContent = "Birth should be in format [DD.MM.YYYY]";
        form.insertBefore(birth_hint, form.birth);
    }
    else{
        form.birth.style.borderBlockColor = "";
        info[1] = "Birth date: " + form.birth.value;
    }
    if (form.address.value === null || form.address.value.length < 6){
        form.address.style.borderBlockColor = "red";
        let address_hint = document.createElement("div");
        address_hint.id = "address_hint";
        address_hint.className = "hint";
        address_hint.style.color = "red";
        address_hint.textContent = "Address should contains at least 6 symbols.";
        form.insertBefore(address_hint, form.address);
    }
    else if (!/^(c.)\s[A-Za-z]+$/.test(form.address.value)){
        let address_hint = document.createElement("div");
        form.address.style.borderBlockColor = "red";
        address_hint.id = "address_hint";
        address_hint.className = "hint";
        address_hint.style.color = "red";
        address_hint.textContent = "Address should be in format [c. CityName]";
        form.insertBefore(address_hint, form.address);
    }
    else{
        form.address.style.borderBlockColor = "";
        info[2] = "Address: " + form.address.value;
    }
    if (form.email.value === null || form.email.value.length < 8){
        form.email.style.borderBlockColor = "red";
        let email_hint = document.createElement("div");
        email_hint.id = "email_hint";
        email_hint.className = "hint";
        email_hint.style.color = "red";
        email_hint.textContent = "Email should contains at least 8 symbols.";
        form.insertBefore(email_hint, form.email);
    }
    else if (!/^[a-z0-9]+@[a-z]+(.com)$/.test(form.email.value)){
        let email_hint = document.createElement("div");
        form.email.style.borderBlockColor = "red";
        email_hint.id = "telegram_hint";
        email_hint.className = "hint";
        email_hint.style.color = "red";
        email_hint.textContent = "Email should be in format [xxxxx@xxx.com]";
        form.insertBefore(email_hint, form.email);
    }
    else{
        form.email.style.borderBlockColor = "";
        info[3] = "Email: " + form.email.value;
    }
    if (form.telegram.value === null || form.telegram.value.length < 3){
        form.telegram.style.borderBlockColor = "red";
        let telegram_hint = document.createElement("div");
        telegram_hint.id = "telegram_hint";
        telegram_hint.className = "hint";
        telegram_hint.style.color = "red";
        telegram_hint.textContent = "Telegram should contains at least 3 symbols.";
        form.insertBefore(telegram_hint, form.telegram);
    }
    else if (!/^@\w+$/.test(form.telegram.value)){
        let telegram_hint = document.createElement("div");
        form.telegram.style.borderBlockColor = "red";
        telegram_hint.id = "telegram_hint";
        telegram_hint.className = "hint";
        telegram_hint.style.color = "red";
        telegram_hint.textContent = "Telegram should be in format [@xxxxx_xx]";
        form.insertBefore(telegram_hint, form.telegram);
    }
    else{
        form.telegram.style.borderBlockColor = "";
        info[4] = "Telegram: " + form.telegram.value;
    }

    if (form.querySelectorAll(".hint").length === 0) {
        info.forEach(
            item => { document.getElementById("information").innerHTML += `${item} <br>`; })
        form.name.value = "";
        form.birth.value = "";
        form.address.value = "";
        form.email.value = "";
        form.telegram.value = "";
    }
}
document.getElementById("enter").addEventListener("click", Validation);

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let cell = document.getElementById("six_cell");
function MouseEnterCell(e) {
    e.target.style.backgroundColor = `${getRandomColor()}`;
}
function MouseClickCell(e) {
    e.target.style.backgroundColor = document.getElementById("color").value;
}
function DoubleCLickCell(e) {
    let cells = document.querySelectorAll(".rectangle");
    cells.forEach(item => {
        item.style.backgroundColor = document.getElementById("color").value;
    })

}
cell.addEventListener("mouseenter", MouseEnterCell);
cell.addEventListener("click", MouseClickCell);
cell.addEventListener("dblclick", DoubleCLickCell);
