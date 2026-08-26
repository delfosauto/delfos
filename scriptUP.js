

const links = document.querySelectorAll("a");
let AsBuy = document.querySelectorAll('.As_buy');
let AsInvest = document.querySelectorAll(".As_Invest");
let perfil = localStorage.getItem("TypeCustomer");
let TitleSeach = document.getElementById("sectioTitleSeach");
if (perfil === "InvesCust") {
    AsBuy.forEach(function (b) { return b.style.display = `none`; });
    AsInvest.forEach(function (a) { return a.style.display = `block`; });
    TitleSeach.innerHTML = "Oportunidades de investimento em cotas"

}
else {
    AsBuy.forEach(function (b) { return b.style.display = `block`; });
    AsInvest.forEach(function (a) { return a.style.display = `none`; });
    TitleSeach.innerHTML = "Destaques para importação"
}

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Bloqueia o redirecionamento imediato

        setTimeout(() => {
            window.location.href = link.href;
        }, 300);
    });
});


//MENU
function opemenu() {
    document.getElementById("mascara").style.display = `block`;

    setTimeout(() => {
        document.getElementById("menu").style.display = `block`;
    }, 100);



}
function ofmenu() {
    document.getElementById("menu").style.display = `none`;
    document.getElementById("mascara").style.display = `none`;
    document.getElementById("seach").style.display = 'none';
}

function onchoise() {
    if (!perfil || perfil === "") {
        document.getElementById("seach").style.display = 'block';
        document.getElementById("mascara").style.display = `block`;
    }
    else {


        window.location.href = "listcarbuy.html";
    }
}
//Change page profile 
function typeCustomer(type) {
    let valor = type.dataset.customer;
    localStorage.setItem("TypeCustomer", valor);
}

function TypeIdCar(IdCar) {
    let valor = IdCar.dataset.idlink;
    localStorage.setItem("IdLink", valor);    
}