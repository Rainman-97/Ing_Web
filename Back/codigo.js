
let cupones = [];


function generarCupon() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let cupon = "";
    for (let i = 0; i < 10; i++) {
        cupon += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    cupones.push(cupon);
    
    document.getElementById("cupon").innerText = "Cupón: " + cupon;
}


function validarCupon() {
    let codigoIngresado = document.getElementById("codigo").value;
    let mensaje = document.getElementById("mensaje");
    let imagen = document.getElementById("estadoImagen");

    if (cupones.includes(codigoIngresado)) {
        mensaje.innerText = "¡Cupón válido!";
        mensaje.style.color = "green";
        imagen.src = "happy.png";  
        imagen.style.display = "block";
        
        
        cupones = cupones.filter(cup => cup !== codigoIngresado);
    } else {
        mensaje.innerText = "Cupón inválido o ya canjeado.";
        mensaje.style.color = "red";
        imagen.src = "sad_cat.png";  
        imagen.style.display = "block";
    }
}
