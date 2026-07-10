

/*Add new photo */
let elemento = document.querySelector("#IdCarImg");
let IdLink =  localStorage.getItem("IdLink")
elemento.src = "compras/"+IdLink+".jpg";


/*Save idCar on localStorege*/
function SalveIdCar(IdCar){
event.preventDefault();
localStorage.setItem("IdLink", IdCar.id);
window.location.href = IdCar.href;
}
