

/*Add new photo */
let picture1 = document.querySelector("#IdCarImg1");
let picture2 = document.querySelector("#IdCarImg2");
let picture3 = document.querySelector("#IdCarImg3");
let IdLink =  localStorage.getItem("IdLink");
picture1.src = "compras/"+IdLink+".jpg";


/*Save idCar on localStorege*/
function SalveIdCar(IdCar){
event.preventDefault();
localStorage.setItem("IdLink", IdCar.id);
window.location.href = IdCar.href;
}
