/*Objetos 1*/
/**
 * @typedef {Object} carro
 * @property {number} Idlink
 * @property {string} origem
 * @property {string} fabricante
 * @property {string} modelo
 * @property {string} versão
 * @property {number} valorPT
 * @property {number} valor
 * @property {number} ano
 * @property {number} km
 * @property {string} fuel
 * @property {number} CV
 * @property {number} CC
 * @property {string} caixa
 * @property {number} consumB
 * @property {number} consumE
 */


/*Objetos 2*/
/**
 * @typedef {Object} carroBDInvest
 * @property {number} id_link
 * @property {number} NCotas
 * @property {number} prazo
 * @property {number} Mincota
 * @property {number} RestCota
 * @property {number} profit
 * @property {number} profitPorc
 * @property {number} ReservCotas
 * @property {number} ReservBuy
 */


/** @type {carro[]} */
const carros = [

    { Idlink: 174497, origem: "Alemanha", fabricante: "Audi", modelo: "A3 Sportback", versão: "Attraction", valorPT: 12990, valor: 11940, ano: 2017, km: 180, fuel: "diesel", CV: 116, CC: 1.598, caixa: "Manual", consumB:4.1, consumE:4.5 },
    { Idlink: 218943, origem: "Alemanha", fabricante: "Audi", modelo: "A3", versão: "Attraction", valorPT: 14994, valor: 12592, ano: 2016, km: 179, fuel: "diesel", CV: 110, CC: 1.598, caixa: "Manual", consumB:4.1, consumE:6.5 },
    { Idlink: 392117, origem: "Alemanha", fabricante: "BMW", modelo: "118d F20", versão: "Sport Line", valorPT: 10750, valor: 9920, ano: 2012, km: 195, fuel: "diesel", CV: 143, CC: 1.995, caixa: "Manual", consumB:5.1, consumE:4.5 },
]

/** @type {carroBDInvest[]} */
const BDInvest = [
    { id_link: 174497, NCotas: 8, prazo: 60, Mincota: 1492.50, profit: 1050, profitPorc: 9, ReservCotas: 4, ReservBuy:7 },
    { id_link: 218943, NCotas: 4, prazo: 90, Mincota: 3475, profit: 2900, profitPorc: 8, ReservCotas: 1, ReservBuy:4 },
    { id_link: 392117, NCotas: 8, prazo: 60, Mincota: 1492.50, profit: 1050, profitPorc: 20, ReservCotas: 1, ReservBuy:2 }
]


/*Outros*/
const BdSeguranca = [
[174497,"ABS","Airbag do condutor",	"Airbag do passageiro","Airbag lateral do condutor e passageiro"],
[218943,"ABS","Chamada automática de SOS","Airbag do condutor",	"Airbag do passageiro","Airbag lateral do condutor e passageiro"],
[392117,"Chamada automática de SOS","Airbag do condutor",	"Airbag do passageiro","Airbag lateral do condutor e passageiro"]
];

const BdConducao = [
[174497,"Cruise Control","Sensor de estacionamento traseiro","Assistente de estacionamento",	"Câmara de marcha-atrás","Retrovisores exteriores com regulação eléctrica",	"Sistema de aviso de transposição da via",	"Reconhecimento sinais trânsito","Luzes diurnas","Luzes diurnas LED","Faróis de nevoeiro","Farolim traseiro LED","	Travão de mão eléctrico","Direcção assistida"],
[218943,"Sensor de estacionamento traseiro","Assistente de estacionamento",	"Câmara de marcha-atrás","Retrovisores exteriores com regulação eléctrica",	"Sistema de aviso de transposição da via",	"Reconhecimento sinais trânsito","Luzes diurnas","Faróis de nevoeiro","Farolim traseiro LED","	Travão de mão eléctrico","Direcção assistida"],
[392117,"Assistente de estacionamento","Câmara de marcha-atrás","Retrovisores exteriores com regulação eléctrica",	"Sistema de aviso de transposição da via",	"Reconhecimento sinais trânsito","Luzes diurnas","Luzes diurnas LED","Faróis de nevoeiro","Farolim traseiro LED"]
];

const BdConforto = [
[174497,"Estofos em tecido","Apoio de braço dianteiro",	"Volante em pele",	"Comandos do rádio no volante",	"Volante multifunções",	"Fecho central sem chave",	"Sensor de chuva",	"Vidros eléctricos dianteiros",	"Vidros eléctricos traseiros"],
[218943,"Estofos em tecido","Apoio de braço dianteiro",	"Volante em pele",	"Comandos do rádio no volante",	"Volante multifunções",	"Fecho central sem chave",	"Sensor de chuva",	"Vidros eléctricos dianteiros",	"Vidros eléctricos traseiros"],
[392117,"Estofos em tecido","Apoio de braço dianteiro",	"Volante em pele",	"Comandos do rádio no volante",	"Volante multifunções",	"Fecho central sem chave",	"Sensor de chuva",	"Vidros eléctricos dianteiros",	"Vidros eléctricos traseiros"]
];

const BdAudio = [
[174497,"Apple CarPlay","Android Auto",	"Bluetooth,	Sistema mãos livres","Porta USB","Ecrã táctil",	"Controlo de funções do veículo por voz"],
[218943,"Apple CarPlay","Android Auto",	"Bluetooth,	Sistema mãos livres","Porta USB","Ecrã táctil",	"Controlo de funções do veículo por voz"],
[392117,"Apple CarPlay","Android Auto",	"Bluetooth,	Sistema mãos livres","Porta USB","Ecrã táctil",	"Controlo de funções do veículo por voz"]
];

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
let linha = carros.findIndex(lin => lin.Idlink == IdLink);
// console.log(IdLink);
//console.log(linha);

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
refeCar.innerHTML = carros[linha].Idlink;
prata.innerHTML = carros[linha].valor;
membros.innerText = BDInvest[linha].ReservCotas;
ClientBuy.innerText = BDInvest[linha].ReservBuy;
/*Progess bar */
let valorBarra = ((BDInvest[linha].ReservCotas / BDInvest[linha].NCotas) * 100);
progress.style.width = valorBarra + "px";
prataPorc.innerHTML = valorBarra;


/*Save idCar on localStorege*/
function pageBack() {
    document.getElementById("BtmBack").href = "listcarbuy.html#" + IdLink;
}

/*Create elements input:radio*/

let LineInvest = BDInvest.findIndex(function (a) {
    return a.id_link == IdLink;
});
console.log("Index do BD (idlink)"+LineInvest);
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
}
/*Inative cota */

let i = document.querySelectorAll("label").forEach(function (a) {
    let i = a.textContent;
    if (i[1] > (BDInvest[linha].NCotas-BDInvest[linha].ReservCotas)){
    console.log("Cotas reservadas "+i[1]);
    a.classList.add("section__Price--Reservado");
    }
})

/*Create elements condução tab*/
for (let z=1; z<=BdConducao.length+1; z++){
//TR creation
let seguraTab = document.getElementById("conducaoTab");
seguraTab.appendChild(document.createElement("tr")).id=z+"__conducaoTab--TR";
let tr = document.getElementById(z+"__conducaoTab--TR");
//TR, TD creation
tr.appendChild(document.createElement("th")).id=z+"__conducaoTab--TH";
tr.appendChild(document.createElement("td")).id=z+"__conducaoTab--TD";
let th = document.getElementById(z+"__conducaoTab--TH");
let td = document.getElementById(z+"__conducaoTab--TD");
//Span creation
td.appendChild(document.createElement("span")).id =z+"__conducaoTab--SPAM";
let spam = document.getElementById(z+"__conducaoTab--SPAM");
//Add inforation
th.innerText = BdConducao[linha][z];
th.classList.add("contenttxt")
spam.classList.add("material-symbols-outlined");
spam.innerText = "check_box";
}

/*Create elements segurança tab*/
for (let z=1; z<=BdSeguranca.length+1; z++){
//TR creation
let seguraTab = document.getElementById("seguraTab");
seguraTab.appendChild(document.createElement("tr")).id=z+"__seguraTab--TR";
let tr = document.getElementById(z+"__seguraTab--TR");
//TR, TD creation
tr.appendChild(document.createElement("th")).id=z+"__seguraTab--TH";
tr.appendChild(document.createElement("td")).id=z+"__seguraTab--TD";
let th = document.getElementById(z+"__seguraTab--TH");
let td = document.getElementById(z+"__seguraTab--TD");
//Span creation
td.appendChild(document.createElement("span")).id =z+"__seguraTab--SPAM";
let spam = document.getElementById(z+"__seguraTab--SPAM");
//Add inforation
th.innerText = BdSeguranca[linha][z];
th.classList.add("contenttxt")
spam.classList.add("material-symbols-outlined");
spam.innerText = "check_box";
}

/*Create elements conforto tab*/
for (let z=1; z<=BdConforto.length+1; z++){
//TR creation
let confortoTab = document.getElementById("confortoTab");
confortoTab.appendChild(document.createElement("tr")).id=z+"__confortoTab--TR";
let tr = document.getElementById(z+"__confortoTab--TR");
//TR, TD creation
tr.appendChild(document.createElement("th")).id=z+"__confortoTab--TH";
tr.appendChild(document.createElement("td")).id=z+"__confortoTab--TD";
let th = document.getElementById(z+"__confortoTab--TH");
let td = document.getElementById(z+"__confortoTab--TD");
//Span creation
td.appendChild(document.createElement("span")).id =z+"__confortoTab--SPAM";
let spam = document.getElementById(z+"__confortoTab--SPAM");
//Add inforation
th.innerText = BdConforto[linha][z];
th.classList.add("contenttxt")
spam.classList.add("material-symbols-outlined");
spam.innerText = "check_box";
}

/*Create elements Audio tab*/
for (let z=1; z<=BdAudio.length+1; z++){
//TR creation
let audioTab = document.getElementById("audioTab");
audioTab.appendChild(document.createElement("tr")).id=z+"__audioTab--TR";
let tr = document.getElementById(z+"__audioTab--TR");
//TR, TD creation
tr.appendChild(document.createElement("th")).id=z+"__audioTab--TH";
tr.appendChild(document.createElement("td")).id=z+"__audioTab--TD";
let th = document.getElementById(z+"__audioTab--TH");
let td = document.getElementById(z+"__audioTab--TD");
//Span creation
td.appendChild(document.createElement("span")).id =z+"__audioTab--SPAM";
let spam = document.getElementById(z+"__audioTab--SPAM");
//Add inforation
th.innerText = BdAudio[linha][z];
th.classList.add("contenttxt")
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
}