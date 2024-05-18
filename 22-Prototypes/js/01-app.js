// Object Literal

const cliente = {
    nombre: "Erick",
    saldo: 500
}

console.log(cliente);
//console.log(typeof cliente);

// Object Constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const erick = new Cliente('Erick', 500);

console.log(erick);
