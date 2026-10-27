let botonMorado = document.getElementById("morado")
let botonAmarillo = document.getElementById("amarillo")
let botonNegro = document.getElementById("negro")

botonMorado.addEventListener("click", function(){
    document.body.style.backgroundColor = "purple";
});

botonAmarillo.addEventListener("click", function(){
    document.body.style.backgroundColor = "yellow";
});
 
botonNegro.addEventListener("click", function(){
    document.body.style.backgroundColor = "black";
});

