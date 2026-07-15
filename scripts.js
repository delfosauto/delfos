/*Objetos*/
/**
 * @typedef {Object} carro
 * @property {number} Idlink
 * @property {string} origem
 * @property {string} fabricante
 * @property {string} modelo
 * @property {string} versão
 * @property {number} valor
 * @property {number} ano
 * @property {number} km
 * @property {string} fuel
 * @property {number} CV
 * @property {number} CC
 * @property {string} caixa
 */

/** @type {carro[]} */
const carros=[

{	Idlink:174497, origem:	"Alemanha"	, fabricante:	"Audi"	, modelo:	"A3 Sportback"	, versão:	"Attraction"	, valor:	1050	, ano:	2017	, km:	180	, fuel:	"diesel"	, CV:	116	, CC:	1.598	, caixa:	"Manual"	},
{	Idlink:	17744677	, origem:	"Alemanha"	, fabricante:	"Audi"	, modelo:	"A3 Sportback"	, versão:	"Attraction"	, valor:	1900	, ano:	2013	, km:	230	, fuel:	"diesel"	, CV:	105	, CC:	1.598	, caixa:	"Manual"	},
{	Idlink:	1115024	, origem:	"Bélgica"	, fabricante:	"Audi"	, modelo:	"A3 Sportback"	, versão:	"Attraction"	, valor:	1450	, ano:	2013	, km:	200	, fuel:	"diesel"	, CV:	105	, CC:	1.598	, caixa:	"Manual"	},
{	Idlink:	218943	, origem:	"Alemanha"	, fabricante:	"Audi"	, modelo:	"A3"	, versão:	"Attraction"	, valor:	2100	, ano:	2016	, km:	179	, fuel:	"diesel"	, CV:	110	, CC:	1.598	, caixa:	"Manual"	},
{	Idlink:	392117	, origem:	"Alemanha"	, fabricante:	"BMW"	, modelo:	"118d F20"	, versão:	"Sport Line"	, valor:	1200	, ano:	2012	, km:	195	, fuel:	"diesel"	, CV:	143	, CC:	1.995	, caixa:	"Manual"	},
{	Idlink:	3163746	, origem:	"Alemanha"	, fabricante:	"BMW"	, modelo:	"118d F40"	, versão:	"M Sport"	, valor:	2000	, ano:	2020	, km:	230	, fuel:	"diesel"	, CV:	150	, CC:	1.995	, caixa:	"Automática"	},
{	Idlink:	25221242	, origem:	"Alemanha"	, fabricante:	"BMW"	, modelo:	"116d F20"	, versão:	"Advance-Advantage"	, valor:	2900	, ano:	2017	, km:	80	, fuel:	"diesel"	, CV:	116	, CC:	1.498	, caixa:	"Manual"	}
]
/*Outros*/


/*Origin new photo */
let picture1 = document.querySelector("#IdCarImg1");
let picture2 = document.querySelector("#IdCarImg2");
let picture3 = document.querySelector("#IdCarImg3");
let picture4 = document.querySelector("#IdCarImg4");
let picture5 = document.querySelector("#IdCarImg5");
let IdLink =  localStorage.getItem("IdLink");
/*Origin new info */
let fabri = document.getElementById("namecar");
let mod = document.getElementById("modcar");
let vers = document.getElementById("verscar");
let valor = document.getElementById("gold");
let origem = document.getElementById("countrycar");
let year = document.getElementById("yearCar");
let mil = document.getElementById("kmCar");
let gas = document.getElementById("fulcar");
let cv = document.getElementById("cvCar");
let cc = document.getElementById("ccCar");
let embreagem = document.getElementById("boxCar");
/*Seach value on table */
let linha = carros.findIndex(lin=>lin.Idlink==IdLink);
console.log(IdLink);
console.log(linha);

/*Add new photo */
picture1.src = "compras/"+IdLink+".png";
picture2.src = "compras/"+IdLink+"_2"+".png";
picture3.src = "compras/"+IdLink+"_3"+".png";
picture4.src = "compras/"+IdLink+"_4"+".png";
picture5.src = "compras/"+IdLink+"_5"+".png";
/*Add info */
fabri.innerHTML = carros[linha].fabricante;
mod.innerHTML = carros[linha].modelo;
vers.innerHTML = carros[linha].versão;
valor.innerHTML = carros[linha].valor;
origem.innerHTML = carros[linha].origem;
year.innerHTML = carros[linha].ano;
mil.innerHTML = carros[linha].km;
gas.innerHTML = carros[linha].fuel;
cv.innerHTML = carros[linha].CV;
cc.innerHTML = carros[linha].CC;
embreagem.innerHTML = carros[linha].caixa;


/*Save idCar on localStorege*/
function SalveIdCar(IdCar){
event.preventDefault();
localStorage.setItem("IdLink", IdCar.id);
window.location.href = IdCar.href;
}

function pageBack() {
    document.getElementById("BtmBack").href = "index.html#"+IdLink;
}