class Clientes {
    constructor(nombre, mail) {
        this.nombre = nombre
        this.mail = mail
    }
}

let arrayClientes = [];

function solicitarNombre() {
    alert("Bienvenido a Arcat Games 🎮")
    let nombre = prompt("Ingrese su nombre");
    let mail = prompt("Ingrese su mail");
    while (nombre === "") {
        nombre = prompt("Ingrese su nombre");
    }


    let nuevoCliente = new Clientes(nombre, mail);
    arrayClientes.push(nuevoCliente);
    console.log(arrayClientes);
}

solicitarNombre();

const listadoClientes = arrayClientes.map(arrayClientes => arrayClientes.nombre )

console.log(listadoClientes)

let option;

const juegos = [
    {
        id: 1,
        nombre: "Dead island 2",
        estado: "Nuevo",
        precio: "16000"
    },
    {
        id: 2,
        nombre: "Fifa 23",
        estado: "Nuevo",
        precio: "13000"
    },
    {
        id: 3,
        nombre: "Demons souls",
        estado: "Nuevo",
        precio: "10000"
    },
    {
        id: 4,
        nombre: "Returnal",
        estado: "Nuevo",
        precio: "14000"
    },
];

const carrito = [];



console.log(juegos)

while (option !== 1 && option !== 2 && option !== 3 && option !== 4) {
    option = Number(prompt("Ingrese entre 1,2,3,4 u 0. Dependiendo del juego que elijas :\n1. Dead island 2\n2. Fifa 23\n3. Demons souls\n4. Returnal\n0. Salir"));

    switch (option) {
        case 1:
            agregarAlCarrito(juegos[option - 1])
            alert("Gracias por comprar")
            break;
        case 2:
            agregarAlCarrito(juegos[option - 1])
            alert("Gracias por comprar")
            break;
        case 3:
            agregarAlCarrito(juegos[option - 1])
            alert("Gracias por comprar")
            break;
        case 4:
            agregarAlCarrito(juegos[option - 1])
            alert("Gracias por comprar")
            break;
        case 0:
        default:
            alert("Gracias, vuelva pronto.")
    }
}

const resultado = juegos.filter(juego => juego.id >= 4);



function agregarAlCarrito(id) {
    carrito.push({
        id
    });
    console.log(carrito[0].id.nombre);
    console.log(id);

    console.log("Se agrego el juego correctamente con el id" + id.id + "y nombre" + id.nombre);
    //return "Se agrego el juego correctamente con el id " + id;
    carrito.forEach(carri => console.log("Se agrego el juego correctamente con el id" + carri.id.id + " y nombre " + carri.id.nombre ))
}

let arcatgames = document.createElement ("p");
arcatgames.innerHTML = "<h3>@arcatstore</h3>";
arcatgames.style.color = "white"
arcatgames.style.fontFamily = "Kdam Thmor Pro"
arcatgames.style.textAlign = "auto"
arcatgames.style.marginTop = "6rem"
document.body.append(arcatgames);

let info = document.getElementById("info")
console.log(info.innerText)

info.innerText = "En Arcat Games vas a encontrar las ultimas novedades del mundo de los videojuegos!"
info.style.color = "white"
info.style.fontFamily = "Kdam Thmor Pro"
console.log(info.innerText)

const child = document.getElementsByClassName('card')

console.log(child);

for (el of child) {
    console.log(el.innerText);
}


console.log(resultado);
function getLastID() {
    return juegos.length;
}


