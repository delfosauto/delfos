let IdLink = localStorage.getItem("IdLink");
let CarCapitalStor = localStorage.getItem("CotaMin");
let CarCotasStor = localStorage.getItem("NCotas");
let CarPrazoStor = localStorage.getItem("Prazo");
let CarLLStor = localStorage.getItem("valor");

let picture1 = document.querySelector("#IdCarImg1");
let refeCar = document.getElementById("refeCar");
let CarCapital = document.getElementById("CarCapital");
let CarCotas = document.getElementById("CarCotas");
let CarPrazo = document.getElementById("CarPrazo");
let CarLL = document.getElementById("CarLL");
picture1.src = "compras/" + IdLink + ".png";
refeCar.innerText = IdLink;
CarCapital.innerText = CarCapitalStor*CarCotasStor;
CarCotas.innerText = CarCotasStor;
CarPrazo.innerText = CarPrazoStor;
CarLL.innerText = CarLLStor;

function pageBackForm() {
    document.getElementById("BtmBack").href = "cardcar.html";
}
function ativar(id) {
    let ids = id.id;
    let cl = document.getElementById(ids + "1");
    let cls = cl.className;
    if (cls == "section--atived") {
        console.log(cls);
        cl.classList.remove("section--atived");
        cl.classList.add("section--deactivated");
    }
    else {
        cl.classList.remove("section--deactivated");
        cl.classList.add("section--atived");
    }
}

const select = document.getElementById("fixtele").addEventListener('change',(e)=>{
    const valorselect = e.target.value;
    document.getElementById("fixteleDolle").value = valorselect;
} )


/*Formulario de envio */
const URL_SCRIPT = 'https://script.google.com/macros/s/AKfycbxqcIA8SIiWXNYD84cxM1SUSonZVBcNfQXg_fsl2Kz30K1kqjl_Xuuj-EyvuGoBcmno/exec';

document.getElementById('Section__form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o recarregamento da página

    const status = document.getElementById('statusEnvio');
    status.innerText = "Enviando...";

     const dados = {
         nome: document.getElementById('nome').value,
         sobrenome: document.getElementById('sobrenome').value,
         email: document.getElementById('email').value,
         fixtele: document.getElementById('fixteleDolle').value,
         tele: document.getElementById('tele').value,
         idlink: localStorage.getItem("IdLink"),
         marca: document.getElementById('marca').value,
         modelo: document.getElementById('modelo').value,
         km: document.getElementById('km').value,
         ano: document.getElementById('ano').value,
         cc: document.getElementById('cc').value,
         placa: document.getElementById('placa').value,
         mensagem: document.getElementById('mensagem').value
     };

     fetch(URL_SCRIPT, {
         method: 'POST',
         mode: 'no-cors', // Necessário para evitar bloqueio de CORS com o Apps Script
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(dados)
     })
         .then(() => {
             status.innerText = "Mensagem enviada com sucesso!";
             document.getElementById('Section__form').reset();
         })
         .catch(error => {
             status.innerText = "Erro ao enviar mensagem.";
             console.error(error);
         });
 }
 else{
    console.log("Foi um invest")
 }
);