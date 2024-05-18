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

// Instanciarlo
const pedro = new Cliente('Pedro', 10001);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retirarSaldo(2000);
console.log(pedro.nombreClienteSaldo());
console.log(pedro);

