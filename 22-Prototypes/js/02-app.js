function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const erick = new Cliente('Erick', 500);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertence a la categoria ${categoria}`;
}

console.log(formatearCliente(erick));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const EMZ = new Empresa('EMZ', 5000, 'Ventas en linea');
console.log(formatearEmpresa(EMZ));