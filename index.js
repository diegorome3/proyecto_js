
var nombre = prompt("Ingrese su nombre");
var nombre_ingresado = nombre
var espacio = " "

while (nombre == ""){
    console.log("Por favor ingrese su nombre");
    alert("Por favor ingrese su Nombre");
    nombre = prompt("Ingrese su nombre");
    nombre_ingresado = nombre

} if (nombre_ingresado != ""){
    alert("su nombre es"+ espacio + nombre_ingresado)
}