
/*Constantes*/
//Local
let IdLink = localStorage.getItem("IdLink");
let customer = localStorage.getItem("TypeCustomer");
let CarCapitalStor = localStorage.getItem("CotaMin");
let CarCotasStor = localStorage.getItem("NCotas");
let CarPrazoStor = localStorage.getItem("Prazo");
let CarLLStor = localStorage.getItem("valor");
//Document
let agree = document.getElementById("form--check-agree");
let send = document.getElementById("Section__form--button-send");
let picture1 = document.querySelector("#IdCarImg1");
let refeCar = document.getElementById("refeCar");
let CarCapital = document.getElementById("CarCapital");
let CarCotas = document.getElementById("CarCotas");
let CarPrazo = document.getElementById("CarPrazo");
let CarLL = document.getElementById("CarLL");
let sendMsg = document.getElementById("business_M");
const URL_SCRIPT = 'https://script.google.com/macros/s/AKfycbz_TeJpzr-JgN4FmB22X_nvP2fCSGOfB5pegsNE2ZXNX2i7z-XwZ0zJckUweQmsv4k/exec';
const select = document.getElementById("fixtele").addEventListener('change', (e) => {
    const valorselect = e.target.value;
    document.getElementById("fixteleDolle").value = valorselect;
})

/*Carregamentos de Html*/
picture1.src = "compras/" + IdLink + ".png";
refeCar.innerText = IdLink;
CarCapital.innerText = CarCapitalStor * CarCotasStor;
CarCotas.innerText = CarCotasStor;
CarPrazo.innerText = CarPrazoStor;
CarLL.innerText = CarLLStor;
//BTM's submit, agree, Msg
if (customer == "buyCust") {
    send.innerText = "Enviar pedido";
    send.classList.add("button__default--buy");
    agree.classList.add("Section__form--check-agree-buy");
    sendMsg.classList.add("Section__form--check-noid-buy");
}
else {
    send.innerText = "Solicitar cotas";
    send.classList.add("button__default--invest");
    agree.classList.add("Section__form--check-agree-Invest");
    sendMsg.classList.add("Section__form--check-noid-invest");
}

/*Funções */
//Botão returnar
function pageBackForm() {
    document.getElementById("BtmBack").href = "cardcar.html";
}
//Botão Ativar DIV oculta
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

/*Formulario de envio */
document.getElementById('Section__form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o recarregamento da página

    const status = document.getElementById('statusEnvio');
    status.innerText = "Enviando...";

    const dados = {
        typecustomer: localStorage.getItem("TypeCustomer"),
        idlink: localStorage.getItem("IdLink"),
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        email: document.getElementById('email').value,
        fixtele: document.getElementById('fixteleDolle').value,
        tele: document.getElementById('tele').value,
        ncotas: localStorage.getItem("NCotas"),
        ll: localStorage.getItem("valor"),
        prazo: localStorage.getItem("Prazo"),
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
            poup
        })
        .catch(error => {
            status.innerText = "Erro ao enviar mensagem.";
            console.error(error);
        });
});