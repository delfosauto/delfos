
let AsBuy = document.querySelectorAll('.As_buy');
let AsInvest = document.querySelectorAll(".As_Invest");
let perfil = localStorage.getItem("TypeCustomer");

if (perfil === "InvesCust") {
    AsBuy.forEach(function (b) { return b.style.display = `none`; });
    AsInvest.forEach(function (a) { return a.style.display = `block`; });

}
else {
    AsBuy.forEach(function (b) {
        return b.style.display = `block`;
    });
    AsInvest.forEach(function (a) { return a.style.display = `none`; });

}

/*Origin new photo */
let picture1 = document.querySelector("#IdCarImg1");
let picture2 = document.querySelector("#IdCarImg2");
let picture3 = document.querySelector("#IdCarImg3");
let picture4 = document.querySelector("#IdCarImg4");
let picture5 = document.querySelector("#IdCarImg5");
let IdLink = localStorage.getItem("IdLink");
/*Origin new info for elements made*/
let fabri = document.getElementById("namecar");
let mod = document.getElementById("modcar");
let vers = document.getElementById("verscar");
let valorPt = document.getElementById("goldOld");
let valor = document.getElementById("gold");
let origem = document.getElementById("countrycar");
let year = document.getElementById("yearCar");
let mil = document.getElementById("kmCar");
let gas = document.getElementById("fulcar");
let cv = document.getElementById("cvCar");
let cc = document.getElementById("ccCar");
let embreagem = document.getElementById("boxCar");
let refeCar = document.getElementById("refeCar");
let prata = document.getElementById("silver");
let prataPorc = document.getElementById("silverPorc");
let progress = document.getElementById("priceInvest__progress-bar");
let membros = document.getElementById("section__Price--attention-members");
let ClientBuy = document.getElementById("section__Price--attention-ClientBuy");
let consumoB = document.getElementById("sectio__detalhes--ConfBasic-ConsB");
let consumoE = document.getElementById("sectio__detalhes--ConfBasic-ConsE");
/*Seach value on table */
let linha = carros.findIndex(lin => lin.IdSite == IdLink);
console.log(IdLink);
console.log(linha);

/*Add new photo */
picture1.src = "compras/" + IdLink + ".png";
picture2.src = "compras/" + IdLink + "_2" + ".png";
picture3.src = "compras/" + IdLink + "_3" + ".png";
picture4.src = "compras/" + IdLink + "_4" + ".png";
picture5.src = "compras/" + IdLink + "_5" + ".png";
/*Add info for elements made */
fabri.innerHTML = carros[linha].fabricante;
mod.innerHTML = carros[linha].modelo;
vers.innerHTML = carros[linha].versão;
valorPt.innerHTML = carros[linha].valorPT;
valor.innerHTML = carros[linha].valor;
origem.innerHTML = carros[linha].origem;
year.innerHTML = carros[linha].ano;
mil.innerHTML = carros[linha].km;
gas.innerHTML = carros[linha].fuel;
cv.innerHTML = carros[linha].CV;
cc.innerHTML = carros[linha].CC;
embreagem.innerHTML = carros[linha].caixa;
consumoB.innerHTML = carros[linha].consumB;
consumoE.innerHTML = carros[linha].consumE;
refeCar.innerHTML = carros[linha].IdSite;
prata.innerHTML = carros[linha].valor;
membros.innerText = BDInvest[linha].ReservCotas;
ClientBuy.innerText = BDInvest[linha].ReservBuy;
/*Progess bar */
let valorBarra = ((BDInvest[linha].ReservCotas / BDInvest[linha].NCotas) * 100);
progress.style.width = valorBarra + "px";
prataPorc.innerHTML = valorBarra.toFixed(0);


/*Save idCar on localStorege*/
function pageBack() {
    document.getElementById("BtmBack").href = "listcarbuy.html#" + IdLink;
}

/*Create elements input:radio*/

let LineInvest = BDInvest.findIndex(function (a) {
    return a.IdSite == IdLink;
});
console.log("Index do BD (idlink)" + LineInvest);
for (let a = 1; a <= BDInvest[LineInvest].NCotas; a++) {
    let local = document.getElementById("price_simu");
    //create div e Label    
    local.appendChild(document.createElement("div")).appendChild(document.createElement("label")).id = a + "__simu--label";
    let tempLabel = document.getElementById(a + "__simu--label");
    tempLabel.htmlFor = a + "__simu--input";
    //create imput e atribui parametros
    tempLabel.appendChild(document.createElement("input")).id = a + "__simu--input";
    let tempInput = document.getElementById(a + "__simu--input");
    tempInput.setAttribute("type", "radio");
    tempInput.setAttribute("name", "option");

    tempLabel.appendChild(document.createElement("span")).id = a;
    let tempSpan = document.getElementById(a);
    tempSpan.innerText = " " + a + " Cota " + "(" + (BDInvest[LineInvest].Mincota * a + " €") + ")";
    tempSpan.addEventListener('click', LLInvest);
    // tempInput.addEventListener('click', LLInvest);
    
}
/*Inative cota */

let i = document.querySelectorAll("label>span").forEach(function (a) {
    if (a.id > (BDInvest[linha].NCotas - BDInvest[linha].ReservCotas)) {
        // console.log("Cotas reservadas " + a.id);
        a.classList.add("section__Price--Reservado");
    }
})

/*Create elements condução tab*/
for (let z = 1; z < BdConducao[linha].length; z++) {
    //TR creation
    let seguraTab = document.getElementById("conducaoTab");
    seguraTab.appendChild(document.createElement("tr")).id = z + "__conducaoTab--TR";
    let tr = document.getElementById(z + "__conducaoTab--TR");
    //TR, TD creation
    tr.appendChild(document.createElement("th")).id = z + "__conducaoTab--TH";
    tr.appendChild(document.createElement("td")).id = z + "__conducaoTab--TD";
    let th = document.getElementById(z + "__conducaoTab--TH");
    let td = document.getElementById(z + "__conducaoTab--TD");
    //Span creation
    th.appendChild(document.createElement("span")).id = z + "__conducaoTab--SPAM";
    let spam = document.getElementById(z + "__conducaoTab--SPAM");
    //Add inforation
    td.innerText = BdConducao[linha][z];
    td.classList.add("contenttxt")
    spam.classList.add("material-symbols-outlined");
    spam.innerText = "check_box";
}

/*Create elements segurança tab*/
for (let z = 1; z < BdSeguranca[linha].length; z++) {
    //TR creation
    let seguraTab = document.getElementById("seguraTab");
    seguraTab.appendChild(document.createElement("tr")).id = z + "__seguraTab--TR";
    let tr = document.getElementById(z + "__seguraTab--TR");
    //TR, TD creation
    tr.appendChild(document.createElement("th")).id = z + "__seguraTab--TH";
    tr.appendChild(document.createElement("td")).id = z + "__seguraTab--TD";
    let th = document.getElementById(z + "__seguraTab--TH");
    let td = document.getElementById(z + "__seguraTab--TD");
    //Span creation
    th.appendChild(document.createElement("span")).id = z + "__seguraTab--SPAM";
    let spam = document.getElementById(z + "__seguraTab--SPAM");
    //Add inforation
    td.innerText = BdSeguranca[linha][z];
    td.classList.add("contenttxt")
    spam.classList.add("material-symbols-outlined");
    spam.innerText = "check_box";
}

/*Create elements conforto tab*/
for (let z = 1; z < BdConforto[linha].length; z++) {
    //TR creation
    let confortoTab = document.getElementById("confortoTab");
    confortoTab.appendChild(document.createElement("tr")).id = z + "__confortoTab--TR";
    let tr = document.getElementById(z + "__confortoTab--TR");
    //TR, TD creation
    tr.appendChild(document.createElement("th")).id = z + "__confortoTab--TH";
    tr.appendChild(document.createElement("td")).id = z + "__confortoTab--TD";
    let th = document.getElementById(z + "__confortoTab--TH");
    let td = document.getElementById(z + "__confortoTab--TD");
    //Span creation
    th.appendChild(document.createElement("span")).id = z + "__confortoTab--SPAM";
    let spam = document.getElementById(z + "__confortoTab--SPAM");
    //Add inforation
    td.innerText = BdConforto[linha][z];
    td.classList.add("contenttxt")
    spam.classList.add("material-symbols-outlined");
    spam.innerText = "check_box";
}

/*Create elements Audio tab*/
for (let z = 1; z < BdAudio[linha].length; z++) {
    //TR creation
    let audioTab = document.getElementById("audioTab");
    audioTab.appendChild(document.createElement("tr")).id = z + "__audioTab--TR";
    let tr = document.getElementById(z + "__audioTab--TR");
    //TR, TD creation
    tr.appendChild(document.createElement("th")).id = z + "__audioTab--TH";
    tr.appendChild(document.createElement("td")).id = z + "__audioTab--TD";
    let th = document.getElementById(z + "__audioTab--TH");
    let td = document.getElementById(z + "__audioTab--TD");
    //Span creation
    th.appendChild(document.createElement("span")).id = z + "__audioTab--SPAM";
    let spam = document.getElementById(z + "__audioTab--SPAM");
    //Add inforation
    td.innerText = BdAudio[linha][z];
    td.classList.add("contenttxt")
    spam.classList.add("material-symbols-outlined");
    spam.innerText = "check_box";
}

/*Screen calculation */
function LLInvest(e) {
    let id = e.target.id;
    let LL = document.getElementById("section__Price--gainDivdiv-LL");
    let LLPorc = document.getElementById("section__Price--gainDivdiv-LLPorc");
    let term = document.getElementById("section__Price--gainDivdiv-term");
    let LLCalc = id * (BDInvest[linha].profit / BDInvest[linha].NCotas);
    //Add date
    LL.innerText = LLCalc;
    LLPorc.innerText = BDInvest[LineInvest].profitPorc;
    term.innerText = BDInvest[LineInvest].prazo;
    localStorage.setItem("valor", LLCalc);
    localStorage.setItem("NCotas", id);
    localStorage.setItem("CotaMin", BDInvest[linha].Mincota);
    localStorage.setItem("Prazo", BDInvest[LineInvest].prazo);
}
