

function solicitarNombre() {
    alert("Bienvenido a Arcat Games 🎮")
    let nombre = prompt("Ingrese su nombre");
    while(nombre ===""){
    nombre = prompt("Ingrese su nombre");
    } 
}

function mostrarJuegos(){
let juegos;
do{
juegos = parseInt(prompt("Que juego estas buscando? : \n1)Dead Island 2\n2)Fifa 23\n3)Demons Souls"))}while(juegos!=1 && juegos!=2 && juegos!=3)

switch(juegos){
    case 1:
        return "Dead Island 2";
    case 2:
        return "Fifa 23";
    case 3:
        return "Demons Souls"
}

}

function validarPrecio(juego){
 if (juego==="Dead Island 2"){
   return 16000;
}
else if(juego==="Fifa 23"){
   return 13000;
   }else if(juego==="Demons Souls"){
    return 10000;
   }
}

function cobrar(nombre,precio){
alert("Usted compra el siguiente Juego:"+nombre+"\nPrecio:$"+precio)
let pago = parseInt(prompt("Con cuanto pagas?"))
if(pago> precio){
    alert("Gracias ! Su vuelto es "+ (pago-precio))
}else{
    alert("No te alcanza !😢")
}
}

solicitarNombre();
let juegoNombre = mostrarJuegos();
let precioJuego = validarPrecio(juegoNombre);
cobrar(juegoNombre,precioJuego)