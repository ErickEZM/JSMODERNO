const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Tablet", precio: 300},
    {nombre: "Teclado", precio: 20},
    {nombre: "Celular", precio: 800},
    {nombre: "Audifonos", precio: 50},
]

// .map crea un nuevo arreglo y forEach no
const nuevoArreglo = carrito.map(producto => `El producto ${producto.nombre} tiene un precio de: $${producto.precio}`);
carrito.forEach(producto => console.log(`El producto ${producto.nombre} tiene un precio de: $${producto.precio}`));

console.log(nuevoArreglo);