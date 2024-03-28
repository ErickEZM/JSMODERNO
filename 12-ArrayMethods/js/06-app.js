const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// .every verifica que todos los elementos de un arreglo cumplan una condicion 
const resultado = carrito.every(producto => producto.precio < 500);
console.log(resultado);

// .some verifica que al menos un elemento de un arreglo cumpla una condicion
const resultado2 = carrito.some(producto => producto.precio < 500);
console.log(resultado2);