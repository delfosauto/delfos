let IdLink = localStorage.getItem("IdLink");


/*Created listcar page*/
//Elementos pagina
for (i=0; i<=5; i++){
document.getElementById("foto_"+i).src = "compras/"+BDInvest[i].IdSite+".png";
document.getElementById("economia_"+i).innerText = BDInvest[i].profitPorc;
document.getElementById("retorno_"+i).innerText = BDInvest[i].profit;
document.getElementById("fabriB_"+i).innerText = carros[i].fabricante;
document.getElementById("modB_"+i).innerText = carros[i].modelo;
document.getElementById("versaoB_"+i).innerText = carros[i].versão;
document.getElementById("fabriI_"+i).innerText = carros[i].fabricante;
document.getElementById("modI_"+i).innerText = carros[i].modelo;
document.getElementById("versaoI_"+i).innerText = carros[i].versão;
document.getElementById("nacional_"+i).innerText = carros[i].valorPT;
document.getElementById("importar_"+i).innerText = carros[i].valor;
document.getElementById("cota_"+i).innerText = BDInvest[i].Mincota;
document.getElementById("dia_"+i).innerText = BDInvest[i].prazo;
document.getElementById("ano_"+i).innerText = carros[i].ano;
document.getElementById("km_"+i).innerText = carros[i].km;
document.getElementById("gas_"+i).innerText = carros[i].fuel;
document.getElementById("pais_"+i).innerText = carros[i].origem;
}