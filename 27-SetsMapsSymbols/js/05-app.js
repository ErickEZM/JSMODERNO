// Los symbols permiten crear una propiedad unica
const sym = Symbol('1');
const sym2 = Symbol('1');

// No son iguales nunca
if (sym === sym2) {
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Erick';
persona[apellido] = 'Zuñiga';
persona.tipoCliente = 'Premium';
persona.saldo = 500;


console.log(persona);

// Acceder a propiedades normales del objeto
console.log(persona.saldo);

// Acceder a propiedades con symbol del objeto
console.log(persona[nombre]);

// Las propiedades que utilizan un symbol no son iterables
for (let i in persona) {
    console.log(i);
}

// Definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {

}

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);