function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// El function busca en el objeto actual mientras que el arrow function busca en la ventana global
Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = "Gold";
    } else if(this.saldo > 5000) {
        tipo = "Platinum";
    } else {
        tipo = "Normal";
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `El cliente ${this.nombre} tiene un saldo de ${this.saldo}, y es ${this.tipoCliente()}`;
}

Cliente.prototype.retirarSaldo = function(retira) {
    this.saldo -= retira;
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

// Heredando funciondes ded prototype
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

// Instanciarlo
const erick = new Persona('Erick', 5000, 8343578332);

console.log(erick.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function() {
    return `El telefono de esta persona es ${this.telefono}`;
}

console.log(erick.mostrarTelefono());