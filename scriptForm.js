let IdLink = localStorage.getItem("IdLink");
let picture1 = document.querySelector("#IdCarImg1");
let refeCar = document.getElementById("refeCar");
picture1.src = "compras/" + IdLink + ".png";
refeCar.innerText = IdLink;

function pageBackForm() {
    document.getElementById("BtmBack").href = "cardcar.html";
}




function ativar(id) {
    let ids= id.id; 
    let cl = document.getElementById(ids+"1");
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